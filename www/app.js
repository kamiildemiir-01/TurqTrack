(function(){var st=document.createElement('style');st.textContent="\n:root{--bg:#f3f5fb;--surface:#ffffff;--surface2:#f6f7fd;--ink:#16213b;--muted:#5d6b88;--line:#dde3f0;--accent:#4a3fe0;--accent2:#1b8cf0;--warn:#b4570a;--ok:#1d7a4a;--bad:#c0281f;--n1:#0098d9;--n2:#5b3df5;--n3:#9b19e0;--glow1:rgba(91,61,245,.13);--glow2:rgba(0,152,217,.10);--shadow:0 1px 2px rgba(22,33,59,.06),0 8px 22px rgba(22,33,59,.06);box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n:root[data-theme=\"dark\"]{--bg:#0b1020;--surface:#131a30;--surface2:#18203a;--ink:#e8edfb;--muted:#9aa7c7;--line:#26304f;--accent:#a3acff;--accent2:#4cb0ff;--warn:#f0a35a;--ok:#5fcf90;--bad:#ff8a80;--n1:#22e0ff;--n2:#7d6bff;--n3:#c05cff;--glow1:rgba(125,107,255,.20);--glow2:rgba(34,224,255,.10);--shadow:0 1px 2px rgba(0,0,0,.3),0 10px 24px rgba(0,0,0,.28);color-scheme:dark}\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]){--bg:#0b1020;--surface:#131a30;--surface2:#18203a;--ink:#e8edfb;--muted:#9aa7c7;--line:#26304f;--accent:#a3acff;--accent2:#4cb0ff;--warn:#f0a35a;--ok:#5fcf90;--bad:#ff8a80;--n1:#22e0ff;--n2:#7d6bff;--n3:#c05cff;--glow1:rgba(125,107,255,.20);--glow2:rgba(34,224,255,.10);--shadow:0 1px 2px rgba(0,0,0,.3),0 10px 24px rgba(0,0,0,.28);color-scheme:dark}}\n*{box-sizing:border-box}\nbody{margin:0;color:var(--ink);font:14.5px/1.55 \"IBM Plex Sans\",\"Segoe UI\",system-ui,-apple-system,sans-serif;background:radial-gradient(1100px 380px at 88% -8%,var(--glow1),transparent 70%),radial-gradient(900px 340px at 0% -10%,var(--glow2),transparent 70%),var(--bg);background-attachment:fixed}\nmain{width:100%;max-width:2400px;margin:0 auto;padding:18px clamp(14px,2.2vw,36px) 110px}\nh1{font-size:26px;margin:0}\nh2{font-size:17px;margin:0 0 12px;letter-spacing:-.2px}\n.brand{display:flex;align-items:center;gap:14px;margin-bottom:16px}\n.brand h1{font-size:30px;letter-spacing:-.6px;line-height:1.1}\n.brand h1 span{font-weight:400;background:linear-gradient(90deg,var(--n1),var(--n2),var(--n3));-webkit-background-clip:text;background-clip:text;color:var(--n2);-webkit-text-fill-color:transparent}\n.brand h1 b{font-weight:800}\n.brand small{display:block;color:var(--muted);font-size:12.5px}\n.brand .upd{margin-left:auto;display:flex;align-items:center;gap:10px}\n.tabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;padding:5px;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}\n.tabs button{background:transparent;color:var(--muted);border:0;padding:9px 18px;border-radius:10px;font-weight:600}\n.tabs button:hover{color:var(--ink);filter:none;background:var(--surface2)}\n.tabs button.on{background:linear-gradient(135deg,var(--accent2),var(--n2));color:var(--btn-ink,#fff)}\n.sum{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:14px}\n.card{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px 16px 14px;box-shadow:var(--shadow);cursor:pointer;overflow:hidden;transition:transform .12s,border-color .12s}\n.card::before{content:\"\";position:absolute;left:0;top:0;right:0;height:3px;background:linear-gradient(90deg,var(--n1),var(--n2),var(--n3))}\n.card:hover{transform:translateY(-2px);border-color:var(--accent)}\n.card.on{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent) inset,var(--shadow)}\n.card small{display:block;color:var(--muted);font-weight:600;font-size:12.5px}\n.card b{display:block;font-size:22px;margin-top:2px;font-variant-numeric:tabular-nums}\nsection,details{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:16px;box-shadow:var(--shadow)}\nsummary{cursor:pointer;font-weight:700}\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;margin-top:12px}\nlabel{display:block;font-size:12.5px;color:var(--muted);font-weight:600}\ninput,select,textarea{width:100%;margin-top:4px;padding:9px 11px;border:1px solid var(--line);border-radius:10px;background:var(--surface2);color:var(--ink);font:inherit}\ninput[readonly]{opacity:.7}\ninput:focus,select:focus,textarea:focus,button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}\nbutton{font:inherit;font-weight:600;padding:9px 16px;border-radius:10px;border:1px solid transparent;background:linear-gradient(135deg,var(--accent2),var(--n2));color:var(--btn-ink,#fff);cursor:pointer;transition:filter .12s}\nbutton:hover{filter:brightness(1.1)}\nbutton.g{background:transparent;color:var(--accent);border-color:var(--line)}\nbutton.g:hover{border-color:var(--accent);filter:none}\nbutton.s{padding:3px 10px;font-size:12.5px;background:transparent;color:var(--accent);border-color:var(--line)}\nbutton.s:hover{border-color:var(--accent);filter:none}\nbutton.d,button.s.d{color:var(--bad)}\nbutton:disabled{opacity:.6;cursor:default}\n.row{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:12px}\n.row label{min-width:190px}\n.chips{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px}\n.chips label{display:flex;gap:5px;align-items:center;color:var(--ink);font-size:13px}\n.chips input{width:auto;margin:0}\n.scroll{overflow-x:auto;border:1px solid var(--line);border-radius:12px}\ntable{border-collapse:separate;border-spacing:0;width:100%;font-variant-numeric:tabular-nums}\nth,td{padding:9px 11px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap;vertical-align:top}\nth{font-size:12px;color:var(--muted);font-weight:700;background:var(--surface2);position:sticky;top:0}\ntbody tr:nth-child(even) td{background:var(--surface2)}\ntbody tr:hover td{background:var(--glow2)}\ntd.n,th.n{text-align:right}\ntd.wrap{white-space:normal;min-width:130px;max-width:300px;overflow-wrap:anywhere}\ntd a{color:var(--accent);font-weight:600}\n.st{display:inline-block;padding:2px 10px;border-radius:99px;border:1px solid var(--line);font-size:12.5px;font-weight:600;white-space:nowrap}\n.st-red{color:var(--bad);border-color:var(--bad)}.st-ok{color:var(--ok);border-color:var(--ok)}.st-warn{color:var(--warn);border-color:var(--warn)}.st-acc{color:var(--accent);border-color:var(--accent)}\n.late{color:var(--bad);font-weight:600}.soon{color:var(--warn);font-weight:600}.okc{color:var(--ok)}\n.empty{color:var(--muted);padding:10px 0}\n.note{font-size:12.5px;color:var(--muted);margin-top:8px}\n.al{border:1px solid var(--warn);border-left-width:5px}\n.al div{padding:2px 0}\n.chipf{display:inline-flex;gap:10px;align-items:center;margin:0 0 10px;padding:5px 6px 5px 12px;border:1px solid var(--accent);border-radius:99px;color:var(--ink)}\ntextarea{min-height:96px;resize:vertical}\n.nt{border:1px solid var(--line);border-radius:12px;padding:11px 14px;margin-bottom:10px;background:var(--surface2)}\n.nh{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;color:var(--muted);align-items:center}\n.nb{white-space:pre-wrap;margin-top:6px;overflow-wrap:anywhere}\n.nh a{color:var(--accent);font-weight:600}\n.ov{position:fixed;inset:0;background:rgba(5,8,20,.62);display:flex;align-items:center;justify-content:center;z-index:50;padding:16px}\n.dlg{background:var(--surface);border:1px solid var(--line);border-radius:16px;max-width:640px;width:100%;max-height:80vh;overflow:auto;padding:22px;box-shadow:var(--shadow)}\n.dlg .dl div{padding:5px 0;border-bottom:1px solid var(--line)}\n.set{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:16px}\n.setc{border:1px solid var(--line);border-radius:14px;padding:16px 18px;background:var(--surface2)}\n.setc h3{margin:0 0 10px;font-size:15px}\n.setc details{box-shadow:none;background:var(--surface)}\n.pals{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px}\nbutton.pal{background:var(--surface);color:var(--ink);border:1px solid var(--line);display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:99px;font-weight:600}\nbutton.pal i{width:16px;height:16px;border-radius:50%;display:inline-block}\nbutton.pal.on{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent) inset}\n.rowc{display:flex;gap:28px;flex-wrap:wrap}\n.topbar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:16px}\n.tl{display:flex;align-items:center;gap:16px;flex-wrap:wrap}\n.bm{display:flex;align-items:center;gap:9px}\n.bname{font-size:22px;letter-spacing:-.5px;line-height:1;background:linear-gradient(90deg,var(--n1),var(--n2),var(--n3));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:var(--n2)}\n.bname span{font-weight:400}.bname b{font-weight:800}\n.tnav{display:flex;gap:6px;padding:4px;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}\n.tnav button,.bnav button{background:transparent;color:var(--muted);border:0;padding:9px 16px;border-radius:11px;font-weight:600;white-space:nowrap}\n.tnav button:hover,.bnav button:hover{color:var(--ink);background:var(--surface2);filter:none}\n.tnav button.on,.bnav button.on,button.gear.on{background:linear-gradient(135deg,var(--accent2),var(--n2));color:var(--btn-ink,#fff)}\nbutton.gear{width:44px;height:44px;padding:0;display:inline-flex;align-items:center;justify-content:center;background:var(--surface);color:var(--ink);border:1px solid var(--line);border-radius:13px;box-shadow:var(--shadow)}\nbutton.gear svg{width:22px;height:22px}\n.bnav{position:fixed;left:0;right:0;bottom:0;z-index:30;display:flex;justify-content:center;gap:4px;padding:7px 10px calc(7px + env(safe-area-inset-bottom,0px));background:var(--surface);border-top:1px solid var(--line);box-shadow:0 -6px 20px rgba(0,0,0,.10);overflow-x:auto}\n.bnav .sep{flex:0 0 1px;width:1px;background:var(--line);margin:6px 8px}\n.sum.sums{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}\n.card.sc{cursor:pointer}\n.kvr{display:flex;gap:18px;flex-wrap:wrap;margin-top:4px}\n.kvr div{display:flex;flex-direction:column}\n.kvr span{font-size:11.5px;color:var(--muted);font-weight:600}\n.kvr b{font-size:17px}\n.grip{cursor:grab;touch-action:none;color:var(--muted);letter-spacing:-2px;font-weight:700;padding:0 4px 0 0;user-select:none}\nth.dropt{outline:2px dashed var(--accent);outline-offset:-2px}\n.dlg.wide{max-width:1100px}\n.bdg{margin-left:8px;min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:#e0245e;color:#fff;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}\n.bn{border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin-bottom:10px;background:var(--surface2);cursor:pointer}\n.bn.un{border-left:4px solid var(--accent);background:var(--surface)}\n.bn.un .bt b{color:var(--ink)}\n.bn.done{opacity:.65}\n.bt{display:flex;align-items:center;gap:8px;margin-bottom:4px}\n.bt small{margin-left:auto;color:var(--muted)}\n.dotb{width:9px;height:9px;border-radius:50%;background:#e0245e;display:inline-block}\n.emptyc{border:1.5px dashed var(--line);border-radius:14px;padding:26px 16px;text-align:center;color:var(--muted)}\n.emptyc b{display:block;color:var(--ink);font-size:15px;margin-bottom:4px}\n.emptyc p{margin:0}\n.miss{color:var(--muted);font-style:italic}\n.cl{list-style:none;margin:8px 0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:6px}\n.cl li{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:10px;padding:5px 8px;background:var(--surface);cursor:grab}\n.cl li label{flex:1;display:flex;align-items:center;gap:6px;color:var(--ink);font-size:13px}\n.cl li input{width:auto;margin:0}\n.grip{color:var(--muted);letter-spacing:-2px;font-weight:700}\n.colbox{border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin:10px 0;background:var(--surface2)}\nth.sortable{cursor:pointer;user-select:none}\n@media (max-width:760px){\n .bname{display:none}\n .tnav button{padding:8px 12px}\n .bnav{justify-content:flex-start}\n main{padding:12px 10px 40px}\n .tabs{flex-wrap:nowrap;overflow-x:auto}\n .tabs button{white-space:nowrap;padding:8px 13px}\n .sum{grid-template-columns:repeat(2,1fr);gap:8px}\n .card b{font-size:18px}\n .brand h1{font-size:24px}\n .row label{min-width:140px}\n}\n#printArea{display:none}\n@media print{\n @page{size:A4 landscape;margin:12mm}\n body{background:#fff!important;color:#000!important}\n main,.ov{display:none!important}\n #printArea{display:block!important;color:#000;font-family:Arial,sans-serif}\n #printArea table{border-collapse:collapse;width:100%;font-size:11px}\n #printArea th{background:#1f2a60;color:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;text-align:left;position:static}\n #printArea th,#printArea td{border:1px solid #c9cfe0;padding:4px 6px;white-space:normal;background:#fff}\n #printArea th{background:#1f2a60}\n #printArea td.n{text-align:right}\n #printArea .late,#printArea .st-red{color:#c0281f;font-weight:700}\n #printArea .soon,#printArea .st-warn{color:#b4570a;font-weight:700}\n #printArea .okc,#printArea .st-ok{color:#1d7a4a}\n #printArea .miss{color:#a33;font-style:italic}\n #printArea .st{border:1px solid #999;padding:1px 7px;border-radius:9px;white-space:nowrap}\n .pa-head{display:flex;align-items:center;gap:12px;margin-bottom:10px}\n}\n";document.head.appendChild(st);document.body.innerHTML="\n<main>\n<header class=\"topbar\"><div class=\"tl\"><div class=\"bm\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 64 64\" role=\"img\" aria-label=\"TurqTrack logosu\"><defs><linearGradient id=\"tqg\" gradientUnits=\"userSpaceOnUse\" x1=\"8\" y1=\"56\" x2=\"56\" y2=\"8\"><stop offset=\"0\" stop-color=\"#00d4ff\"/><stop offset=\".55\" stop-color=\"#5b6bff\"/><stop offset=\"1\" stop-color=\"#b026ff\"/></linearGradient><filter id=\"tqf\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\"><feGaussianBlur stdDeviation=\"1.6\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" rx=\"15\" fill=\"#0a0e27\"/><rect x=\"2.75\" y=\"2.75\" width=\"58.5\" height=\"58.5\" rx=\"14.5\" fill=\"none\" stroke=\"url(#tqg)\" stroke-opacity=\".55\" stroke-width=\"1.5\"/><g transform=\"translate(1.5 0)\"><circle cx=\"35\" cy=\"18\" r=\"5.4\" fill=\"url(#tqg)\"/><circle cx=\"37\" cy=\"16.6\" r=\"4.4\" fill=\"#0a0e27\"/></g><g transform=\"translate(1.5 0)\" fill=\"none\" stroke=\"url(#tqg)\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" filter=\"url(#tqf)\"><path d=\"M12 13H30M21 13V51M21 32 35 18M21 32 35 46\"/><path d=\"M35 18A14 14 0 0 1 35 46\"/></g><g transform=\"translate(1.5 0)\" stroke=\"url(#tqg)\" stroke-width=\"2.2\"><circle cx=\"35\" cy=\"46\" r=\"3.4\" fill=\"#0a0e27\"/><circle cx=\"21\" cy=\"51\" r=\"3.4\" fill=\"url(#tqg)\"/></g><g transform=\"translate(1.5 0)\"><circle id=\"tqdot\" r=\"2.1\" fill=\"#fff\" opacity=\"0\"><animateMotion dur=\"4s\" repeatCount=\"indefinite\" path=\"M21 51V32L35 18\" keyPoints=\"0;1;1\" keyTimes=\"0;.7;1\" calcMode=\"linear\"/><animate attributeName=\"opacity\" dur=\"4s\" repeatCount=\"indefinite\" values=\"0;1;1;0;0\" keyTimes=\"0;.08;.66;.72;1\"/></circle></g></svg><span class=\"bname\"><span>Turq</span><b>Track</b></span></div><nav class=\"tnav\"><button id=\"tb1\" class=\"on\">Ana Sayfa</button><button id=\"tbb\">Bildirimler<span class=\"bdg\" id=\"bdg\" style=\"display:none\">0</span></button></nav></div><button class=\"gear\" id=\"tbs\" aria-label=\"Ayarlar\" title=\"Ayarlar\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg></button></header>\n<nav class=\"bnav\" id=\"bnav\"><button id=\"tbm\">Marka</button><button id=\"tbi\">İstihdam</button><button id=\"tbf\">Fuar</button><button id=\"tbh\">Hedef Pazar</button><span class=\"sep\"></span><button id=\"tbr\">Raporlar</button><button id=\"tb2\">Evrak Havuzu</button><button id=\"tbn\">Notlar</button></nav>\n<div class=\"sum\" id=\"sum\"></div>\n<div class=\"sum sums\" id=\"sum2\"></div>\n<div id=\"uyari\"></div>\n\n<details id=\"formbox\">\n<summary id=\"ftitle\">Yeni Kayıt Ekle</summary>\n<div id=\"newhost\"><div class=\"grid\" id=\"form\"></div><div class=\"note\" id=\"kurnot\"></div></div>\n<p class=\"note\">Destek, KDV hariç tutar üzerinden hesaplanır: ödeme KDV dahil yapıldıysa KDV payı düşülür.</p>\n<div class=\"row\"><button id=\"kaydet\">Yeni Kaydı Kaydet</button><button class=\"g\" id=\"temizle\">Formu Temizle</button></div>\n</details>\n\n<section id=\"kayit\">\n<h2>Kayıtlar</h2>\n<div id=\"cfbar\"></div>\n<div class=\"row\" style=\"margin:0 0 8px\">\n<label>Ara<input id=\"ara\" placeholder=\"Firma, proje, barkod...\"></label>\n<label>Aşama Detay<select id=\"fdurum\"></select></label>\n<button class=\"g\" id=\"sutunbtn\">Sütunları seç</button><button class=\"g\" id=\"icsbtn\">Süreleri Takvime Aktar</button><button class=\"g\" id=\"bildbtn\">Bildirimleri Aç</button>\n</div>\n<div id=\"sutunbox\" style=\"display:none\">\n<div class=\"chips\" id=\"chips\"></div>\n<div class=\"row\"><button class=\"s\" id=\"hepsi\">Hepsini göster</button><button class=\"s\" id=\"varsayilan\">Varsayılana dön</button></div>\n</div>\n<div class=\"scroll\" style=\"margin-top:10px\"><table><thead id=\"th\"></thead><tbody id=\"tb\"></tbody></table></div>\n</section>\n\n<section id=\"evrakbox\" style=\"display:none\">\n<h2 id=\"evtitle\"></h2>\n<div id=\"evek\" class=\"note\"></div>\n<div id=\"evlist\"></div>\n<div class=\"row\"><label style=\"min-width:200px\">Evrak türü<select id=\"evtur\"></select></label><label style=\"min-width:260px\">Evrak ekle (önce türü seç)<input type=\"file\" id=\"evfile\" multiple></label><button class=\"g\" id=\"evkapat\">Kapat</button></div>\n<div id=\"turchips\" style=\"margin-top:10px\"></div>\n<div id=\"zorbox\" style=\"display:none\"></div>\n<p class=\"note\" id=\"evnote\"></p>\n</section>\n\n<section id=\"havuz\" style=\"display:none\">\n<h2>Evrak havuzu</h2>\n<div class=\"row\" style=\"margin:0 0 8px\"><label>Ara<input id=\"hara\" placeholder=\"Barkod, firma, dosya adı...\"></label><label>Evrak türü<select id=\"htur\"></select></label></div>\n<p class=\"note\" id=\"hsay\"></p>\n<div class=\"scroll\"><table><thead><tr><th>Başvuru Tarihi</th><th>Barkod No</th><th>Firma Ünvanı</th><th>Evrak</th><th>Tür</th><th>Dosya Konusu</th><th>Yüklenme Tarihi</th><th></th></tr></thead><tbody id=\"htb\"></tbody></table></div>\n</section>\n\n<section id=\"hp\" style=\"display:none\">\n<h2>Hedef Pazar</h2>\n<details id=\"hpnew\"><summary>Yeni Hedef Pazar Kaydı Ekle</summary><div class=\"grid\" id=\"hpform-new\"></div><div class=\"row\"><button id=\"hp-ekle\">Kaydet</button></div></details>\n<div class=\"row\" style=\"margin-top:0\"><label style=\"min-width:240px\">Ara<input id=\"hp-ara\" placeholder=\"Barkod, firma, marka, ülke...\"></label></div>\n<div class=\"scroll\" style=\"margin-top:10px\"><table><thead id=\"hp-th\"></thead><tbody id=\"hp-tb\"></tbody></table></div>\n</section>\n\n<section id=\"notlar\" style=\"display:none\">\n<h2>Notlar</h2>\n<div class=\"grid\">\n<label>Bağlı dosya (isteğe bağlı)<select id=\"n-dosya\"></select></label>\n<label style=\"grid-column:1/-1\">Not<textarea id=\"n-text\" placeholder=\"Notunu buraya yaz...\"></textarea></label>\n</div>\n<div class=\"row\"><button id=\"n-ekle\">Notu Kaydet</button><button class=\"g\" id=\"n-iptal\" style=\"display:none\">Vazgeç</button></div>\n<div class=\"row\" style=\"margin-top:18px\"><label style=\"min-width:240px\">Ara<input id=\"n-ara\" placeholder=\"Not, barkod, firma...\"></label><label>Dosya<select id=\"n-filtre\"></select></label></div>\n<div id=\"n-list\" style=\"margin-top:12px\"></div>\n</section>\n\n<section id=\"bild\" style=\"display:none\">\n<h2>Bildirimler</h2>\n<div class=\"row\" style=\"margin-top:0\"><label>Göster<select id=\"b-filtre\"><option value=\"all\">Tümü</option><option value=\"unread\">Sadece okunmamışlar</option></select></label><button class=\"g\" id=\"b-okuhepsi\">Tümünü okundu işaretle</button></div>\n<p class=\"note\">Bildirimler dosyalarınızdaki gerçek tarihlerden otomatik oluşturulur. Süresi 15 gün ve altına inen başvuru ve eksiklik süreleri ile onaylanıp tahsilatı bekleyen dosyalar burada görünür.</p>\n<div id=\"b-list\" style=\"margin-top:12px\"></div>\n</section>\n\n<section id=\"rapor\" style=\"display:none\">\n<h2>Raporlar</h2>\n<div class=\"rowc\">\n<div><label>Hangi dosyalar (birden fazla seçebilirsiniz)</label><div class=\"chips\" id=\"r-liste\"></div></div>\n<div><label>Gruplar (hiçbiri seçili değilse tümü)</label><div class=\"chips\" id=\"r-grup\"></div></div>\n</div>\n<div class=\"row\"><button id=\"r-yaz\">Yazdır</button><button class=\"g\" id=\"r-xls\">Excel'e Aktar</button><button class=\"g\" id=\"r-pdf\">PDF İndir</button><button class=\"g\" id=\"r-cols\" onclick=\"colToggleBox()\">Sütunları Yönet</button></div>\n<div id=\"r-colbox\" class=\"colbox\" style=\"display:none\"><b>Görünür sütunlar</b><p class=\"note\" style=\"margin:2px 0 6px\">İstediğiniz sütunları işaretleyin. Sıralamak için sürükleyin veya ▲ ▼ düğmelerini kullanın. Tercihiniz kaydedilir, kayıtlarınıza dokunulmaz.</p><ul class=\"cl\" id=\"r-collist\"></ul><button class=\"g\" onclick=\"colReset()\">Varsayılana dön</button></div>\n<p class=\"note\" id=\"r-sub\"></p>\n<div class=\"scroll\"><table><thead id=\"r-th\"></thead><tbody id=\"r-tb\"></tbody></table></div>\n</section>\n\n<section id=\"ayar\" style=\"display:none\">\n<h2>Ayarlar</h2>\n<div class=\"set\">\n<div class=\"setc\"><h3>Görünüm</h3>\n<label>Mod<select id=\"th-mode\"><option value=\"auto\">Otomatik (cihaza göre)</option><option value=\"light\">Gündüz</option><option value=\"dark\">Gece</option></select></label>\n<label style=\"margin-top:12px\">Renk teması</label><div class=\"pals\" id=\"th-pals\"></div>\n<p class=\"note\">Renkler gündüz ve gece modlarında kendini uyarlar. Bu ayar sadece bu cihazı etkiler.</p></div>\n<div class=\"setc\" id=\"updcard\" style=\"display:none\"><h3>Güncelleme</h3><p class=\"note\" id=\"ver2\" style=\"margin-top:0\"></p><div class=\"row\" style=\"margin-top:8px\"><button id=\"updbtn\">Güncellemeleri denetle</button></div><p class=\"note\">Yeni sürüm varsa size sorar, siz onaylarsanız yükler.</p></div>\n<div class=\"setc\"><h3>Bulut eşitleme</h3><p class=\"note\" id=\"bulut\" style=\"margin-top:0\"></p>\n<details id=\"sync\"><summary id=\"syncst\">Bulut eşitleme: kapalı</summary>\n<p class=\"note\">E-posta ve şifrenizle giriş yapın. Kayıtlarınız, notlarınız, bildirimleriniz ve evraklarınız cihazlarınız arasında kendiliğinden eşitlenir.</p>\n<div class=\"grid\">\n<label>E-posta<input id=\"sb-mail\" type=\"email\" autocomplete=\"username\"></label>\n<label>Şifre<input id=\"sb-pass\" type=\"password\" autocomplete=\"current-password\"></label>\n</div>\n<div class=\"row\"><button id=\"sb-login\">Giriş Yap</button><button class=\"g\" id=\"sb-sync\">Şimdi Eşitle</button><button class=\"g\" id=\"sb-out\">Çıkış</button></div>\n<details id=\"sb-adv\" style=\"margin-top:12px\"><summary>Gelişmiş bağlantı ayarları</summary>\n<div class=\"grid\">\n<label>Bağlantı kodu<input id=\"sb-code\" autocomplete=\"off\"></label>\n<label>Supabase URL<input id=\"sb-url\" autocomplete=\"off\"></label>\n<label>Anahtar (publishable)<input id=\"sb-key\" autocomplete=\"off\"></label>\n</div>\n<div class=\"row\"><button class=\"g\" id=\"sb-copy\">Bağlantı Kodunu Kopyala</button></div>\n</details>\n<p class=\"note\" id=\"sb-msg\"></p>\n</details></div>\n<div class=\"setc\"><h3>Yedekleme ve Depolama</h3>\n<div id=\"bk-info\" class=\"note\" style=\"margin-top:0\">Bulut bağlantısı yok. Bulut eşitleme yalnızca masaüstü ve telefon uygulamalarında kullanılabilir.</div>\n<div class=\"row\"><button class=\"g\" id=\"bk-now\">Şimdi Yedekle</button><button class=\"g\" id=\"bk-list\">Yedekleri Göster</button></div>\n<div id=\"bk-items\"></div><p class=\"note\" id=\"bk-msg\"></p></div>\n<div class=\"setc\"><h3>Hakkında</h3>\n<p style=\"margin:0 0 6px\"><b>TurqTrack</b> – Turquality destek başvurularınızı, evraklarınızı ve sürelerinizi tek yerden takip eden uygulama.</p>\n<p class=\"note\" style=\"margin:0\">Sahibi: Kamil Demir<br>Sürüm: <span id=\"ver3\"></span><br>Platform: <span id=\"plat\"></span><br>Veriler bu cihazda saklanır. Bulut eşitleme açıksa kendi Supabase hesabınızda da yedeklenir.<br>Özellikler: süre takibi ve bildirimler, evrak havuzu, notlar, Excel/PDF/yazdırma raporları, TCMB kuru.</p></div>\n</div></section>\n\n<details id=\"excel\">\n<summary>Excel'den aktar / yedek</summary>\n<p class=\"note\">Excel'de satırları seçip kopyala (başlık satırı olabilir, olmayabilir), buraya yapıştır. Sütun sırası senin tablonla aynı olmalı. Hesaplanan sütunlar (KDV dahil tutar, Ödeme Tutarı TL, Desteklenecek Tutar, Kalan Süre) otomatik yeniden hesaplanır.</p>\n<textarea id=\"yapistir\" placeholder=\"Excel satırlarını buraya yapıştır\"></textarea>\n<div class=\"row\">\n<button id=\"aktar\">Yapıştırılanı ekle</button>\n<button class=\"g\" id=\"csv\">CSV indir</button>\n<button class=\"g\" id=\"yedek\">Yedek al (JSON)</button><button class=\"g\" id=\"tamyedek\">Evraklarla Tam Yedek</button>\n<label style=\"min-width:0\"><span class=\"g\" style=\"display:inline-block;padding:8px 13px;border:1px solid var(--accent);border-radius:6px;color:var(--accent);cursor:pointer\">Yedekten yükle<input type=\"file\" id=\"yukle\" accept=\".json\" style=\"display:none\"></span></label>\n</div>\n<p class=\"note\">Veriler bu tarayıcıda saklanır. Cihaz değiştirirsen yedek alıp diğer cihazda yükle. Desteklenecek tutar = Ödeme Tutarı TL × destek oranı olarak hesaplanır.</p>\n</details>\n</main>\n<div class=\"ov\" id=\"edov\" style=\"display:none\"><div class=\"dlg wide\"><h2 id=\"edtitle\">Kaydı Düzenle</h2><div id=\"edhost\"></div><div class=\"row\"><button id=\"ed-kaydet\">Güncelle</button><button class=\"g\" id=\"ed-iptal\">Vazgeç</button></div></div></div>\n<div class=\"ov\" id=\"hpov\" style=\"display:none\"><div class=\"dlg\"><h2>Hedef Pazar Kaydını Düzenle</h2><div class=\"grid\" id=\"hpform-edit\"></div><div class=\"row\"><button id=\"hp-kaydet\">Güncelle</button><button class=\"g\" id=\"hp-iptal\">Vazgeç</button></div></div></div>\n<datalist id=\"ulkeList\"></datalist>\n<div id=\"printArea\"></div>\n\n";})();

var DURUM=["Taslak","Yeni","İnceleme","Belge Bekleyen","Belge Tamamlanan","Bilgi Bekleyen","Bilgi Tamamlanan","Görüş Bekleyen","Görüş Tamamlanan","Koordine Bekleyen","Koordine Tamamlanan","Onay","Ret","İptal","Süre Aşımı"];
var ASAMA=["Başvuru","İnceleme","Görüş","Eksik Belge","Sonuçlanan","Ön Değerlendirme"];
var TERM=["Onay","Ret","İptal","Süre Aşımı"];
var DMAP={"Hazırlanıyor":"Taslak","Başvuruldu":"Yeni","Eksiklik bildirildi":"Belge Bekleyen","Eksiklik tamamlandı":"Belge Tamamlanan","Onaylandı":"Onay","Tahsil edildi":"Onay","Reddedildi":"Ret"};
var ADMAP={"MR - İstihdam":"Marka - İstihdam","MR - Fuar":"Marka - Fuar","MR - Gelişim Yol Haritası Çalışmaları":"Marka - Gelişim Yol Haritası Çalışmaları","MR - Yönetim Danışmanlığı (2A)":"Marka - Yönetim Danışmanlığı(EK2-A)","MR - Yönetim Danışmanlığı (2B)":"Marka - Yönetim Danışmanlığı(EK2-B)","MR - Yazılım Lisansı (2A)":"Marka - Yazılım Lisansı(EK2-A)","MR - Yazılım Lisansı Yıllık Bakım ve Güncelleme (2A)":"Marka - Yazılım Lisansı Yıllık Bakım Güncelleme(EK2-A)","MR - Kurumsal Alt Yapı Sürdürülebilirlik Danışmanlığı":"Marka - Sürdürülebilirlik Danışmanlığı (Kurumsal Alt Yapı)","MR - Pazara Giriş Belgeleri, Ruhsatlandırma ve Klinik Test":"Marka - Pazara Giriş Belgesi (Ruhsatlandırma ile Klinik Test İşlemleri)"};

// k:anahtar, l:başlık, t:tip (t=metin d=tarih n=sayı p=yüzde s=durum a=otomatik), v:varsayılan görünür
var C=[
{k:"no",l:"Sıra No",t:"a",v:1},
{k:"bas",l:"Başvuru Tarihi",t:"d",v:1},
{k:"barkod",l:"Barkod No",t:"t",v:1},
{k:"ulke",l:"Ülke",t:"u",v:1},
{k:"dt",l:"Destek Türü",t:"t",v:1},
{k:"adt",l:"Alt Destek Türü",t:"m"},
{k:"proje",l:"Dosya Konusu / Proje",t:"m",v:1},
{k:"firma",l:"Hizmet Alınan Firma",t:"t",v:1},
{k:"ftar",l:"Fatura Tarihi",t:"d",v:1},
{k:"fno",l:"Bordro/Fatura No",t:"t",v:1},
{k:"fdov",l:"Fatura Döviz Birimi",t:"c"},
{k:"matrah",l:"Matrah (KDV Hariç)",t:"n",v:1},
{k:"kdvo",l:"KDV Oranı",t:"k",v:1},
{k:"kdv",l:"KDV Tutarı",t:"n"},
{k:"kdvd",l:"KDV Dahil Tutar (Fatura Toplamı)",t:"a",v:1},
{k:"otar",l:"Ödeme Tarihi",t:"d",v:1},
{k:"odov",l:"Ödeme Döviz Birimi",t:"c"},
{k:"otut",l:"Ödeme Tutarı",t:"n"},
{k:"kur",l:"Ödeme Tarihi Kuru (TCMB Döviz Alış)",t:"n"},
{k:"kurm",l:"Kur Kaynağı",t:"h"},
{k:"kurt",l:"Kur Tarihi",t:"h"},
{k:"kdvx",l:"Özel KDV Oranı",t:"h"},
{k:"otl",l:"Ödeme Tutarı TL",t:"a",v:1},
{k:"oran",l:"Destek Oranı",t:"o",v:1},
{k:"dest",l:"Desteklenecek Tutar TL",t:"a",v:1},
{k:"sba",l:"Teşvik İçin Son Başvuru",t:"a",v:1},
{k:"ebt",l:"Eksiklik Bildirim Tarihi",t:"d",v:1},
{k:"ebs",l:"Eksiklik Bildirim Son Tarih",t:"a",v:1},
{k:"ekal",l:"Eksiklik Kalan Süre",t:"a",v:1},
{k:"ebd",l:"Eksik Bildirime Dönüş Tarihi",t:"d"},
{k:"not",l:"Not",t:"t"},
{k:"asama",l:"Aşama",t:"s2",v:1},
{k:"durum",l:"Aşama Detay",t:"s",v:1},
{k:"onay",l:"Onaylanma Tarihi",t:"d"},
{k:"tah",l:"Tahsilat Tarihi",t:"d"},
{k:"ddet",l:"Durum Detay",t:"t",hid:1}
];
var IMP=["no","bas","barkod","ulke","dt","adt","proje","firma","ftar","fno","kdvd","kdv","matrah","fdov","otar","otut","odov","kur","otl","oran","dest","sba","ebt","ebs","ekal","ebd","not","durum","ddet","onay","tah"];
var db={rows:[],vis:null},edit=null;
var $=function(i){return document.getElementById(i)};
function esc(s){var d=document.createElement("div");d.textContent=s==null?"":s;return d.innerHTML}
function tl(v){return (v||0).toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺"}
function nf(v){return v===""||v==null?"":Number(v).toLocaleString("tr-TR",{maximumFractionDigits:4})}
function df(s){if(!s)return"";var p=s.split("-");return p[2]+"."+p[1]+"."+p[0]}
function defVis(){var o={};C.forEach(function(c){o[c.k]=!!c.v});return o}
function load(){try{var s=localStorage.getItem("tq2");if(s)db=JSON.parse(s)}catch(e){}if(!db.vis)db.vis=defVis();C.forEach(function(c){if(!(c.k in db.vis))db.vis[c.k]=!!c.v})}
function saveOld(){db.ts=Date.now();try{localStorage.setItem("tq2",JSON.stringify(db))}catch(e){}if(DBC){clearTimeout(pt);pt=setTimeout(function(){DBC.set({json:JSON.stringify(db)}).catch(function(){})},800)}}
function num(x){var n=parseFloat(x);return isNaN(n)?0:n}
function addM(s,m){if(!s)return"";var p=s.split("-"),y=+p[0],mo=+p[1]-1+m,d=+p[2];y+=Math.floor(mo/12);mo=((mo%12)+12)%12;var last=new Date(y,mo+1,0).getDate();if(d>last)d=last;return y+"-"+("0"+(mo+1)).slice(-2)+"-"+("0"+d).slice(-2)}
function isTL(c){c=String(c||"").trim().toUpperCase();return!c||c==="TL"||c==="TRY"}
function calc(r){
 r.sba=addM(r.otar,6);
 r.ebs=addM(r.ebt,3);
 r.kdvd=num(r.matrah)+num(r.kdv);
 r.otl=isTL(r.odov)?num(r.otut):num(r.otut)*(num(r.kur)||0);
 /* Destek KDV hariç tutar üzerinden hesaplanır */
 var m=num(r.matrah),share=1;
 if(m>0&&r.kdvd>m){
  var same=String(r.odov||"TL").toUpperCase()===String(r.fdov||"TL").toUpperCase()||(isTL(r.odov)&&isTL(r.fdov));
  share=(same&&Math.abs(num(r.otut)-m)<=m*0.005)?1:m/r.kdvd;
 }
 r.dbase=r.otl*share;
 r.dest=r.dbase*num(r.oran)/100;
 r.ftl=isTL(r.fdov)?r.kdvd:((String(r.odov||"").toUpperCase()===String(r.fdov||"").toUpperCase()&&num(r.kur))?r.kdvd*num(r.kur):0);
 return r;
}
function sbaAktif(r){return!r.bas&&!r.ebt&&(!r.durum||r.durum==="Taslak")}
function ekAktif(r){return(r.durum==="Belge Bekleyen"||r.durum==="Bilgi Bekleyen"||!!r.ebt)&&!r.ebd&&TERM.indexOf(r.durum)<0&&r.durum!=="Belge Tamamlanan"&&r.durum!=="Bilgi Tamamlanan"}
function migrateRow(r){
 var ch=false;
 if(DMAP[r.durum]){if(r.durum==="Tahsil edildi"&&!r.tah)r.tahf=true;r.durum=DMAP[r.durum];ch=true}
 if(ADMAP[r.adt]){r.adt=ADMAP[r.adt];ch=true}
 if(!r.kdvo){
  var m=num(r.matrah),k=num(r.kdv),rate=m?Math.round(k/m*1000)/10:20;
  if(!m)r.kdvo="20";
  else if(Math.abs(rate)<.05)r.kdvo="0";
  else if(Math.abs(rate-20)<.15)r.kdvo="20";
  else if(Math.abs(rate-10)<.15)r.kdvo="10";
  else if(Math.abs(rate-1)<.15)r.kdvo="1";
  else{r.kdvo="x";r.kdvx=String(rate)}
  ch=true;
 }
 return ch;
}
function migrate(){var c=false;(db.rows||[]).forEach(function(r){if(migrateRow(r))c=true});return c}
function days(s){if(!s)return null;var t=new Date();t.setHours(0,0,0,0);return Math.round((new Date(s)-t)/864e5)}
function ekal(r){
 if(r.ebd)return{t:"Tamamlandı",c:"okc"};
 if(!ekAktif(r))return{t:"",c:""};
 if(!r.ebs)return{t:"Tarih girilmemiş",c:"soon"};
 var g=days(r.ebs);
 return g<0?{t:Math.abs(g)+" gün geçti",c:"late"}:{t:g===0?"Bugün":g+" gün",c:g<=15?"soon":""};
}
function cell(r,c,i){
 var v=r[c.k];
 if(c.k==="barkod")return'<td><a href="#" onclick="openEv('+r.id+');return false">'+esc(v||"(barkod yok)")+'</a></td>';
 if(c.k==="durum"){var sc2={"Ret":"red","Süre Aşımı":"red","Onay":"ok","Belge Bekleyen":"warn","Bilgi Bekleyen":"warn","Görüş Bekleyen":"warn","Koordine Bekleyen":"warn","Belge Tamamlanan":"acc","Bilgi Tamamlanan":"acc","Görüş Tamamlanan":"acc","Koordine Tamamlanan":"acc","Yeni":"acc","İnceleme":"acc"}[v]||"";return'<td><span class="st'+(sc2?" st-"+sc2:"")+'">'+esc(v)+"</span></td>"}
 if(c.k==="no")return"<td>"+(i+1)+"</td>";
 if(c.k==="ekal"){var e=ekal(r);return'<td class="'+e.c+'">'+e.t+"</td>"}
 if(c.k==="ebs"){var ge=days(v),oe=v&&ekAktif(r);return'<td class="'+(oe&&ge<0?"late":oe&&ge<=15?"soon":"")+'">'+df(v)+(oe?" ("+(ge<0?Math.abs(ge)+" gün geçti":ge===0?"son gün bugün":ge+" gün kaldı")+")":"")+"</td>"}
 if(c.k==="sba"){var g=days(v),cl="";if(v&&g!==null&&sbaAktif(r))cl=g<0?"late":g<=15?"soon":"";var on=v&&g!==null&&sbaAktif(r);return'<td class="'+cl+'">'+df(v)+(on?" ("+(g<0?Math.abs(g)+" gün geçti":g===0?"son gün bugün":g+" gün kaldı")+")":"")+"</td>"}
 if(c.k==="kdvd"||c.k==="otl"||c.k==="dest")return'<td class="n">'+tl(v)+"</td>";
 if(c.t==="d")return"<td>"+df(v)+"</td>";
 if(c.t==="n")return'<td class="n">'+nf(v)+"</td>";
 if(c.k==="kdvo")return'<td>'+(v==="0"?'<span class="st">KDV Yok</span>':v==="x"?"%"+esc(r.kdvx||"?")+" (özel)":v?"%"+esc(v):"")+"</td>";
 if(c.t==="p"||c.t==="o")return'<td class="n">'+(v===""||v==null?"":"%"+nf(v))+"</td>";
 return'<td class="wrap">'+esc(v)+"</td>";
}
var ADT=["Marka - Birim (Depolama Hizmeti)", "Marka - Birim Dekorasyon (Ofis/Mağaza/Depo/Sergi/Teşhir Salonu)", "Marka - Birim Dekorasyon (Reyon/Raf/Dekorasyonlu Köşe/Kiosk/Stand/Ürün Teşhir Serası/Tarlası)", "Marka - Birim Kira (Ofis/Mağaza/Depo/Sergi/Teşhir Salonu)", "Marka - Birim Kira (Reyon/Raf/Dekorasyonlu Köşe/Kiosk/Stand/Ürün Teşhir Serası/Tarlası)", "Marka - Birim Kira (Üzerine Bina Yapılmak Üzere Kiralanan Arsa)", "Marka - Franchise (Dekorasyon)", "Marka - Franchise (Kira)", "Marka - Fuar", "Marka - Gelişim Yol Haritası Çalışmaları", "Marka - İstihdam", "Marka - Patent, Faydalı Model, Endüstriyel Tasarım Tescili (Yurt Dışı Marka Tescil / Yenileme / Koruma)", "Marka - Pazara Giriş Belgesi (Ruhsatlandırma ile Klinik Test İşlemleri)", "Marka - Pazar Araştırması Çalışması ve Raporları", "Marka - Sürdürülebilirlik Danışmanlığı (Kurumsal Alt Yapı)", "Marka - Tanıtım", "Marka - Yazılım Eğitim ve Dış Kaynak Kullanımı(EK2-A)", "Marka - Yazılım Eğitim ve Dış Kaynak Kullanımı(EK2-B)", "Marka - Yazılım İyileştirme ve İdame Danışmanlık(EK2-A)", "Marka - Yazılım İyileştirme ve İdame Danışmanlık(EK2-B)", "Marka - Yazılım Lisansı(EK2-A)", "Marka - Yazılım Lisansı(EK2-B)", "Marka - Yazılım Lisansı Yıllık Bakım Güncelleme(EK2-A)", "Marka - Yazılım Lisansı Yıllık Bakım Güncelleme(EK2-B)", "Marka - Yönetim Danışmanlığı(EK2-A)", "Marka - Yönetim Danışmanlığı(EK2-B)"];
var OPT={adt:ADT.slice(),
proje:['Sertifika Gideri','Sertifika Gideri, Test/Analiz Gideri, İnceleme/Tetkik Gideri','Yer Kirası Gideri','Ulaşım Gideri','Kapsama Alma','5973 - İhracat Destekleri Hakkında Karar (Turquality/Marka)','Stand Gideri','Danışmanlık Gideri (Sertifikasyon)','Danışmanlık Gideri (İş Geliştirme ve İş Sürekliliği)','Sürdürülebilirlik Gideri (Ürün Geliştirme)','Gelişim Yol Haritası Gideri','İSPANYA HEDEF PAZAR','ALMANYA HEDEF PAZAR','İTALYA HEDEF PAZAR','GELİŞİM YOL HARİTASI','Yazılım Gideri (Sanayide Dijital Dönüşüm)','Danışmanlık Gideri (Sürdürülebilir Ürün Geliştirme)','Danışmanlık Gideri (Bilgi Güvenliği Çözümleri)','Danışmanlık Gideri (ERP-Kurumsal Kaynak Planlaması)','Danışmanlık Gideri (Tasarım)','Kira Gideri (Stand), Nakliye Gideri','Nakliye Gideri','İstihdam Gideri (Mühendis)','Danışmanlık Gideri (Kurumsal Yönetişim)','Masters of FLAX FIBRE Certification','Complete + Higg FEM & Higg FSLM (KARACASU)','Complete + Higg FEM & Higg FSLM (GENÇ OSMAN)','Yazılım Gideri (Kurumsal Kaynak Planlama Sistemi)','Sürdürülebilirlik Gideri (Enerji Danışmanlığı)','İnceleme/Tetkik Gideri','İnceleme/Tetkik Gideri SLCP','Performans Değerlendirme Başvurusu']};
function norm(s){return(s||'').toLowerCase().replace(/\s+/g,'')}
function canon(k,v){if(!v)return v;var o=OPT[k].concat((db.custom&&db.custom[k])||[]),n=norm(v);for(var i=0;i<o.length;i++)if(norm(o[i])===n)return o[i];return v}
function fillMenu(k,sel){
 var e=$('f-'+k);if(!e)return;
 var o=OPT[k].concat((db.custom&&db.custom[k])||[]);
 if(k==="adt"&&GR0[tab])o=grpList(tab).slice();
 if(sel&&o.indexOf(sel)<0)o.push(sel);
 e.innerHTML='<option value="">Seçiniz</option>'+o.map(function(x){return'<option value="'+esc(x).replace(/"/g,'&quot;')+'">'+esc(x)+'</option>'}).join('')+'<option value="__new">+ Yeni seçenek ekle…</option>';
 e.value=sel||'';
 e.onchange=function(){if(e.value==='__new'){var t=(prompt('Yeni seçenek:')||'').trim();if(t){if(OPT[k].indexOf(t)<0){if(!db.custom)db.custom={};if(!db.custom[k])db.custom[k]=[];if(db.custom[k].indexOf(t)<0)db.custom[k].push(t);save()}if(k==='adt'&&GR0[tab])addGrp(tab,t);fillMenu(k,t)}else e.value=''}};
}
function parseTSV(s){var rows=[],row=[],f='',q=false;for(var i=0;i<s.length;i++){var ch=s[i];if(q){if(ch==='"'){if(s[i+1]==='"'){f+='"';i++}else q=false}else f+=ch}else if(ch==='"'&&f==='')q=true;else if(ch==='\t'){row.push(f);f=''}else if(ch==='\n'){row.push(f);rows.push(row);row=[];f=''}else if(ch!=='\r')f+=ch}row.push(f);rows.push(row);return rows.filter(function(r){return r.some(function(x){return x.trim()})})}
var ULKELER=["Tüm Ülkeler"].concat(["Afganistan","Almanya","Amerika Birleşik Devletleri","Andorra","Angola","Antigua ve Barbuda","Arjantin","Arnavutluk","Avustralya","Avusturya","Azerbaycan","Bahamalar","Bahreyn","Bangladeş","Barbados","Belarus","Belçika","Belize","Benin","Birleşik Arap Emirlikleri","Birleşik Krallık","Bolivya","Bosna-Hersek","Botsvana","Brezilya","Brunei","Bulgaristan","Burkina Faso","Burundi","Butan","Cezayir","Cibuti","Çad","Çek Cumhuriyeti","Çin","Danimarka","Doğu Timor","Dominika","Dominik Cumhuriyeti","Ekvador","Ekvator Ginesi","El Salvador","Endonezya","Eritre","Ermenistan","Esvatini","Estonya","Etiyopya","Fas","Fiji","Fildişi Sahili","Filipinler","Filistin","Finlandiya","Fransa","Gabon","Gambiya","Gana","Gine","Gine-Bissau","Grenada","Guatemala","Guyana","Güney Afrika","Güney Kore","Güney Sudan","Gürcistan","Haiti","Hırvatistan","Hindistan","Hollanda","Honduras","Hong Kong","Irak","İran","İrlanda","İspanya","İsrail","İsveç","İsviçre","İtalya","İzlanda","Jamaika","Japonya","Kamboçya","Kamerun","Kanada","Karadağ","Katar","Kazakistan","Kenya","Kırgızistan","Kiribati","Kolombiya","Komorlar","Kongo","Kongo Demokratik Cumhuriyeti","Kosova","Kosta Rika","Küba","Kuveyt","Kuzey Kıbrıs Türk Cumhuriyeti","Kuzey Makedonya","Laos","Lesotho","Letonya","Liberya","Libya","Lihtenştayn","Litvanya","Lübnan","Lüksemburg","Macaristan","Madagaskar","Malavi","Maldivler","Malezya","Mali","Malta","Marşal Adaları","Meksika","Mısır","Mikronezya","Moğolistan","Moldova","Monako","Moritanya","Morityus","Mozambik","Myanmar","Namibya","Nauru","Nepal","Nijer","Nijerya","Nikaragua","Norveç","Orta Afrika Cumhuriyeti","Özbekistan","Pakistan","Palau","Panama","Papua Yeni Gine","Paraguay","Peru","Polonya","Portekiz","Romanya","Ruanda","Rusya","Saint Kitts ve Nevis","Saint Lucia","Saint Vincent ve Grenadinler","Samoa","San Marino","Sao Tome ve Principe","Senegal","Seyşeller","Sırbistan","Sierra Leone","Singapur","Slovakya","Slovenya","Solomon Adaları","Somali","Sri Lanka","Sudan","Surinam","Suriye","Suudi Arabistan","Şili","Tacikistan","Tanzanya","Tayland","Tayvan","Togo","Tonga","Trinidad ve Tobago","Tunus","Tuvalu","Türkiye","Türkmenistan","Uganda","Ukrayna","Umman","Uruguay","Ürdün","Vanuatu","Vatikan","Venezuela","Vietnam","Yemen","Yeni Zelanda","Yunanistan","Zambiya","Zimbabve"].sort(function(a,b){return a.localeCompare(b,"tr")}));
function ulkeOpts(){return ULKELER.map(function(u){return'<option value="'+u+'">'}).join("")}
function ensureOpt(e,v){
 if(!e||!e.options||v===""||v==null)return;
 if(!Array.prototype.some.call(e.options,function(o){return o.value===String(v)}))e.insertAdjacentHTML("beforeend",'<option value="'+esc(String(v))+'">'+esc(String(v))+"</option>");
}
function buildForm(){
 var h="";
 C.forEach(function(c){
  if(c.hid)return;
  if(c.t==="h"){h+='<input type="hidden" id="f-'+c.k+'">';return}
  if(c.t==="a"&&c.k!=="kdvd")return;
  var inp;
  if(c.k==="kdvd")inp='<input id="f-kdvd" type="text" readonly tabindex="-1">';
  else if(c.t==="s")inp='<select id="f-'+c.k+'">'+DURUM.map(function(d){return"<option>"+d+"</option>"}).join("")+"</select>";
  else if(c.t==="s2")inp='<select id="f-'+c.k+'"><option value="">Seçiniz</option>'+ASAMA.map(function(d){return"<option>"+d+"</option>"}).join("")+"</select>";
  else if(c.t==="k")inp='<select id="f-'+c.k+'"><option value="1">%1</option><option value="10">%10</option><option value="20">%20</option><option value="0">KDV Yok (%0)</option><option value="x">Diğer oran…</option></select>';
  else if(c.t==="o")inp='<select id="f-'+c.k+'"><option value="50">%50</option><option value="70">%70</option></select>';
  else if(c.t==="u")inp='<input id="f-'+c.k+'" list="ulkeList" placeholder="Ülke seçin veya yazın" autocomplete="off">';
  else if(c.t==="c")inp='<select id="f-'+c.k+'">'+CUR.map(function(x){return"<option>"+x+"</option>"}).join("")+"</select>";
  else if(c.t==="m")inp='<select id="f-'+c.k+'"></select>';
  else inp='<input id="f-'+c.k+'" type="'+(c.t==="d"?"date":c.t==="n"?"number":"text")+'"'+(c.t==="n"?' step="any"':"")+">";
  h+="<label>"+c.l+inp+"</label>";
 });
 $("form").innerHTML=h;
 $("ulkeList").innerHTML=ulkeOpts();
 C.forEach(function(c){if(c.t==="m")fillMenu(c.k,"")});
}
function clearForm(){
 C.forEach(function(c){var e=$("f-"+c.k);if(e)e.value=""});
 $("f-fdov").value="TL";$("f-odov").value="TL";$("f-durum").value="Taslak";$("f-kdvo").value="20";$("f-oran").value="50";
 $("f-kdvd").value="";edit=null;kdvRecalc(true);kurNote();
}
function readForm(){var r={};C.forEach(function(c){var e=$("f-"+c.k);if(e&&c.t!=="a")r[c.k]=e.value});return r}
function setForm(r){
 C.forEach(function(c){
  if(c.t==="m"){fillMenu(c.k,r[c.k]||"");return}
  var e=$("f-"+c.k);if(!e)return;
  var v=r[c.k]==null?"":r[c.k];
  if(c.t==="s"||c.t==="s2"||c.t==="o"||c.t==="k"||c.t==="c")ensureOpt(e,v);
  e.value=v;
 });
 kdvRecalc(true);kurNote();
}
/* KDV: matrah girilince KDV tutarı ve KDV dahil tutar otomatik hesaplanır */
function kdvRecalc(fromLoad){
 var o=$("f-kdvo").value,m=num($("f-matrah").value);
 if(fromLoad!==true&&o!=="x")$("f-kdv").value=$("f-matrah").value===""?"":(Math.round(m*Number(o))/100).toFixed(2);
 var kv=num($("f-kdv").value);
 $("f-kdvd").value=$("f-matrah").value===""?"":nf2(m+kv);
 Array.prototype.forEach.call($("f-kdvo").options||[],function(x){if(x.value==="x")x.textContent=$("f-kdvx").value?"%"+$("f-kdvx").value+" (özel oran)":"Diğer oran…"});
}
function kdvOnRate(){
 var s=$("f-kdvo");
 if(s.value==="x"){
  var v=prompt("Özel KDV oranını girin (%):",$("f-kdvx").value||""),n=parseFloat(String(v==null?"":v).replace(",","."));
  if(isNaN(n)||n<0||n>100){s.value=$("f-kdvx").value?"x":"20";kdvRecalc();return}
  $("f-kdvx").value=String(n);$("f-kdv").value=(Math.round(num($("f-matrah").value)*n)/100).toFixed(2);
 }
 kdvRecalc();
}
function kdvManual(){
 var m=num($("f-matrah").value),k=num($("f-kdv").value),rate=m?Math.round(k/m*1000)/10:0;
 if([20,10,1,0].indexOf(rate)>-1){$("f-kdvo").value=String(rate);$("f-kdvx").value=""}
 else{$("f-kdvo").value="x";$("f-kdvx").value=String(rate)}
 kdvRecalc(true);
}
function kurNote(){
 var n=$("kurnot"),m=$("f-kurm").value,t=$("f-kurt").value,c=$("f-odov").value;
 n.textContent=(c==="TL"||!c)?"":(m==="manual"?"Kur elle girildi.":m==="auto"?"TCMB "+c+" döviz alış kuru, "+df(t)+" tarihli (otomatik).":"Kuru elle girin.");
}
function autoKur(){kurNote()}
function wireForm(){
 $("f-matrah").oninput=function(){kdvRecalc()};
 $("f-kdvo").onchange=kdvOnRate;$("f-kdv").oninput=kdvManual;
 $("f-kur").oninput=function(){$("f-kurm").value="manual";$("f-kurt").value="";kurNote()};
 $("f-fdov").onchange=function(){var o=$("f-odov");if(o.value==="TL"||!$("f-otut").value){o.value=this.value}autoKur()};
 $("f-odov").onchange=function(){autoKur()};$("f-otar").onchange=function(){autoKur()};
}
function validateRec(r){
 if(!r.barkod&&!r.firma)return"Barkod No veya Hizmet Alınan Firma girin.";
 if(r.matrah!==""&&(isNaN(Number(r.matrah))||Number(r.matrah)<0))return"Matrah geçerli bir sayı olmalı.";
 if(r.kdv!==""&&isNaN(Number(r.kdv)))return"KDV tutarı geçerli bir sayı olmalı.";
 var d=(r.odov||"TL").toUpperCase();
 if(d!=="TL"&&r.otut!==""&&!num(r.kur))return"Dövizli ödeme için kur gerekli: TCMB kurunu getirin veya elle girin.";
 return"";
}
var draft=null;
function editRow(id){
 var r=db.rows.filter(function(x){return x.id===id})[0];if(!r)return;
 draft=readForm();
 $("edhost").appendChild($("form"));$("edhost").appendChild($("kurnot"));
 setForm(r);edit=id;
 $("edtitle").textContent="Kaydı Düzenle – "+(r.barkod||"Barkodsuz")+(r.firma?" – "+r.firma:"");
 $("edov").style.display="flex";
}
function closeEdit(){
 $("newhost").appendChild($("form"));$("newhost").appendChild($("kurnot"));
 $("edov").style.display="none";clearForm();
 if(draft){setForm(draft);draft=null}
}
function saveRec(){
 var r=readForm(),err=validateRec(r);
 if(err){alert(err);return}
 if(GR0[tab]&&!r.adt&&!edit){alert("Önce Alt Destek Türünü seçin.");return}
 if(!r.dt&&r.adt)r.dt=r.adt.split(" - ")[0];
 autoDurum(r);
 if(edit){
  var o=db.rows.filter(function(x){return x.id===edit})[0];
  if(!o){alert("Düzenlenen kayıt bulunamadı.");closeEdit();return}
  Object.keys(r).forEach(function(k){o[k]=r[k]});
  save();closeEdit();render();return;
 }
 if(r.barkod&&db.rows.some(function(x){return x.barkod===r.barkod})&&!confirm("Bu barkod numarası zaten kayıtlı. Yine de yeni kayıt eklensin mi?"))return;
 r.id=Date.now();db.rows.push(r);
 save();clearForm();render();
}
function delRow(id){if(!confirm("Bu kayıt ve evrakları silinsin mi?"))return;var o=db.rows.filter(function(x){return x.id===id})[0];if(o&&o.docs&&A)o.docs.forEach(function(x){A.delete(x.id).catch(function(){})});if(evRow===id){evRow=null;$("evrakbox").style.display="none"}db.rows=db.rows.filter(function(x){return x.id!==id});save();render()}
function render(){
 syncBild();
 var t=0,d=0,onay=0,tah=0,ek=0;
 db.rows.forEach(calc);viewRows().forEach(function(r){t+=r.otl;d+=r.dest;if(r.durum==="Onay"&&!r.tah&&!r.tahf)onay+=r.dest;if(r.tah||r.tahf)tah+=r.dest;if(ekAktif(r))ek++});
 var cd=function(k,l,v){return'<div class="card'+(CF===k?" on":"")+'" role="button" tabindex="0" onclick="setCF(\''+k+'\')"><small>'+l+'</small><b>'+v+'</b></div>'};
 $("sum").innerHTML=cd("all","Toplam Yapılan Harcama (TL)",tl(t))+cd("all","Toplam Destek",tl(d))+cd("onayBek","Onaylanan, Tahsil Bekleyen",tl(onay))+cd("tahsil","Tahsil Edilen",tl(tah))+cd("cevapBek","Cevap Bekleyen Eksiklik",ek);
 var al=[];
 viewRows().forEach(function(r){
  var ad=(r.barkod||"Barkodsuz")+" – "+(r.proje||r.dt||"Dosya konusu yok");
  if(sbaAktif(r)&&r.sba){var g=days(r.sba);if(g<=15)al.push({g:g,t:ad,k:"Son başvuru ("+df(r.sba)+")"})}
  if(ekAktif(r)&&r.ebs){var g2=days(r.ebs);if(g2<=15)al.push({g:g2,t:ad,k:"Eksiklik cevabı son tarihi ("+df(r.ebs)+")"})}
 });
 al.sort(function(a,b){return a.g-b.g});window.alN=al.length;window.alL=al;
 $("uyari").innerHTML=al.length?'<div class="al"><b>'+al.length+' uyarı</b>'+al.map(function(a){return'<div class="'+(a.g<0?"late":"soon")+'">'+esc(a.k)+": "+esc(a.t)+" — "+(a.g<0?Math.abs(a.g)+" gün önce doldu":a.g===0?"Son gün bugün":a.g+" gün kaldı")+"</div>"}).join("")+"</div>":"";
 var DS={};DURUM.forEach(function(d){DS[d]={n:0,t:0}});
 viewRows().forEach(function(r){var k=DS[r.durum]?r.durum:"Taslak";DS[k].n++;DS[k].t+=r.dest||0});
 $("sum2").innerHTML=DURUM.map(function(d){return'<div class="card sc'+(CF==="st:"+d?" on":"")+'" role="button" tabindex="0" onclick="setCF(\'st:'+d+'\')"><small>'+d+'</small><div class="kvr"><div><span>Dosya Sayısı</span><b>'+DS[d].n+'</b></div><div><span>Desteklenecek Tutar</span><b>'+tl(DS[d].t)+'</b></div></div></div>'}).join("");
 
 $("cfbar").innerHTML=CF!=="all"?'<div class="chipf">Gösterilen: <b>'+PFN[CF]+'</b> <button class="s" onclick="setCF(\''+CF+'\')">Filtreyi temizle ×</button></div>':"";
 var cols=colOrder().map(function(k){return C.filter(function(c){return c.k===k})[0]}).filter(function(c){return db.vis[c.k]});
 $("th").innerHTML="<tr>"+cols.map(function(c){return thH("main",c.k,c.l,"sortBy",SORT)}).join("")+"<th></th></tr>";
 var q=$("ara").value.toLowerCase(),fd=$("fdurum").value;
 var list=viewRows().map(function(r,i){return{r:r,i:i}}).filter(function(o){
  if(fd&&o.r.durum!==fd)return false;
  if(!PF[CF](o.r))return false;
  return!q||JSON.stringify(o.r).toLowerCase().indexOf(q)>-1});
 list=sortList(list);
 $("tb").innerHTML=list.length?list.map(function(o){
  return"<tr>"+cols.map(function(c){return cell(o.r,c,o.i)}).join("")+'<td><button class="s" onclick="openEv('+o.r.id+')">Evrak ('+((o.r.docs||[]).length)+')'+'</button> <button class="s" onclick="editRow('+o.r.id+')">Düzenle</button> <button class="s d" onclick="delRow('+o.r.id+')">Sil</button></td></tr>'}).join(""):'<tr><td colspan="'+(cols.length+1)+'" >'+emptyBox("Gösterilecek kayıt yok","Yukarıdan yeni kayıt ekleyin, Excel\'den aktarın veya filtreyi temizleyin.")+'</td></tr>';
}
function chips(){
 $("chips").innerHTML=C.filter(function(c){return!c.hid&&c.t!=="h"}).map(function(c){return'<label><input type="checkbox" data-k="'+c.k+'"'+(db.vis[c.k]?" checked":"")+">"+c.l+"</label>"}).join("");
 Array.prototype.forEach.call($("chips").querySelectorAll("input"),function(i){i.onchange=function(){db.vis[i.dataset.k]=i.checked;save();render()}});
}
function pd(s){s=(s||"").trim();var m=s.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})/);if(m)return m[3]+"-"+("0"+m[2]).slice(-2)+"-"+("0"+m[1]).slice(-2);return/^\d{4}-\d{2}-\d{2}/.test(s)?s.slice(0,10):""}
function pn(s){s=(s||"").replace(/[₺$€\s]|TL/gi,"");if(!s)return"";if(s.indexOf(",")>-1)s=s.replace(/\./g,"").replace(",",".");var n=parseFloat(s);return isNaN(n)?"":n}
function autoDurum(r){
 var d=r.durum||"Taslak";
 if(TERM.indexOf(d)>-1){r.durum=d;return}
 if(r.onay){r.durum="Onay";return}
 if(r.ebt&&!r.ebd&&(d==="Taslak"||d==="Yeni"||d==="İnceleme")){r.durum="Belge Bekleyen";return}
 if(r.ebt&&r.ebd){
  if(d==="Belge Bekleyen"){r.durum="Belge Tamamlanan";return}
  if(d==="Bilgi Bekleyen"){r.durum="Bilgi Tamamlanan";return}
 }
 if(r.bas&&d==="Taslak"){r.durum="Yeni";return}
 r.durum=d;
}
function curN(v){v=(v||"").trim().toUpperCase();return v==="TRY"||v===""?"TL":v}
function aktar(){
 var lines=parseTSV($("yapistir").value),n=0;
 lines.forEach(function(p){
  if(/SIRA|BAŞVURU/i.test(p[0]+(p[1]||"")))return;
  var r={id:Date.now()+n};
  IMP.forEach(function(k,i){
   var c=C.filter(function(x){return x.k===k})[0];
   if(!c||c.t==="a"||c.hid)return;
   var v=(p[i]||"").replace(/\s*[\r\n]+\s*/g," ").trim();
   r[k]=c.t==="d"?pd(v):c.t==="n"?pn(v):(c.t==="o"||c.t==="p")?pn(v.replace("%","")):v;
  });
  if(r.oran===""||r.oran==null)r.oran=50;else if(r.oran>0&&r.oran<=1)r.oran=r.oran*100;
  if(DMAP[r.durum])r.durum=DMAP[r.durum];
  if(DURUM.indexOf(r.durum)<0){var m=DURUM.filter(function(d){return d.toLowerCase()===(r.durum||"").toLowerCase()})[0];r.durum=m||DURUM[0]}
  r.fdov=curN(r.fdov);r.odov=curN(r.odov);migrateRow(r);autoDurum(r);["adt","proje"].forEach(function(k){r[k]=canon(k,r[k])});db.rows.push(r);n++;
 });
 save();render();$("yapistir").value="";alert(n+" kayıt eklendi.");
}
function dl(name,data,type){var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([data],{type:type}));a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},500)}
function init(){
 load();if(migrate())save();buildForm();clearForm();chips();wireForm();wireHP();
 $("fdurum").innerHTML='<option value="">Tümü</option>'+DURUM.map(function(d){return"<option>"+d+"</option>"}).join("");
 $("ara").oninput=render;$("fdurum").onchange=render;
 $("sutunbtn").onclick=function(){var b=$("sutunbox");b.style.display=b.style.display==="none"?"block":"none"};
 $("hepsi").onclick=function(){C.forEach(function(c){db.vis[c.k]=true});save();chips();render()};
 $("varsayilan").onclick=function(){db.vis=defVis();save();chips();render()};
 $("kaydet").onclick=saveRec;$("temizle").onclick=clearForm;$("ed-kaydet").onclick=saveRec;$("ed-iptal").onclick=closeEdit;
 $("aktar").onclick=aktar;
 $("csv").onclick=function(){
  var cols=C.filter(function(c){return!c.hid&&c.t!=="h"});var out=[cols.map(function(c){return c.l})];
  db.rows.forEach(function(r,i){calc(r);out.push(cols.map(function(c){return c.k==="no"?i+1:c.k==="ekal"?ekal(r).t:r[c.k]==null?"":r[c.k]}))});
  dl("turquality.csv","\ufeff"+out.map(function(a){return a.map(function(v){return'"'+String(v).replace(/"/g,'""')+'"'}).join(";")}).join("\n"),"text/csv");
 };
 $("yedek").onclick=function(){dl("turquality-yedek.json",JSON.stringify(db),"application/json")};
 $("yukle").onchange=function(){
  var f=this.files[0];if(!f)return;var rd=new FileReader();
  rd.onload=async function(){try{var d=JSON.parse(rd.result);if(d.rows){if(d.files){await idbRestore(d.files);delete d.files}db=d;if(!db.vis)db.vis=defVis();save();chips();render()}else alert("Geçersiz dosya.")}catch(e){alert("Dosya okunamadı.")}};
  rd.readAsText(f);
 };
 render();
}
var evRow=null,A=null,DBC=null,pt=null;
function mt(n){var e=(n.split(".").pop()||"").toLowerCase();return{pdf:"application/pdf",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp",gif:"image/gif",mp4:"video/mp4",webm:"video/webm",csv:"text/csv",txt:"text/plain",json:"application/json",md:"text/markdown"}[e]||"application/octet-stream"}
function curRow(){return db.rows.filter(function(x){return x.id===evRow})[0]}
function openEv(id){evRow=id;if(tab==="h")setTab("b");renderEvrak();fillTur();$("evrakbox").style.display="block";$("evrakbox").scrollIntoView({behavior:"smooth"})}
function renderEvrak(){
 if(evRow==null)return;var r=curRow();
 if(!r){$("evrakbox").style.display="none";return}
 $("evtitle").textContent="Evraklar: "+(r.barkod?r.barkod+" – ":"")+(r.firma||"Firma yok")+" – "+(r.proje||"");
 var d=r.docs||[];
 $("evlist").innerHTML=d.length?d.map(function(x,i){return'<div style="display:flex;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px solid var(--line)"><span><select aria-label="Evrak türü" style="width:auto;margin:0 8px 0 0" onchange="setTurDoc('+i+',this.value)">'+turOpts(x.tur||"Diğer")+'</select><a href="#" onclick="openDoc(\''+x.id+'\');return false">'+esc(x.name)+'</a> <small>('+Math.max(1,Math.round(x.size/1024))+' KB, '+df(x.tarih)+')</small></span><button class="s d" onclick="delEv('+i+')">Sil</button></div>'}).join(""):'<div class="empty">Bu kayda henüz evrak eklenmedi.</div>';
 $("evfile").disabled=!A;
 
 $("evnote").textContent=A?"Her türlü dosya yüklenebilir (PDF, resim, Word, Excel...). Dosyalar bu cihazda saklanır, bulut eşitleme açıksa buluta da yüklenir.":"Evrak yükleme bu görünümde kullanılamıyor.";
}
function delEv(i){var r=curRow();if(!r||!confirm("Bu evrak kalıcı olarak silinsin mi?"))return;var x=r.docs[i];(A?A.delete(x.id):Promise.resolve()).catch(function(){}).then(function(){r.docs.splice(i,1);save();renderEvrak();render()})}
$("evkapat").onclick=function(){evRow=null;$("evrakbox").style.display="none"};
$("evfile").onchange=async function(){
 var r=curRow();if(!r||!A)return;
 var fl=Array.prototype.slice.call(this.files);this.value="";
 for(var i=0;i<fl.length;i++){
  var f=fl[i],t=mt(f.name);
  if(!t){alert("Bu tür desteklenmiyor: "+f.name);continue}
  try{f=await compressImg(f);t=mt(f.name)||t;var res=await A.upload(f,{type:t});(r.docs=r.docs||[]).push({id:res.id,name:f.name,size:f.size,tarih:new Date().toISOString().slice(0,10),tur:$("evtur").value});save();renderEvrak();render()}
  catch(e){alert("Yüklenemedi: "+f.name+" ("+((e&&e.code)||"hata")+")")}
 }
};
function cloudNote(){$("bulut").textContent=(DBC?"Bulut yedeği açık: kayıtlar hesabına da kaydediliyor.":"Bulut yedeği kullanılamıyor, kayıtlar sadece bu tarayıcıda.")+(A?"":" Evrak yükleme kullanılamıyor.")}
async function cloudInit(){
 try{A=await claude.use("assets")}catch(e){A=null}
 try{var d=await claude.use("db"),u=await claude.use("user");if(d&&u){var id=await u.id();if(id)DBC=d.collection("data/users/"+id).doc("main")}}catch(e){DBC=null}
 if(DBC){try{var s=await DBC.get();if(s.exists){var c=s.data();if(c&&c.json){var cd=JSON.parse(c.json);if(cd.rows&&(cd.ts||0)>(db.ts||0)){db=cd;if(!db.vis)db.vis=defVis();if(!db.custom)db.custom={};save();chips();render();fillTur()}else save()}}else save()}catch(e){}}
 cloudNote();renderEvrak();
}
var DEF=["Fatura","Proforma fatura","Banka dekontu","Tahsilat dekontu","Kur belgesi","İş çıktısı / Sertifika","Rapor / Analiz","Teklif","Sözleşme","Başvuru formu","Eksiklik yazısı","Eksiklik cevabı","Onay yazısı","Fotoğraf / Görsel","Yazışma"];
var tab="b";
var CUR=["TL","USD","EUR","GBP","CHF","JPY","CAD","AUD","DKK","NOK","SEK","SAR","KWD","AED","CNY","RUB","AZN","BGN","RON"];
var GR0={marka:ADT.filter(function(x){return x!=="Marka - İstihdam"&&x!=="Marka - Fuar"}),istihdam:["Marka - İstihdam"],fuar:["Marka - Fuar"]};
var GLEG={marka:["MR - Gelişim Yol Haritası Çalışmaları","MR - Yönetim Danışmanlığı (2A)","MR - Yönetim Danışmanlığı (2B)","MR - Yazılım Lisansı (2A)","MR - Yazılım Lisansı Yıllık Bakım ve Güncelleme (2A)","MR - Kurumsal Alt Yapı Sürdürülebilirlik Danışmanlığı","MR - Pazara Giriş Belgeleri, Ruhsatlandırma ve Klinik Test"],istihdam:["MR - İstihdam"],fuar:["YİF Fuar Katılım","YDF Fuar Katılım","MR - Fuar"]};
var GN={marka:"Marka",istihdam:"İstihdam",fuar:"Fuar"};
function grpList(g){return GR0[g].concat((db.gek&&db.gek[g])||[])}
function inGrp(g,v){var n=norm(v);return!!n&&grpList(g).concat(GLEG[g]||[]).some(function(x){return norm(x)===n})}
function viewRows(){return GR0[tab]?db.rows.filter(function(r){return inGrp(tab,r.adt)}):db.rows}
function chipH(x,i){return'<span style="border:1px solid var(--line);border-radius:99px;padding:2px 10px;margin:0 6px 6px 0;display:inline-flex;gap:4px;align-items:center">'+esc(x)+(i>=0?'<button class="s d" style="padding:0 6px" aria-label="Kaldır" onclick="remGrp('+i+')">×</button>':'')+'</span>'}
function renderG(){}
function addGrp(g,t){
 t=(t||"").trim();if(!t)return;
 if(!db.gek)db.gek={};if(!db.gek[g])db.gek[g]=[];
 if(!inGrp(g,t))db.gek[g].push(t);
 if(!db.custom)db.custom={};if(!db.custom.adt)db.custom.adt=[];
 if(OPT.adt.concat(db.custom.adt).map(norm).indexOf(norm(t))<0)db.custom.adt.push(t);
 save();var cv=$("f-adt").value;fillMenu("adt",cv==="__new"?"":cv);renderG();render();
}
function remGrp(i){if(!db.gek||!db.gek[tab])return;db.gek[tab].splice(i,1);save();renderG();render()}
function turList(){return DEF.concat(db.dtur||[],["Diğer"])}
function opt(x){return'<option>'+esc(x)+'</option>'}
function fillTur(sel){
 var a=$("evtur"),h=$("htur"),cur=a.value,ch=h.value,o=turList(),ex=[];
 db.rows.forEach(function(r){(r.docs||[]).forEach(function(x){var t=x.tur||"Diğer";if(o.indexOf(t)<0&&ex.indexOf(t)<0)ex.push(t)})});
 a.innerHTML=o.map(opt).join("")+'<option value="__new">+ Yeni tür ekle…</option>';
 a.value=sel||(o.indexOf(cur)>-1?cur:o[0]);
 h.innerHTML='<option value="">Tümü</option>'+o.concat(ex).map(opt).join("");
 h.value=ch;
 var c=db.dtur||[];
 $("turchips").innerHTML=c.length?'<small>Eklediklerin (silmek için ×):</small> '+c.map(function(x,i){return'<span style="border:1px solid var(--line);border-radius:99px;padding:2px 4px 2px 10px;margin:0 6px 6px 0;display:inline-flex;gap:4px;align-items:center">'+esc(x)+'<button class="s d" style="padding:0 6px" aria-label="Türü sil" onclick="delTur('+i+')">×</button></span>'}).join(""):"";
 $("zorbox").innerHTML='<small style="width:100%">Zorunlu evrak türleri (eksikse uyarı verir):</small>'+o.filter(function(t){return t!=="Diğer"}).map(function(t){return'<label><input type="checkbox" data-t="'+esc(t).replace(/"/g,"&quot;")+'"'+(zorList().indexOf(t)>-1?" checked":"")+">"+esc(t)+"</label>"}).join("");
 Array.prototype.forEach.call($("zorbox").querySelectorAll("input"),function(i){i.onchange=function(){var z=zorList().slice(),t=i.dataset.t,k=z.indexOf(t);if(i.checked&&k<0)z.push(t);if(!i.checked&&k>-1)z.splice(k,1);db.zor=z;save();renderEvrak();render()}});
}
function zorList(){return []}
function eksikEv(r){var h=(r.docs||[]).map(function(x){return x.tur||"Diğer"});return zorList().filter(function(t){return h.indexOf(t)<0})}
function eksikHtml(){var l=[];viewRows().forEach(function(r){if(r.durum==="Reddedildi")return;var e=eksikEv(r);if(e.length)l.push({r:r,e:e})});if(!l.length)return"";return'<details class="al"><summary><b>'+l.length+' başvuruda zorunlu evrak eksik</b></summary>'+l.map(function(o){return'<div>'+esc((o.r.barkod||"Barkodsuz")+" – "+(o.r.firma||"Firma yok"))+': <span class="soon">'+esc(o.e.join(", "))+' eksik</span> <button class="s" onclick="openEv('+o.r.id+')">Aç</button></div>'}).join("")+"</details>"}
function turOpts(cur){var o=turList();if(o.indexOf(cur)<0)o.push(cur);return o.map(function(t){return'<option'+(t===cur?' selected':'')+'>'+esc(t)+'</option>'}).join("")}
function setTurDoc(i,v){var r=curRow();if(!r)return;r.docs[i].tur=v;save();renderEvrak();render()}
function delTur(i){var x=(db.dtur||[])[i];if(x==null||!confirm("\""+x+"\" türü listeden kaldırılsın mı? Bu türdeki mevcut evraklar silinmez."))return;db.dtur.splice(i,1);save();fillTur()}
$("evtur").onchange=function(){
 if(this.value==="__new"){var t=(prompt("Yeni evrak türü:")||"").trim();if(t&&turList().indexOf(t)<0){db.dtur=(db.dtur||[]).concat([t]);save();fillTur(t)}else fillTur(t||undefined)}
};
var LOGO_SVG="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><defs><linearGradient id=\"tqg\" gradientUnits=\"userSpaceOnUse\" x1=\"8\" y1=\"56\" x2=\"56\" y2=\"8\"><stop offset=\"0\" stop-color=\"#00d4ff\"/><stop offset=\".55\" stop-color=\"#5b6bff\"/><stop offset=\"1\" stop-color=\"#b026ff\"/></linearGradient><filter id=\"tqf\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\"><feGaussianBlur stdDeviation=\"1.6\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" rx=\"15\" fill=\"#0a0e27\"/><rect x=\"2.75\" y=\"2.75\" width=\"58.5\" height=\"58.5\" rx=\"14.5\" fill=\"none\" stroke=\"url(#tqg)\" stroke-opacity=\".55\" stroke-width=\"1.5\"/><g transform=\"translate(1.5 0)\"><circle cx=\"35\" cy=\"18\" r=\"5.4\" fill=\"url(#tqg)\"/><circle cx=\"37\" cy=\"16.6\" r=\"4.4\" fill=\"#0a0e27\"/></g><g transform=\"translate(1.5 0)\" fill=\"none\" stroke=\"url(#tqg)\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" filter=\"url(#tqf)\"><path d=\"M12 13H30M21 13V51M21 32 35 18M21 32 35 46\"/><path d=\"M35 18A14 14 0 0 1 35 46\"/></g><g transform=\"translate(1.5 0)\" stroke=\"url(#tqg)\" stroke-width=\"2.2\"><circle cx=\"35\" cy=\"46\" r=\"3.4\" fill=\"#0a0e27\"/><circle cx=\"21\" cy=\"51\" r=\"3.4\" fill=\"url(#tqg)\"/></g><g transform=\"translate(1.5 0)\"></g></svg>";
var CF="all";
var PF={
 all:function(){return true},
 onayBek:function(r){return r.durum==="Onay"&&!r.tah&&!r.tahf},
 tahsil:function(r){return!!r.tah||!!r.tahf},
 cevapBek:function(r){return ekAktif(r)},
 basvYok:function(r){return sbaAktif(r)}
};
var PFN={all:"Tüm Dosyalar",onayBek:"Onaylanan, Tahsil Bekleyen",tahsil:"Tahsil Edilen",cevapBek:"Cevap Bekleyen Eksiklik",basvYok:"Başvuru Yapılmamış Dosya"};
DURUM.forEach(function(d){PF["st:"+d]=function(r){return(r.durum||"Taslak")===d};PFN["st:"+d]=d});
function setCF(k){CF=(CF===k)?"all":k;render();var t=$("kayit");if(t&&CF!=="all")t.scrollIntoView({behavior:"smooth"})}

/* ---- Tema / Ayarlar ---- */
var PAL={
 mv:{n:"Mavi-Mor (varsayılan)",s:["#1b8cf0","#6a3df0"]},
 tk:{n:"Turkuaz",s:["#0e9bb0","#0b7c8a"],l:["#0b7c8a","#0e9bb0","#0e9bb0","#0b7c8a","#0a5f70","#ffffff","#e8f5f7","#ffffff","#eff9fa","#c6e3e8","rgba(14,155,176,.18)","rgba(11,124,138,.12)"],d:["#5fd8e8","#18b6cc","#5fe3f2","#2cc3d8","#18a0b5","#06161a","#061a1e","#0b2429","#0f2c32","#1c4a52","rgba(24,182,204,.24)","rgba(44,195,216,.12)"]},
 ye:{n:"Yeşil",s:["#2a9d62","#1e7a4a"],l:["#1e7a4a","#2a9d62","#2a9d62","#1e7a4a","#17603a","#ffffff","#ecf7ef","#ffffff","#f1faf3","#cde6d5","rgba(42,157,98,.18)","rgba(30,122,74,.12)"],d:["#6fdca0","#2fb872","#74e6aa","#35c27a","#27a063","#06140d","#07170f","#0d2218","#112a1e","#1f4a35","rgba(47,184,114,.24)","rgba(53,194,122,.12)"]},
 tu:{n:"Turuncu",s:["#e07a1f","#c4620f"],l:["#b4570a","#e07a1f","#e07a1f","#c4620f","#a14d08","#ffffff","#fcf1e6","#ffffff","#fef6ee","#efd7bd","rgba(224,122,31,.18)","rgba(196,98,15,.12)"],d:["#ffb36b","#f0903a","#ffbd7e","#f59a4a","#e0802a","#1a0d03","#1a0f06","#26170b","#2e1c0e","#523520","rgba(240,144,58,.24)","rgba(245,154,74,.12)"]},
 kr:{n:"Kırmızı",s:["#d93a4a","#b3261e"],l:["#b3261e","#d93a4a","#d93a4a","#b3261e","#8f1f2d","#ffffff","#fceced","#ffffff","#fef2f3","#efcbce","rgba(217,58,74,.17)","rgba(179,38,30,.12)"],d:["#ff9a96","#ee5566","#ffa5a8","#f26a74","#e04a5a","#1a0709","#1c080b","#2a1015","#33151a","#58262e","rgba(238,85,102,.24)","rgba(242,106,116,.12)"]},
 an:{n:"Antrasit",s:["#56657f","#3d4a63"],l:["#3d4a63","#56657f","#56657f","#3d4a63","#2c3650","#ffffff","#eaecf2","#ffffff","#f1f3f7","#d1d7e2","rgba(86,101,127,.16)","rgba(61,74,99,.12)"],d:["#c3cbe0","#7d8aa8","#d0d6e8","#8d99b5","#6f7c9a","#0b1020","#0e1118","#161a24","#1b2030","#2e3447","rgba(125,138,168,.2)","rgba(141,153,181,.1)"]}
};
function themeGet(){try{return JSON.parse(localStorage.getItem("tq-theme")||"null")||{mode:"auto",pal:"mv"}}catch(e){return{mode:"auto",pal:"mv"}}}
function themeSet(t){try{localStorage.setItem("tq-theme",JSON.stringify(t))}catch(e){}}
function applyTheme(){
 var t=themeGet(),r=document.documentElement;
 if(t.mode==="auto")r.removeAttribute("data-theme");else r.setAttribute("data-theme",t.mode);
 var dark=t.mode==="dark"||(t.mode==="auto"&&!!window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);
 var p=PAL[t.pal]||PAL.mv,c=p.l?(dark?p.d:p.l):null;
 ["--accent","--accent2","--n1","--n2","--n3","--btn-ink","--bg","--surface","--surface2","--line","--glow1","--glow2"].forEach(function(n,i){if(c)r.style.setProperty(n,c[i]);else r.style.removeProperty(n)});
}
function setPal(k){var t=themeGet();t.pal=k;themeSet(t);applyTheme();renderSettings()}
function setMode(m){var t=themeGet();t.mode=m;themeSet(t);applyTheme();renderSettings()}
function renderSettings(){
 var t=themeGet(),v=window.TQ_VER||"web";
 $("th-mode").value=t.mode;
 $("th-pals").innerHTML=Object.keys(PAL).map(function(k){var p=PAL[k];return'<button class="pal'+(t.pal===k?" on":"")+'" onclick="setPal(\''+k+'\')"><i style="background:linear-gradient(135deg,'+p.s[0]+','+p.s[1]+')"></i>'+p.n+'</button>'}).join("");
 $("ver2").textContent="Sürüm "+v;$("ver3").textContent=v;
 if(typeof renderBackup==="function")renderBackup();
 $("plat").textContent=window.electronAPI?"Windows masaüstü":isNativeApp()?"Android":"Web tarayıcısı";
}
applyTheme();
try{if(window.matchMedia)matchMedia("(prefers-color-scheme: dark)").addEventListener("change",applyTheme)}catch(e){}

/* ---- Sütun sürükleme (fare ve dokunmatik) ---- */
var PD=null,DRAGGED=false;
function colOrder(){
 var o=(db.corder||[]).filter(function(k){return C.some(function(c){return c.k===k&&!c.hid&&c.t!=="h"})});
 C.forEach(function(c){if(!c.hid&&c.t!=="h"&&o.indexOf(c.k)<0)o.push(c.k)});
 return o;
}
var HPC=[{k:"bas",l:"Başvuru Tarihi",t:"d"},{k:"barkod",l:"Barkod No"},{k:"firma",l:"Firma Unvanı"},{k:"vergi",l:"Vergi Numarası"},{k:"marka",l:"Marka Adı"},{k:"ulke",l:"Ülke",u:1}];
function hpOrder(){
 var ks=HPC.map(function(c){return c.k}),o=(db.hporder||[]).filter(function(k){return ks.indexOf(k)>-1});
 ks.forEach(function(k){if(o.indexOf(k)<0)o.push(k)});
 return o;
}
function thDown(e,tbl,k){
 if(e.button>0)return;
 e.preventDefault();e.stopPropagation();
 PD={tbl:tbl,k:k,x:e.clientX,moved:false};
 document.addEventListener("pointermove",thMove);
 document.addEventListener("pointerup",thUp,{once:true});
 document.addEventListener("pointercancel",thUp,{once:true});
}
function thAt(e){var el=document.elementFromPoint(e.clientX,e.clientY);return el&&el.closest?el.closest("th[data-k]"):null}
function clearDrop(){Array.prototype.forEach.call(document.querySelectorAll("th.dropt"),function(x){x.classList.remove("dropt")})}
function thMove(e){
 if(!PD)return;
 if(Math.abs(e.clientX-PD.x)>6)PD.moved=true;
 clearDrop();var t=thAt(e);if(t&&t.dataset.tbl===PD.tbl)t.classList.add("dropt");
}
function thUp(e){
 document.removeEventListener("pointermove",thMove);clearDrop();
 var t=thAt(e),p=PD;PD=null;
 if(p&&p.moved){
  DRAGGED=true;setTimeout(function(){DRAGGED=false},0);
  if(t&&t.dataset.tbl===p.tbl&&t.dataset.k!==p.k)moveColT(p.tbl,p.k,t.dataset.k);
 }
}
function moveColT(tbl,a,b){
 var o=tbl==="hp"?hpOrder():colOrder();
 o.splice(o.indexOf(a),1);o.splice(o.indexOf(b),0,a);
 if(tbl==="hp")db.hporder=o;else db.corder=o;
 save();if(tbl==="hp")renderHP();else render();
}
function thH(tbl,k,l,sortFn,st){
 return'<th class="sortable" data-tbl="'+tbl+'" data-k="'+k+'" onclick="if(DRAGGED)return;'+sortFn+'(\''+k+'\')"><span class="grip" onpointerdown="thDown(event,\''+tbl+'\',\''+k+'\')" title="Sürükleyerek yerini değiştirin">⋮⋮</span> '+l+(st.k===k?(st.d>0?" ▲":" ▼"):"")+"</th>";
}

/* ---- Hedef Pazar ---- */
var hpEdit=null,HSORT={k:"bas",d:1};
function hpFields(p){return HPC.map(function(c){return'<label>'+c.l+'<input id="'+p+c.k+'"'+(c.t==="d"?' type="date"':"")+(c.u?' list="ulkeList" placeholder="Ülke seçin veya yazın" autocomplete="off"':"")+"></label>"}).join("")}
function hpSort(k){if(HSORT.k===k)HSORT.d=-HSORT.d;else{HSORT.k=k;HSORT.d=1}renderHP()}
function hpRead(p){var r={};HPC.forEach(function(c){r[c.k]=$(p+c.k).value.trim()});return r}
function hpValid(r){
 if(!r.barkod&&!r.firma)return"Barkod No veya Firma Unvanı girin.";
 if(r.vergi&&!/^\d{10,11}$/.test(r.vergi))return"Vergi numarası 10 veya 11 haneli rakamlardan oluşmalı.";
 return"";
}
function hpAdd(){
 var r=hpRead("hn-"),e=hpValid(r);if(e){alert(e);return}
 r.id=Date.now();r.u=r.id;if(!db.hp)db.hp=[];db.hp.push(r);
 HPC.forEach(function(c){$("hn-"+c.k).value=""});
 save();renderHP();
}
function hpEditOpen(id){
 var r=(db.hp||[]).filter(function(x){return x.id===id})[0];if(!r)return;
 hpEdit=id;HPC.forEach(function(c){$("he-"+c.k).value=r[c.k]||""});$("hpov").style.display="flex";
}
function hpSave(){
 var r=hpRead("he-"),e=hpValid(r);if(e){alert(e);return}
 var o=(db.hp||[]).filter(function(x){return x.id===hpEdit})[0];
 if(o){HPC.forEach(function(c){o[c.k]=r[c.k]});o.u=Date.now()}
 hpEdit=null;$("hpov").style.display="none";save();renderHP();
}
function hpDel(id){
 if(!confirm("Bu kayıt silinsin mi?"))return;
 db.hp=(db.hp||[]).filter(function(x){return x.id!==id});
 if(!db.hdel)db.hdel={};db.hdel[id]=Date.now();save();renderHP();
}
function renderHP(){
 var cols=hpOrder().map(function(k){return HPC.filter(function(c){return c.k===k})[0]}),q=($("hp-ara").value||"").toLowerCase();
 $("hp-th").innerHTML="<tr>"+cols.map(function(c){return thH("hp",c.k,c.l,"hpSort",HSORT)}).join("")+"<th></th></tr>";
 var list=(db.hp||[]).filter(function(r){return!q||JSON.stringify(r).toLowerCase().indexOf(q)>-1}).slice();
 list.sort(function(a,b){
  var x=a[HSORT.k]||(HSORT.k==="bas"?"9999-99-99":""),y=b[HSORT.k]||(HSORT.k==="bas"?"9999-99-99":"");
  return String(x).localeCompare(String(y),"tr")*HSORT.d;
 });
 $("hp-tb").innerHTML=list.length?list.map(function(r){
  return"<tr>"+cols.map(function(c){return'<td class="'+(c.k==="bas"?"":"wrap")+'">'+(c.t==="d"?(r[c.k]?df(r[c.k]):'<span class="miss">Girilmemiş</span>'):esc(r[c.k]))+"</td>"}).join("")+'<td><button class="s" onclick="hpEditOpen('+r.id+')">Düzenle</button> <button class="s d" onclick="hpDel('+r.id+')">Sil</button></td></tr>';
 }).join(""):'<tr><td colspan="'+(cols.length+1)+'">'+emptyBox("Hedef Pazar kaydı yok","Yukarıdaki bölümden ilk kaydı ekleyin.")+"</td></tr>";
}
function wireHP(){
 $("hpform-new").innerHTML=hpFields("hn-");$("hpform-edit").innerHTML=hpFields("he-");
 $("hp-ekle").onclick=hpAdd;$("hp-kaydet").onclick=hpSave;
 $("hp-iptal").onclick=function(){hpEdit=null;$("hpov").style.display="none"};
 $("hp-ara").oninput=renderHP;
}
function compressImg(f){
 return new Promise(function(res){
  try{
   if(!/^image\/(jpeg|png|webp)/.test(f.type)||f.size<700*1024){res(f);return}
   var im=new Image(),u=URL.createObjectURL(f);
   im.onload=function(){
    var s=Math.min(1,2000/Math.max(im.width,im.height)),cv=document.createElement("canvas");
    cv.width=Math.round(im.width*s);cv.height=Math.round(im.height*s);
    cv.getContext("2d").drawImage(im,0,0,cv.width,cv.height);
    cv.toBlob(function(b){URL.revokeObjectURL(u);if(b&&b.size<f.size)res(new File([b],f.name.replace(/\.\w+$/,"")+".jpg",{type:"image/jpeg"}));else res(f)},"image/jpeg",0.82);
   };
   im.onerror=function(){URL.revokeObjectURL(u);res(f)};
   im.src=u;
  }catch(e){res(f)}
 });
}
var APPT=["b","marka","istihdam","fuar"];
function setTab(t){
 tab=t;var app=APPT.indexOf(t)>-1,g=!!GR0[t];
 ["sum","sum2","uyari","formbox","kayit"].forEach(function(i){var e=$(i);if(e)e.style.display=app?"":"none"});
 $("excel").style.display=t==="b"?"":"none";
 $("kayit").querySelector("h2").textContent=g?GN[t]+" Başvuruları":"Kayıtlar";
 $("evrakbox").style.display=(app&&evRow!=null)?"block":"none";
 $("havuz").style.display=t==="h"?"block":"none";
 $("notlar").style.display=t==="n"?"block":"none";
 $("bild").style.display=t==="bi"?"block":"none";
 $("rapor").style.display=t==="r"?"block":"none";
 $("ayar").style.display=t==="s"?"block":"none";
 $("hp").style.display=t==="hp"?"block":"none";
 [["tb1","b"],["tbm","marka"],["tbi","istihdam"],["tbf","fuar"],["tbh","hp"],["tb2","h"],["tbn","n"],["tbb","bi"],["tbr","r"],["tbs","s"]].forEach(function(p){$(p[0]).classList.toggle("on",t===p[1])});
 if(app){var cv=$("f-adt").value;fillMenu("adt",cv==="__new"?"":cv);render()}
 if(t==="h"){fillTur();renderHavuz()}
 if(t==="n")renderNotes();
 if(t==="bi")renderBild();
 if(t==="r")renderRapor();
 if(t==="s")renderSettings();
 if(t==="hp")renderHP();
}

/* ---- Notlar ---- */
/* ---- Bildirimler (gerçek kayıtlardan üretilir, kalıcıdır) ---- */
var BK={sba:"Son başvuru süresi",ebs:"Eksiklik tamamlama süresi",onay:"Onay – tahsilat bekleniyor"};
function bktOf(d){return d<0?-1:d<=0?0:d<=1?1:d<=3?3:d<=7?7:15}
function bildOpen(){
 var act={};
 db.rows.forEach(function(r){
  calc(r);
  if(sbaAktif(r)&&r.sba)act[r.id+"|sba|"+r.sba]=1;
  if(ekAktif(r)&&r.ebs)act[r.id+"|ebs|"+r.ebs]=1;
  if(r.durum==="Onay"&&!r.tah&&!r.tahf)act[r.id+"|onay|"+(r.onay||"-")]=1;
 });
 return act;
}
function bildKey(n){return n.rid+"|"+n.kind+"|"+(n.dt||"-")}
function bildAktif(n,act){return bildKey(n) in (act||bildOpen())}
function bildTxt(r,kind,d){
 var bk=r.barkod||"Barkodsuz",pj=r.proje||r.dt||"dosya";
 if(kind==="onay")return bk+" numaralı "+pj+" dosyası onaylandı, tahsilat bekleniyor.";
 var tur=kind==="sba"?"başvuru":"eksiklik tamamlama";
 return bk+" numaralı "+pj+" dosyasının "+tur+" süresi"+(d>0?"nin dolmasına "+d+" gün kaldı.":d===0?" bugün doluyor.":" "+(-d)+" gün önce doldu.");
}
function updBadge(act){
 act=act||bildOpen();
 var c=(db.bild||[]).filter(function(n){return!n.read&&bildAktif(n,act)}).length,b=$("bdg");
 if(!b)return;
 b.textContent=c>99?"99+":String(c);b.style.display=c>0?"":"none";
}
function syncBild(){
 if(!db.bild)db.bild=[];
 var act=bildOpen(),map={},ch=false,now=Date.now();
 db.bild.forEach(function(n){map[n.id]=n});
 function add(r,kind,dt,d,id){
  if(map[id])return;
  db.bild.forEach(function(o){if(o.rid===r.id&&o.kind===kind&&o.dt===dt&&!o.read){o.read=true;o.u=now}});
  var n={id:id,rid:r.id,kind:kind,dt:dt,ts:now,txt:bildTxt(r,kind,d),read:false,u:now};
  db.bild.push(n);map[id]=n;ch=true;
 }
 db.rows.forEach(function(r){
  if(sbaAktif(r)&&r.sba){var d=days(r.sba);if(d<=15)add(r,"sba",r.sba,d,r.id+"|sba|"+r.sba+"|"+bktOf(d))}
  if(ekAktif(r)&&r.ebs){var e=days(r.ebs);if(e<=15)add(r,"ebs",r.ebs,e,r.id+"|ebs|"+r.ebs+"|"+bktOf(e))}
  if(r.durum==="Onay"&&!r.tah&&!r.tahf)add(r,"onay",r.onay||"-",0,r.id+"|onay|"+(r.onay||"-"));
 });
 var keep=db.bild.filter(function(n){return!(n.read&&!bildAktif(n,act)&&n.ts<now-90*864e5)});
 if(keep.length!==db.bild.length){db.bild=keep;ch=true}
 if(ch)save();
 updBadge(act);
}
function renderBild(){
 syncBild();
 var act=bildOpen(),f=$("b-filtre").value||"all";
 var list=db.bild.slice().sort(function(a,b){return b.ts-a.ts}).filter(function(n){return f!=="unread"||(!n.read&&bildAktif(n,act))});
 $("b-list").innerHTML=list.length?list.map(function(n){
  var r=db.rows.filter(function(x){return x.id===n.rid})[0],akt=bildAktif(n,act),dt=new Date(n.ts);
  var ds=dt.toLocaleDateString("tr-TR")+" "+dt.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});
  var un=!n.read&&akt;
  return'<div class="bn'+(un?" un":"")+(akt?"":" done")+'" onclick="readB(\''+n.id+'\')"><div class="bt"><b>'+esc(BK[n.kind]||"Bildirim")+'</b>'+(un?'<span class="dotb"></span>':"")+'<small>'+ds+(akt?"":" – Tamamlandı")+'</small></div><div>'+esc(n.txt)+'</div>'+(r?'<div class="row" style="margin-top:8px"><button class="s" onclick="event.stopPropagation();goBild(\''+n.id+'\')">Dosyaya git</button></div>':"")+'</div>';
 }).join(""):emptyBox("Bildirim yok","Süresi yaklaşan veya işlem bekleyen bir dosya olduğunda burada görünür.");
}
function bildFind(id){return(db.bild||[]).filter(function(x){return x.id===id})[0]}
function readB(id){var n=bildFind(id);if(n&&!n.read){n.read=true;n.u=Date.now();save();renderBild();updBadge()}}
function goBild(id){var n=bildFind(id);if(!n)return;if(!n.read){n.read=true;n.u=Date.now();save()}updBadge();setTab("b");openEv(n.rid)}
function readAll(){var now=Date.now();(db.bild||[]).forEach(function(n){if(!n.read){n.read=true;n.u=now}});save();renderBild();updBadge()}

/* ---- Ana tabloda sıralama ---- */
var SORT={k:"bas",d:1};
function sortBy(k){if(SORT.k===k)SORT.d=-SORT.d;else{SORT.k=k;SORT.d=1}render()}
function sortVal(r,k){if(k==="ekal")return r.ebs||"";if(k==="bas")return r.bas||"9999-99-99";var v=r[k];return v==null?"":v}
function sortList(list){
 if(!SORT.k||SORT.k==="no")return list;
 list.sort(function(a,b){
  var x=sortVal(a.r,SORT.k),y=sortVal(b.r,SORT.k);
  if(typeof x==="number"&&typeof y==="number")return(x-y)*SORT.d;
  return String(x).localeCompare(String(y),"tr")*SORT.d;
 });
 list.forEach(function(o,j){o.i=j});
 return list;
}

var nEdit=null;
function noteOpts(){var o='<option value="">(Genel not)</option>';db.rows.forEach(function(r){o+='<option value="'+r.id+'">'+esc((r.barkod||"Barkodsuz")+" – "+(r.firma||"Firma yok")+" – "+(r.proje||""))+'</option>'});return o}
function renderNotes(){
 var sel=$("n-dosya"),cur=sel.value,fl=$("n-filtre"),fc=fl.value,o=noteOpts();
 sel.innerHTML=o;sel.value=cur;
 fl.innerHTML='<option value="">Tüm notlar</option>'+o.replace('<option value="">(Genel not)</option>','<option value="g">Genel notlar</option>');fl.value=fc;
 var q=($("n-ara").value||"").toLowerCase(),f=fl.value;
 var list=(db.notes||[]).slice().sort(function(a,b){return b.id-a.id}).filter(function(n){
  if(f==="g"&&n.rid)return false;
  if(f&&f!=="g"&&String(n.rid)!==f)return false;
  var r=db.rows.filter(function(x){return x.id===n.rid})[0]||{};
  return!q||[n.t,r.barkod,r.firma,r.proje].join(" ").toLowerCase().indexOf(q)>-1;
 });
 $("n-list").innerHTML=list.length?list.map(function(n){
  var r=db.rows.filter(function(x){return x.id===n.rid})[0];
  var dt=new Date(n.id),ds=dt.toLocaleDateString("tr-TR")+" "+dt.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});
  return'<div class="nt"><div class="nh"><small>'+ds+(r?' – <a href="#" onclick="openEv('+r.id+');return false">'+esc((r.barkod||"Barkodsuz")+" – "+(r.firma||""))+'</a>':' – Genel not')+'</small><span><button class="s" onclick="editNote('+n.id+')">Düzenle</button> <button class="s d" onclick="delNote('+n.id+')">Sil</button></span></div><div class="nb">'+esc(n.t)+'</div></div>';
 }).join(""):''+emptyBox("Henüz not yok","Yukarıdan ilk notunuzu ekleyin.")+'';
}
function addNote(){
 var t=($("n-text").value||"").trim();if(!t)return;
 var rid=$("n-dosya").value?Number($("n-dosya").value):null;
 if(!db.notes)db.notes=[];
 if(nEdit){var n=db.notes.filter(function(x){return x.id===nEdit})[0];if(n){n.t=t;n.rid=rid;n.u=Date.now()}}
 else db.notes.push({id:Date.now(),t:t,rid:rid,u:Date.now()});
 nEdit=null;$("n-text").value="";$("n-ekle").textContent="Notu Kaydet";$("n-iptal").style.display="none";
 save();renderNotes();
}
function editNote(id){
 var n=(db.notes||[]).filter(function(x){return x.id===id})[0];if(!n)return;
 nEdit=id;$("n-text").value=n.t;$("n-dosya").value=n.rid==null?"":n.rid;
 $("n-ekle").textContent="Güncelle";$("n-iptal").style.display="";$("n-text").focus();
}
function delNote(id){
 if(!confirm("Bu not silinsin mi?"))return;
 db.notes=(db.notes||[]).filter(function(x){return x.id!==id});
 if(!db.ndel)db.ndel={};db.ndel[id]=Date.now();
 save();renderNotes();
}

/* ---- Raporlar ---- */
function nf2(v){return(v||0).toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})}
function dayTone(g){return g<0?"red":g<=15?"orange":"green"}
function dayTxt(g){return g<0?Math.abs(g)+" gün geçti":g===0?"Bugün son gün":g+" gün kaldı"}
function dateInfo(r){
 var g;
 if(sbaAktif(r)){
  if(!r.sba)return{lbl:"Son başvuru",date:"",miss:"ödeme tarihi girilmemiş",tone:"gray",txt:"Tarih yok"};
  g=days(r.sba);return{lbl:"Son başvuru",date:r.sba,tone:dayTone(g),txt:dayTxt(g)};
 }
 if(ekAktif(r)){
  if(!r.ebs)return{lbl:"Eksiklik son günü",date:"",miss:"eksiklik bildirim tarihi girilmemiş",tone:"gray",txt:"Tarih yok"};
  g=days(r.ebs);return{lbl:"Eksiklik son günü",date:r.ebs,tone:dayTone(g),txt:dayTxt(g)};
 }
 var ev=[["Tahsilat",r.tah],["Onay",r.onay],["Eksiklik cevabı",r.ebd],["Eksiklik bildirimi",r.ebt],["Başvuru",r.bas]].filter(function(x){return x[1]}).sort(function(a,b){return a[1]<b[1]?1:-1});
 if(!ev.length)return{lbl:"Son işlem",date:"",miss:"işlem tarihi girilmemiş",tone:"gray",txt:"Süre takibi yok"};
 return{lbl:"Son işlem ("+ev[0][0]+")",date:ev[0][1],tone:"none",txt:"Süre takibi yok"};
}
function grpOf(r){return["marka","istihdam","fuar"].filter(function(g){return inGrp(g,r.adt)}).map(function(g){return GN[g]}).join(", ")}
function lastOp(r){
 var ev=[["Tahsilat",r.tah],["Onay",r.onay],["Eksiklik cevabı",r.ebd],["Eksiklik bildirimi",r.ebt],["Başvuru",r.bas]].filter(function(x){return x[1]}).sort(function(a,b){return a[1]<b[1]?1:-1});
 return ev[0]||null;
}
var RDEF=["bas","barkod","dt","proje","firma","otl","oran","dest","son","islem","kalan"];
var RALL=[
 {k:"bas",h:"Başvuru Tarihi",w:1.4,f:function(r){return r.bas||""},t:function(r){return r.bas?df(r.bas):(sbaAktif(r)?"Henüz başvurulmadı":"Girilmemiş")},m:function(r){return!r.bas&&!sbaAktif(r)}},
 {k:"barkod",h:"Barkod No",w:1.2,f:function(r){return r.barkod||""}},
 {k:"dt",h:"Destek Türü",w:1.3,f:function(r){return r.dt||""}},
 {k:"proje",h:"Dosya Proje Konusu",w:2.5,f:function(r){return r.proje||""}},
 {k:"firma",h:"Hizmet Alınan Firma",w:2.3,f:function(r){return r.firma||""}},
 {k:"otl",h:"Ödeme Tutarı (TL)",w:1.5,n:1,sum:1,f:function(r){return r.otl||0}},
 {k:"oran",h:"Destek Oranı",w:1,n:1,f:function(r){return num(r.oran)},t:function(r){return r.oran===""||r.oran==null?"":"%"+nf(r.oran)}},
 {k:"dest",h:"Desteklenecek Tutar (TL)",w:1.7,n:1,sum:1,f:function(r){return r.dest||0}},
 {k:"son",h:"Son Gün / İşlem Tarihi",w:2.4,f:function(r){return dateInfo(r).date},t:function(r){var i=dateInfo(r);return i.lbl+": "+(i.date?df(i.date):i.miss)},m:function(r){return!dateInfo(r).date},tn:function(r){return dateInfo(r).tone}},
 {k:"islem",h:"İşlem Tarihi",w:1.9,f:function(r){var o=lastOp(r);return o?o[1]:""},t:function(r){var o=lastOp(r);return o?df(o[1])+" ("+o[0]+")":"Girilmemiş"},m:function(r){return!lastOp(r)}},
 {k:"kalan",h:"Süre Durumu",w:1.4,badge:1,f:function(r){return dateInfo(r).txt},tn:function(r){return dateInfo(r).tone}},
 {k:"fno",h:"Fatura No",w:1.3,f:function(r){return r.fno||""}},
 {k:"kdvd",h:"KDV Dahil Tutar (Fatura Toplamı)",w:1.7,n:1,f:function(r){return r.kdvd||0},t:function(r){return nf2(r.kdvd)+((r.fdov&&!isTL(r.fdov))?" "+r.fdov:"")}},
 {k:"kdvo",h:"KDV Oranı",w:1,f:function(r){return r.kdvo||""},t:function(r){return r.kdvo==="0"?"KDV Yok":r.kdvo==="x"?"%"+(r.kdvx||"?")+" (özel)":(r.kdvo?"%"+r.kdvo:"")}},
 {k:"ftl",h:"Fatura TL Karşılığı",w:1.6,n:1,f:function(r){return r.ftl||0}},
 {k:"dbase",h:"Destek Matrahı (TL, KDV Hariç)",w:1.7,n:1,f:function(r){return r.dbase||0}},
 {k:"kurb",h:"Kur Bilgisi",w:2.2,f:function(r){return r.kur||""},t:function(r){return!r.kur?"":nf(r.kur)+" – "+(r.kurm==="manual"?"elle girildi":r.kurt?"TCMB, "+df(r.kurt):"")}},
 {k:"durum",h:"Aşama Detay",w:1.4,f:function(r){return r.durum||""}},
 {k:"adt",h:"Alt Destek Türü",w:2.4,f:function(r){return r.adt||""}},
 {k:"grup",h:"Grup",w:1,f:grpOf}
];
C.forEach(function(c){
 if(c.hid||c.t==="h"||c.k==="no"||c.k==="ekal"||RALL.some(function(x){return x.k===c.k}))return;
 var isn=c.t==="n"||c.t==="o"||c.t==="p",isd=c.t==="d"||c.k==="sba"||c.k==="ebs";
 RALL.push({k:c.k,h:c.l,w:1.4,n:isn?1:0,f:isn?function(r){return num(r[c.k])}:function(r){return r[c.k]==null?"":r[c.k]},t:isd?function(r){return r[c.k]?df(r[c.k]):""}:undefined});
});
function rcText(c,r){var v=c.t?c.t(r):(c.n?nf2(c.f(r)):c.f(r));return v==null?"":String(v)}
function toneCls(t){return t==="red"?"late":t==="orange"?"soon":t==="green"?"okc":""}
function emptyBox(t,s){return'<div class="emptyc"><b>'+t+'</b><p>'+s+'</p></div>'}

var RSEL={k:["st:Onay"],g:[]};
function repToggle(t,v,on){var a=RSEL[t],i=a.indexOf(v);if(on&&i<0)a.push(v);if(!on&&i>-1)a.splice(i,1);renderRapor()}
function repRows(){
 var ks=RSEL.k.length?RSEL.k:["all"],gs=RSEL.g;
 db.rows.forEach(calc);
 return db.rows.filter(function(r){return ks.some(function(k){return PF[k](r)})&&(!gs.length||gs.some(function(g){return inGrp(g,r.adt)}))}).sort(function(a,b){var x=a.bas||"9999-99-99",y=b.bas||"9999-99-99";return x<y?-1:x>y?1:String(a.barkod||"")<String(b.barkod||"")?-1:1});
}
function repTitle(){var ks=RSEL.k.length?RSEL.k:["all"];return ks.map(function(k){return PFN[k]}).join(" + ")+" Raporu"+(RSEL.g.length?" – "+RSEL.g.map(function(g){return GN[g]}).join(", "):"")}
function repTotals(rows){var o=0,d=0;rows.forEach(function(r){o+=r.otl||0;d+=r.dest||0});return{o:o,d:d}}
function repFile(ext){
 var m={"ç":"c","ğ":"g","ı":"i","ö":"o","ş":"s","ü":"u","Ç":"C","Ğ":"G","İ":"I","Ö":"O","Ş":"S","Ü":"U"};
 var s=repTitle().replace(/[çğıöşüÇĞİÖŞÜ]/g,function(c){return m[c]}).replace(/[^A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,80);
 return s+"-"+new Date().toISOString().slice(0,10)+"."+ext;
}

/* Sütun yönetimi (kalıcı, db içinde saklanır) */
function rcolState(){
 var st=db.rcols2||{},ks=RALL.map(function(x){return x.k});
 var order=(st.order||RDEF.concat(ks.filter(function(k){return RDEF.indexOf(k)<0}))).filter(function(k){return ks.indexOf(k)>-1});
 ks.forEach(function(k){if(order.indexOf(k)<0)order.push(k)});
 var vis={};ks.forEach(function(k){vis[k]=(st.vis&&k in st.vis)?!!st.vis[k]:RDEF.indexOf(k)>-1});
 return{order:order,vis:vis};
}
function repCols(){var s=rcolState();return s.order.filter(function(k){return s.vis[k]}).map(function(k){return RALL.filter(function(c){return c.k===k})[0]})}
function rcolSet(s){db.rcols2=s;save();renderRapor()}
function colVis(k,on){var s=rcolState();s.vis[k]=on;if(!s.order.some(function(x){return s.vis[x]})){renderRapor();return}rcolSet(s)}
function colMove(k,dir){var s=rcolState(),i=s.order.indexOf(k),j=i+dir;if(j<0||j>=s.order.length)return;s.order.splice(i,1);s.order.splice(j,0,k);rcolSet(s)}
var dragK=null;
function cDrag(k){dragK=k}
function cDrop(k){if(!dragK||dragK===k)return;var s=rcolState();s.order.splice(s.order.indexOf(dragK),1);s.order.splice(s.order.indexOf(k),0,dragK);dragK=null;rcolSet(s)}
function colReset(){rcolSet(null)}
function colToggleBox(){var b=$("r-colbox");b.style.display=b.style.display==="none"?"":"none"}

function repCell(c,r){
 var txt=esc(rcText(c,r));
 if(c.badge){var tn=c.tn(r);return'<td><span class="st'+({red:" st-red",orange:" st-warn",green:" st-ok"}[tn]||"")+'">'+txt+"</span></td>"}
 var cl=(c.n?"n":"wrap")+(c.m&&c.m(r)?" miss":"")+(c.tn&&toneCls(c.tn(r))?" "+toneCls(c.tn(r)):"");
 return'<td class="'+cl+'">'+txt+"</td>";
}
function repTotRow(RC,rows){
 return"<tr>"+RC.map(function(c,i){
  if(c.sum){var s=0;rows.forEach(function(r){s+=c.f(r)||0});return'<td class="n"><b>'+nf2(s)+"</b></td>"}
  return"<td>"+(i===0?"<b>TOPLAM</b>":"")+"</td>";
 }).join("")+"</tr>";
}
function renderRapor(){
 var ks=["all","tahsil","onayBek","cevapBek","basvYok"].concat(DURUM.map(function(d){return"st:"+d})),st=rcolState();
 $("r-liste").innerHTML=ks.map(function(k){return'<label><input type="checkbox" '+(RSEL.k.indexOf(k)>-1?"checked ":"")+'onchange="repToggle(\'k\',\''+k+'\',this.checked)">'+PFN[k]+'</label>'}).join("");
 $("r-grup").innerHTML=["marka","istihdam","fuar"].map(function(g){return'<label><input type="checkbox" '+(RSEL.g.indexOf(g)>-1?"checked ":"")+'onchange="repToggle(\'g\',\''+g+'\',this.checked)">'+GN[g]+'</label>'}).join("");
 $("r-collist").innerHTML=st.order.map(function(k){
  var c=RALL.filter(function(x){return x.k===k})[0];
  return'<li draggable="true" ondragstart="cDrag(\''+k+'\')" ondragover="event.preventDefault()" ondrop="cDrop(\''+k+'\')"><span class="grip">⋮⋮</span><label><input type="checkbox" '+(st.vis[k]?"checked ":"")+'onchange="colVis(\''+k+'\',this.checked)">'+c.h+'</label><span><button class="s" onclick="colMove(\''+k+'\',-1)" aria-label="Yukarı">▲</button><button class="s" onclick="colMove(\''+k+'\',1)" aria-label="Aşağı">▼</button></span></li>';
 }).join("");
 var RC=repCols(),rows=repRows(),t=repTotals(rows);
 $("r-sub").textContent=rows.length+" dosya – Ödeme toplamı: "+tl(t.o)+" – Desteklenecek toplam: "+tl(t.d);
 $("r-th").innerHTML="<tr>"+RC.map(function(c){return'<th'+(c.n?' class="n"':"")+">"+c.h+"</th>"}).join("")+"</tr>";
 $("r-tb").innerHTML=rows.length?rows.map(function(r){return"<tr>"+RC.map(function(c){return repCell(c,r)}).join("")+"</tr>"}).join("")+repTotRow(RC,rows):'<tr><td colspan="'+RC.length+'">'+emptyBox("Bu listede dosya yok","Yukarıdan farklı bir dosya listesi veya grup seçmeyi deneyin.")+"</td></tr>";
}
function isNativeApp(){return !!(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform())}
function repHTML(rows,t){
 var RC=repCols();
 var h='<div class="pa-head">'+LOGO_SVG.replace('width="64" height="64"','width="48" height="48"')+'<div><div style="font-size:20px;font-weight:700">'+esc(repTitle())+'</div><div style="font-size:12px;color:#555">TurqTrack – Kamil Demir – '+new Date().toLocaleDateString("tr-TR")+' – '+rows.length+' dosya</div></div></div>';
 h+='<table><thead><tr>'+RC.map(function(c){return"<th>"+c.h+"</th>"}).join("")+'</tr></thead><tbody>';
 h+=rows.map(function(r){return"<tr>"+RC.map(function(c){return repCell(c,r)}).join("")+"</tr>"}).join("");
 h+=repTotRow(RC,rows)+'</tbody></table>';
 return h;
}
function repPrint(){
 var rows=repRows(),t=repTotals(rows);
 if(!rows.length){alert("Bu listede dosya yok.");return}
 if(isNativeApp()){repPdf();return}
 $("printArea").innerHTML=repHTML(rows,t);
 setTimeout(function(){window.print()},200);
}

/* Excel (.xlsx) üretimi, kütüphanesiz */
var CRCT=null;
function crc32(u8){
 if(!CRCT){CRCT=[];for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?(0xEDB88320^(c>>>1)):(c>>>1);CRCT[n]=c>>>0}}
 var crc=0xFFFFFFFF;for(var i=0;i<u8.length;i++)crc=CRCT[(crc^u8[i])&255]^(crc>>>8);
 return(crc^0xFFFFFFFF)>>>0;
}
function zipStore(files){
 var enc=new TextEncoder(),parts=[],central=[],off=0;
 function u16(n){return[n&255,(n>>8)&255]}
 function u32(n){return[n&255,(n>>8)&255,(n>>16)&255,(n>>24)&255]}
 files.forEach(function(f){
  var nm=enc.encode(f.name),c=crc32(f.data),sz=f.data.length;
  var h=[].concat(u32(0x04034b50),u16(20),u16(0x0800),u16(0),u16(0),u16(0x21),u32(c),u32(sz),u32(sz),u16(nm.length),u16(0));
  parts.push(new Uint8Array(h),nm,f.data);
  var ch=[].concat(u32(0x02014b50),u16(20),u16(20),u16(0x0800),u16(0),u16(0),u16(0x21),u32(c),u32(sz),u32(sz),u16(nm.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(off));
  central.push(new Uint8Array(ch),nm);
  off+=h.length+nm.length+sz;
 });
 var cs=0;central.forEach(function(c){cs+=c.length});
 var end=[].concat(u32(0x06054b50),u16(0),u16(0),u16(files.length),u16(files.length),u32(cs),u32(off),u16(0));
 var all=parts.concat(central,[new Uint8Array(end)]),len=0;
 all.forEach(function(a){len+=a.length});
 var out=new Uint8Array(len),o=0;all.forEach(function(a){out.set(a,o);o+=a.length});
 return out;
}
function xe(s){return String(s==null?"":s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function repXlsx(){
 var RC=repCols(),rows=repRows();
 if(!rows.length){alert("Bu listede dosya yok.");return}
 function cl(i){return String.fromCharCode(65+i)}
 function sc(ref,v,s){return'<c r="'+ref+'" t="inlineStr"'+(s?' s="'+s+'"':"")+'><is><t xml:space="preserve">'+xe(v)+"</t></is></c>"}
 function nc(ref,v,s){return'<c r="'+ref+'" s="'+s+'"><v>'+Number(v||0)+"</v></c>"}
 var sd='<row r="1">'+RC.map(function(c,i){return sc(cl(i)+"1",c.h,1)}).join("")+"</row>";
 rows.forEach(function(r,ri){var n=ri+2;sd+='<row r="'+n+'">'+RC.map(function(c,i){return c.n?nc(cl(i)+n,c.f(r),2):sc(cl(i)+n,rcText(c,r),0)}).join("")+"</row>"});
 var tn=rows.length+2;
 sd+='<row r="'+tn+'">'+RC.map(function(c,i){if(c.sum){var s=0;rows.forEach(function(r){s+=c.f(r)||0});return nc(cl(i)+tn,s,4)}return i===0?sc(cl(i)+tn,"TOPLAM",3):""}).join("")+"</row>";
 var cols="<cols>"+RC.map(function(c,i){return'<col min="'+(i+1)+'" max="'+(i+1)+'" width="'+Math.round(c.w*10+8)+'" customWidth="1"/>'}).join("")+"</cols>";
 var X='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',NS='xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"';
 var enc=new TextEncoder();
 var files=[
  {name:"[Content_Types].xml",data:enc.encode(X+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>')},
  {name:"_rels/.rels",data:enc.encode(X+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>')},
  {name:"xl/workbook.xml",data:enc.encode(X+'<workbook '+NS+' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Rapor" sheetId="1" r:id="rId1"/></sheets></workbook>')},
  {name:"xl/_rels/workbook.xml.rels",data:enc.encode(X+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>')},
  {name:"xl/styles.xml",data:enc.encode(X+'<styleSheet '+NS+'><fonts count="3"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1F2A60"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="5"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="4" fontId="2" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>')},
  {name:"xl/worksheets/sheet1.xml",data:enc.encode(X+'<worksheet '+NS+'><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>'+cols+'<sheetData>'+sd+'</sheetData></worksheet>')}
 ];
 dl(repFile("xlsx"),zipStore(files),"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
}


/* PDF üretimi, kütüphanesiz (sayfalar JPEG olarak gömülür) */
function pdfFromJpegs(pages,W,H){
 var chunks=[],pos=0,offs=[],enc=new TextEncoder();
 function add(x){var b=typeof x==="string"?enc.encode(x):x;chunks.push(b);pos+=b.length}
 function obj(n,body){offs[n]=pos;add(n+" 0 obj\n");add(body);add("\nendobj\n")}
 add("%PDF-1.4\n");
 var n=pages.length;
 obj(1,"<< /Type /Catalog /Pages 2 0 R >>");
 obj(2,"<< /Type /Pages /Kids ["+pages.map(function(_,i){return(3+3*i)+" 0 R"}).join(" ")+"] /Count "+n+" >>");
 pages.forEach(function(p,i){
  var pg=3+3*i,ct=4+3*i,im=5+3*i,cs="q "+W+" 0 0 "+H+" 0 0 cm /Im0 Do Q";
  obj(pg,"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 "+W+" "+H+"] /Resources << /XObject << /Im0 "+im+" 0 R >> >> /Contents "+ct+" 0 R >>");
  obj(ct,"<< /Length "+cs.length+" >>\nstream\n"+cs+"\nendstream");
  offs[im]=pos;
  add(im+" 0 obj\n<< /Type /XObject /Subtype /Image /Width "+p.w+" /Height "+p.h+" /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "+p.bytes.length+" >>\nstream\n");
  add(p.bytes);add("\nendstream\nendobj\n");
 });
 var xref=pos,s="xref\n0 "+(3+3*n)+"\n0000000000 65535 f \n";
 for(var k=1;k<3+3*n;k++)s+=("0000000000"+offs[k]).slice(-10)+" 00000 n \n";
 s+="trailer\n<< /Size "+(3+3*n)+" /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF";
 add(s);
 var out=new Uint8Array(pos),o=0;chunks.forEach(function(c){out.set(c,o);o+=c.length});
 return out;
}
async function repPdf(){
 var RC=repCols(),rows=repRows(),t=repTotals(rows);
 if(!rows.length){alert("Bu listede dosya yok.");return}
 try{
  var S=2,PW=842*S,PH=595*S,M=28*S,cvs=[],cx=null,y=0;
  var FONT="'IBM Plex Sans','Segoe UI',Arial,sans-serif";
  var img=await new Promise(function(res){var im=new Image();im.onload=function(){res(im)};im.onerror=function(){res(null)};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(LOGO_SVG)});
  var tw=PW-2*M,sm=RC.reduce(function(a,c){return a+c.w},0),W=RC.map(function(c){return c.w/sm*tw}),X=[],acc=M;
  W.forEach(function(w){X.push(acc);acc+=w});
  var COL={red:"#c0281f",orange:"#b4570a",green:"#1d7a4a"};
  function fit(s,mw){s=String(s);while(cx.measureText(s).width>mw&&s.length>1)s=s.slice(0,-1);return s}
  function wrap(txt,mw){
   var words=String(txt==null?"":txt).split(/\s+/),lines=[],cur="";
   words.forEach(function(w){var test=cur?cur+" "+w:w;if(!cur||cx.measureText(test).width<=mw)cur=test;else{lines.push(cur);cur=w}});
   if(cur)lines.push(cur);
   return(lines.length?lines:[""]).map(function(l){return fit(l,mw)});
  }
  function tableHead(){
   var h=20*S;
   cx.fillStyle="#1f2a60";cx.fillRect(M,y,tw,h);cx.fillStyle="#fff";cx.font="700 "+(8.5*S)+"px "+FONT;
   RC.forEach(function(c,i){cx.textAlign=c.n?"right":"left";cx.fillText(fit(c.h,W[i]-10*S),c.n?X[i]+W[i]-5*S:X[i]+5*S,y+13.5*S)});
   cx.textAlign="left";y+=h;
  }
  function newPage(){
   var c=document.createElement("canvas");c.width=PW;c.height=PH;cx=c.getContext("2d");
   cx.fillStyle="#fff";cx.fillRect(0,0,PW,PH);cvs.push(c);
   if(img)cx.drawImage(img,M,M-4*S,40*S,40*S);
   cx.fillStyle="#111";cx.font="700 "+(16*S)+"px "+FONT;cx.fillText(fit(repTitle(),PW-2*M-60*S),M+50*S,M+16*S);
   cx.fillStyle="#555";cx.font="400 "+(9.5*S)+"px "+FONT;cx.fillText("TurqTrack – Kamil Demir – "+new Date().toLocaleDateString("tr-TR")+" – "+rows.length+" dosya",M+50*S,M+32*S);
   y=M+50*S;tableHead();
  }
  newPage();
  rows.forEach(function(r,ri){
   cx.font="400 "+(8.5*S)+"px "+FONT;
   var cells=RC.map(function(c,i){return c.n?[rcText(c,r)]:wrap(rcText(c,r),W[i]-10*S)});
   var lh=11*S,nl=Math.max.apply(null,cells.map(function(c){return c.length})),h=nl*lh+8*S;
   if(y+h>PH-M-12*S){newPage();cx.font="400 "+(8.5*S)+"px "+FONT}
   if(ri%2){cx.fillStyle="#f3f5fb";cx.fillRect(M,y,tw,h)}
   cells.forEach(function(ls,i){
    var c=RC[i],col="#111";
    if(c.tn||c.badge){col=COL[c.tn(r)]||"#111"}else if(c.m&&c.m(r))col="#a33";
    cx.fillStyle=col;cx.font=((c.tn||c.badge)&&COL[c.tn(r)]?"700 ":"400 ")+(8.5*S)+"px "+FONT;
    cx.textAlign=c.n?"right":"left";
    ls.forEach(function(l,j){cx.fillText(l,c.n?X[i]+W[i]-5*S:X[i]+5*S,y+10.5*S+j*lh)});
   });
   cx.textAlign="left";cx.strokeStyle="#d5dbea";cx.lineWidth=1;cx.beginPath();cx.moveTo(M,y+h);cx.lineTo(M+tw,y+h);cx.stroke();y+=h;
  });
  if(y+22*S>PH-M-12*S)newPage();
  cx.fillStyle="#e9ecf8";cx.fillRect(M,y,tw,22*S);cx.fillStyle="#111";cx.font="700 "+(9.5*S)+"px "+FONT;
  RC.forEach(function(c,i){
   if(c.sum){var s=0;rows.forEach(function(r){s+=c.f(r)||0});cx.textAlign="right";cx.fillText(nf2(s),X[i]+W[i]-5*S,y+14*S)}
   else if(i===0){cx.textAlign="left";cx.fillText("TOPLAM",X[i]+5*S,y+14*S)}
  });
  cvs.forEach(function(c,i){var g=c.getContext("2d");g.fillStyle="#777";g.font="400 "+(8.5*S)+"px "+FONT;g.textAlign="right";g.fillText("Sayfa "+(i+1)+" / "+cvs.length,PW-M,PH-M+10*S)});
  var pages=cvs.map(function(c){
   var b=atob(c.toDataURL("image/jpeg",0.92).split(",")[1]),u=new Uint8Array(b.length);
   for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);
   return{bytes:u,w:c.width,h:c.height};
  });
  dl(repFile("pdf"),pdfFromJpegs(pages,842,595),"application/pdf");
 }catch(e){alert("PDF oluşturulamadı: "+((e&&e.message)||e))}
}

function renderHavuz(){
 var q=($("hara").value||"").toLowerCase(),ft=$("htur").value,list=[];
 db.rows.forEach(function(r){(r.docs||[]).forEach(function(x){list.push({r:r,x:x})})});
 var all=list.length;
 list=list.filter(function(o){var t=o.x.tur||"Diğer";if(ft&&t!==ft)return false;return!q||[o.x.name,t,o.r.barkod,o.r.firma,o.r.proje,o.r.fno].join(" ").toLowerCase().indexOf(q)>-1});
 list.sort(function(a,b){var x=a.r.bas||"9999-99-99",y=b.r.bas||"9999-99-99";return x<y?-1:x>y?1:(a.r.barkod||"")<(b.r.barkod||"")?-1:1});
 $("hsay").textContent=list.length+" evrak gösteriliyor (toplam "+all+"). Başvuru tarihine göre en eskiden en yeniye sıralıdır.";
 $("htb").innerHTML=list.length?list.map(function(o){return'<tr><td>'+(o.r.bas?df(o.r.bas):'<span class="miss">Girilmemiş</span>')+'</td><td>'+esc(o.r.barkod)+'</td><td class="wrap">'+esc(o.r.firma)+'</td><td class="wrap"><a href="#" onclick="openDoc(\''+o.x.id+'\');return false">'+esc(o.x.name)+'</a></td><td>'+esc(o.x.tur||"Diğer")+'</td><td class="wrap">'+esc(o.r.proje)+'</td><td>'+df(o.x.tarih)+'</td><td><button class="s" onclick="openEv('+o.r.id+')">Başvuruya git</button></td></tr>'}).join(""):'<tr><td colspan="8">'+emptyBox("Evrak yok","Bir başvurunun Evrak panelinden dosya yükleyin.")+"</td></tr>";
}
$("hara").oninput=renderHavuz;$("htur").onchange=renderHavuz;
$("tb1").onclick=function(){setTab("b")};$("tbm").onclick=function(){setTab("marka")};$("tbi").onclick=function(){setTab("istihdam")};$("tbf").onclick=function(){setTab("fuar")};$("tb2").onclick=function(){setTab("h")};
$("tbh").onclick=function(){setTab("hp")};
var BS=String.fromCharCode(92);
function icsEsc(s){return String(s||"").split(BS).join(BS+BS).split(";").join(BS+";").split(",").join(BS+",").replace(/\s+/g," ")}
function icsFold(l){var o=[];while(l.length>60){o.push(l.slice(0,60));l=" "+l.slice(60)}o.push(l);return o.join("\r\n")}
function icsD(s){return s.replace(/-/g,"")}
function icsNext(s){var d=new Date(s+"T00:00:00");d.setDate(d.getDate()+1);return d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+("0"+d.getDate()).slice(-2)}
function icsEvent(uid,title,desc,date){
 var L=["BEGIN:VEVENT","UID:"+uid,"DTSTAMP:"+new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,""),"DTSTART;VALUE=DATE:"+icsD(date),"DTEND;VALUE=DATE:"+icsNext(date),"SUMMARY:"+icsEsc(title),"DESCRIPTION:"+icsEsc(desc)];
 (function(){var a=[];for(var d=15;d>=0;d--)a.push([d>0?"-P"+(d-1)+"DT14H":"PT10H",d>0?d+" gün kaldı":"Son gün bugün"]);return a})().forEach(function(a){L.push("BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:"+icsEsc(a[1]+": "+title),"TRIGGER:"+a[0],"END:VALARM")});
 L.push("END:VEVENT");return L.map(icsFold).join("\r\n");
}
$("icsbtn").onclick=function(){
 var ev=[];
 db.rows.forEach(function(r){calc(r);var ad=(r.barkod||"Barkodsuz")+" – "+(r.firma||"Firma yok")+" – "+(r.proje||r.adt||"");
  if(sbaAktif(r)&&r.sba)ev.push(icsEvent("sba-"+r.id+"@turqtrack","Son başvuru: "+ad,"Turquality başvuru son tarihi (ödeme tarihi + 6 ay).",r.sba));
  if(ekAktif(r)&&r.ebs)ev.push(icsEvent("ebs-"+r.id+"@turqtrack","Eksiklik son tarihi: "+ad,"Eksiklik cevabı için son tarih (bildirim + 3 ay).",r.ebs))});
 if(!ev.length){alert("Takvime aktarılacak aktif süre yok.");return}
 dl("turqtrack-sureler.ics","BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//TurqTrack//TR\r\nCALSCALE:GREGORIAN\r\n"+ev.join("\r\n")+"\r\nEND:VCALENDAR\r\n","text/calendar");
};
$("n-ekle").onclick=addNote;
$("n-iptal").onclick=function(){nEdit=null;$("n-text").value="";$("n-ekle").textContent="Notu Kaydet";this.style.display="none"};
$("n-ara").oninput=renderNotes;$("n-filtre").onchange=renderNotes;
$("tbn").onclick=function(){setTab("n")};$("tb2").onclick=function(){setTab("h")};$("tbb").onclick=function(){setTab("bi")};$("b-filtre").onchange=renderBild;$("b-okuhepsi").onclick=readAll;$("tbr").onclick=function(){setTab("r")};
$("tbs").onclick=function(){setTab("s")};
$("th-mode").onchange=function(){setMode(this.value)};
$("r-yaz").onclick=repPrint;$("r-xls").onclick=repXlsx;$("r-pdf").onclick=repPdf;
init();
fillTur();
if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches){var tqd=document.getElementById("tqdot");if(tqd)tqd.remove()}

function idbOpen(){return new Promise(function(res,rej){var q=indexedDB.open("turqtrack",1);q.onupgradeneeded=function(){q.result.createObjectStore("files")};q.onsuccess=function(){res(q.result)};q.onerror=function(){rej(q.error)}})}
function idbOp(mode,fn){return idbOpen().then(function(d){return new Promise(function(res,rej){var tx=d.transaction("files",mode),r=fn(tx.objectStore("files"));tx.oncomplete=function(){res(r&&r.result)};tx.onerror=function(){rej(tx.error)}})})}
function openDoc(id){
 var w=window.open("","_blank");
 idbOp("readonly",function(s){return s.get(id)}).then(function(v){
  if(!v){if(w)w.close();alert("Dosya bulunamadı.");return}
  var u=URL.createObjectURL(new Blob([v.blob],{type:v.type||"application/octet-stream"}));
  if(w)w.location.href=u;else location.href=u;
 });
}
function b64(b){return new Promise(function(res,rej){var r=new FileReader();r.onload=function(){res(String(r.result).split(",")[1]||"")};r.onerror=rej;r.readAsDataURL(b)})}
async function idbRestore(files){
 for(var i=0;i<files.length;i++){
  var f=files[i],blob=await (await fetch("data:"+(f.type||"application/octet-stream")+";base64,"+f.b64)).blob();
  await idbOp("readwrite",function(s){return s.put({blob:blob,type:f.type,name:f.name},f.id)});
 }
}
async function tamYedek(){
 try{
  var keys=await idbOp("readonly",function(s){return s.getAllKeys()}),vals=await idbOp("readonly",function(s){return s.getAll()}),out=[];
  for(var i=0;i<keys.length;i++){var v=vals[i];out.push({id:keys[i],name:v.name,type:v.type,b64:await b64(v.blob)})}
  var o=JSON.parse(JSON.stringify(db));o.files=out;
  dl("turqtrack-tam-yedek.json",JSON.stringify(o),"application/json");
 }catch(e){alert("Yedek alınamadı: "+((e&&e.message)||e))}
}
var PROXIES=["","https://api.allorigins.win/raw?url=","https://corsproxy.io/?"];
async function fetchTcmb(url){
 var last;
 for(var i=0;i<PROXIES.length;i++){
  try{return await fetch(PROXIES[i]?PROXIES[i]+encodeURIComponent(url):url)}catch(e){last=e}
 }
 throw last||new Error("bağlantı yok");
}
async function tcmbKur(iso,cur){
 var d=new Date(iso+"T12:00:00"),code=cur==="TL"?"TRY":cur;
 for(var i=0;i<10;i++){
  var y=d.getFullYear(),m=("0"+(d.getMonth()+1)).slice(-2),dd=("0"+d.getDate()).slice(-2);
  var r=await fetchTcmb("https://www.tcmb.gov.tr/kurlar/"+y+m+"/"+dd+m+y+".xml");
  if(r.ok){
   var t=await r.text();
   if(t.indexOf("<Currency")>-1){
    var x=new DOMParser().parseFromString(t,"text/xml"),c=x.querySelector('Currency[CurrencyCode="'+code+'"]');
    if(c){var fb=parseFloat(c.querySelector("ForexBuying").textContent),u=parseFloat(c.querySelector("Unit").textContent)||1;if(fb>0)return{kur:+(fb/u).toFixed(4),date:y+"-"+m+"-"+dd}}
   }
  }
  d.setDate(d.getDate()-1);
 }
 throw new Error("kur bulunamadı");
}
async function autoKur(){
 var cur=$("f-odov").value,d=$("f-otar").value,n=$("kurnot");
 if(cur==="TL"){$("f-kur").value="";n.textContent="";return}
 if(!d){n.textContent="Kuru getirmek için önce Ödeme Tarihi gir.";return}
 n.textContent="TCMB kuru getiriliyor...";
 try{var k=await tcmbKur(d,cur);$("f-kur").value=k.kur;n.textContent="TCMB "+cur+" döviz alış kuru ("+df(k.date)+" tarihli): "+k.kur+(k.date!==d?" (ödeme günü kur yayınlanmadığı için önceki iş günü)":"")}
 catch(e){n.textContent="TCMB kuru alınamadı ("+((e&&e.message)||"hata")+"). İnternet yoksa kuru elle girebilirsin."}
}
function bildirimGoster(force){
 if(!("Notification" in window)||Notification.permission!=="granted")return;
 var n=window.alN||0;if(!n&&!force)return;
 var msg=n?n+" süre yaklaşıyor veya geçti. Uyarılara bak.":"Yaklaşan süre yok.";
 var f=function(){try{new Notification("TurqTrack",{body:msg})}catch(e){}};
 if("serviceWorker" in navigator&&navigator.serviceWorker.getRegistration){navigator.serviceWorker.getRegistration().then(function(r){if(r&&r.showNotification)r.showNotification("TurqTrack",{body:msg,icon:"icon-192.png"});else f()}).catch(f)}else f();
}
function bildirimIzni(){
 if(!("Notification" in window)){alert("Bu tarayıcı bildirimi desteklemiyor.");return}
 Notification.requestPermission().then(function(p){if(p==="granted")bildirimGoster(true)});
}
function localInit(){
 A={
  upload:function(f,o){var id="f"+Date.now()+Math.random().toString(36).slice(2,8);return idbOp("readwrite",function(s){return s.put({blob:f,type:(o&&o.type)||f.type,name:f.name},id)}).then(function(){return{id:id}})},
  delete:function(id){return idbOp("readwrite",function(s){return s["delete"](id)})}
 };
 $("f-otar").onchange=autoKur;$("f-odov").onchange=autoKur;
 $("tamyedek").onclick=tamYedek;$("bildbtn").onclick=function(){window.bildirimIzni()};
 renderEvrak();wrapA();syncInit();
 if("serviceWorker" in navigator&&location.protocol.indexOf("http")===0)navigator.serviceWorker.register("sw.js").catch(function(){});
 setTimeout(bildirimGoster,1500);
 $("updcard").style.display="";$("updbtn").onclick=checkUpdate;setTimeout(startupPopup,1600);setTimeout(startupPopup,7000);
}

/* ---- Bulut eşitleme (Supabase) ---- */
var SB_DEFAULT={url:"https://qxwdkhlcnzcyympdpzah.supabase.co",key:""};
var SB={},PEND={up:[],del:[]},syncT=null,syncBusy=false;
function sbLoad(){
 try{SB=JSON.parse(localStorage.getItem("tq-sb")||"{}")||{}}catch(e){SB={}}
 try{PEND=JSON.parse(localStorage.getItem("tq-pend")||"null")||{up:[],del:[]}}catch(e){PEND={up:[],del:[]}}
}
function sbSave(){try{localStorage.setItem("tq-sb",JSON.stringify(SB));localStorage.setItem("tq-pend",JSON.stringify(PEND))}catch(e){}}
function stat(t){var a=$("syncst");if(a)a.textContent="Bulut eşitleme: "+t;var b=$("bulut");if(b)b.textContent="Durum: "+t;var c=$("synchip");if(c)c.textContent="☁ "+t}
function sbMsg(t){var m=$("sb-msg");if(m)m.textContent=t}
function hsh(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return h}
function stable(o){
 if(Array.isArray(o))return"["+o.map(stable).join(",")+"]";
 if(o&&typeof o==="object")return"{"+Object.keys(o).sort().map(function(k){return JSON.stringify(k)+":"+stable(o[k])}).join(",")+"}";
 return JSON.stringify(o);
}
var CALCK=["kdvd","otl","dest","sba","ebs","dbase","ftl"];
function stamp(){
 var now=Date.now(),ids={};
 db.rows.forEach(function(r){
  ids[r.id]=1;
  var c=Object.assign({},r);delete c.u;delete c.h;CALCK.forEach(function(k){delete c[k]});
  var h=hsh(stable(c));
  if(r.h!==h){r.h=h;r.u=now}
 });
 (db.known||[]).forEach(function(id){if(!ids[id]){if(!db.del)db.del={};db.del[id]=now}});
 db.known=db.rows.map(function(r){return r.id});
}
function save(){
 stamp();db.ts=Date.now();
 try{localStorage.setItem("tq2",JSON.stringify(db))}catch(e){}
 schedSync();
}
function uni(x,y){var s=(x||[]).slice();(y||[]).forEach(function(v){if(s.indexOf(v)<0)s.push(v)});return s}
function merge(a,b){
 var ta=a.ts||0,tb=b.ts||0,nw=ta>=tb?a:b,od=ta>=tb?b:a;
 var del={};
 [a.del,b.del].forEach(function(d){Object.keys(d||{}).forEach(function(k){del[k]=Math.max(del[k]||0,d[k])})});
 var m={};
 (a.rows||[]).concat(b.rows||[]).forEach(function(r){var c=m[r.id];if(!c||(r.u||0)>(c.u||0))m[r.id]=r});
 var rows=[];
 Object.keys(m).forEach(function(id){var r=m[id];if(del[id]&&del[id]>=(r.u||0))return;rows.push(r)});
 rows.sort(function(x,y){return x.id-y.id});
 var out=Object.assign({},od,nw);
 out.rows=rows;out.del=del;out.known=rows.map(function(r){return r.id});out.ts=Math.max(ta,tb);
 var nd={};
 [a.ndel,b.ndel].forEach(function(d){Object.keys(d||{}).forEach(function(k){nd[k]=Math.max(nd[k]||0,d[k])})});
 var nm={};
 (a.notes||[]).concat(b.notes||[]).forEach(function(n){var c=nm[n.id];if(!c||(n.u||0)>(c.u||0))nm[n.id]=n});
 out.notes=Object.keys(nm).map(function(k){return nm[k]}).filter(function(n){return!(nd[n.id]&&nd[n.id]>=(n.u||0))}).sort(function(x,y){return x.id-y.id});
 out.ndel=nd;
 var bm={};
 (a.bild||[]).concat(b.bild||[]).forEach(function(n){var c=bm[n.id];if(!c||(n.u||0)>(c.u||0))bm[n.id]=n});
 out.bild=Object.keys(bm).map(function(k){return bm[k]}).sort(function(x,y){return x.ts-y.ts});
 var hd={};
 [a.hdel,b.hdel].forEach(function(d){Object.keys(d||{}).forEach(function(k){hd[k]=Math.max(hd[k]||0,d[k])})});
 var hm={};
 (a.hp||[]).concat(b.hp||[]).forEach(function(n){var c=hm[n.id];if(!c||(n.u||0)>(c.u||0))hm[n.id]=n});
 out.hp=Object.keys(hm).map(function(k){return hm[k]}).filter(function(n){return!(hd[n.id]&&hd[n.id]>=(n.u||0))}).sort(function(x,y){return x.id-y.id});
 out.hdel=hd;
 out.dtur=uni(a.dtur,b.dtur);
 out.custom={};["adt","proje"].forEach(function(k){out.custom[k]=uni((a.custom||{})[k],(b.custom||{})[k])});
 out.gek={};["marka","istihdam","fuar"].forEach(function(g){out.gek[g]=uni((a.gek||{})[g],(b.gek||{})[g])});
 return out;
}
function applyDb(){
 migrate();
 if(!db.vis)db.vis=defVis();if(!db.custom)db.custom={};
 chips();fillTur();
 var cv=$("f-adt").value;fillMenu("adt",cv==="__new"?"":cv);
 renderEvrak();render();if(tab==="h")renderHavuz();
}
function setTok(j){SB.tok=j.access_token;SB.ref=j.refresh_token;SB.exp=Date.now()+(j.expires_in||3600)*1000;if(j.user&&j.user.id)SB.uid=j.user.id;sbSave()}
async function ensureTok(){
 if(!SB.url||!SB.key)throw new Error("ayar yok");
 if(SB.tok&&Date.now()<SB.exp-60000)return;
 if(!SB.ref)throw new Error("giriş gerekli");
 var r=await fetch(SB.url+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:{apikey:SB.key,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:SB.ref})});
 var j=await r.json();
 if(!r.ok||!j.access_token){SB.tok=null;SB.ref=null;sbSave();throw new Error("oturum süresi doldu, tekrar giriş yap")}
 setTok(j);
}
async function sbf(path,o){
 await ensureTok();o=o||{};
 o.headers=Object.assign({apikey:SB.key,Authorization:"Bearer "+SB.tok},o.headers||{});
 return fetch(SB.url+path,o);
}
async function sbLogin(){
 var url=($("sb-url").value.trim()||SB_DEFAULT.url).replace(/\/+$/,""),key=$("sb-key").value.trim()||SB_DEFAULT.key||"",mail=$("sb-mail").value.trim(),pw=$("sb-pass").value;
 if(!mail||!pw){sbMsg("E-posta ve şifreyi yazın.");return}
 if(!key){sbMsg("Bağlantı anahtarı eksik. Gelişmiş bağlantı ayarlarından anahtarı bir kez yapıştırın.");var ad=$("sb-adv");if(ad)ad.open=true;return}
 sbMsg("Giriş yapılıyor...");
 try{
  var r=await fetch(url+"/auth/v1/token?grant_type=password",{method:"POST",headers:{apikey:key,"Content-Type":"application/json"},body:JSON.stringify({email:mail,password:pw})});
  var j=await r.json();
  if(!r.ok||!j.access_token){sbMsg("Giriş başarısız: "+(j.error_description||j.msg||j.message||r.status));return}
  SB.url=url;SB.key=key;SB.mail=mail;setTok(j);$("sb-pass").value="";
  var keys=await idbOp("readonly",function(s){return s.getAllKeys()});
  keys.forEach(function(k){if(PEND.up.indexOf(k)<0)PEND.up.push(k)});sbSave();
  sbMsg("Giriş yapıldı. Eşitleniyor...");syncNow();
 }catch(e){sbMsg("Bağlanılamadı: "+((e&&e.message)||e))}
}
function schedSync(){clearTimeout(syncT);syncT=setTimeout(syncNow,1500)}
async function syncFiles(){
 for(var i=0;i<PEND.up.length;){
  var id=PEND.up[i],v=await idbOp("readonly",function(s){return s.get(id)});
  if(!v){PEND.up.splice(i,1);continue}
  var r=await sbf("/storage/v1/object/evrak/"+SB.uid+"/"+id,{method:"POST",headers:{"Content-Type":v.type||"application/octet-stream","x-upsert":"true"},body:v.blob});
  if(r.ok){PEND.up.splice(i,1)}else{var t=await r.text();sbSave();throw new Error("evrak yüklenemedi: "+t.slice(0,100))}
 }
 for(var j=0;j<PEND.del.length;){
  var d=PEND.del[j],r2=await sbf("/storage/v1/object/evrak/"+SB.uid+"/"+d,{method:"DELETE"});
  if(r2.ok||r2.status===404||r2.status===400)PEND.del.splice(j,1);else j++;
 }
 sbSave();
}
async function syncNow(){
 if(syncBusy||!SB.url||!SB.ref)return;
 if(!navigator.onLine){stat("çevrimdışı, bağlanınca eşitlenecek");return}
 syncBusy=true;
 try{
  stat("eşitleniyor...");
  var r=await sbf("/rest/v1/turqtrack_state?select=data&user_id=eq."+SB.uid);
  if(!r.ok){var tt=await r.text();throw new Error("sunucu "+r.status+" "+tt.slice(0,120))}
  var arr=await r.json(),remote=(arr[0]&&arr[0].data&&arr[0].data.rows)?arr[0].data:null;
  var out=remote?merge(db,remote):db;
  if(hsh(stable(out))!==hsh(stable(db))){db=out;try{localStorage.setItem("tq2",JSON.stringify(db))}catch(e){}applyDb()}
  if(!remote||hsh(stable(out))!==hsh(stable(remote))){
   var p=await sbf("/rest/v1/turqtrack_state",{method:"POST",headers:{"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=minimal"},body:JSON.stringify({user_id:SB.uid,data:out,updated_at:new Date().toISOString()})});
   if(!p.ok){var t2=await p.text();throw new Error("yazılamadı "+p.status+" "+t2.slice(0,120))}
  }
  await syncFiles();
  var n=new Date();if(!SB.lastBk||Date.now()-SB.lastBk>72e6)snapNow(false);
  stat("eşitlendi ("+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+")");
 }catch(e){stat("hata: "+((e&&e.message)||e))}
 finally{syncBusy=false}
}
async function getDoc(id){
 var v=await idbOp("readonly",function(s){return s.get(id)});
 if(!v&&SB.ref&&navigator.onLine){
  try{
   var r=await sbf("/storage/v1/object/authenticated/evrak/"+SB.uid+"/"+id);
   if(r.ok){var b=await r.blob();v={blob:b,type:b.type,name:""};await idbOp("readwrite",function(s){return s.put(v,id)})}
  }catch(e){}
 }
 return v;
}
function docName(id){var n="";db.rows.forEach(function(r){(r.docs||[]).forEach(function(x){if(x.id===id)n=x.name})});return n}
function openDoc(id){
 var w=window.open("","_blank");
 getDoc(id).then(function(v){
  if(!v){if(w)w.close();alert("Dosya bulunamadı. İnternet yoksa ve dosya bu cihaza henüz inmediyse açılamaz.");return}
  var u=URL.createObjectURL(new Blob([v.blob],{type:v.type||"application/octet-stream"}));
  if(w)w.location.href=u;else location.href=u;
 });
}
function wrapA(){
 var u=A.upload,d=A["delete"];
 A.upload=function(f,o){return u(f,o).then(function(r){PEND.up.push(r.id);sbSave();schedSync();return r})};
 A["delete"]=function(id){PEND.up=PEND.up.filter(function(x){return x!==id});PEND.del.push(id);sbSave();schedSync();return d(id)};
}
function syncInit(){
 sbLoad();
 $("sb-url").value=SB.url||SB_DEFAULT.url;$("sb-key").value=SB.key||SB_DEFAULT.key;$("sb-mail").value=SB.mail||"";
 $("sb-login").onclick=sbLogin;
 $("sb-sync").onclick=function(){if(!SB.ref){sbMsg("Önce giriş yap.");return}sbMsg("");syncNow()};
 $("sb-out").onclick=function(){SB.tok=null;SB.ref=null;sbSave();stat("kapalı");sbMsg("Çıkış yapıldı.")};
 $("sb-copy").onclick=function(){
  var c=btoa(unescape(encodeURIComponent(JSON.stringify({u:$("sb-url").value.trim(),k:$("sb-key").value.trim(),e:$("sb-mail").value.trim()}))));
  $("sb-code").value=c;try{navigator.clipboard.writeText(c)}catch(e){}
  sbMsg("Kod kopyalandı. Diğer cihazda Bağlantı kodu kutusuna yapıştır, sonra şifreni yazıp Giriş Yap de.");
 };
 $("sb-code").oninput=function(){
  try{var o=JSON.parse(decodeURIComponent(escape(atob(this.value.trim()))));$("sb-url").value=o.u||"";$("sb-key").value=o.k||"";$("sb-mail").value=o.e||"";sbMsg("Kod okundu. Şifreni yazıp Giriş Yap de.")}catch(e){}
 };
 $("bk-now").onclick=function(){snapNow(true)};$("bk-list").onclick=showSnaps;renderBackup();
 window.addEventListener("online",schedSync);
 document.addEventListener("visibilitychange",function(){if(!document.hidden)schedSync()});
 setInterval(schedSync,60000);
 if(SB.ref){stat("bağlı, eşitleniyor...");schedSync()}else stat("kapalı (Eşitleme ayarlarından bağlan)");
}

/* ---- Yedekleme (bulut deposunda günlük anlık görüntüler) ---- */
function bkStat(t,bad){var m=$("bk-msg");if(m){m.textContent=t;m.style.color=bad?"var(--bad)":""}}
function bkName(tag){var d=new Date(),z=function(n){return("0"+n).slice(-2)};return(tag||"db-")+d.getFullYear()+z(d.getMonth()+1)+z(d.getDate())+"-"+z(d.getHours())+z(d.getMinutes())+z(d.getSeconds())+".json"}
function bkDate(n){var m=n.match(/(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})(\d{2})/);return m?m[3]+"."+m[2]+"."+m[1]+" "+m[4]+":"+m[5]:n}
async function listSnaps(){
 var r=await sbf("/storage/v1/object/list/evrak",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prefix:SB.uid+"/yedek",limit:200,offset:0})});
 if(!r.ok)throw new Error("liste alınamadı ("+r.status+")");
 var a=await r.json();
 return a.filter(function(x){return x.name&&/\.json$/.test(x.name)}).map(function(x){return{name:x.name,size:(x.metadata&&x.metadata.size)||0}}).sort(function(x,y){var kx=x.name.replace(/^[a-z]+-/,""),ky=y.name.replace(/^[a-z]+-/,"");return kx<ky?1:kx>ky?-1:0});
}
async function pruneSnaps(){
 var l=await listSnaps(),del=[];
 ["db-","oncesi-"].forEach(function(p,i){l.filter(function(x){return x.name.indexOf(p)===0}).slice(i?10:30).forEach(function(x){del.push(x.name)})});
 for(var k=0;k<del.length;k++)await sbf("/storage/v1/object/evrak/"+SB.uid+"/yedek/"+del[k],{method:"DELETE"});
}
async function snapNow(manual,tag){
 if(!SB.ref){bkStat("Yedek için önce bulut girişi yapın.",true);return false}
 try{
  var nm=bkName(tag);
  var r=await sbf("/storage/v1/object/evrak/"+SB.uid+"/yedek/"+nm,{method:"POST",headers:{"Content-Type":"application/json","x-upsert":"true"},body:JSON.stringify({v:1,ts:Date.now(),db:db})});
  if(!r.ok){var t=await r.text();throw new Error(r.status+" "+t.slice(0,140))}
  SB.lastBk=Date.now();SB.bkOk=true;SB.bkErr="";sbSave();
  try{await pruneSnaps()}catch(e){}
  renderBackup();if(manual)bkStat("Yedek alındı: "+bkDate(nm));
  return true;
 }catch(e){SB.bkOk=false;SB.bkErr=String((e&&e.message)||e);sbSave();renderBackup();bkStat("Yedek alınamadı: "+SB.bkErr,true);return false}
}
async function showSnaps(){
 if(!SB.ref){bkStat("Önce bulut girişi yapın.",true);return}
 try{
  var l=await listSnaps();
  $("bk-items").innerHTML=l.length?l.map(function(x){return'<div class="nt"><div class="nh"><span><b>'+(x.name.indexOf("oncesi")===0?"Geri yükleme öncesi":"Yedek")+"</b> – "+bkDate(x.name)+" <small>("+Math.max(1,Math.round(x.size/1024))+' KB)</small></span><span><button class="s" onclick="bkRestore(\''+x.name+'\',\'eksik\')">Eksik kayıtları geri getir</button> <button class="s d" onclick="bkRestore(\''+x.name+'\',\'tam\')">Bu yedeğe dön</button></span></div></div>'}).join(""):emptyBox("Henüz yedek yok","Şimdi Yedekle düğmesine basın veya otomatik yedeği bekleyin.");
 }catch(e){bkStat("Yedekler listelenemedi: "+((e&&e.message)||e),true)}
}
async function checkDocs(){
 var ids=[],have={};
 db.rows.forEach(function(r){(r.docs||[]).forEach(function(x){ids.push(x.id)})});
 if(!ids.length)return 0;
 try{
  var r=await sbf("/storage/v1/object/list/evrak",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prefix:SB.uid,limit:1000,offset:0})});
  if(r.ok)(await r.json()).forEach(function(x){have[x.name]=1});
 }catch(e){}
 var miss=0;
 for(var i=0;i<ids.length;i++){
  if(have[ids[i]])continue;
  var id=ids[i],v=await idbOp("readonly",function(s){return s.get(id)});
  if(!v)miss++;
 }
 return miss;
}
async function bkRestore(name,mode){
 try{
  var r=await sbf("/storage/v1/object/authenticated/evrak/"+SB.uid+"/yedek/"+name);
  if(!r.ok)throw new Error("indirilemedi ("+r.status+")");
  var j=await r.json(),snap=j.db;
  if(!snap||!snap.rows)throw new Error("yedek dosyası geçersiz");
  var msg=mode==="eksik"?"Yedekte olup şu an olmayan kayıtlar geri getirilecek. Mevcut kayıtlarınıza dokunulmaz. Devam edilsin mi?":"UYARI: Tüm veriler "+bkDate(name)+" tarihli yedeğe döndürülecek. Sonradan eklenen kayıtlar listeden kaldırılır. Önce mevcut durumun yedeği alınır. Devam edilsin mi?";
  if(!confirm(msg))return;
  if(!(await snapNow(false,"oncesi-")))throw new Error("geri yükleme öncesi yedek alınamadı, işlem durduruldu");
  var now=Date.now(),added=0,groups=[["rows","del"],["notes","ndel"],["hp","hdel"]];
  groups.forEach(function(g){
   var key=g[0],dk=g[1];
   if(!db[key])db[key]=[];if(!db[dk])db[dk]={};
   var have={};db[key].forEach(function(x){have[x.id]=1});
   if(mode==="eksik"){
    (snap[key]||[]).forEach(function(x){if(!have[x.id]){var y=JSON.parse(JSON.stringify(x));y.u=now;db[key].push(y);delete db[dk][x.id];added++}});
   }else{
    var keep={};(snap[key]||[]).forEach(function(x){keep[x.id]=1});
    db[key].forEach(function(x){if(!keep[x.id])db[dk][x.id]=now});
    db[key]=(snap[key]||[]).map(function(x){var y=JSON.parse(JSON.stringify(x));y.u=now;delete db[dk][x.id];return y});
   }
  });
  if(mode!=="eksik")["vis","corder","hporder","rcols2","custom","gek","dtur","bild"].forEach(function(k){if(snap[k]!==undefined)db[k]=JSON.parse(JSON.stringify(snap[k]))});
  migrate();db.ts=now;save();applyDb();
  var miss=await checkDocs();
  bkStat((mode==="eksik"?added+" kayıt geri getirildi.":"Yedeğe dönüldü.")+(miss?" Dikkat: "+miss+" evrak dosyası bulutta ve bu cihazda bulunamadı.":" Evrakların tamamı mevcut."));
  renderBackup();
 }catch(e){bkStat("Geri yükleme başarısız: "+((e&&e.message)||e),true)}
}
function renderBackup(){
 var el=$("bk-info");if(!el)return;
 var docs=0,bytes=0;db.rows.forEach(function(r){(r.docs||[]).forEach(function(x){docs++;bytes+=x.size||0})});
 var mb=bytes/1048576,pct=Math.round(mb/1024*100);
 var s="Evraklar: <b>"+docs+"</b> dosya, <b>"+(mb<1?Math.round(bytes/1024)+" KB":mb.toFixed(1)+" MB")+"</b> / 1 GB ücretsiz depolama (%"+pct+").";
 if(pct>=80)s+=' <span class="late">Depolama dolmak üzere. Eski evrakları silin veya Supabase planını yükseltin.</span>';
 s+="<br>Son yedek: "+(SB.lastBk?new Date(SB.lastBk).toLocaleString("tr-TR")+(SB.bkOk===false?' – <span class="late">BAŞARISIZ: '+esc(SB.bkErr||"")+"</span>":" – başarılı"):"henüz alınmadı")+". Otomatik yedek günde bir kez alınır, son 30 yedek saklanır.";
 el.innerHTML=SB.ref?s:"Bulut bağlantısı yok. Yedek ve eşitleme için önce bulut girişi yapın.";
}

/* ---- Uygulama ici guncelleme (kullanici butona basinca) ---- */
var UPD_BASE="https://raw.githubusercontent.com/kamiildemiir-01/TurqTrack/main/www/";
async function checkUpdate(){
 var b=$("updbtn"),old=b.textContent;
 b.disabled=true;b.textContent="Denetleniyor...";
 try{
  var base=localStorage.getItem("tq-upd")||UPD_BASE,cur=window.TQ_VER||0;
  var r=await fetch(base+"version.json?t="+Date.now(),{cache:"no-store"});
  if(!r.ok)throw new Error("güncelleme adresi açılamadı ("+r.status+"). GitHub deposu Public olmalı.");
  var j=await r.json();
  if(!(j.v>cur)){alert("Uygulama güncel (sürüm "+cur+").");return}
  if(!confirm("Yeni sürüm var: "+j.v+" (şu an "+cur+"). Şimdi güncellensin mi?"))return;
  var c=await fetch(base+"app.js?t="+Date.now(),{cache:"no-store"});
  if(!c.ok)throw new Error("güncelleme dosyası indirilemedi ("+c.status+")");
  var code=await c.text();
  if(code.length<20000||code.indexOf("__tqOk")<0)throw new Error("indirilen dosya geçersiz");
  localStorage.setItem("tq-ota",JSON.stringify({v:j.v,code:code}));
  alert("Güncellendi. Uygulama yeniden başlıyor.");
  location.reload();
 }catch(e){alert("Güncelleme denetlenemedi: "+((e&&e.message)||e))}
 finally{b.disabled=false;b.textContent=old}
}
/* ---- Acilista yaklasan sureleri gosteren pencere (carpi ile kapanir, Bildirimler'de kalir) ---- */
function startupPopup(){
 var al=window.alL||[];
 if(!al.length)return;
 try{if(sessionStorage.getItem("tq-pop"))return;sessionStorage.setItem("tq-pop","1")}catch(e){}
 var ov=document.createElement("div");ov.className="ov";
 ov.innerHTML='<div class="dlg"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px"><h2 style="margin:0">Süresi yaklaşan dosyalar ('+al.length+')</h2><button class="s" id="pop-x" aria-label="Kapat" style="font-size:18px;line-height:1;padding:2px 10px">×</button></div><div class="dl" style="margin-top:10px">'+al.map(function(a){
  return'<div class="'+(a.g<0?"late":"soon")+'">'+esc(a.k)+": "+esc(a.t)+" – "+(a.g<0?Math.abs(a.g)+" gün önce doldu":a.g===0?"son gün bugün":a.g+" gün kaldı")+"</div>";
 }).join("")+'</div><p class="note">Bu uyarılar Bildirimler sekmesinde de görünür.</p></div>';
 document.body.appendChild(ov);
 $("pop-x").onclick=function(){ov.remove()};
 if(window.electronAPI&&"Notification" in window){
  try{new Notification("TurqTrack: süresi yaklaşan "+al.length+" dosya var",{body:al.slice(0,3).map(function(a){return a.t+" – "+(a.g<0?"süresi doldu":a.g+" gün kaldı")}).join("\n")})}catch(e){}
 }
}
/* ---- TCMB kuru: elle girilen kur otomatik ezilmez ---- */
function kurNote(){
 var n=$("kurnot"),m=$("f-kurm").value,t=$("f-kurt").value,c=$("f-odov").value;
 if(!c||c==="TL"){n.textContent="";return}
 n.innerHTML="<span>"+(m==="manual"?"Kur elle girildi.":m==="auto"?"TCMB "+esc(c)+" döviz alış kuru, "+df(t)+" tarihli (otomatik).":"Kur henüz getirilmedi.")+'</span> <button class="s" type="button" onclick="kurFetch(true)">TCMB kurunu getir</button>';
}
async function kurFetch(force){
 var cur=$("f-odov").value,d=$("f-otar").value,n=$("kurnot");
 if(!cur||cur==="TL"){$("f-kur").value="";$("f-kurm").value="";$("f-kurt").value="";kurNote();return}
 if(!d){n.textContent="Kuru getirmek için önce Ödeme Tarihi girin.";return}
 if(!force&&$("f-kurm").value==="manual"&&$("f-kur").value){kurNote();n.insertAdjacentHTML("beforeend"," <small>(Elle girdiğiniz kur korundu. Değiştirmek için düğmeye basın.)</small>");return}
 n.textContent="TCMB kuru getiriliyor...";
 try{
  var k=await tcmbKur(d,cur);
  $("f-kur").value=k.kur;$("f-kurm").value="auto";$("f-kurt").value=k.date;kurNote();
  if(k.date!==d)n.insertAdjacentHTML("beforeend"," <small>(Ödeme günü kur yayınlanmadığı için önceki iş günü kullanıldı.)</small>");
 }catch(e){
  n.innerHTML="TCMB kuru alınamadı ("+esc((e&&e.message)||"hata")+"). Kuru elle girebilirsiniz. "+'<button class="s" type="button" onclick="kurFetch(true)">Tekrar dene</button>';
 }
}
function autoKur(){return kurFetch(false)}

localInit();


window.__tqOk=1;
