# 0.3.0 kontrol kaydı

28 Ekim 2026. Bu kontroller klinik hekim incelemesi veya güncel SGK/fiyat teyidi değildir.

- `node tests/check-release.cjs`: geçti. 40 benzersiz tanı, 20 tanıda 30 örnek seçenek, 10 ürün; bir maddede en çok üç piyasa adı. Eksik doğrulama tam onay sayılmıyor.
- Tarayıcıda 40 tanı bağlantısının tümü açıldı: 20'sinde örnekler, kalan 20'sinde henüz örnek eklenmedi bilgisi görüldü. Toplam 30 seçenek ve en çok üç marka sınırı doğrulandı.
- Bölüm seçimi tek pencerede çalıştı; seçim sonrası liste filtrelendi ve odak düğmeye döndü. Escape ile kapatma kontrol edildi.
- Hasta durumu penceresinde alerji/böbrek seçimi ilgili standart dozları gizledi. Seçimler kaldırılınca bilgiler geri geldi. Marka tercihi ve kişisel notun risk değişiminde korunduğu kontrol edildi.
- Türkçe karakter kullanmadan “kasik mantari” araması sonucu açılıp geri dönüldüğünde arama korundu.
- 320 piksel genişlikte çok büyük yazıyla açık/koyu/saf siyah temalar kontrol edildi. Belge genişliği 305 piksel; yatay taşma yok. Dar ekranda seçim düğmeleri alt alta düzenlendi; diyalog içeriği kendi içinde kaydırılıyor. Tam ürün adı seçimin altında satıra bölünerek gösteriliyor. Geçici ekran boyutu ayarı kaldırıldı.
- Raporlu bağlantı/bölüm ve istenmeyen geliştirme/durum rozetleri kaldırıldı. Hakkında'da karar desteği ifadesi ve kontrol kapsamı var. Hasta ve ilaç risk uyarıları korunuyor.
- Harici çalışma zamanı bağımlılığı, veri isteği, reçete kopyalama ve PWA dosyası eklenmedi.

Kaynaklar, fiyat kayıtlarının tarihleri, ürünler ve kalan içerik işleri sample-recipes-0.3.0.md ile .json dosyalarındadır.
