# Reçete Destek

Yalnızca hekimler için, acil taburculuk odaklı tek dosyalık örnek reçete karar desteği.

[Uygulamayı aç](https://caliptra79.github.io/recetedestek/)

Sürüm 0.3.0: 40 tanı; 20 tanıda 30 örnek seçenek ve beş etken madde grubunda 10 ticari ürün. Her etken maddede en fazla üç piyasa adı bulunur. Bunlar bağımsız klinik onay veya SGK geri ödeme garantisi değildir. Kaynak ve kontrol kapsamı uygulamanın Hakkında bölümünde açıklanır; tam doğrulama işareti kullanılmaz.

- Bölümler ve hasta durumları ayrı seçim pencerelerinde açılır; yatay kategori şeridi kaldırılmıştır.
- Hasta durumuna göre kaynaklı uyarılar ve standart doz gizleme; otomatik bireysel uygunluk verilmez.
- Marka seçimi form/ambalajı gösterir. Tablet kutu hesabı örnekteki toplam miktara dayanır. Krem/jel tüp adedi uygulama alanına göre hekimce belirlenir.
- Arama/filtre/konum korunur. Notlar, hasta durumu ve marka seçimleri yalnız sayfa belleğindedir; görünüm ayarları yerel depolamaya yazılır.
- Raporlu kronik tedavi yenileme bölümü kaldırılmıştır. PWA dosyası üretilmez.

[Ürün, tanı, kaynak ve kalan iş raporu](docs/sample-recipes-0.3.0.md) · [Denetim verisi](docs/sample-recipes-0.3.0.json)

Çalışan uygulama yalnız index.html dosyasıdır. Harici bağımlılık, derleme, font/CDN, analitik veya veri servisi yoktur. GitHub Pages main / kök dizinden yayımlar. Belge ve testler çalışma zamanında yüklenmez. Kontrol: node tests/check-release.cjs.

Telif sahibi ve lisans türü kullanıcı tarafından belirlenecektir.

**Karar destek aracıdır, son karar hekime aittir.**
