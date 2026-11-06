# Credits

## Imagery

88 görselin **23'ü değiştirildi; 65'i hâlâ eski set.** Değiştirilmemiş
fotoğrafların telif durumu aşağıda, "Henüz değiştirilmemiş" başlığında.
Hangi dosyanın yerine ne geleceği `docs/image-replacement.md`'de, prompt'ların
tam metni `docs/image-prompts.md`'de.

### Yeni görseller — bizim ürettiklerimiz

Hepsi **Google Gemini** ile üretildi. Her dosyanın ham hâli imzalı bir **C2PA
kaynak kaydı** ve **SynthID** işareti taşıyordu; bu kayıtlar "Google Generative
AI" üreticisini doğruluyor. Ham dosyalar `Atlas_Of_Style_Images/` klasöründeydi,
kullanıldıktan sonra silindi — git geçmişinde imzalarıyla birlikte duruyorlar
(1. parti `efc9634`, 2. parti `bc6680f`), gerekirse oradan çıkarılabilir.
Yayınlanan JPG'lerde metadata yok (dosya boyutu için temizlendi).

**Ticari kullanım:** Gemini Apps hizmet şartlarına göre üretilen görselin
hakları kullanıcıya ait ve ticari kullanım serbest. Üçüncü bir tarafın telifi
söz konusu değil; atıf zorunluluğu yok.

**Tarz:** 1. parti flat lay / askılık, 2. parti mekânda tam boy manken. İkisi
yan yana durduğunda set ikiye bölünmüş görünüyor; 1. partinin dokuzu yeni tarza
göre yeniden üretilebilir (prompt'ları `docs/image-prompts.md` 3. partide).

#### 1. parti — 2026-11-06, flat lay / askılık tarzı

| Dosya | Araç | Prompt |
| --- | --- | --- |
| `public/images/eras/atlas-hero.jpg` | Google Gemini | mankenli, yeni tarza uyuyor |
| `public/images/eras/era-1920.jpg` | Google Gemini | mankenli, yeni tarza uyuyor |
| `public/images/turkiye-1.jpg` | Google Gemini | flat lay |
| `public/images/turkiye-2.jpg` | Google Gemini | flat lay |
| `public/images/france-1.jpg` | Google Gemini | askıda |
| `public/images/france-2.jpg` | Google Gemini | flat lay |
| `public/images/italy-1.jpg` | Google Gemini | flat lay |
| `public/images/united-kingdom-1.jpg` | Google Gemini | flat lay |
| `public/images/germany-1.jpg` | Google Gemini | askıda |
| `public/images/spain-1.jpg` | Google Gemini | flat lay |
| `public/images/canada-1.jpg` | Google Gemini | flat lay |

#### 2. parti — 2026-11-06, mekânda manken tarzı

| Dosya | Araç | Prompt |
| --- | --- | --- |
| `public/images/norway-1.jpg` | Google Gemini | `docs/image-prompts.md` 1. parti #1 |
| `public/images/morocco-1.jpg` | Google Gemini | 1. parti #2 |
| `public/images/nigeria-1.jpg` | Google Gemini | 1. parti #3 |
| `public/images/south-africa-1.jpg` | Google Gemini | 1. parti #4 |
| `public/images/united-states-1.jpg` | Google Gemini | 1. parti #5 |
| `public/images/mexico-1.jpg` | Google Gemini | 1. parti #6 |
| `public/images/brazil-1.jpg` | Google Gemini | 1. parti #7 |
| `public/images/japan-1.jpg` | Google Gemini | 1. parti #8 |
| `public/images/south-korea-1.jpg` | Google Gemini | 1. parti #9 |
| `public/images/china-1.jpg` | Google Gemini | 1. parti #10 |
| `public/images/india-1.jpg` | Google Gemini | 1. parti #11 |
| `public/images/australia-1.jpg` | Google Gemini | 1. parti #12 |

Bununla **ana sayfadaki 19 ülke kartının tamamı** bizim görsellerimiz oldu.

İçerik kontrolü: 23 dosyanın hiçbirinde insan, yüz, el, ten, saç, marka logosu,
tasarımcı monogramı, okunabilir yazı veya görünür filigran yok. Her biri
büyütülerek tek tek incelendi. Mankenler yüz hatsız, mat krem; elleri de aynı
malzemeden, tırnaksız.

Kayda geçen üç ayrıntı (hiçbiri kural ihlali değil):

- `japan-1.jpg` — arka plandaki fenerlerde karakter izlenimi veren bulanık
  fırça lekeleri var; %600 büyütmede bile okunabilir bir harfe dönüşmüyor.
- `norway-1.jpg` — gömleğin yan dikişinde düz terracotta bir etiket şeridi var;
  üzerinde yazı ya da logo yok, marka etiketi konumunda duruyor.
- `brazil-1.jpg` — yüzsüz başa takılı güneş gözlüğü, küçük boyutta göze
  benziyor. Prompt'ta istenmişti; `australia-1`'de aynısı şapka gölgesinde
  kalıyor.

### Henüz değiştirilmemiş — 65 dosya

Bunlar projenin ilk sürümüyle (Kimi K3) geldi ve **bizim olduğumuz
gösterilemiyor.** Üretilmiş oldukları varsayılmıştı; varsayım çoğu için yanlış
çıktı. Tersine görsel arama bir tanesini Vogue'da yayımlanmış bir fotoğrafla
eşleştirdi; filigranlı iki dosyanın ikisi de artık değiştirildi
(`nigeria-1`, `japan-1`).

| Grup | Adet | Ne oldukları | Risk |
| --- | --- | --- | --- |
| Ülke fotoğrafları (kalan) | 36 | Web'den alınmış, tanınabilir kişilerin sokak stili fotoğrafları | Telif **ve** kişilik hakkı — bunlar gerçek insanlar, izinleri yok |
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
