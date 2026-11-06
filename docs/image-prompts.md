# Görsel üretim prompt'ları

`docs/image-replacement.md` ile birlikte okunur. Her prompt **olduğu gibi
kopyalanıp yapıştırılabilir** — ortak stil kuralları her birinin içine
gömülü, ayrıca bir ön metin eklemen gerekmiyor.


## Konu: komple kombin

Her ülke ve her dönem için **tek bir eksiksiz kombin** üretiyoruz: alt (pantolon
veya etek), üst, dış giyim, ayakkabı, çanta ve en az bir aksesuar. Ülkeyi ya da
dönemi anlatan şey silüet, kumaş, dikiş ve işleme — renk değil (palet aşağıda
sabit). Kıyafetlerin hepsi **markasız ve jenerik**.

Mimari ve doku görselleri yalnızca iki yerde kaldı: pasaport arka planındaki kâğıt
dokusu ve 21 şehir görseli. Şehir görselleri şehir kartı ve şehir sayfası kapağı
olarak kullanıldığı için yer tanıtmak zorunda — oraya kombin koymak anlamsız olur.


## Sunum biçimi

Üç biçim var; hangi dosyanın hangisini kullandığı kırpma kısıtına göre seçildi
(aşağıdaki "Kırpma" bölümü).

| Biçim | Ne demek | Kaç dosya |
| --- | --- | --- |
| **Flat lay** | Tam tepeden çekim, kombin düz zeminde serili | 36 ülke |
| **Askıda** | Kısa ahşap askılık, her parça kendi askısında, ayakkabı ve çanta alt barda | 7 ülke |
| **Mankende** | Başsız ve kolsuz alçı manken, kombin giydirilmiş | 14 ülke + 8 dönem + kapak |

Ülke görsellerinin %63'ü flat lay (36/57); çeşitlilik için 7'si askıda, 14'ü
mankende. Mankenler ağırlıklı olarak `-3` dosyalarında, çünkü tek kırpması olan
ve tam boy kombine yer veren dosyalar onlar.


## Ortak stil rehberi

Bütün set tek bir görsel dilde olsun diye, her prompt'ta aynı dört blok var.

**Işık.** Tek yönden gelen yumuşak gün ışığı, uzun ve yumuşak gölgeler.
Sert flaş yok, renkli jel yok. Yüzeyler mat ve dokunulabilir: sıva, ham
keten, cilasız ahşap, taş, kâğıt.

**Renk.** Sıcak nötr taban — krem, kum, kemik, sıcak gri, yumuşak kil.
Tek vurgu rengi **terracotta `#c2603a`** (uygulamanın ana aksan rengi).
Doygun mavi, yeşil ve neon yok. **Desen ve işleme serbest, ama bu paletin
içinde:** Ankara baskısı, kilim geometrisi, Nordik yaka deseni, flamenko
fırfırı — hepsi krem/kum/kil/terracotta tonlarında basılı. Bu bir seçim:
set tek bir dilde duruyor, ülkeyi renk değil kesim ve işleme anlatıyor.

**Kompozisyon.** Tek ve net bir özne, **tam ortada**, çevresinde bol boşluk.
Ayrıntı aşağıda.

**Ruh hali.** Müze/arşiv sessizliği. Reklam değil, yaşam tarzı çekimi değil.
Editoryal ürün fotoğrafı, 50mm, f/5.6, doğal ışık, ince grenli.

**Her prompt'ta yasaklı:** insan, yüz, el, vücut parçası, ten; manken başı veya
kolu; marka logosu; **tasarımcı monogramı veya imza deseni** (Burberry tipi ev
ekosesi, LV/GG tipi monogram); yazı, harf, bakım etiketi, askı etiketi, tabela,
filigran, okunabilir herhangi bir metin.


## Kırpma — neden kompozisyon bu kadar dar tarif ediliyor

`SmartImage` aynı dosyayı yerine göre farklı oranlarda kırpıyor. 3:4 bir
dosyadan 16:10 bir şerit alındığında **yüksekliğin yalnızca ortadaki %47'si**
kalıyor. Yani kenara yaslanmış bir kompozisyonun yarısı kaybolur.

| Dosya | Hangi oranlarda kırpılıyor | Sonuç |
| --- | --- | --- |
| Ülke `-1` | 3:4 + 4:5 + 16:10 | En sıkı: her parça orta şeritte olmalı |
| Ülke `-2` | 4:5 + 16:10 | Sıkı: aynı kural |
| Ülke `-3` | yalnız 4:5 | Serbest: tam boy manken buraya |
| Dönem | 3:4 + 16:10 | Belirleyici bel hizası tam merkezde |
| `atlas-hero` | yalnız 3:4 | Üst üçte bir boş duvar (başlık oraya biniyor) |
| Şehir | 3:4 | Serbest |

Bu yüzden flat lay'ler "ortada, yüksekliğin yarısından fazla değil" diye, dönem
mankenleri de "bel çizgisi tam merkezde" diye tarif edildi.


## Hedef boyutlar

| Grup | Oran | Piksel |
| --- | --- | --- |
| Ülke `-1`, şehir, dönem, `atlas-hero` | 3:4 dikey | 1536×2048 |
| Ülke `-2`, `-3` | 4:5 dikey | 1536×1920 |
| `passport-paper` | 1:1 | 2048×2048 |

---

# 1. parti — App Store ekran görüntülerindeki 11 görsel ⭐

Bunlar mağaza görsellerinde göründüğü için önce bunlar. Tamamlandığında
yeni ekran görüntüleri de alınmalı.


## 1. `eras/atlas-hero.jpg` ⭐

*Ana sayfa kapak görseli*

```
Three headless, armless plaster dress forms side by side on low stone plinths in a bright empty gallery, each wearing a complete outfit from a different part of the world: a belted camel trench coat with straight cream trousers; a long cream silk caftan with tonal embroidery at the collar and cuffs; an oversized bone linen suit worn open over a cream shirt. A pair of shoes and a bag sit on the floor at the base of each form. Pale plaster wall behind, polished concrete floor, soft shadows pooling at the plinths.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight on in an empty plaster-walled gallery. The three forms stand in a row across the middle of the frame, the upper third of the image left as plain empty wall and the concrete floor visible below.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 2. `turkiye-1.jpg` ⭐

*Türkiye · kart + ülke kapağı*

```
A complete Istanbul street-style outfit laid out flat: an oversized cream wool blazer, a fine bone knit top, wide-leg sand trousers, terracotta leather loafers, a soft terracotta leather shoulder bag, and a long cream silk scarf whose edge carries fine tonal oya-style needle lace. A single slim metal ring sits beside the scarf.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a worn marble slab. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 3. `france-1.jpg` ⭐

*Fransa · kart + ülke kapağı*

```
A Parisian capsule outfit hanging on the rail: a belted camel trench coat, a bone cashmere crew-neck knit, straight warm-grey wool trousers. Flat dark-brown leather ballet shoes and a small structured clay leather handbag on the lower bar, a narrow cream silk scarf knotted around the end of the rail.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 4. `italy-1.jpg` ⭐

*İtalya · kart + ülke kapağı*

```
A complete Italian summer tailoring outfit laid out flat: a sand linen single-breasted blazer with a soft unpadded shoulder, a cream cotton shirt, pleated bone linen trousers, brown leather loafers with a thin sole, a woven leather belt, a tan leather document folio and a folded warm-grey silk pocket square.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 5. `united-kingdom-1.jpg` ⭐

*Birleşik Krallık · kart + ülke kapağı*

```
A complete British winter outfit laid out flat: a warm-grey wool overcoat with a wide notched lapel, a cream chunky-knit jumper, trousers in a faint warm-grey glen check, heavy dark-brown lace-up boots with a welted sole, a plain canvas-and-leather satchel, and a wool scarf in a muted bone-and-clay tartan — an anonymous traditional check, not any fashion house's signature check.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 6. `germany-1.jpg` ⭐

*Almanya · kart + ülke kapağı*

```
A minimal functional German outfit on the rail: a matte bone technical shell jacket with flat taped seams, a plain cream cotton tee, straight warm-grey trousers. Plain low-profile cream leather sneakers with no stripes or marks and a flat warm-grey crossbody pouch on the lower bar, a plain steel-strap watch with a blank dial beside them.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 7. `spain-1.jpg` ⭐

*İspanya · kart + ülke kapağı*

```
A complete Spanish summer outfit laid out flat: a clay-toned skirt with deep tiered ruffles, a cream linen blouse with a wide neckline, a short sand bolero jacket, terracotta espadrilles with jute soles, a round woven straw basket bag, a fringed cream shawl with tonal floral embroidery, and a carved wooden hair comb.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 8. `canada-1.jpg` ⭐

*Kanada · kart + ülke kapağı*

```
A complete Canadian winter outfit laid out flat: a long oatmeal down parka with a deep fur-free hood, a cream thermal base layer, a warm-grey wool overshirt, lined sand trousers, heavy brown leather winter boots with a lugged sole, undyed wool mittens, a ribbed cream beanie and a waxed clay canvas backpack.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 9. `turkiye-2.jpg` ⭐

*Türkiye · 1. fotoğraf levhası + rehber kapağı*

```
A layered mid-season Turkish outfit laid out flat: a camel trench coat, a bone cotton shirt, warm-grey tailored trousers, brown leather ankle boots, a flat woven tote whose kilim-style geometry is worked in clay and cream, and a folded cream wool shawl with tonal embroidery along one edge.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## 10. `france-2.jpg` ⭐

*Fransa · 1. fotoğraf levhası + rehber kapağı*

```
A restrained French day outfit laid out flat: a bone long-sleeved cotton top with a fine tonal stripe, straight-leg sand denim, a soft camel blazer, flat brown leather loafers, a small rectangular terracotta leather bag and a fine metal chain necklace.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## 11. `eras/era-1920.jpg` ⭐

*1920'ler · The Jazz Age*

```
A Jazz Age look: a straight drop-waist dress in bone silk, a band of tonal beading across the hip and a fringe hem that hangs still, a long rope of cream pearls over it. T-bar leather shoes and a small beaded clutch on the floor at the base; a cream silk cloche hat and a folded fan of undyed ostrich feathers rest on a low plinth beside the form.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the dropped waist seam at the hip falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


---

# 2. parti — kalan 56 fotoğraf

1. parti bittikten sonra. Sıra ülke sayfalarının görünürlüğüne göre.


## Türkiye

### 1. `turkiye-3.jpg`

*Türkiye · 2. fotoğraf levhası*

```
A long caftan-cut coat in cream silk with tonal embroidery at the collar and cuffs, worn open over a bone shirt and wide cream trousers, a narrow woven sash at the waist. Flat terracotta leather slippers and a small clay-coloured shoulder bag on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Fransa

### 2. `france-3.jpg`

*Fransa · 2. fotoğraf levhası*

```
A belted camel trench coat worn open over a bone cashmere knit and straight cream wool trousers, the belt knotted rather than buckled. Flat leather shoes and a small clay top-handle handbag on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## İtalya

### 3. `italy-2.jpg`

*İtalya · 1. fotoğraf levhası + rehber kapağı*

```
An Italian lightweight-wool outfit on the rail: an unlined warm-grey wool jacket, a cream poplin shirt, pleated sand trousers. Suede loafers and a soft tan leather weekend bag on the lower bar, a folded clay silk tie over the rail.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 4. `italy-3.jpg`

*İtalya · 2. fotoğraf levhası*

```
A pale sand linen suit worn open over a cream shirt with no tie, the jacket falling loose and the trousers pleated. Brown leather loafers and a soft tan leather briefcase on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Birleşik Krallık

### 5. `united-kingdom-2.jpg`

*Birleşik Krallık · 1. fotoğraf levhası + rehber kapağı*

```
A British tailoring-and-rebellion outfit on the rail: a double-breasted warm-grey wool coat, a fine cream merino polo neck, straight dark trousers. Chunky black-brown lace-up boots and a plain leather holdall on the lower bar.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 6. `united-kingdom-3.jpg`

*Birleşik Krallık · 2. fotoğraf levhası*

```
A warm-grey wool overcoat worn open over a cream cable-knit jumper and faint-check trousers, a muted bone-and-clay tartan scarf hanging around the form's neckline. Heavy lace-up boots and a canvas satchel on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Almanya

### 7. `germany-2.jpg`

*Almanya · 1. fotoğraf levhası + rehber kapağı*

```
A clean-lined German outfit laid out flat: an unlined warm-grey wool coat, a bone merino long-sleeve, tapered sand trousers, minimal cream leather sneakers, a flat bone canvas tote and a plain dark-brown leather belt with an unmarked buckle. Nothing decorative; every piece plain.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on smooth pale concrete. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 8. `germany-3.jpg`

*Almanya · 2. fotoğraf levhası*

```
A straight bone cotton overshirt buttoned over a cream tee and straight warm-grey trousers, no ornament anywhere, hems cut square. Plain cream leather sneakers and a flat warm-grey pouch on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## İspanya

### 9. `spain-2.jpg`

*İspanya · 1. fotoğraf levhası + rehber kapağı*

```
An everyday Spanish outfit laid out flat: a bone linen shirt-dress, a woven leather belt, flat cream espadrilles, a round straw bag and a folded embroidered shawl in clay and cream.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 10. `spain-3.jpg`

*İspanya · 2. fotoğraf levhası*

```
A long clay-toned dress with deep tiered ruffles at the hem, a fringed embroidered cream shawl draped over one shoulder and pinned. Terracotta espadrilles and a round woven straw basket on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Norveç

### 11. `norway-1.jpg`

*Norveç · kart + ülke kapağı*

```
A complete Norwegian cold-weather outfit laid out flat: an undyed cream wool sweater with a tonal Nordic yoke pattern knitted in sand and clay, a bone merino base layer, straight warm-grey wool trousers, sturdy brown leather hiking boots, a waxed sand canvas rucksack, undyed knitted mittens and a ribbed wool hat.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 12. `norway-2.jpg`

*Norveç · 1. fotoğraf levhası + rehber kapağı*

```
A Norwegian layering outfit on the rail: a matte sand shell jacket, the patterned cream wool sweater, straight wool trousers. Brown leather boots on the lower bar and a waxed canvas rucksack hooked over the end of the rail.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 13. `norway-3.jpg`

*Norveç · 2. fotoğraf levhası*

```
The Norwegian three-layer system laid out as a complete outfit: a bone merino base layer, a cream wool sweater with a tonal Nordic yoke, a matte sand shell jacket, wool trousers, brown leather boots, undyed mittens and a ribbed hat.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards, the complete outfit arranged in the centre of the frame with generous empty margin on all four sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Fas

### 14. `morocco-1.jpg`

*Fas · kart + ülke kapağı*

```
A complete Moroccan outfit laid out flat: a long sand djellaba-cut robe with a pointed hood and tonal embroidery down the placket, a cream cotton tunic, loose bone trousers, terracotta leather babouche slippers, a woven clay shoulder bag finished with tassels, and a fine cream wool wrap.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 15. `morocco-2.jpg`

*Fas · 1. fotoğraf levhası + rehber kapağı*

```
A Moroccan caftan outfit laid out flat: a long caftan in tonal cream-and-clay stripes with a hand-knotted sfifa trim, a narrow woven belt, flat leather slippers, a tasselled woven bag and a hammered metal cuff.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 16. `morocco-3.jpg`

*Fas · 2. fotoğraf levhası*

```
An embroidered cream caftan with a wide tonal clay border at the hem and cuffs, a fine wool wrap over one shoulder, a narrow woven belt at the waist. Terracotta babouche slippers and a tasselled woven bag on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Nijerya

### 17. `nigeria-1.jpg`

*Nijerya · kart + ülke kapağı*

```
A complete Nigerian two-piece outfit laid out flat, its bold wax-print geometry printed entirely in cream, sand, clay and terracotta: a structured peplum top with sharp shoulders and a long wrapper skirt, plus a length of matching cloth folded into a sculptural head wrap. Terracotta leather mules, a small structured clay leather bag and a beaded bone bracelet complete it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 18. `nigeria-2.jpg`

*Nijerya · 1. fotoğraf levhası + rehber kapağı*

```
A Nigerian outfit laid out flat: a long wax-print kaftan whose tonal clay geometry reads as texture, a folded length of the same cloth for a head wrap, flat leather sandals, a beaded cuff in bone and terracotta, and a small structured clay bag.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 19. `nigeria-3.jpg`

*Nijerya · 2. fotoğraf levhası*

```
A structured wax-print two-piece — sharp-shouldered peplum top and long wrapper skirt, the print worked in cream, clay and terracotta — worn on the form. A matching head wrap folded into a sculptural shape rests on a low plinth beside it; terracotta leather mules and a small clay bag sit on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Güney Afrika

### 20. `south-africa-1.jpg`

*Güney Afrika · kart + ülke kapağı*

```
A complete South African street outfit laid out flat: a bone cotton overshirt, a plain cream tee, very wide sand trousers, chunky unbranded cream-and-clay leather sneakers, a cream canvas bucket hat, a small clay crossbody bag, and a beaded collar necklace strung in bone and terracotta beads.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on smooth pale concrete. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 21. `south-africa-2.jpg`

*Güney Afrika · 1. fotoğraf levhası + rehber kapağı*

```
A relaxed South African warm-weather outfit laid out flat: a lightweight sand utility jacket, a plain cream tee, loose knee-length shorts, flat leather sandals, a cream canvas tote and two beaded bracelets.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 22. `south-africa-3.jpg`

*Güney Afrika · 2. fotoğraf levhası*

```
A beadwork-led South African outfit laid out flat: a wide beaded collar and a beaded cuff in bone and terracotta, a folded cream cotton wrap skirt, a plain bone tee, flat leather sandals and a small clay pouch.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth, the complete outfit arranged in the centre of the frame with generous empty margin on all four sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## ABD

### 23. `united-states-1.jpg`

*ABD · kart + ülke kapağı*

```
A complete American denim outfit laid out flat: a sand denim trucker jacket, a plain cream heavyweight tee, straight bone denim jeans, high-top canvas sneakers in cream with a plain rubber toe, a terracotta canvas duffle bag, a plain cream baseball cap with no front graphic, and a leather belt with an unmarked buckle.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 24. `united-states-2.jpg`

*ABD · 1. fotoğraf levhası + rehber kapağı*

```
An American sportswear outfit laid out flat: a warm-grey hooded sweatshirt with no print, straight sand jeans, plain cream low-top sneakers, a flat nylon crossbody bag and a plain cap.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on smooth pale concrete. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 25. `united-states-3.jpg`

*ABD · 2. fotoğraf levhası*

```
A denim-led American outfit laid out flat: a sand denim trucker jacket, two folded pairs of bone and sand jeans showing their selvedge edges, a plain cream tee, canvas high-top sneakers and a leather belt.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards, the complete outfit arranged in the centre of the frame with generous empty margin on all four sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Kanada

### 26. `canada-2.jpg`

*Kanada · 1. fotoğraf levhası + rehber kapağı*

```
A Canadian layered outfit laid out flat: a quilted bone vest, a cream flannel overshirt in a muted tonal check, straight warm-grey trousers, brown leather winter boots, thick undyed wool socks and knitted mittens.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 27. `canada-3.jpg`

*Kanada · 2. fotoğraf levhası*

```
A long oatmeal down parka worn open over a warm-grey wool overshirt and lined sand trousers, a ribbed cream scarf tucked at the neckline. Heavy brown winter boots and a waxed clay canvas backpack on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Meksika

### 28. `mexico-1.jpg`

*Meksika · kart + ülke kapağı*

```
A complete Mexican outfit laid out flat: a cream cotton guayabera-style shirt with four patch pockets and vertical pleated panels, bone linen trousers, a sand blouse folded beside them carrying dense tonal clay floral hand embroidery, woven leather huarache sandals, a woven palm hat, a striped clay-and-cream woven tote and a hammered metal bangle.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 29. `mexico-2.jpg`

*Meksika · 1. fotoğraf levhası + rehber kapağı*

```
A Mexican embroidered outfit laid out flat: a cream cotton blouse with tonal clay floral hand embroidery across the yoke, a long bone cotton skirt, woven leather huaraches, a woven palm hat and a striped woven tote.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 30. `mexico-3.jpg`

*Meksika · 2. fotoğraf levhası*

```
A hand-embroidered cream cotton blouse over a long tiered bone skirt, a narrow woven sash at the waist. Woven leather huaraches, a palm hat and a striped woven tote on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Brezilya

### 31. `brazil-1.jpg`

*Brezilya · kart + ülke kapağı*

```
A complete Brazilian warm-weather outfit laid out flat: a loose cream linen shirt, a bone cotton tank, wide sand drawstring trousers, flat terracotta rubber-soled sandals, a woven straw beach tote, a folded cream cotton sarong and plain-framed round sunglasses.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 32. `brazil-2.jpg`

*Brezilya · 1. fotoğraf levhası + rehber kapağı*

```
A Brazilian beach-to-street outfit laid out flat: a cropped bone crochet top, a long clay wrap skirt, flat terracotta sandals, a woven straw tote and plain-framed sunglasses.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 33. `brazil-3.jpg`

*Brezilya · 2. fotoğraf levhası*

```
A long bone crochet dress with an open, airy stitch, a cream cotton sarong knotted at the hip over it. Flat terracotta sandals and a woven straw tote on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Japonya

### 34. `japan-1.jpg`

*Japonya · kart + ülke kapağı*

```
A complete Japanese avant-garde outfit laid out flat: an oversized bone cotton coat with an asymmetric off-centre closure, a cream wide-sleeved top, wide cropped trousers in warm-grey selvedge denim with the selvedge edge showing at the cuff, thick-soled black-brown leather sandals, a square cream canvas shoulder bag and a wide clay obi-style fabric belt.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on smooth pale concrete. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 35. `japan-2.jpg`

*Japonya · 1. fotoğraf levhası + rehber kapağı*

```
A layered Japanese outfit laid out flat: a wrap-front bone jacket, a long cream tunic, wide warm-grey trousers, split-toe boots in dark brown, and a folded furoshiki wrapping cloth in tonal clay.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 36. `japan-3.jpg`

*Japonya · 2. fotoğraf levhası*

```
An oversized asymmetric bone cotton coat worn open over a cream wide-sleeved top and wide cropped selvedge-denim trousers, a wide clay obi-style belt wrapped twice at the waist. Thick-soled sandals and a square cream canvas bag on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Güney Kore

### 37. `south-korea-1.jpg`

*Güney Kore · kart + ülke kapağı*

```
A tonal K-fashion outfit on the rail, every piece a shade of the same cream: an oversized single-breasted bone blazer, a fine cream knit top, wide-leg cream trousers. Plain cream leather loafers and a small structured bone shoulder bag on the lower bar, a slim leather belt over the rail.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 38. `south-korea-2.jpg`

*Güney Kore · 1. fotoğraf levhası + rehber kapağı*

```
A Korean layered street outfit laid out flat: a long warm-grey wool coat, a cream hoodie with no print, straight sand trousers, chunky cream sneakers, a small crossbody bag and a plain cap.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on smooth pale concrete. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 39. `south-korea-3.jpg`

*Güney Kore · 2. fotoğraf levhası*

```
An oversized tonal cream suit — soft-shouldered blazer and wide-leg trousers — worn over a fine cream knit, the sleeves long and the line deliberately loose. Plain cream leather loafers and a small structured bone bag on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Çin

### 40. `china-1.jpg`

*Çin · kart + ülke kapağı*

```
A complete Chinese outfit laid out flat: a cream silk jacket with a stand collar and tonal frog fastenings, a bone silk shell top, straight sand trousers, flat cream shoes with tonal embroidery, a small structured clay silk-covered bag, a pale carved stone pendant on a silk cord, and a folded silk scarf with tonal cloud motifs.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 41. `china-2.jpg`

*Çin · 1. fotoğraf levhası + rehber kapağı*

```
A Chinese silk outfit laid out flat: a long bone silk dress with a stand collar and a side fastening, a short clay silk jacket, flat embroidered shoes and a small beaded clutch.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 42. `china-3.jpg`

*Çin · 2. fotoğraf levhası*

```
A cream silk jacket with a stand collar and tonal frog fastenings worn over a long bone silk skirt, a narrow silk sash at the waist. Flat embroidered shoes and a small silk-covered clay bag on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on against a plain plaster wall, wearing the complete look; the shoes and bag sit on the floor at its base. Centred in the frame with generous empty margin on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Hindistan

### 43. `india-1.jpg`

*Hindistan · kart + ülke kapağı*

```
A complete Indian outfit laid out flat: six metres of bone silk sari cloth gathered into soft pleats with a wide tonal clay border, a fitted cream blouse, a long sand kurta, straight bone churidar trousers, flat embroidered leather mojari slippers, a beaded clutch in cream and terracotta, and a set of fine metal bangles.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 44. `india-2.jpg`

*Hindistan · 1. fotoğraf levhası + rehber kapağı*

```
An Indian outfit on the rail: a long cream kurta with tonal clay embroidery at the placket, a folded length of bone sari silk draped over the rail, straight churidar trousers. Embroidered mojari slippers on the lower bar and a stack of fine bangles over the rail's end.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

A short wooden clothes rail seen straight on, filling the middle of the frame: each garment on its own plain wooden hanger side by side, the shoes and bag resting on the rail's own lower bar. The whole group stays inside the middle half of the frame with plain empty wall above and below, because the same file is cropped to 4:5 and to a wide 16:10 band through the centre.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 45. `india-3.jpg`

*Hindistan · 2. fotoğraf levhası*

```
An Indian textile outfit laid out flat: three folded lengths of cream, sand and clay silk, each with a woven tonal metallic-thread border, with a fitted cream blouse, embroidered mojari slippers and a stack of fine bangles alongside.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth, the complete outfit arranged in the centre of the frame with generous empty margin on all four sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Avustralya

### 46. `australia-1.jpg`

*Avustralya · kart + ülke kapağı*

```
A complete Australian coastal outfit laid out flat: a cream linen shirt, a bone linen tank, wide sand linen trousers, flat tan leather slides, a wide-brimmed straw hat, a woven jute tote and plain-framed sunglasses.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a length of undyed linen cloth. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 47. `australia-2.jpg`

*Avustralya · 1. fotoğraf levhası + rehber kapağı*

```
An easy Australian outfit laid out flat: a long cream linen dress, a sand linen overshirt, flat tan leather slides, a wide-brimmed straw hat and a woven jute tote.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on a sheet of warm cream paper. The complete outfit is arranged as one compact group across the middle of the frame, no taller than half the image height, with empty background above and below. The same file is cropped to 4:5 and to a wide 16:10 band through the centre, so every piece has to sit inside that central band.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 48. `australia-3.jpg`

*Avustralya · 2. fotoğraf levhası*

```
An Australian linen outfit laid out flat: a cream linen shirt and a sand linen overshirt folded open, wide bone linen trousers, a knitted cotton tank, flat leather slides, a straw hat and a jute tote.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

Shot straight down from directly above on pale unvarnished timber boards, the complete outfit arranged in the centre of the frame with generous empty margin on all four sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```


## Dönem ve genel

### 49. `eras/era-1900.jpg`

*1900'ler · La Belle Époque*

```
A La Belle Époque look: a floor-sweeping gored skirt in bone linen, a high-necked cream blouse with a lace collar and leg-of-mutton sleeves, a fitted warm-grey jacket tightly nipped at the waist. Buttoned brown leather ankle boots and a small beaded drawstring purse on the floor at the base, and a wide-brimmed straw hat trimmed with cream ribbon on a low stand beside the form.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the tightly nipped S-curve waist falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 50. `eras/era-1950.jpg`

*1950'ler · The New Look*

```
A New Look outfit: a full circle skirt in heavy bone cotton held out by a stiffened petticoat, a fitted cream blouse with a small collar, a wide clay leather belt cinching the waist, a short warm-grey jacket over it. Pointed low-heeled leather shoes and a structured clay top-handle handbag on the floor at the base; short cream gloves and a pillbox hat on a low plinth beside the form.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the wide cinched waist belt falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 51. `eras/era-1970.jpg`

*1970'ler · Free Spirit*

```
A Free Spirit look: high-waisted flared trousers in warm sand corduroy, a fitted cream rib-knit top, a fringed clay suede jacket worn open, a printed silk scarf in tonal cream and terracotta paisley knotted at the neckline. Stacked-heel brown leather boots and a round woven shoulder bag with a long strap on the floor at the base, tinted round sunglasses with plain frames beside them.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the high waistband where the flare begins falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 52. `eras/era-1990.jpg`

*1990'lar · Minimal & Grunge*

```
A Minimal-and-Grunge look: a bias-cut bone satin slip dress, an oversized flannel overshirt in a muted cream-and-clay check hanging open over it, a fine chain choker at the neckline. Chunky dark-brown lace-up boots and a small shoulder bag on a thin strap on the floor at the base.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the slip dress's natural waist inside the open shirt falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 53. `eras/era-2000.jpg`

*2000'ler · Y2K*

```
A Y2K look: low-rise straight sand denim with a wide unmarked buckle belt, a cropped top in soft pewter-grey metallic jersey, a cropped cream shearling shrug over it. Chunky-soled cream sandals and a tiny clay baguette shoulder bag on the floor at the base, tinted micro sunglasses with plain frames beside them.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the low-rise waistband and the gap below the cropped top falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 54. `eras/era-2010.jpg`

*2010'lar · Street Meets Runway*

```
A Street-Meets-Runway look: an oversized cream hoodie with no print, a longline warm-grey tailored coat open over it, tapered sand trousers. Plain cream leather low-top sneakers and a small nylon crossbody bag on the floor at the base, a plain cream cap on a low plinth beside the form.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the open front of the longline coat at hip height falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 55. `eras/era-2020.jpg`

*2020'ler · The Quiet Wardrobe*

```
A Quiet Wardrobe look: an oversized matte bone technical suit — soft-shouldered jacket and wide trousers — over a sculptural cream knit with an exaggerated collar. Plain clay leather slip-ons and a soft unstructured tote on the floor at the base; a sand overshirt folded on a low plinth beside the form shows neat tonal darning and visible running-stitch mending.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. Pattern and embroidery are welcome but must stay inside that palette. No saturated blue, green or neon.

One headless, armless plaster dress form seen straight on in an empty plaster-walled room, wearing the complete look; the shoes and bag sit on the floor at its base. Frame it so the suit's dropped waist falls in the exact vertical centre of the image: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial garment photography, 50mm, f/5.6, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. Any dress form is a headless, armless mannequin in pale matte plaster. Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 56. `eras/passport-paper.jpg`

*Pasaport arka planı*

```
A plain sheet of warm cream laid paper photographed flat and evenly lit, its fibres and faint laid lines visible. Nothing printed on it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Flat, even and edge to edge — a background texture with no subject, tiled behind other content.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 1:1 square, 2048×2048.
```


---

# 3. parti — 21 şehir görseli

Telif riski yok; sorun yalnızca üzerlerindeki `AI生成` filigranı. En son bunlar.

Bunlar kombin değil **yer** görselleri: şehir kartı ve şehir sayfası kapağı
olarak şehri tanıtmak zorundalar. Işık, palet ve yasak listesi diğerleriyle aynı.

Hepsi **3:4 dikey, 1536×2048**.


### 1. `city-bangalore.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A tree-lined Bangalore street with a quiet café frontage, dappled light through the canopy. No signage, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 2. `city-beijing.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A narrow Beijing hutong of grey brick with a single red-painted doorway, soft morning light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 3. `city-cairns.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Palms and tropical planting along the Cairns esplanade, bright even light, the sea just visible beyond.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 4. `city-cappadocia.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Cappadocia's fairy chimneys at sunrise with hot air balloons drifting high above, warm light across the tufa. No people on the ground.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 5. `city-delhi.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A narrow Old Delhi bazaar lane with a cycle rickshaw at rest and spice sacks along the wall, warm dusty light. Nobody in frame.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 6. `city-guangzhou.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A covered Guangzhou market lane lit by warm hanging lamps, produce crates stacked along it. No stallholders, no readable signs.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 7. `city-istanbul.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A red nostalgic tram standing on empty cobbles in Istanbul at first light, shutters still closed along the street.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 8. `city-los-angeles.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A row of tall palms along a Los Angeles sidewalk against a pastel stucco façade, late afternoon sun.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 9. `city-manaus.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Brightly painted riverboats moored at Manaus, the Amazon wide behind them, warm late light. No signage, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 10. `city-melbourne.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A Melbourne laneway of layered spray paint and brick, treated as colour and texture, overcast light. No legible words, nobody in it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 11. `city-miami.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Pastel Art Deco façades along Miami Beach in low golden light, clean geometry, empty pavement.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 12. `city-montreal.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A snow-covered street in Vieux-Montréal, stone façades and iron railings under fresh snow, soft grey light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 13. `city-mugla.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Wooden gulet boats moored in a Bodrum harbour, coiled ropes on the quay, early morning calm.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 14. `city-mumbai.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The curve of Marine Drive and its sea wall at dusk, lights beginning along the sweep, calm water.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 15. `city-new-york.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Yellow taxis and rising steam on a New York avenue at dusk, wet asphalt, warm reflected light. No people, no readable signage.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 16. `city-rio.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The black and white wave mosaic of the Copacabana promenade with Sugarloaf in the haze beyond, morning light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 17. `city-sao-paulo.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The architectural line of Avenida Paulista, towers receding into soft haze, flat overcast light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 18. `city-shanghai.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The Pudong skyline across the water from the Bund at dusk, lights coming on, still water. No people on the promenade.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 19. `city-sydney.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Sydney Harbour in early morning light, the Opera House shells pale against the water, the bridge soft in the distance.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 20. `city-toronto.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The CN Tower against a wide winter sky, seen from a quiet street below, cool flat daylight.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```


### 21. `city-vancouver.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The Vancouver seawall with mountains rising beyond, low cloud, soft northern light. Empty path.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. No brand logos, no designer monograms or signature house patterns, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```
