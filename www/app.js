(function(){var st=document.createElement('style');st.textContent="\n:root{--bg:#f3f5fb;--surface:#ffffff;--surface2:#f6f7fd;--ink:#16213b;--muted:#5d6b88;--line:#dde3f0;--accent:#4a3fe0;--accent2:#1b8cf0;--warn:#b4570a;--ok:#1d7a4a;--bad:#c0281f;--n1:#0098d9;--n2:#5b3df5;--n3:#9b19e0;--shadow:0 1px 2px rgba(22,33,59,.06),0 8px 22px rgba(22,33,59,.06);box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]){--bg:#0b1020;--surface:#131a30;--surface2:#18203a;--ink:#e8edfb;--muted:#9aa7c7;--line:#26304f;--accent:#a3acff;--accent2:#4cb0ff;--warn:#f0a35a;--ok:#5fcf90;--bad:#ff8a80;--n1:#22e0ff;--n2:#7d6bff;--n3:#c05cff;--shadow:0 1px 2px rgba(0,0,0,.3),0 10px 24px rgba(0,0,0,.28);color-scheme:dark}}\n*{box-sizing:border-box}\nbody{margin:0;color:var(--ink);font:14.5px/1.55 \"IBM Plex Sans\",\"Segoe UI\",system-ui,-apple-system,sans-serif;background:radial-gradient(1100px 380px at 88% -8%,rgba(91,61,245,.13),transparent 70%),radial-gradient(900px 340px at 0% -10%,rgba(0,152,217,.10),transparent 70%),var(--bg);background-attachment:fixed}\nmain{width:100%;max-width:2400px;margin:0 auto;padding:20px clamp(14px,2.2vw,36px) 56px}\nh1{font-size:26px;margin:0}\nh2{font-size:17px;margin:0 0 12px;letter-spacing:-.2px}\n.brand{display:flex;align-items:center;gap:14px;margin-bottom:16px}\n.brand h1{font-size:30px;letter-spacing:-.6px;line-height:1.1}\n.brand h1 span{font-weight:400;background:linear-gradient(90deg,var(--n1),var(--n2),var(--n3));-webkit-background-clip:text;background-clip:text;color:var(--n2);-webkit-text-fill-color:transparent}\n.brand h1 b{font-weight:800}\n.brand small{display:block;color:var(--muted);font-size:12.5px}\n.brand .upd{margin-left:auto;display:flex;align-items:center;gap:10px}\n.tabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;padding:5px;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}\n.tabs button{background:transparent;color:var(--muted);border:0;padding:9px 18px;border-radius:10px;font-weight:600}\n.tabs button:hover{color:var(--ink);filter:none;background:var(--surface2)}\n.tabs button.on{background:linear-gradient(135deg,var(--accent2),var(--n2));color:#fff}\n.sum{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:14px}\n.card{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px 16px 14px;box-shadow:var(--shadow);cursor:pointer;overflow:hidden;transition:transform .12s,border-color .12s}\n.card::before{content:\"\";position:absolute;left:0;top:0;right:0;height:3px;background:linear-gradient(90deg,var(--n1),var(--n2),var(--n3))}\n.card:hover{transform:translateY(-2px);border-color:var(--accent)}\n.card.on{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent) inset,var(--shadow)}\n.card small{display:block;color:var(--muted);font-weight:600;font-size:12.5px}\n.card b{display:block;font-size:22px;margin-top:2px;font-variant-numeric:tabular-nums}\nsection,details{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:16px;box-shadow:var(--shadow)}\nsummary{cursor:pointer;font-weight:700}\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;margin-top:12px}\nlabel{display:block;font-size:12.5px;color:var(--muted);font-weight:600}\ninput,select,textarea{width:100%;margin-top:4px;padding:9px 11px;border:1px solid var(--line);border-radius:10px;background:var(--surface2);color:var(--ink);font:inherit}\ninput[readonly]{opacity:.7}\ninput:focus,select:focus,textarea:focus,button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}\nbutton{font:inherit;font-weight:600;padding:9px 16px;border-radius:10px;border:1px solid transparent;background:linear-gradient(135deg,#1b8cf0,#6a3df0);color:#fff;cursor:pointer;transition:filter .12s}\nbutton:hover{filter:brightness(1.1)}\nbutton.g{background:transparent;color:var(--accent);border-color:var(--line)}\nbutton.g:hover{border-color:var(--accent);filter:none}\nbutton.s{padding:3px 10px;font-size:12.5px;background:transparent;color:var(--accent);border-color:var(--line)}\nbutton.s:hover{border-color:var(--accent);filter:none}\nbutton.d,button.s.d{color:var(--bad)}\nbutton:disabled{opacity:.6;cursor:default}\n.row{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-top:12px}\n.row label{min-width:190px}\n.chips{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px}\n.chips label{display:flex;gap:5px;align-items:center;color:var(--ink);font-size:13px}\n.chips input{width:auto;margin:0}\n.scroll{overflow-x:auto;border:1px solid var(--line);border-radius:12px}\ntable{border-collapse:separate;border-spacing:0;width:100%;font-variant-numeric:tabular-nums}\nth,td{padding:9px 11px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap;vertical-align:top}\nth{font-size:12px;color:var(--muted);font-weight:700;background:var(--surface2);position:sticky;top:0}\ntbody tr:nth-child(even) td{background:var(--surface2)}\ntbody tr:hover td{background:rgba(91,61,245,.09)}\ntd.n,th.n{text-align:right}\ntd.wrap{white-space:normal;min-width:130px;max-width:300px;overflow-wrap:anywhere}\ntd a{color:var(--accent);font-weight:600}\n.st{display:inline-block;padding:2px 10px;border-radius:99px;border:1px solid var(--line);font-size:12.5px;font-weight:600;white-space:nowrap}\n.st-red{color:var(--bad);border-color:var(--bad)}.st-ok{color:var(--ok);border-color:var(--ok)}.st-warn{color:var(--warn);border-color:var(--warn)}.st-acc{color:var(--accent);border-color:var(--accent)}\n.late{color:var(--bad);font-weight:600}.soon{color:var(--warn);font-weight:600}.okc{color:var(--ok)}\n.empty{color:var(--muted);padding:10px 0}\n.note{font-size:12.5px;color:var(--muted);margin-top:8px}\n.al{border:1px solid var(--warn);border-left-width:5px}\n.al div{padding:2px 0}\n.chipf{display:inline-flex;gap:10px;align-items:center;margin:0 0 10px;padding:5px 6px 5px 12px;border:1px solid var(--accent);border-radius:99px;color:var(--ink)}\ntextarea{min-height:96px;resize:vertical}\n.nt{border:1px solid var(--line);border-radius:12px;padding:11px 14px;margin-bottom:10px;background:var(--surface2)}\n.nh{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;color:var(--muted);align-items:center}\n.nb{white-space:pre-wrap;margin-top:6px;overflow-wrap:anywhere}\n.nh a{color:var(--accent);font-weight:600}\n.ov{position:fixed;inset:0;background:rgba(5,8,20,.62);display:flex;align-items:center;justify-content:center;z-index:50;padding:16px}\n.dlg{background:var(--surface);border:1px solid var(--line);border-radius:16px;max-width:640px;width:100%;max-height:80vh;overflow:auto;padding:22px;box-shadow:var(--shadow)}\n.dlg .dl div{padding:5px 0;border-bottom:1px solid var(--line)}\n#printArea{display:none}\n@media print{\n @page{size:A4 landscape;margin:12mm}\n body{background:#fff!important;color:#000!important}\n main,.ov{display:none!important}\n #printArea{display:block!important;color:#000;font-family:Arial,sans-serif}\n #printArea table{border-collapse:collapse;width:100%;font-size:11px}\n #printArea th{background:#1f2a60;color:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;text-align:left;position:static}\n #printArea th,#printArea td{border:1px solid #c9cfe0;padding:4px 6px;white-space:normal;background:#fff}\n #printArea th{background:#1f2a60}\n #printArea td.n{text-align:right}\n .pa-head{display:flex;align-items:center;gap:12px;margin-bottom:10px}\n}\n";document.head.appendChild(st);document.body.innerHTML="\n<main>\n<div class=\"brand\"><svg width=\"56\" height=\"56\" viewBox=\"0 0 64 64\" role=\"img\" aria-label=\"TurqTrack logosu\"><defs><linearGradient id=\"tqg\" gradientUnits=\"userSpaceOnUse\" x1=\"8\" y1=\"56\" x2=\"56\" y2=\"8\"><stop offset=\"0\" stop-color=\"#00d4ff\"/><stop offset=\".55\" stop-color=\"#5b6bff\"/><stop offset=\"1\" stop-color=\"#b026ff\"/></linearGradient><filter id=\"tqf\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\"><feGaussianBlur stdDeviation=\"1.6\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" rx=\"15\" fill=\"#0a0e27\"/><rect x=\"2.75\" y=\"2.75\" width=\"58.5\" height=\"58.5\" rx=\"14.5\" fill=\"none\" stroke=\"url(#tqg)\" stroke-opacity=\".55\" stroke-width=\"1.5\"/><g transform=\"translate(1.5 0)\"><circle cx=\"35\" cy=\"18\" r=\"5.4\" fill=\"url(#tqg)\"/><circle cx=\"37\" cy=\"16.6\" r=\"4.4\" fill=\"#0a0e27\"/></g><g transform=\"translate(1.5 0)\" fill=\"none\" stroke=\"url(#tqg)\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" filter=\"url(#tqf)\"><path d=\"M12 13H30M21 13V51M21 32 35 18M21 32 35 46\"/><path d=\"M35 18A14 14 0 0 1 35 46\"/></g><g transform=\"translate(1.5 0)\" stroke=\"url(#tqg)\" stroke-width=\"2.2\"><circle cx=\"35\" cy=\"46\" r=\"3.4\" fill=\"#0a0e27\"/><circle cx=\"21\" cy=\"51\" r=\"3.4\" fill=\"url(#tqg)\"/></g><g transform=\"translate(1.5 0)\"><circle id=\"tqdot\" r=\"2.1\" fill=\"#fff\" opacity=\"0\"><animateMotion dur=\"4s\" repeatCount=\"indefinite\" path=\"M21 51V32L35 18\" keyPoints=\"0;1;1\" keyTimes=\"0;.7;1\" calcMode=\"linear\"/><animate attributeName=\"opacity\" dur=\"4s\" repeatCount=\"indefinite\" values=\"0;1;1;0;0\" keyTimes=\"0;.08;.66;.72;1\"/></circle></g></svg><div><h1><span>Turq<b>Track</b></span></h1><small>Kamil Demir – Turquality destek ve evrak takibi</small></div><div class=\"upd\" id=\"updbox\" style=\"display:none\"><small id=\"vertxt\"></small><button class=\"s\" id=\"updbtn\">Güncellemeleri denetle</button></div></div>\n<div class=\"tabs\"><button id=\"tb1\" class=\"on\">Ana Sayfa</button><button id=\"tbm\">Marka</button><button id=\"tbi\">İstihdam</button><button id=\"tbf\">Fuar</button><button id=\"tb2\">Evrak Havuzu</button><button id=\"tbn\">Notlar</button><button id=\"tbr\">Raporlar</button></div>\n<div class=\"sum\" id=\"sum\"></div>\n<div class=\"sum\" id=\"sum2\"></div>\n<div id=\"uyari\"></div>\n<p class=\"note\" id=\"bulut\"></p>\n<details id=\"sync\"><summary id=\"syncst\">Bulut eşitleme: kapalı</summary>\n<p class=\"note\">Telefon ve bilgisayarlar arasında otomatik eşitleme için ücretsiz bir Supabase hesabı gerekir. Bir kez bağlandıktan sonra tüm kayıtlar, notlar ve evraklar cihazlar arasında kendiliğinden eşitlenir.</p>\n<div class=\"grid\">\n<label>Bağlantı kodu (diğer cihazdan yapıştır)<input id=\"sb-code\" autocomplete=\"off\"></label>\n<label>Supabase URL<input id=\"sb-url\" placeholder=\"https://xxxx.supabase.co\" autocomplete=\"off\"></label>\n<label>Publishable / anon anahtar<input id=\"sb-key\" autocomplete=\"off\"></label>\n<label>E-posta<input id=\"sb-mail\" type=\"email\"></label>\n<label>Şifre<input id=\"sb-pass\" type=\"password\" autocomplete=\"current-password\"></label>\n</div>\n<div class=\"row\"><button id=\"sb-login\">Giriş Yap</button><button class=\"g\" id=\"sb-sync\">Şimdi Eşitle</button><button class=\"g\" id=\"sb-copy\">Bağlantı Kodunu Kopyala</button><button class=\"g\" id=\"sb-out\">Çıkış</button></div>\n<p class=\"note\" id=\"sb-msg\"></p>\n</details>\n\n<details id=\"formbox\">\n<summary id=\"ftitle\">Yeni kayıt ekle</summary>\n<div class=\"grid\" id=\"form\"></div>\n<div class=\"note\" id=\"kurnot\"></div>\n<details id=\"gmgr\" style=\"display:none;margin-top:12px\"><summary id=\"gtitle\"></summary><div id=\"gchips\" style=\"margin-top:10px\"></div><div class=\"row\"><label style=\"min-width:280px\">Yeni alt destek türü<input id=\"gnew\" placeholder=\"Alt destek türü adı\"></label><button id=\"gadd\">Ekle</button></div><p class=\"note\">Buraya eklediğin tür, Alt Destek Türü listesine de eklenir ve bu sekmede görünür.</p></details>\n<div class=\"row\"><button id=\"kaydet\">Kaydet</button><button class=\"g\" id=\"iptal\" style=\"display:none\">Vazgeç</button></div>\n</details>\n\n<section id=\"kayit\">\n<h2>Kayıtlar</h2>\n<div id=\"cfbar\"></div>\n<div class=\"row\" style=\"margin:0 0 8px\">\n<label>Ara<input id=\"ara\" placeholder=\"Firma, proje, barkod...\"></label>\n<label>Durum<select id=\"fdurum\"></select></label>\n<button class=\"g\" id=\"sutunbtn\">Sütunları seç</button><button class=\"g\" id=\"icsbtn\">Süreleri Takvime Aktar</button><button class=\"g\" id=\"bildbtn\">Bildirimleri Aç</button>\n</div>\n<div id=\"sutunbox\" style=\"display:none\">\n<div class=\"chips\" id=\"chips\"></div>\n<div class=\"row\"><button class=\"s\" id=\"hepsi\">Hepsini göster</button><button class=\"s\" id=\"varsayilan\">Varsayılana dön</button></div>\n</div>\n<div class=\"scroll\" style=\"margin-top:10px\"><table><thead id=\"th\"></thead><tbody id=\"tb\"></tbody></table></div>\n</section>\n\n<section id=\"evrakbox\" style=\"display:none\">\n<h2 id=\"evtitle\"></h2>\n<div id=\"evek\" class=\"note\"></div>\n<div id=\"evlist\"></div>\n<div class=\"row\"><label style=\"min-width:200px\">Evrak türü<select id=\"evtur\"></select></label><label style=\"min-width:260px\">Evrak ekle (önce türü seç)<input type=\"file\" id=\"evfile\" multiple></label><button class=\"g\" id=\"evkapat\">Kapat</button></div>\n<div id=\"turchips\" style=\"margin-top:10px\"></div>\n<div id=\"zorbox\" style=\"display:none\"></div>\n<p class=\"note\" id=\"evnote\"></p>\n</section>\n\n<section id=\"havuz\" style=\"display:none\">\n<h2>Evrak havuzu</h2>\n<div class=\"row\" style=\"margin:0 0 8px\"><label>Ara<input id=\"hara\" placeholder=\"Barkod, firma, dosya adı...\"></label><label>Evrak türü<select id=\"htur\"></select></label></div>\n<p class=\"note\" id=\"hsay\"></p>\n<div class=\"scroll\"><table><thead><tr><th>Evrak</th><th>Tür</th><th>Barkod</th><th>Firma</th><th>Proje</th><th>Tarih</th><th></th></tr></thead><tbody id=\"htb\"></tbody></table></div>\n</section>\n\n<section id=\"notlar\" style=\"display:none\">\n<h2>Notlar</h2>\n<div class=\"grid\">\n<label>Bağlı dosya (isteğe bağlı)<select id=\"n-dosya\"></select></label>\n<label style=\"grid-column:1/-1\">Not<textarea id=\"n-text\" placeholder=\"Notunu buraya yaz...\"></textarea></label>\n</div>\n<div class=\"row\"><button id=\"n-ekle\">Notu Kaydet</button><button class=\"g\" id=\"n-iptal\" style=\"display:none\">Vazgeç</button></div>\n<div class=\"row\" style=\"margin-top:18px\"><label style=\"min-width:240px\">Ara<input id=\"n-ara\" placeholder=\"Not, barkod, firma...\"></label><label>Dosya<select id=\"n-filtre\"></select></label></div>\n<div id=\"n-list\" style=\"margin-top:12px\"></div>\n</section>\n\n<section id=\"rapor\" style=\"display:none\">\n<h2>Raporlar</h2>\n<div class=\"row\" style=\"margin-top:0\">\n<label>Hangi dosyalar<select id=\"r-liste\"></select></label>\n<label>Grup<select id=\"r-grup\"></select></label>\n<button id=\"r-yaz\">Yazdır</button><button class=\"g\" id=\"r-xls\">Excel'e Aktar</button><button class=\"g\" id=\"r-pdf\">PDF İndir</button>\n</div>\n<p class=\"note\" id=\"r-sub\"></p>\n<div class=\"scroll\"><table><thead id=\"r-th\"></thead><tbody id=\"r-tb\"></tbody></table></div>\n</section>\n\n<details id=\"excel\">\n<summary>Excel'den aktar / yedek</summary>\n<p class=\"note\">Excel'de satırları seçip kopyala (başlık satırı olabilir, olmayabilir), buraya yapıştır. Sütun sırası senin tablonla aynı olmalı. Hesaplanan sütunlar (KDV dahil tutar, Ödeme Tutarı TL, Desteklenecek Tutar, Kalan Süre) otomatik yeniden hesaplanır.</p>\n<textarea id=\"yapistir\" placeholder=\"Excel satırlarını buraya yapıştır\"></textarea>\n<div class=\"row\">\n<button id=\"aktar\">Yapıştırılanı ekle</button>\n<button class=\"g\" id=\"csv\">CSV indir</button>\n<button class=\"g\" id=\"yedek\">Yedek al (JSON)</button><button class=\"g\" id=\"tamyedek\">Evraklarla Tam Yedek</button>\n<label style=\"min-width:0\"><span class=\"g\" style=\"display:inline-block;padding:8px 13px;border:1px solid var(--accent);border-radius:6px;color:var(--accent);cursor:pointer\">Yedekten yükle<input type=\"file\" id=\"yukle\" accept=\".json\" style=\"display:none\"></span></label>\n</div>\n<p class=\"note\">Veriler bu tarayıcıda saklanır. Cihaz değiştirirsen yedek alıp diğer cihazda yükle. Desteklenecek tutar = Ödeme Tutarı TL × destek oranı olarak hesaplanır.</p>\n</details>\n</main>\n<div id=\"printArea\"></div>\n\n";})();

var DURUM=["Hazırlanıyor","Başvuruldu","Eksiklik bildirildi","Eksiklik tamamlandı","Onaylandı","Tahsil edildi","Reddedildi"];
// k:anahtar, l:başlık, t:tip (t=metin d=tarih n=sayı p=yüzde s=durum a=otomatik), v:varsayılan görünür
var C=[
{k:"no",l:"Sıra No",t:"a",v:1},
{k:"bas",l:"Başvuru Tarihi",t:"d",v:1},
{k:"barkod",l:"Barkod No",t:"t",v:1},
{k:"ulke",l:"Ülke",t:"t",v:1},
{k:"dt",l:"Destek Türü",t:"t",v:1},
{k:"adt",l:"Alt Destek Türü",t:"m"},
{k:"proje",l:"Dosya Konusu / Proje",t:"m",v:1},
{k:"firma",l:"Hizmet Alınan Firma",t:"t",v:1},
{k:"ftar",l:"Fatura Tarihi",t:"d",v:1},
{k:"fno",l:"Bordro/Fatura No",t:"t",v:1},
{k:"kdvd",l:"Fatura KDV Dahil Tutarı",t:"a"},
{k:"kdv",l:"KDV",t:"n"},
{k:"matrah",l:"Matrah",t:"n",v:1},
{k:"fdov",l:"Fatura Döviz Birimi",t:"c"},
{k:"otar",l:"Ödeme Tarihi",t:"d",v:1},
{k:"otut",l:"Ödeme Tutarı",t:"n"},
{k:"odov",l:"Ödeme Döviz Birimi",t:"c"},
{k:"kur",l:"Ödeme Tarihi Kuru",t:"n"},
{k:"otl",l:"Ödeme Tutarı TL",t:"a",v:1},
{k:"oran",l:"Destek Oranı (%)",t:"p",v:1},
{k:"dest",l:"Desteklenecek Tutar TL",t:"a",v:1},
{k:"sba",l:"Teşvik İçin Son Başvuru",t:"a",v:1},
{k:"ebt",l:"Eksiklik Bildirim Tarihi",t:"d",v:1},
{k:"ebs",l:"Eksiklik Bildirim Son Tarih",t:"a",v:1},
{k:"ekal",l:"Eksiklik Kalan Süre",t:"a",v:1},
{k:"ebd",l:"Eksik Bildirime Dönüş Tarihi",t:"d"},
{k:"not",l:"Not",t:"t"},
{k:"durum",l:"Durum",t:"s",v:1},
{k:"ddet",l:"Durum Detay",t:"t"},
{k:"onay",l:"Onaylanma Tarihi",t:"d"},
{k:"tah",l:"Tahsilat Tarihi",t:"d"}
];
var db={rows:[],vis:null},edit=null;
var $=function(i){return document.getElementById(i)};
function esc(s){var d=document.createElement("div");d.textContent=s==null?"":s;return d.innerHTML}
function tl(v){return (v||0).toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₺"}
function nf(v){return v===""||v==null?"":Number(v).toLocaleString("tr-TR",{maximumFractionDigits:4})}
function df(s){if(!s)return"";var p=s.split("-");return p[2]+"."+p[1]+"."+p[0]}
function defVis(){var o={};C.forEach(function(c){o[c.k]=!!c.v});return o}
function load(){try{var s=localStorage.getItem("tq2");if(s)db=JSON.parse(s)}catch(e){}if(!db.vis)db.vis=defVis()}
function saveOld(){db.ts=Date.now();try{localStorage.setItem("tq2",JSON.stringify(db))}catch(e){}if(DBC){clearTimeout(pt);pt=setTimeout(function(){DBC.set({json:JSON.stringify(db)}).catch(function(){})},800)}}
function num(x){var n=parseFloat(x);return isNaN(n)?0:n}
function addM(s,m){if(!s)return"";var p=s.split("-"),y=+p[0],mo=+p[1]-1+m,d=+p[2];y+=Math.floor(mo/12);mo=((mo%12)+12)%12;var last=new Date(y,mo+1,0).getDate();if(d>last)d=last;return y+"-"+("0"+(mo+1)).slice(-2)+"-"+("0"+d).slice(-2)}
function calc(r){
 r.sba=addM(r.otar,6);
 r.ebs=addM(r.ebt,3);
 r.kdvd=num(r.matrah)+num(r.kdv);
 var d=(r.odov||"").trim().toUpperCase();
 r.otl=(!d||d==="TL"||d==="TRY")?num(r.otut):num(r.otut)*(num(r.kur)||0);
 r.dest=r.otl*num(r.oran)/100;
 return r;
}
function sbaAktif(r){return!r.bas&&!r.ebt&&(!r.durum||r.durum==="Hazırlanıyor")}
function ekAktif(r){return(r.durum==="Eksiklik bildirildi"||!!r.ebt)&&!r.ebd&&["Onaylandı","Tahsil edildi","Reddedildi"].indexOf(r.durum)<0}
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
 if(c.k==="durum"){var sc2={"Reddedildi":"red","Onaylandı":"ok","Tahsil edildi":"ok","Eksiklik bildirildi":"warn","Eksiklik tamamlandı":"acc"}[v]||"";return'<td><span class="st'+(sc2?" st-"+sc2:"")+'">'+esc(v)+"</span></td>"}
 if(c.k==="no")return"<td>"+(i+1)+"</td>";
 if(c.k==="ekal"){var e=ekal(r);return'<td class="'+e.c+'">'+e.t+"</td>"}
 if(c.k==="ebs"){var ge=days(v),oe=v&&ekAktif(r);return'<td class="'+(oe&&ge<0?"late":oe&&ge<=15?"soon":"")+'">'+df(v)+(oe?" ("+(ge<0?Math.abs(ge)+" gün geçti":ge===0?"son gün bugün":ge+" gün kaldı")+")":"")+"</td>"}
 if(c.k==="sba"){var g=days(v),cl="";if(v&&g!==null&&sbaAktif(r))cl=g<0?"late":g<=15?"soon":"";var on=v&&g!==null&&sbaAktif(r);return'<td class="'+cl+'">'+df(v)+(on?" ("+(g<0?Math.abs(g)+" gün geçti":g===0?"son gün bugün":g+" gün kaldı")+")":"")+"</td>"}
 if(c.k==="kdvd"||c.k==="otl"||c.k==="dest")return'<td class="n">'+tl(v)+"</td>";
 if(c.t==="d")return"<td>"+df(v)+"</td>";
 if(c.t==="n")return'<td class="n">'+nf(v)+"</td>";
 if(c.t==="p")return'<td class="n">'+(v===""||v==null?"":"%"+nf(v))+"</td>";
 return'<td class="wrap">'+esc(v)+"</td>";
}
var OPT={adt:['PGB - Belge / Sertifika Yenileme','YİF Fuar Katılım','PGB - Belge / Sertifika','PGB - Test / Analiz','Yurt Dışı Pazar Araştırması','Turquality / Marka - Kapsama Alma','Harcama Yetkilisi Kapsama Alma','MR - Pazara Giriş Belgeleri, Ruhsatlandırma ve Klinik Test','MR - Yönetim Danışmanlığı (2A)','YDF Fuar Katılım','MR - Kurumsal Alt Yapı Sürdürülebilirlik Danışmanlığı','MR - Gelişim Yol Haritası Çalışmaları','Hedef Pazar','Gelişim Yol Haritası','MR - Yazılım Lisansı Yıllık Bakım ve Güncelleme (2A)','MR - Yönetim Danışmanlığı (2B)','MR - Fuar','MR - İstihdam','MR - Yazılım Lisansı (2A)','Performans Değerlendirme Başvurusu'],
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
function buildForm(){
 var h="";
 C.forEach(function(c){
  if(c.t==="a")return;
  var inp;
  if(c.t==="s")inp='<select id="f-'+c.k+'">'+DURUM.map(function(d){return"<option>"+d+"</option>"}).join("")+"</select>";
  else if(c.t==="c")inp='<select id="f-'+c.k+'">'+CUR.map(function(x){return"<option>"+x+"</option>"}).join("")+"</select>";
  else if(c.t==="m")inp='<select id="f-'+c.k+'"></select>';
  else inp='<input id="f-'+c.k+'" type="'+(c.t==="d"?"date":c.t==="n"||c.t==="p"?"number":"text")+'"'+(c.t==="n"||c.t==="p"?' step="any"':"")+">";
  h+="<label>"+c.l+inp+"</label>";
 });
 $("form").innerHTML=h;
 C.forEach(function(c){if(c.t==="m")fillMenu(c.k,"")});
}
function clearForm(){
 C.forEach(function(c){var e=$("f-"+c.k);if(e)e.value=c.t==="s"?DURUM[0]:""});
 $("f-fdov").value="TL";$("f-odov").value="TL";
 edit=null;$("ftitle").textContent="Yeni kayıt ekle";$("kaydet").textContent="Kaydet";$("iptal").style.display="none";
}
function readForm(){var r={};C.forEach(function(c){var e=$("f-"+c.k);if(e)r[c.k]=e.value});return r}
function editRow(id){
 var r=db.rows.filter(function(x){return x.id===id})[0];if(!r)return;
 C.forEach(function(c){if(c.t==="m"){fillMenu(c.k,r[c.k]||"");return}var e=$("f-"+c.k);if(e)e.value=r[c.k]==null?"":r[c.k]});
 edit=id;$("ftitle").textContent="Kaydı düzenle";$("kaydet").textContent="Güncelle";$("iptal").style.display="";
 $("formbox").open=true;$("formbox").scrollIntoView({behavior:"smooth"});
}
function delRow(id){if(!confirm("Bu kayıt ve evrakları silinsin mi?"))return;var o=db.rows.filter(function(x){return x.id===id})[0];if(o&&o.docs&&A)o.docs.forEach(function(x){A.delete(x.id).catch(function(){})});if(evRow===id){evRow=null;$("evrakbox").style.display="none"}db.rows=db.rows.filter(function(x){return x.id!==id});save();render()}
function render(){
 var t=0,d=0,onay=0,tah=0,ek=0;
 db.rows.forEach(calc);viewRows().forEach(function(r){t+=r.otl;d+=r.dest;if(r.durum==="Onaylandı")onay+=r.dest;if(r.tah||r.durum==="Tahsil edildi")tah+=r.dest;if(ekAktif(r))ek++});
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
 var cE=0,cO=0,cR=0,cB=0;
 viewRows().forEach(function(r){var dn=r.durum;if(dn==="Reddedildi")cR++;else if(dn==="Onaylandı"||dn==="Tahsil edildi")cO++;else if(dn==="Eksiklik bildirildi"||(r.ebt&&!r.ebd))cE++;if(sbaAktif(r))cB++});
  $("sum2").innerHTML=cd("eks","Eksiklik Bekleyen Dosya",cE)+cd("onay","Onaylanan Dosya",cO)+cd("red","Reddedilen Dosya",cR)+cd("basvYok","Başvuru Yapılmamış Dosya",cB);
 
 $("cfbar").innerHTML=CF!=="all"?'<div class="chipf">Gösterilen: <b>'+PFN[CF]+'</b> <button class="s" onclick="setCF(\''+CF+'\')">Filtreyi temizle ×</button></div>':"";
 var cols=C.filter(function(c){return db.vis[c.k]});
 $("th").innerHTML="<tr>"+cols.map(function(c){return"<th>"+c.l+"</th>"}).join("")+"<th></th></tr>";
 var q=$("ara").value.toLowerCase(),fd=$("fdurum").value;
 var list=viewRows().map(function(r,i){return{r:r,i:i}}).filter(function(o){
  if(fd&&o.r.durum!==fd)return false;
  if(!PF[CF](o.r))return false;
  return!q||JSON.stringify(o.r).toLowerCase().indexOf(q)>-1});
 $("tb").innerHTML=list.length?list.map(function(o){
  return"<tr>"+cols.map(function(c){return cell(o.r,c,o.i)}).join("")+'<td><button class="s" onclick="openEv('+o.r.id+')">Evrak ('+((o.r.docs||[]).length)+')'+'</button> <button class="s" onclick="editRow('+o.r.id+')">Düzenle</button> <button class="s d" onclick="delRow('+o.r.id+')">Sil</button></td></tr>'}).join(""):'<tr><td colspan="'+(cols.length+1)+'" class="empty">Kayıt yok. Yukarıdan ekle veya Excel\'den aktar.</td></tr>';
}
function chips(){
 $("chips").innerHTML=C.map(function(c){return'<label><input type="checkbox" data-k="'+c.k+'"'+(db.vis[c.k]?" checked":"")+">"+c.l+"</label>"}).join("");
 Array.prototype.forEach.call($("chips").querySelectorAll("input"),function(i){i.onchange=function(){db.vis[i.dataset.k]=i.checked;save();render()}});
}
function pd(s){s=(s||"").trim();var m=s.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})/);if(m)return m[3]+"-"+("0"+m[2]).slice(-2)+"-"+("0"+m[1]).slice(-2);return/^\d{4}-\d{2}-\d{2}/.test(s)?s.slice(0,10):""}
function pn(s){s=(s||"").replace(/[₺$€\s]|TL/gi,"");if(!s)return"";if(s.indexOf(",")>-1)s=s.replace(/\./g,"").replace(",",".");var n=parseFloat(s);return isNaN(n)?"":n}
function autoDurum(r){
 var d=r.durum||"Hazırlanıyor",open=["Hazırlanıyor","Başvuruldu"];
 if(d==="Reddedildi"){r.durum=d;return}
 if(r.tah){r.durum="Tahsil edildi";return}
 if(r.onay&&d!=="Tahsil edildi"){r.durum="Onaylandı";return}
 if(r.ebt&&!r.ebd&&open.indexOf(d)>-1){r.durum="Eksiklik bildirildi";return}
 if(r.ebt&&r.ebd&&(d==="Eksiklik bildirildi"||open.indexOf(d)>-1)){r.durum="Eksiklik tamamlandı";return}
 r.durum=d;
}
function curN(v){v=(v||"").trim().toUpperCase();return v==="TRY"||v===""?"TL":v}
function aktar(){
 var lines=parseTSV($("yapistir").value),n=0;
 lines.forEach(function(p){
  if(/SIRA|BAŞVURU/i.test(p[0]+(p[1]||"")))return;
  var r={id:Date.now()+n};
  C.forEach(function(c,i){
   var v=(p[i]||"").replace(/\s*[\r\n]+\s*/g," ").trim();
   if(c.t==="a")return;
   r[c.k]=c.t==="d"?pd(v):c.t==="n"?pn(v):c.t==="p"?pn(v.replace("%","")):v;
  });
  if(r.oran!==""&&r.oran>0&&r.oran<=1)r.oran=r.oran*100;
  if(DURUM.indexOf(r.durum)<0){var m=DURUM.filter(function(d){return d.toLowerCase()===(r.durum||"").toLowerCase()})[0];r.durum=m||DURUM[0]}
  r.fdov=curN(r.fdov);r.odov=curN(r.odov);autoDurum(r);["adt","proje"].forEach(function(k){r[k]=canon(k,r[k])});db.rows.push(r);n++;
 });
 save();render();$("yapistir").value="";alert(n+" kayıt eklendi.");
}
function dl(name,data,type){var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([data],{type:type}));a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},500)}
function init(){
 load();buildForm();clearForm();chips();
 $("fdurum").innerHTML='<option value="">Tümü</option>'+DURUM.map(function(d){return"<option>"+d+"</option>"}).join("");
 $("ara").oninput=render;$("fdurum").onchange=render;
 $("sutunbtn").onclick=function(){var b=$("sutunbox");b.style.display=b.style.display==="none"?"block":"none"};
 $("hepsi").onclick=function(){C.forEach(function(c){db.vis[c.k]=true});save();chips();render()};
 $("varsayilan").onclick=function(){db.vis=defVis();save();chips();render()};
 $("kaydet").onclick=function(){
  var r=readForm();
  if(GR0[tab]&&!r.adt){$("ftitle").textContent="Önce Alt Destek Türünü seç";$("f-adt").focus();return}
  autoDurum(r);
  if(edit){var o=db.rows.filter(function(x){return x.id===edit})[0];Object.keys(r).forEach(function(k){o[k]=r[k]})}
  else{r.id=Date.now();db.rows.push(r)}
  save();clearForm();render();
 };
 $("iptal").onclick=clearForm;
 $("aktar").onclick=aktar;
 $("csv").onclick=function(){
  var cols=C;var out=[cols.map(function(c){return c.l})];
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
  try{var res=await A.upload(f,{type:t});(r.docs=r.docs||[]).push({id:res.id,name:f.name,size:f.size,tarih:new Date().toISOString().slice(0,10),tur:$("evtur").value});save();renderEvrak();render()}
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
var GR0={marka:["MR - Gelişim Yol Haritası Çalışmaları","MR - Pazara Giriş Belgeleri, Ruhsatlandırma ve Klinik Test","MR - Yönetim Danışmanlığı (2A)","MR - Yönetim Danışmanlığı (2B)","MR - Yazılım Lisansı (2A)","MR - Yazılım Lisansı Yıllık Bakım ve Güncelleme (2A)","MR - Kurumsal Alt Yapı Sürdürülebilirlik Danışmanlığı"],istihdam:["MR - İstihdam"],fuar:["YİF Fuar Katılım","YDF Fuar Katılım","MR - Fuar"]};
var GN={marka:"Marka",istihdam:"İstihdam",fuar:"Fuar"};
function grpList(g){return GR0[g].concat((db.gek&&db.gek[g])||[])}
function inGrp(g,v){var n=norm(v);return!!n&&grpList(g).some(function(x){return norm(x)===n})}
function viewRows(){return GR0[tab]?db.rows.filter(function(r){return inGrp(tab,r.adt)}):db.rows}
function chipH(x,i){return'<span style="border:1px solid var(--line);border-radius:99px;padding:2px 10px;margin:0 6px 6px 0;display:inline-flex;gap:4px;align-items:center">'+esc(x)+(i>=0?'<button class="s d" style="padding:0 6px" aria-label="Kaldır" onclick="remGrp('+i+')">×</button>':'')+'</span>'}
function renderG(){
 var g=tab;if(!GR0[g])return;
 var ex=(db.gek&&db.gek[g])||[];
 $("gtitle").textContent=GN[g]+" alt destek türleri ("+grpList(g).length+")";
 $("gchips").innerHTML=GR0[g].map(function(x){return chipH(x,-1)}).concat(ex.map(function(x,i){return chipH(x,i)})).join("");
}
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
function classify(r){var d=r.durum;if(d==="Reddedildi")return"red";if(d==="Onaylandı"||d==="Tahsil edildi")return"onay";if(d==="Eksiklik bildirildi"||(r.ebt&&!r.ebd))return"eks";return"diger"}
var PF={
 all:function(){return true},
 onayBek:function(r){return r.durum==="Onaylandı"&&!r.tah},
 tahsil:function(r){return r.durum==="Tahsil edildi"||!!r.tah},
 cevapBek:function(r){return ekAktif(r)},
 eks:function(r){return classify(r)==="eks"},
 onay:function(r){return classify(r)==="onay"},
 red:function(r){return classify(r)==="red"},
 basvYok:function(r){return sbaAktif(r)}
};
var PFN={all:"Tüm Dosyalar",onayBek:"Onaylanan, Tahsil Bekleyen",tahsil:"Tahsil Edilen",cevapBek:"Cevap Bekleyen Eksiklik",eks:"Eksiklik Bekleyen Dosya",onay:"Onaylanan Dosya",red:"Reddedilen Dosya",basvYok:"Başvuru Yapılmamış Dosya"};
function setCF(k){CF=(CF===k)?"all":k;render();var t=$("kayit");if(t&&CF!=="all")t.scrollIntoView({behavior:"smooth"})}

var APPT=["b","marka","istihdam","fuar"];
function setTab(t){
 tab=t;var app=APPT.indexOf(t)>-1,g=!!GR0[t];
 ["sum","sum2","uyari","bulut","sync","formbox","kayit"].forEach(function(i){var e=$(i);if(e)e.style.display=app?"":"none"});
 $("excel").style.display=t==="b"?"":"none";
 $("gmgr").style.display=g?"":"none";
 $("kayit").querySelector("h2").textContent=g?GN[t]+" Başvuruları":"Kayıtlar";
 $("evrakbox").style.display=(app&&evRow!=null)?"block":"none";
 $("havuz").style.display=t==="h"?"block":"none";
 $("notlar").style.display=t==="n"?"block":"none";
 $("rapor").style.display=t==="r"?"block":"none";
 [["tb1","b"],["tbm","marka"],["tbi","istihdam"],["tbf","fuar"],["tb2","h"],["tbn","n"],["tbr","r"]].forEach(function(p){$(p[0]).className=t===p[1]?"on":""});
 if(g)renderG();
 if(app){var cv=$("f-adt").value;fillMenu("adt",cv==="__new"?"":cv);render()}
 if(t==="h"){fillTur();renderHavuz()}
 if(t==="n")renderNotes();
 if(t==="r")renderRapor();
}

/* ---- Notlar ---- */
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
 }).join(""):'<div class="empty">Henüz not yok.</div>';
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
var RCOL=[
 {h:"Barkod No",f:function(r){return r.barkod||""}},
 {h:"Hizmet Alınan Firma",f:function(r){return r.firma||""}},
 {h:"Dosya Konusu / Proje",f:function(r){return r.proje||""}},
 {h:"Fatura No",f:function(r){return r.fno||""}},
 {h:"Fatura Tutarı (KDV Dahil)",n:1,f:function(r){return r.kdvd||0}},
 {h:"Fatura Döviz",f:function(r){return r.fdov||"TL"}},
 {h:"Ödeme Tutarı (TL)",n:1,f:function(r){return r.otl||0}},
 {h:"Desteklenecek Tutar (TL)",n:1,f:function(r){return r.dest||0}}
];
function nf2(v){return(v||0).toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})}
function repRows(){
 var k=$("r-liste").value||"onay",g=$("r-grup").value;
 db.rows.forEach(calc);
 return db.rows.filter(function(r){return PF[k](r)&&(!g||inGrp(g,r.adt))}).sort(function(a,b){return String(a.barkod||"")<String(b.barkod||"")?-1:1});
}
function repTitle(){var k=$("r-liste").value||"onay",g=$("r-grup").value;return PFN[k]+" Raporu"+(g?" – "+GN[g]:"")}
function repTotals(rows){var o=0,d=0;rows.forEach(function(r){o+=r.otl||0;d+=r.dest||0});return{o:o,d:d}}
function repFile(ext){
 var m={"ç":"c","ğ":"g","ı":"i","ö":"o","ş":"s","ü":"u","Ç":"C","Ğ":"G","İ":"I","Ö":"O","Ş":"S","Ü":"U"};
 var s=repTitle().replace(/[çğıöşüÇĞİÖŞÜ]/g,function(c){return m[c]}).replace(/[^A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"");
 return s+"-"+new Date().toISOString().slice(0,10)+"."+ext;
}
function renderRapor(){
 var l=$("r-liste"),g=$("r-grup");
 if(!l.options.length){
  l.innerHTML=["onay","tahsil","onayBek","red","eks","basvYok","all"].map(function(k){return'<option value="'+k+'">'+PFN[k]+'</option>'}).join("");
  g.innerHTML='<option value="">Tüm gruplar</option><option value="marka">Marka</option><option value="istihdam">İstihdam</option><option value="fuar">Fuar</option>';
 }
 var rows=repRows(),t=repTotals(rows);
 $("r-sub").textContent=rows.length+" dosya – Ödeme toplamı: "+tl(t.o)+" – Desteklenecek toplam: "+tl(t.d);
 $("r-th").innerHTML="<tr>"+RCOL.map(function(c){return"<th>"+c.h+"</th>"}).join("")+"</tr>";
 $("r-tb").innerHTML=rows.length?rows.map(function(r){
  return"<tr>"+RCOL.map(function(c){var v=c.f(r);return c.n?'<td class="n">'+nf2(v)+"</td>":'<td class="wrap">'+esc(v)+"</td>"}).join("")+"</tr>";
 }).join("")+'<tr><td colspan="6"><b>TOPLAM</b></td><td class="n"><b>'+nf2(t.o)+'</b></td><td class="n"><b>'+nf2(t.d)+"</b></td></tr>":'<tr><td colspan="8" class="empty">Bu listede dosya yok.</td></tr>';
}
function isNativeApp(){return !!(window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform())}
function repHTML(rows,t){
 var h='<div class="pa-head">'+LOGO_SVG.replace('width="64" height="64"','width="48" height="48"')+'<div><div style="font-size:20px;font-weight:700">'+esc(repTitle())+'</div><div style="font-size:12px;color:#555">TurqTrack – Kamil Demir – '+new Date().toLocaleDateString("tr-TR")+' – '+rows.length+' dosya</div></div></div>';
 h+='<table><thead><tr>'+RCOL.map(function(c){return"<th>"+c.h+"</th>"}).join("")+'</tr></thead><tbody>';
 h+=rows.map(function(r){return"<tr>"+RCOL.map(function(c){var v=c.f(r);return c.n?'<td class="n">'+nf2(v)+"</td>":"<td>"+esc(v)+"</td>"}).join("")+"</tr>"}).join("");
 h+='<tr><td colspan="6"><b>TOPLAM</b></td><td class="n"><b>'+nf2(t.o)+'</b></td><td class="n"><b>'+nf2(t.d)+'</b></td></tr></tbody></table>';
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
 var rows=repRows(),t=repTotals(rows);
 if(!rows.length){alert("Bu listede dosya yok.");return}
 var L="ABCDEFGH";
 function sc(ref,v,s){return'<c r="'+ref+'" t="inlineStr"'+(s?' s="'+s+'"':"")+'><is><t xml:space="preserve">'+xe(v)+"</t></is></c>"}
 function nc(ref,v,s){return'<c r="'+ref+'" s="'+s+'"><v>'+Number(v||0)+"</v></c>"}
 var sd='<row r="1">'+RCOL.map(function(c,i){return sc(L[i]+"1",c.h,1)}).join("")+"</row>";
 rows.forEach(function(r,ri){
  var n=ri+2;
  sd+='<row r="'+n+'">'+RCOL.map(function(c,i){var v=c.f(r);return c.n?nc(L[i]+n,v,2):sc(L[i]+n,v,0)}).join("")+"</row>";
 });
 var tn=rows.length+2;
 sd+='<row r="'+tn+'">'+sc("A"+tn,"TOPLAM",3)+nc("G"+tn,t.o,4)+nc("H"+tn,t.d,4)+"</row>";
 var W=[16,34,44,18,24,12,20,24],cols="<cols>"+W.map(function(w,i){return'<col min="'+(i+1)+'" max="'+(i+1)+'" width="'+w+'" customWidth="1"/>'}).join("")+"</cols>";
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
 var rows=repRows(),t=repTotals(rows);
 if(!rows.length){alert("Bu listede dosya yok.");return}
 try{
  var S=2,PW=842*S,PH=595*S,M=28*S,cvs=[],cx=null,y=0;
  var FONT="'IBM Plex Sans','Segoe UI',Arial,sans-serif";
  var img=await new Promise(function(res){var im=new Image();im.onload=function(){res(im)};im.onerror=function(){res(null)};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(LOGO_SVG)});
  var wts=[1.1,2.3,2.7,1.3,1.6,.7,1.5,1.6],tw=PW-2*M,sm=wts.reduce(function(a,b){return a+b},0),W=wts.map(function(w){return w/sm*tw});
  function fit(s,mw){s=String(s);while(cx.measureText(s).width>mw&&s.length>1)s=s.slice(0,-1);return s}
  function wrap(txt,mw){
   var words=String(txt==null?"":txt).split(/\s+/),lines=[],cur="";
   words.forEach(function(w){var test=cur?cur+" "+w:w;if(!cur||cx.measureText(test).width<=mw)cur=test;else{lines.push(cur);cur=w}});
   if(cur)lines.push(cur);
   return(lines.length?lines:[""]).map(function(l){return fit(l,mw)});
  }
  function tableHead(){
   var x=M,h=20*S;
   cx.fillStyle="#1f2a60";cx.fillRect(M,y,tw,h);cx.fillStyle="#fff";cx.font="700 "+(9*S)+"px "+FONT;
   RCOL.forEach(function(c,i){cx.textAlign=c.n?"right":"left";cx.fillText(fit(c.h,W[i]-10*S),c.n?x+W[i]-5*S:x+5*S,y+13.5*S);x+=W[i]});
   cx.textAlign="left";y+=h;
  }
  function newPage(){
   var c=document.createElement("canvas");c.width=PW;c.height=PH;cx=c.getContext("2d");
   cx.fillStyle="#fff";cx.fillRect(0,0,PW,PH);cvs.push(c);
   if(img)cx.drawImage(img,M,M-4*S,40*S,40*S);
   cx.fillStyle="#111";cx.font="700 "+(17*S)+"px "+FONT;cx.fillText(repTitle(),M+50*S,M+16*S);
   cx.fillStyle="#555";cx.font="400 "+(9.5*S)+"px "+FONT;cx.fillText("TurqTrack – Kamil Demir – "+new Date().toLocaleDateString("tr-TR")+" – "+rows.length+" dosya",M+50*S,M+32*S);
   y=M+50*S;tableHead();
  }
  newPage();
  rows.forEach(function(r,ri){
   cx.font="400 "+(9*S)+"px "+FONT;
   var cells=RCOL.map(function(c,i){var v=c.f(r);return c.n?[nf2(v)]:wrap(v,W[i]-10*S)});
   var lh=11.5*S,nl=Math.max.apply(null,cells.map(function(c){return c.length})),h=nl*lh+8*S;
   if(y+h>PH-M-12*S){newPage();cx.font="400 "+(9*S)+"px "+FONT}
   if(ri%2){cx.fillStyle="#f3f5fb";cx.fillRect(M,y,tw,h)}
   cx.fillStyle="#111";var x=M;
   cells.forEach(function(ls,i){cx.textAlign=RCOL[i].n?"right":"left";ls.forEach(function(l,j){cx.fillText(l,RCOL[i].n?x+W[i]-5*S:x+5*S,y+11*S+j*lh)});x+=W[i]});
   cx.textAlign="left";cx.strokeStyle="#d5dbea";cx.lineWidth=1;cx.beginPath();cx.moveTo(M,y+h);cx.lineTo(M+tw,y+h);cx.stroke();y+=h;
  });
  if(y+22*S>PH-M-12*S)newPage();
  cx.fillStyle="#e9ecf8";cx.fillRect(M,y,tw,22*S);cx.fillStyle="#111";cx.font="700 "+(9.5*S)+"px "+FONT;
  cx.textAlign="left";cx.fillText("TOPLAM",M+5*S,y+14*S);cx.textAlign="right";
  var x6=M;for(var q=0;q<6;q++)x6+=W[q];
  cx.fillText(nf2(t.o),x6+W[6]-5*S,y+14*S);cx.fillText(nf2(t.d),x6+W[6]+W[7]-5*S,y+14*S);
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
 list.sort(function(a,b){return(a.r.barkod||"")<(b.r.barkod||"")?-1:1});
 $("hsay").textContent=list.length+" evrak gösteriliyor (toplam "+all+").";
 $("htb").innerHTML=list.length?list.map(function(o){return'<tr><td><a href="#" onclick="openDoc(\''+o.x.id+'\');return false">'+esc(o.x.name)+'</a></td><td>'+esc(o.x.tur||"Diğer")+'</td><td>'+esc(o.r.barkod)+'</td><td>'+esc(o.r.firma)+'</td><td>'+esc(o.r.proje)+'</td><td>'+df(o.x.tarih)+'</td><td><button class="s" onclick="openEv('+o.r.id+')">Başvuruya git</button></td></tr>'}).join(""):'<tr><td colspan="7" class="empty">Evrak yok.</td></tr>';
}
$("hara").oninput=renderHavuz;$("htur").onchange=renderHavuz;
$("tb1").onclick=function(){setTab("b")};$("tbm").onclick=function(){setTab("marka")};$("tbi").onclick=function(){setTab("istihdam")};$("tbf").onclick=function(){setTab("fuar")};$("tb2").onclick=function(){setTab("h")};
$("gadd").onclick=function(){addGrp(tab,$("gnew").value);$("gnew").value=""};
$("gnew").onkeydown=function(e){if(e.key==="Enter"){addGrp(tab,this.value);this.value=""}};
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
$("tbn").onclick=function(){setTab("n")};$("tbr").onclick=function(){setTab("r")};
$("r-liste").onchange=renderRapor;$("r-grup").onchange=renderRapor;
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
 $("updbox").style.display="";$("vertxt").textContent="Sürüm "+(window.TQ_VER||"?");$("updbtn").onclick=checkUpdate;setTimeout(startupPopup,1600);
}

/* ---- Bulut eşitleme (Supabase) ---- */
var SB={},PEND={up:[],del:[]},syncT=null,syncBusy=false;
function sbLoad(){
 try{SB=JSON.parse(localStorage.getItem("tq-sb")||"{}")||{}}catch(e){SB={}}
 try{PEND=JSON.parse(localStorage.getItem("tq-pend")||"null")||{up:[],del:[]}}catch(e){PEND={up:[],del:[]}}
}
function sbSave(){try{localStorage.setItem("tq-sb",JSON.stringify(SB));localStorage.setItem("tq-pend",JSON.stringify(PEND))}catch(e){}}
function stat(t){var a=$("syncst");if(a)a.textContent="Bulut eşitleme: "+t;var b=$("bulut");if(b)b.textContent="Bulut eşitleme: "+t}
function sbMsg(t){var m=$("sb-msg");if(m)m.textContent=t}
function hsh(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return h}
function stable(o){
 if(Array.isArray(o))return"["+o.map(stable).join(",")+"]";
 if(o&&typeof o==="object")return"{"+Object.keys(o).sort().map(function(k){return JSON.stringify(k)+":"+stable(o[k])}).join(",")+"}";
 return JSON.stringify(o);
}
var CALCK=["kdvd","otl","dest","sba","ebs"];
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
 out.dtur=uni(a.dtur,b.dtur);
 out.custom={};["adt","proje"].forEach(function(k){out.custom[k]=uni((a.custom||{})[k],(b.custom||{})[k])});
 out.gek={};["marka","istihdam","fuar"].forEach(function(g){out.gek[g]=uni((a.gek||{})[g],(b.gek||{})[g])});
 return out;
}
function applyDb(){
 if(!db.vis)db.vis=defVis();if(!db.custom)db.custom={};
 chips();fillTur();
 var cv=$("f-adt").value;fillMenu("adt",cv==="__new"?"":cv);
 renderEvrak();if(GR0[tab])renderG();render();if(tab==="h")renderHavuz();
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
 var url=$("sb-url").value.trim().replace(/\/+$/,""),key=$("sb-key").value.trim(),mail=$("sb-mail").value.trim(),pw=$("sb-pass").value;
 if(!url||!key||!mail||!pw){sbMsg("URL, anahtar, e-posta ve şifreyi doldur.");return}
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
  var n=new Date();stat("eşitlendi ("+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+")");
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
 $("sb-url").value=SB.url||"";$("sb-key").value=SB.key||"";$("sb-mail").value=SB.mail||"";
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
 window.addEventListener("online",schedSync);
 document.addEventListener("visibilitychange",function(){if(!document.hidden)schedSync()});
 setInterval(schedSync,60000);
 if(SB.ref){stat("bağlı, eşitleniyor...");schedSync()}else stat("kapalı (Eşitleme ayarlarından bağlan)");
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
/* ---- Acilista yaklasan sureleri gosteren pencere ---- */
function startupPopup(){
 var al=window.alL||[];
 if(!al.length)return;
 try{if(sessionStorage.getItem("tq-pop"))return;sessionStorage.setItem("tq-pop","1")}catch(e){}
 var ov=document.createElement("div");ov.className="ov";
 ov.innerHTML='<div class="dlg"><h2>Süresi yaklaşan dosyalar ('+al.length+')</h2><div class="dl">'+al.map(function(a){
  return'<div class="'+(a.g<0?"late":"soon")+'">'+esc(a.k)+": "+esc(a.t)+" – "+(a.g<0?Math.abs(a.g)+" gün önce doldu":a.g===0?"son gün bugün":a.g+" gün kaldı")+"</div>";
 }).join("")+'</div><div class="row"><button id="pop-ok">Tamam</button></div></div>';
 document.body.appendChild(ov);
 $("pop-ok").onclick=function(){ov.remove()};
 if(window.electronAPI&&"Notification" in window){
  try{new Notification("TurqTrack: süresi yaklaşan "+al.length+" dosya var",{body:al.slice(0,3).map(function(a){return a.t+" – "+(a.g<0?"süresi doldu":a.g+" gün kaldı")}).join("\n")})}catch(e){}
 }
}

localInit();


window.__tqOk=1;
