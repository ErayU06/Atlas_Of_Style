# Credits

## Imagery

88 görselin **67'si değiştirildi.** Şehir görselleri dışında **kaynağı belirsiz
veya telifli tek bir dosya kalmadı.** Geriye yalnızca 21 şehir görseli kaldı;
onların telif sorunu yok, üzerlerinde görünür bir filigran var. Envanter `docs/image-replacement.md`'de, prompt'lar `docs/image-prompts.md`'de.

Tamamlananlar: **57 ülke görselinin hepsi**, **8 dönem görselinin hepsi**, ana
sayfa kapağı ve pasaport kâğıdı — yani şehirler dışındaki 67 dosyanın tamamı.

### Yeni görseller — bizim ürettiklerimiz

67 dosyanın hepsi **Google Gemini** ile üretildi. Her birinin ham hâli imzalı
bir **C2PA kaynak kaydı** ve **SynthID** işareti taşıyordu; bu kayıtlar "Google
Generative AI" üreticisini doğruluyor. Ham dosyalar `Atlas_Of_Style_Images/`
klasöründeydi, kullanıldıktan sonra silindi — git geçmişinde imzalarıyla
duruyorlar (`efc9634`, `bc6680f`, `69dc713`, `1546484`, `fe12cfa`). Yayınlanan JPG'lerde
metadata yok (dosya boyutu için temizlendi).

**Ticari kullanım:** Gemini Apps hizmet şartlarına göre üretilen görselin
hakları kullanıcıya ait ve ticari kullanım serbest. Üçüncü bir tarafın telifi
söz konusu değil; atıf zorunluluğu yok.

#### Tarz

Hepsi **mekânda tam boy manken**: yüz hatsız, mat krem bir vitrin mankeni
üzerinde o ülkenin ya da dönemin komple kombini, arkada sığ alan derinliğiyle
eritilmiş gerçek bir mekân. Tek istisna `eras/passport-paper.jpg`, bir kâğıt
dokusu.

| Grup | Adet | Dosyalar |
| --- | --- | --- |
| Ülke görselleri | 57 | 19 ülkenin `-1`, `-2` ve `-3` dosyalarının tamamı |
| Dönemler | 8 | `era-1900`, `1920`, `1950`, `1970`, `1990`, `2000`, `2010`, `2020` |
| Ana sayfa kapağı | 1 | `eras/atlas-hero` |
| Pasaport arka planı | 1 | `eras/passport-paper` (kâğıt dokusu) |

#### Üretim sırasında reddedilen / düzeltilen iki dosya

- **`united-kingdom-1`** ilk mankenli denemede atkısı Burberry'nin tescilli ev
  ekosesine fazla yakın çıktığı için kullanılmadı. Sebebi muhtemelen
  prompt'un kendisiydi: yasak paragrafında marka adı geçiyordu ve üretici
  olumsuz talimattaki markaya kaydı. Yasak paragrafı olumlu ifadeyle yeniden
  yazıldı ("plain, original, unbranded garments; patterns are simple stripes,
  solids or original geometric motifs"), ekose setten tamamen çıkarıldı ve
  dosya yeniden üretildi. Şimdiki atkı desensiz, tek renk kalın örgü.
- **`eras/passport-paper`** gri zemine konmuş bir kâğıt yaprağının fotoğrafı
  olarak geldi; uygulama bu dosyayı 240 pikselle döşediği için gri aralıklı bir
  ızgara oluşuyordu. Kâğıdın iç kısmından 550×550'lik alan kırpılıp 1024'e
  ölçeklendi. İçeriğe dokunulmadı.

#### İçerik kontrolü

67 dosyanın hiçbirinde insan, yüz, el, ten, saç, marka logosu, tasarımcı
monogramı, ekose/tartan, okunabilir yazı veya görünür filigran yok. Her biri
büyütülerek tek tek incelendi. Mankenler yüz hatsız, mat krem; elleri de aynı
malzemeden, tırnaksız.

Kayda geçen üç ayrıntı (hiçbiri kural ihlali değil):

- `japan-1.jpg` — arka plandaki fenerlerde karakter izlenimi veren bulanık
  fırça lekeleri; %600 büyütmede bile okunabilir bir harfe dönüşmüyor.
- `norway-1.jpg` — gömleğin yan dikişinde düz terracotta bir etiket şeridi;
  üzerinde yazı ya da logo yok.
- `brazil-1.jpg` — yüzsüz başa takılı güneş gözlüğü küçük boyutta göze
  benziyor. Prompt'ta istenmişti.

### Henüz değiştirilmemiş — 21 şehir görseli

| Grup | Adet | Ne oldukları | Risk |
| --- | --- | --- | --- |
| Şehir görselleri `city-*.jpg` | 21 | **Üretilmiş**, ama hepsinde sol altta görünür `AI生成` ("YZ üretimi") filigranı var | Üçüncü taraf telifi yok; filigran uygulamanın içinde görünüyor |

Projenin ilk sürümüyle (Kimi K3) gelen ve kaynağı gösterilemeyen fotoğrafların
**tamamı değiştirildi.** Tersine görsel aramada Vogue'da yayımlanmış bir
fotoğrafla eşleşen dosya da, yayıncı filigranı taşıyan `nigeria-1` ve `japan-1`
de artık bizim ürettiklerimizle değişti.

Kural aynı kalıyor: kaynağı yukarıdaki tabloya yazılmadan hiçbir görsel depoya
girmiyor.

#### Palet notu

`spain-2`, `spain-3` ve `morocco-2`'nin arka planındaki çini, stil rehberinin
"doygun mavi ve yeşil yok" kuralının biraz dışına taşıyor. Telif ya da marka
sorunu değil, yalnızca palet sapması; dosyalar kullanıldı. Prompt'lardaki mekân
tarifi ("zellige", "tiled courtyard") bu yüzden düzeltildi — yeniden
üretilirlerse çini soluk krem ve kil tonlarında çıkacak. `spain-3` ayrıca
prompt'taki zeytinliğin yerine `spain-2` ile aynı avluyu üretti.

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
