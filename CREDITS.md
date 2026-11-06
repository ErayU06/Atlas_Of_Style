# Credits

## Imagery

88 görselin 11'i değiştirildi; **77'si hâlâ eski set.** Değiştirilmemiş
fotoğrafların telif durumu aşağıda, "Henüz değiştirilmemiş" başlığında.
Hangi dosyanın yerine ne geleceği `docs/image-replacement.md`'de, prompt'ların
tam metni `docs/image-prompts.md`'de.

### Yeni görseller — bizim ürettiklerimiz

Hepsi **Google Gemini** ile üretildi (2026-11-06). Her dosyanın ham hâli
imzalı bir **C2PA kaynak kaydı** ve **SynthID** işareti taşıyordu; bu
kayıtlar "Google Generative AI" üreticisini doğruluyor. Ham dosyalar
`Atlas_Of_Style_Images/` klasöründeydi, kullanıldıktan sonra silindi — git
geçmişinde `efc9634` commit'inde imzalarıyla birlikte duruyorlar, gerekirse
oradan çıkarılabilir. Yayınlanan JPG'lerde metadata yok (dosya boyutu için
temizlendi).

**Ticari kullanım:** Gemini Apps hizmet şartlarına göre üretilen görselin
hakları kullanıcıya ait ve ticari kullanım serbest. Üçüncü bir tarafın
telifi söz konusu değil; atıf zorunluluğu yok.

| Dosya | Araç | Prompt | Üretim | Ticari kullanım |
| --- | --- | --- | --- | --- |
| `public/images/eras/atlas-hero.jpg` | Google Gemini | `docs/image-prompts.md` 1. parti #1 | 2026-11-06 | İzinli |
| `public/images/turkiye-1.jpg` | Google Gemini | 1. parti #2 | 2026-11-06 | İzinli |
| `public/images/france-1.jpg` | Google Gemini | 1. parti #3 | 2026-11-06 | İzinli |
| `public/images/italy-1.jpg` | Google Gemini | 1. parti #4 | 2026-11-06 | İzinli |
| `public/images/united-kingdom-1.jpg` | Google Gemini | 1. parti #5 | 2026-11-06 | İzinli |
| `public/images/germany-1.jpg` | Google Gemini | 1. parti #6 | 2026-11-06 | İzinli |
| `public/images/spain-1.jpg` | Google Gemini | 1. parti #7 | 2026-11-06 | İzinli |
| `public/images/canada-1.jpg` | Google Gemini | 1. parti #8 | 2026-11-06 | İzinli |
| `public/images/turkiye-2.jpg` | Google Gemini | 1. parti #9 | 2026-11-06 | İzinli |
| `public/images/france-2.jpg` | Google Gemini | 1. parti #10 | 2026-11-06 | İzinli |
| `public/images/eras/era-1920.jpg` | Google Gemini | 1. parti #11 | 2026-11-06 | İzinli |

Her biri için ChatGPT (gpt-image) ile üretilmiş ikinci bir sürüm de vardı;
uygulamadaki üç kırpmada (3:4, 4:5, 16:10) Gemini sürümleri daha iyi durduğu
ve prompt'un istediği komple kombini eksiksiz verdiği için onlar seçildi.
ChatGPT sürümleri de aynı commit'te, git geçmişinde duruyor.

İçerik kontrolü: hiçbirinde insan, yüz, el, marka logosu, tasarımcı
monogramı, okunabilir yazı veya görünür filigran yok. Tek tek büyütülerek
bakıldı.

### Henüz değiştirilmemiş — 77 dosya

Bunlar projenin ilk sürümüyle (Kimi K3) geldi ve **bizim olduğumuz
gösterilemiyor.** Üretilmiş oldukları varsayılmıştı; varsayım çoğu için
yanlış çıktı. Tersine görsel arama bir tanesini Vogue'da yayımlanmış bir
fotoğrafla eşleştirdi, iki dosyada da yayıncının kendi filigranı karenin
içine gömülü çıktı:

| Dosya | Filigran |
| --- | --- |
| `public/images/nigeria-1.jpg` | **BN style** (BellaNaija Style) |
| `public/images/japan-1.jpg` | **TokyoFashion.com** |

| Grup | Adet | Ne oldukları | Risk |
| --- | --- | --- | --- |
| Ülke fotoğrafları (kalan) | 48 | Web'den alınmış, tanınabilir kişilerin sokak stili fotoğrafları | Telif **ve** kişilik hakkı — bunlar gerçek insanlar, izinleri yok |
| Dönem görselleri (kalan) | 7 | Editoryal ve stüdyo moda fotoğrafları, üretim işareti yok | Aynı telif sınıfı; kaynağı bilinmiyor |
| `eras/passport-paper.jpg` | 1 | Düz kâğıt dokusu | Düşük, ama doğrulanmamış |
| Şehir görselleri `city-*.jpg` | 21 | **Üretilmiş**, ama hepsinde sol altta görünür `AI生成` ("YZ üretimi") filigranı var | Üçüncü taraf telifi yok; filigran uygulamanın içinde görünüyor |

Üç ayrı işaret aynı yöne bakıyor: dosyalarda hiç EXIF, XMP veya C2PA
metadata'sı yok — commit'lenmeden önce temizlenmiş; 35 farklı piksel
boyutundalar, ki bu çok kaynaktan toplanmış bir setin görüntüsüdür, tek bir
üreticinin çıktısı değil; ve git geçmişinde hiçbirinin nereden geldiği
yazmıyor.

Hiçbiri lisanslı sayılmamalı. Buradan sonraki kural: kaynağı yukarıdaki
tabloya yazılmadan hiçbir görsel depoya girmiyor.

## App icon

`assets/icon.svg` is original artwork supplied by the project owner. Everything
else in `assets/` is generated from it — see `assets/README.md` for how, and why
the Android foreground is scaled the way it is.

| File | Origin |
| --- | --- |
| `assets/icon.svg` | Original artwork, supplied by the project owner |
| `assets/icon.png`, `icon-foreground.*`, `icon-background.png` | Generated from `icon.svg` by `@capacitor/assets` |
| `assets/ios/AppIcon.appiconset/` | Generated from `icon.svg` |

## Typefaces

- **Inter** — SIL Open Font License 1.1, bundled via `@fontsource/inter`

Served from the app's own bundle rather than fetched from Google Fonts, so no
request leaves the device for it and no IP address reaches a third party when
the app opens.

Playfair Display was listed here until it turned out never to have reached
the page: `.font-serif` is declared in `@layer base`, which Tailwind hoists
above its own utility of the same name, so the utility won and headings have
always resolved to `ui-serif` — New York on iOS. It was being downloaded on
every launch and discarded. The dead rule and the font are both gone.
