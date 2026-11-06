# Credits

## Imagery

88 görselin **31'i değiştirildi; 57'si hâlâ eski set.** Telif riski taşıyan
yalnızca 36'sı kaldı (ülke sayfalarının `-2` ve `-3` foto levhaları); kalan 21
şehir görselinin telif sorunu yok, yalnızca üzerlerinde görünür bir filigran
var. Envanter `docs/image-replacement.md`'de, prompt'lar `docs/image-prompts.md`'de.

Tamamlananlar: **19 ülke kartının (`-1`) hepsi**, **8 dönem görselinin hepsi**,
ana sayfa kapağı ve pasaport kâğıdı.

### Yeni görseller — bizim ürettiklerimiz

31 dosyanın hepsi **Google Gemini** ile üretildi. Her birinin ham hâli imzalı
bir **C2PA kaynak kaydı** ve **SynthID** işareti taşıyordu; bu kayıtlar "Google
Generative AI" üreticisini doğruluyor. Ham dosyalar `Atlas_Of_Style_Images/`
klasöründeydi, kullanıldıktan sonra silindi — git geçmişinde imzalarıyla
duruyorlar (`efc9634`, `bc6680f`, `69dc713`). Yayınlanan JPG'lerde metadata yok
(dosya boyutu için temizlendi).

**Ticari kullanım:** Gemini Apps hizmet şartlarına göre üretilen görselin
hakları kullanıcıya ait ve ticari kullanım serbest. Üçüncü bir tarafın telifi
söz konusu değil; atıf zorunluluğu yok.

#### Mekânda manken tarzı — 30 dosya

| Grup | Dosyalar |
| --- | --- |
| Ülke kartları `-1` | `turkiye-1`, `france-1`, `italy-1`, `germany-1`, `spain-1`, `canada-1`, `norway-1`, `morocco-1`, `nigeria-1`, `south-africa-1`, `united-states-1`, `mexico-1`, `brazil-1`, `japan-1`, `south-korea-1`, `china-1`, `india-1`, `australia-1` (18) |
| Ülke foto levhaları | `turkiye-2`, `france-2` (2) |
| Dönemler | `eras/era-1900`, `era-1920`, `era-1950`, `era-1970`, `era-1990`, `era-2000`, `era-2010`, `era-2020` (8) |
| Ana sayfa kapağı | `eras/atlas-hero` (1) |
| Pasaport arka planı | `eras/passport-paper` (1, kâğıt dokusu — manken yok) |

#### Eski tarzda kalan tek dosya

`united-kingdom-1.jpg` hâlâ 1. partinin flat lay hâli. Mankenli yenisi
üretildi ama **kullanılmadı**: atkısındaki ekose, deve tüyü zemin üzerine koyu
bantlar ve ince beyaz çizgilerle, Burberry'nin tescilli ev ekosesine fazla
yakın çıktı. Prompt bunu açıkça yasaklamasına rağmen üretici yine o deseni
verdi. Yeniden üretilmesi gerekiyor; prompt'u `docs/image-prompts.md`
3. partide.

#### Pasaport kâğıdı hakkında bir not

Üretilen dosya, gri bir zemin üzerine konmuş bir kâğıt yaprağının fotoğrafıydı.
Bu görsel uygulamada 240 piksellik karelerle **döşeniyor**, dolayısıyla olduğu
gibi kullanıldığında gri aralıklarla bölünmüş bir ızgara oluşturuyordu. Kâğıdın
iç kısmından 550×550'lik bir alan kırpılıp 1024×1024'e ölçeklendi; o hâliyle
kusursuza yakın döşeniyor. İçeriğe dokunulmadı, yalnızca kullanılabilir bölge
alındı.

#### İçerik kontrolü

31 dosyanın hiçbirinde insan, yüz, el, ten, saç, marka logosu, tasarımcı
monogramı, okunabilir yazı veya görünür filigran yok. Her biri büyütülerek
tek tek incelendi. Mankenler yüz hatsız, mat krem; elleri de aynı malzemeden,
tırnaksız.

Kayda geçen üç ayrıntı (hiçbiri kural ihlali değil):

- `japan-1.jpg` — arka plandaki fenerlerde karakter izlenimi veren bulanık
  fırça lekeleri; %600 büyütmede bile okunabilir bir harfe dönüşmüyor.
- `norway-1.jpg` — gömleğin yan dikişinde düz terracotta bir etiket şeridi;
  üzerinde yazı ya da logo yok.
- `brazil-1.jpg` — yüzsüz başa takılı güneş gözlüğü küçük boyutta göze
  benziyor. Prompt'ta istenmişti.

### Henüz değiştirilmemiş — 57 dosya

| Grup | Adet | Ne oldukları | Risk |
| --- | --- | --- | --- |
| Ülke foto levhaları `-2`, `-3` | 36 | Web'den alınmış, tanınabilir kişilerin sokak stili fotoğrafları | **Telif ve kişilik hakkı** — bunlar gerçek insanlar, izinleri yok |
| Şehir görselleri `city-*.jpg` | 21 | **Üretilmiş**, ama hepsinde sol altta görünür `AI生成` ("YZ üretimi") filigranı var | Üçüncü taraf telifi yok; filigran uygulamanın içinde görünüyor |

Kalan 36 fotoğraf projenin ilk sürümüyle (Kimi K3) geldi ve **bizim olduğumuz
gösterilemiyor.** Dosyalarda hiç EXIF, XMP veya C2PA metadata'sı yok —
commit'lenmeden önce temizlenmiş; çok farklı piksel boyutundalar, ki bu çok
kaynaktan toplanmış bir setin görüntüsüdür; ve git geçmişinde hiçbirinin
nereden geldiği yazmıyor. Tersine görsel arama bir tanesini Vogue'da
yayımlanmış bir fotoğrafla eşleştirmişti. Yayıncı filigranı taşıyan iki dosya
(`nigeria-1`, `japan-1`) artık değiştirildi.

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
