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
      if (!v) { alert("Dosya bulunamadı. İnternet yoksa ve dosya bu cihaza henüz inmediyse açılamaz."); return; }
      var nm = safe(docName(id) || id);
      var r = await FS.writeFile({ path: nm, data: await blobB64(v.blob), directory: "CACHE" });
      await SH.share({ title: nm, url: r.uri, dialogTitle: nm });
    } catch (e) {
      var m = String((e && e.message) || e);
      if (!/cancel/i.test(m)) alert("Dosya açılamadı: " + m);
    }
  };

  /* Her güne ait 10:00 geri sayım bildirimleri: süresi 15 gün ve altına inen her dosya için */
  var tmr = null;
  var sched = async function () {
    try {
      var perm = await LN.checkPermissions();
      if (perm.display !== "granted") {
        perm = await LN.requestPermissions();
        if (perm.display !== "granted") return false;
      }
      var pend = await LN.getPending();
      if (pend.notifications.length) {
        await LN.cancel({ notifications: pend.notifications.map(function (n) { return { id: n.id }; }) });
      }
      var list = [], now = Date.now();
      db.rows.forEach(function (r) {
        calc(r);
        var bk = r.barkod || "Barkodsuz", pj = r.proje || r.dt || "dosya";
        [["sba", sbaAktif(r) && r.sba, "başvuru"], ["ebs", ekAktif(r) && r.ebs, "eksiklik tamamlama"]].forEach(function (k) {
          if (!k[1]) return;
          for (var d = 15; d >= -3; d--) {
            var t = new Date(k[1] + "T10:00:00");
            t.setDate(t.getDate() - d);
            if (t.getTime() <= now) continue;
            var pre = bk + " numaralı " + pj + " dosyasının " + k[2] + " süresi";
            var body = d > 0 ? pre + "nin dolmasına " + d + " gün kaldı."
              : d === 0 ? pre + " bugün doluyor."
              : pre + " " + (-d) + " gün önce doldu.";
            list.push({
              id: Math.abs(hsh(String(r.id) + k[0] + d)) % 2147000000 + 1,
              title: "TurqTrack: Süre uyarısı",
              body: body,
              schedule: { at: t, allowWhileIdle: true }
            });
          }
        });
      });
      list.sort(function (a, b) { return a.schedule.at - b.schedule.at; });
      list = list.slice(0, 450);
      if (list.length) await LN.schedule({ notifications: list });
      return true;
    } catch (e) { return false; }
  };

  window.bildirimIzni = async function () {
    var ok = await sched();
    alert(ok ? "Bildirimler ayarlandı. Süresi 15 gün ve altına inen her dosya için her sabah 10:00'da geri sayım bildirimi gelir, uygulama kapalıyken de çalışır."
             : "Bildirim izni verilmedi. Telefon ayarlarından TurqTrack için bildirimleri açın.");
  };

  var _render = window.render;
  window.render = function () {
    var x = _render.apply(this, arguments);
    clearTimeout(tmr); tmr = setTimeout(sched, 3000);
    return x;
  };
  setTimeout(sched, 4000);
})();
