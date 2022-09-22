//SESSİON STORAGE

// Session Storage'da sekme kapatılınca veri kaybolur.
sessionStorage.setItem("key", "value");
sessionStorage.setItem("name", "Tuğçe");

sessionStorage.getItem("key");
output: Tuğçe;
sessionStorage.getItem("lastname");
output: null;

// COOKİES

// Cookie'ler bilgisayarımızda test dosyaları şeklinde depolanan verilerdir. Browser ve user arasındaki iletişim koptuğu anda çerezler de silinir.
// Çerezlere silinmesi için belli bir süre de atayabiliriz.

document.cookie = "kullanıcıAdı=Tuğçe"; // Javascript'te cookie oluşturma

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
