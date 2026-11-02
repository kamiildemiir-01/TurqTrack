/* TurqTrack: Android (Capacitor) ve Windows (Electron) uyarlamaları */
(function () {
  var C = window.Capacitor;
  var native = !!(C && C.isNativePlatform && C.isNativePlatform());

  function plug(n) {
    try {
      if (C.Plugins && C.Plugins[n]) return C.Plugins[n];
      return C.registerPlugin(n);
    } catch (e) { return null; }
  }
  function toB64(s) { return btoa(unescape(encodeURIComponent(s))); }
  function blobB64(b) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { res(String(r.result).split(",")[1] || ""); };
      r.onerror = rej; r.readAsDataURL(b);
    });
  }
  function safe(n) { return String(n || "evrak").replace(/[\\/:*?"<>|]+/g, "_"); }

  if (window.electronAPI) {
    window.fetchTcmb = async function (url) {
      var r = await window.electronAPI.fetchText(url);
      return { ok: r.status >= 200 && r.status < 300, text: async function () { return r.text; } };
    };
  }

  if (!native) return;

  var FS = plug("Filesystem"), SH = plug("Share"), LN = plug("LocalNotifications"), HTTP = plug("CapacitorHttp");

  window.fetchTcmb = async function (url) {
    var r = await HTTP.get({ url: url, responseType: "text" });
    return { ok: r.status >= 200 && r.status < 300, text: async function () { return String(r.data); } };
  };

  window.dl = async function (name, data) {
    try {
      var bin = (data instanceof Uint8Array) || (typeof Blob !== "undefined" && data instanceof Blob);
      var b64 = bin ? await blobB64(new Blob([data])) : toB64(String(data));
      var r = await FS.writeFile({ path: safe(name), data: b64, directory: "CACHE" });
      await SH.share({ title: name, url: r.uri, dialogTitle: name });
    } catch (e) {
      var m = String((e && e.message) || e);
      if (!/cancel/i.test(m)) alert("Dosya kaydedilemedi: " + m);
    }
  };

  window.openDoc = async function (id) {
    try {
      var v = await getDoc(id);
      if (!v) { alert(window.DOCMSG||"Dosya bulunamadı. İnternet yoksa ve dosya bu cihaza henüz inmediyse açılamaz."); return; }
      var nm = safe(docName(id) || id);
      var r = await FS.writeFile({ path: nm, data: await blobB64(v.blob), directory: "CACHE" });
      await SH.share({ title: nm, url: r.uri, dialogTitle: nm });
    } catch (e) {
      var m = String((e && e.message) || e);
      if (!/cancel/i.test(m)) alert("Dosya açılamadı: " + m);
    }
  };

  /* Süre bildirimleri: her gün 10:00'da, aynı gün ve aynı türdeki dosyalar tek bildirimde gruplanır */
  var tmr = null, CH = "sureler";
  async function ensureChannel() {
    try { await LN.createChannel({ id: CH, name: "Süre uyarıları", description: "Başvuru ve eksiklik süre hatırlatmaları", importance: 5, visibility: 1, vibration: true }); } catch (e) {}
  }
  async function ensurePerm() {
    var perm = await LN.checkPermissions();
    if (perm.display !== "granted") perm = await LN.requestPermissions();
    return perm.display === "granted";
  }
  function listTxt(a) {
    var u = a.filter(function (x, i) { return a.indexOf(x) === i; });
    return u.length > 4 ? u.slice(0, 4).join(", ") + " ve " + (u.length - 4) + " dosya" : u.join(", ");
  }
  function lineTxt(kind, bks, d) {
    var pre = listTxt(bks) + " barkodlu " + (bks.length > 1 ? "dosyaların " : "dosyanın ") + kind + " süresi";
    return d > 0 ? pre + "nin dolmasına " + d + " gün kaldı."
      : d === 0 ? pre + " bugün doluyor."
      : pre + " " + (-d) + " gün önce doldu.";
  }
  var sched = async function () {
    try {
      if (!(await ensurePerm())) return false;
      await ensureChannel();
      var pend = await LN.getPending();
      var old = pend.notifications.filter(function (n) { return n.id !== 999001; });
      if (old.length) await LN.cancel({ notifications: old.map(function (n) { return { id: n.id }; }) });
      var now = Date.now(), days = {};
      db.rows.forEach(function (r) {
        calc(r);
        var bk = r.barkod || "Barkodsuz";
        [["sba", sbaAktif(r) && r.sba, "başvuru"], ["ebs", ekAktif(r) && r.ebs, "eksiklik tamamlama"]].forEach(function (k) {
          if (!k[1]) return;
          for (var d = 15; d >= -3; d--) {
            var t = new Date(k[1] + "T10:00:00");
            t.setDate(t.getDate() - d);
            if (t.getTime() <= now) continue;
            var key = t.getTime() + "|" + k[0];
            var g = days[key] || (days[key] = { t: t, kind: k[2], by: {} });
            (g.by[d] = g.by[d] || []).push(bk);
          }
        });
      });
      var list = [];
      Object.keys(days).forEach(function (key) {
        var g = days[key], ds = Object.keys(g.by).map(Number).sort(function (x, y) { return x - y; });
        var total = 0; ds.forEach(function (d) { total += g.by[d].length; });
        var first = ds[0], body = lineTxt(g.kind, g.by[first], first);
        if (total > g.by[first].length) body += " (+" + (total - g.by[first].length) + " dosya daha)";
        var big = ds.map(function (d) { return lineTxt(g.kind, g.by[d], d); }).join("\n");
        list.push({
          id: Math.abs(hsh(key)) % 2147000000 + 1,
          title: g.kind === "başvuru" ? "TurqTrack: Başvuru süresi" : "TurqTrack: Eksiklik süresi",
          body: body, largeBody: big, summaryText: total + " dosya",
          channelId: CH, smallIcon: "ic_stat_turqtrack", largeIcon: "tq_large", iconColor: "#4f7cff",
          schedule: { at: g.t, allowWhileIdle: true }
        });
      });
      list.sort(function (a, b) { return a.schedule.at - b.schedule.at; });
      list = list.slice(0, 450);
      if (list.length) await LN.schedule({ notifications: list });
      return true;
    } catch (e) { window.__tqNotifErr = String((e && e.message) || e); return false; }
  };

  window.tqNotifInfo = async function () {
    var perm = await LN.checkPermissions(), ex = "bilinmiyor";
    try { ex = (await LN.checkExactNotificationSetting()).exact_alarm; } catch (e) {}
    var pend = await LN.getPending();
    return { perm: perm.display, exact: ex, pending: pend.notifications.filter(function (n) { return n.id !== 999001; }).length, err: window.__tqNotifErr || "" };
  };
  window.tqNotifTest = async function () {
    if (!(await ensurePerm())) return false;
    await ensureChannel();
    await LN.schedule({ notifications: [{
      id: 999001, title: "TurqTrack: deneme bildirimi",
      body: "210426/456 barkodlu dosyanın eksiklik tamamlama süresinin dolmasına 10 gün kaldı. (Deneme)",
      channelId: CH, smallIcon: "ic_stat_turqtrack", largeIcon: "tq_large", iconColor: "#4f7cff", schedule: { at: new Date(Date.now() + 10000), allowWhileIdle: true }
    }] });
    return true;
  };
  window.tqNotifExact = async function () { try { await LN.changeExactNotificationSetting(); } catch (e) {} };

  window.bildirimIzni = async function () {
    var ok = await sched();
    alert(ok ? "Bildirimler ayarlandı. Süresi yaklaşan dosyalar için her sabah 10:00'da bildirim gelir, uygulama kapalıyken de çalışır. Emin olmak için \"Bildirimi Sına\" düğmesini kullanın."
             : "Bildirim izni verilmedi. Telefon ayarlarından TurqTrack için bildirimleri açın.");
    if (window.bildRefresh) window.bildRefresh();
  };

  var _render = window.render;
  window.render = function () {
    var x = _render.apply(this, arguments);
    clearTimeout(tmr); tmr = setTimeout(sched, 3000);
    return x;
  };
  setTimeout(sched, 4000);
})();
