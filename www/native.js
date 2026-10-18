/* TurqTrack: Android (Capacitor) ve Windows (Electron) uyarlamaları */
(function () {
  var C = window.Capacitor;
  var native = !!(C && C.isNativePlatform && C.isNativePlatform());
  var P = native ? C.Plugins : {};

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

  if (native) {
    window.fetchTcmb = async function (url) {
      var r = await P.CapacitorHttp.get({ url: url, responseType: "text" });
      return { ok: r.status >= 200 && r.status < 300, text: async function () { return String(r.data); } };
    };

    window.dl = async function (name, data) {
      try {
        var r = await P.Filesystem.writeFile({ path: safe(name), data: toB64(String(data)), directory: "CACHE" });
        await P.Share.share({ title: name, url: r.uri, dialogTitle: name });
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
        var r = await P.Filesystem.writeFile({ path: nm, data: await blobB64(v.blob), directory: "CACHE" });
        await P.Share.share({ title: nm, url: r.uri, dialogTitle: nm });
      } catch (e) {
        var m = String((e && e.message) || e);
        if (!/cancel/i.test(m)) alert("Dosya açılamadı: " + m);
      }
    };

    var LN = P.LocalNotifications, tmr = null;
    var sched = async function (ask) {
      try {
        var perm = await LN.checkPermissions();
        if (perm.display !== "granted") {
          perm = await LN.requestPermissions();
          if (perm.display !== "granted") return false;
        }
        var pend = await LN.getPending();
        if (pend.notifications.length) await LN.cancel({ notifications: pend.notifications.map(function (n) { return { id: n.id }; }) });
        var list = [], now = Date.now();
        var steps = [[15, "15 gün kaldı"], [7, "7 gün kaldı"], [1, "Yarın son gün"], [0, "Son gün bugün"]];
        db.rows.forEach(function (r) {
          calc(r);
          var ad = (r.barkod || "Barkodsuz") + " – " + (r.firma || "Firma yok");
          [["sba", sbaAktif(r) && r.sba, "Son başvuru"], ["ebs", ekAktif(r) && r.ebs, "Eksiklik son tarihi"]].forEach(function (k) {
            if (!k[1]) return;
            steps.forEach(function (o) {
              var t = new Date(k[1] + "T09:00:00");
              t.setDate(t.getDate() - o[0]);
              if (t.getTime() > now) {
                list.push({
                  id: Math.abs(hsh(String(r.id) + k[0] + o[0])) % 2147000000 + 1,
                  title: "TurqTrack: " + k[2], body: o[1] + " – " + ad,
                  schedule: { at: t, allowWhileIdle: true }
                });
              }
            });
          });
        });
        if (list.length) await LN.schedule({ notifications: list });
        return true;
      } catch (e) { return false; }
    };
    window.bildirimIzni = async function () {
      var ok = await sched(true);
      alert(ok ? "Bildirimler ayarlandı. Süreler yaklaşınca uygulama kapalıyken de bildirim gelir." : "Bildirim izni verilmedi. Telefon ayarlarından TurqTrack için bildirimleri aç.");
    };
    var _render = window.render;
    window.render = function () {
      var x = _render.apply(this, arguments);
      clearTimeout(tmr); tmr = setTimeout(sched, 3000);
      return x;
    };
    setTimeout(sched, 4000);
  }
})();
