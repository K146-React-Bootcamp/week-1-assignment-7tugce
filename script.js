//SESSİON STORAGE

// Session Storage'da sekme kapatılınca veri kaybolur.
sessionStorage.setItem('key', 'value');
sessionStorage.setItem('name', 'Tuğçe');

sessionStorage.getItem('key'); output: Tuğçe
sessionStorage.getItem('lastname');  output: null

// COOKİES

// Veri bilgisayara özgüdür. Server bu bilgisayara özgü veriyi okur ve gönderir. Kalıcılığı tanımlı kimlik değişene kadardır.

cookie = await cookieStore . get(name1) 
await cookieStore . set(name1, value) 