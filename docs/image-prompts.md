# Görsel üretim prompt'ları

`docs/image-replacement.md` ile birlikte okunur. Her prompt **olduğu gibi
kopyalanıp yapıştırılabilir** — ortak kurallar her birinin içine gömülü.


## Tarz: mekânda manken

Her görselde **tam boy bir vitrin mankeni** var, üzerinde o ülkenin ya da
dönemin tarzını taşıyan **komple bir kombin**: üst, alt, dış giyim, ayakkabı,
çanta ve en az bir aksesuar. Arka plan o yerin havasını veren gerçek bir
mekân — sokak, mimari, doğa ya da iç mekân — ve **sığ alan derinliğiyle hafif
bulanık**; manken net ve ön planda.

Flat lay ve askılık bırakıldı. Aynı ülkenin üç görselinde **farklı kombin ve
farklı mekân** var.

**Manken:** yüz hatları olmayan, pürüzsüz soyut kafalı ya da boyundan kesilmiş,
mat krem-beyaz bir vitrin mankeni. Kolları ve elleri de aynı mat malzemeden,
sadeleştirilmiş. Gerçek yüz, ten, saç veya insan eli yok.


## Ortak stil rehberi

**Işık.** Tek yönden gelen yumuşak doğal gün ışığı, uzun ve yumuşak gölgeler.
Sert flaş yok, renkli jel yok.

**Renk.** Sıcak nötr taban — krem, kum, kemik, sıcak gri, yumuşak kil. Mekân
kendi yumuşak yerel renklerini taşıyabilir ama bu ailenin içinde kalır. Tek
güçlü vurgu rengi **terracotta `#c2603a`**. Doygun mavi, yeşil ve neon yok.
Desen ve işleme serbest, ama paletin içinde.

**Objektif.** 85mm, f/2.0 — arka planı eritecek kadar sığ alan derinliği.

**Ruh hali.** Müze/arşiv sessizliği. Reklam değil, yaşam tarzı çekimi değil.

**Her prompt'ta yasaklı:** gerçek insan, yüz, el, ten, saç; marka logosu;
tasarımcı monogramı veya imza deseni (Burberry tipi ev ekosesi, LV/GG tipi
monogram); yazı, harf, tabela, afiş, plaka, bakım etiketi, filigran, okunabilir
herhangi bir metin. Ayrıca **tek bir ünlü yapının kadraj ortasında durduğu
kompozisyon yok** — yer, atmosferinden ve malzemesinden tanınmalı.


## Kırpma — ve bu tarzın tek ödünü

`SmartImage` aynı dosyayı yerine göre farklı oranlarda kırpıyor. 3:4 bir
dosyadan 16:10 şerit alındığında **yüksekliğin yalnızca ortadaki %47'si**
kalıyor.

Tam boy bir manken bu şeride sığmaz — geometri buna izin vermiyor. Bu yüzden
prompt'lar şunu istiyor: **bel çizgisi tam dikey merkezde, çanta kalça
hizasında.** Böylece 16:10 şeritte dış giyim, üst, alt ve çanta görünüyor;
kadrajın dışında kalan yalnızca baş ve ayakkabılar oluyor. Kombin kesilmiyor,
çerçeve kırpıyor.

| Dosya | Kırpmalar | Prompt'taki kural |
| --- | --- | --- |
| Ülke `-1` | 3:4 + 4:5 + 16:10 | Bel merkezde, çanta kalçada |
| Ülke `-2` | 4:5 + 16:10 | Bel merkezde, çanta kalçada |
| Ülke `-3` | yalnız 4:5 | Serbest: baştan ayağa tam görünür |
| Dönem | 3:4 + 16:10 | Dönemin belirleyici bel hizası merkezde |
| `atlas-hero` | yalnız 3:4 | Üst üçte bir boş duvar (başlık oraya biniyor) |
| Şehir | 3:4 | Serbest |

Ayakkabıların da şeride girmesi isteniyorsa tek yol kodda: Koleksiyon ve ana
sayfa kartlarını `story` (16:10) yerine `portrait` (3:4) yapmak. Bu bir
uygulama değişikliği, görsel işi değil — istenirse ayrıca konuşulur.


## Hedef boyutlar

| Grup | Oran | Piksel |
| --- | --- | --- |
| Ülke `-1`, şehir, dönem, `atlas-hero` | 3:4 dikey | 1536×2048 |
| Ülke `-2`, `-3` | 4:5 dikey | 1536×1920 |
| `passport-paper` | 1:1 | 2048×2048 |

✅ = dosya değiştirildi, uygulamada bu görsel duruyor.

---

# 1. parti — 12 ülke kartı

En görünür dosyalar: ülke kartı (ana sayfa, favoriler, quiz sonucu) **ve**
ülke sayfası kapağı. Bunlar bitince ana sayfadaki bütün eski telifli
fotoğraflar gitmiş olur.

## 1. `norway-1.jpg`

*Norveç · kart + ülke kapağı*

```
A full-length display mannequin wearing an undyed cream wool sweater with a tonal Nordic yoke knitted in sand and clay over a bone merino base layer and straight warm-grey wool trousers, sturdy brown leather hiking boots, a waxed sand canvas rucksack on one shoulder, undyed knitted mittens and a ribbed wool hat.

It stands in a fjord shoreline of dark wet rock and pale still water under low grey cloud. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 2. `morocco-1.jpg`

*Fas · kart + ülke kapağı*

```
A full-length display mannequin wearing a long sand djellaba with a pointed hood and tonal embroidery down the placket over a cream cotton tunic and loose bone trousers, terracotta leather babouche slippers, a tasselled woven clay shoulder bag at the hip and a fine cream wool wrap.

It stands in a medina alley of ochre plaster walls, a keyhole arch dissolving into soft focus behind. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 3. `nigeria-1.jpg`

*Nijerya · kart + ülke kapağı*

```
A full-length display mannequin wearing a structured two-piece whose bold wax-print geometry is printed entirely in cream, sand, clay and terracotta — a sharp-shouldered peplum top and a long wrapper skirt — with a sculptural head wrap in the matching cloth, terracotta leather mules, a small structured clay leather bag and a beaded bone bracelet.

It stands in a sunlit courtyard with a painted clay wall and a flowering tree dissolving into soft focus. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 4. `south-africa-1.jpg`

*Güney Afrika · kart + ülke kapağı*

```
A full-length display mannequin wearing a bone cotton overshirt open over a plain cream tee and very wide sand trousers, chunky unbranded cream-and-clay leather sneakers, a cream canvas bucket hat, a small clay crossbody bag at the hip and a beaded collar necklace strung in bone and terracotta.

It stands in a city street of painted low-rise frontages, a jacaranda in soft focus overhead. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 5. `united-states-1.jpg`

*ABD · kart + ülke kapağı*

```
A full-length display mannequin wearing a sand denim trucker jacket over a plain cream heavyweight tee and straight bone denim jeans, cream canvas high-top sneakers with a plain rubber toe, a terracotta canvas duffle carried at the hip, a plain cream baseball cap with no front graphic and a leather belt with an unmarked buckle.

It stands in a wide empty avenue of fire-escape façades in warm evening light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 6. `mexico-1.jpg`

*Meksika · kart + ülke kapağı*

```
A full-length display mannequin wearing a cream cotton guayabera-style shirt with four patch pockets and vertical pleated panels, bone linen trousers, woven leather huarache sandals, a woven palm hat, a striped clay-and-cream woven tote at the hip and a hammered metal bangle.

It stands in a colonial street of warm ochre and clay façades, a carved wooden door blurred behind. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 7. `brazil-1.jpg`

*Brezilya · kart + ülke kapağı*

```
A full-length display mannequin wearing a loose cream linen shirt worn open over a bone cotton tank and wide sand drawstring trousers, flat terracotta rubber-soled sandals, a woven straw beach tote at the hip, a folded cream cotton sarong over one shoulder and plain-framed round sunglasses.

It stands in a palm-lined coastal promenade of pale patterned paving, sea haze beyond. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 8. `japan-1.jpg`

*Japonya · kart + ülke kapağı*

```
A full-length display mannequin wearing an oversized bone cotton coat with an asymmetric off-centre closure over a cream wide-sleeved top and wide cropped warm-grey selvedge denim showing the selvedge at the cuff, thick-soled dark-brown leather sandals, a square cream canvas shoulder bag and a wide clay obi-style fabric belt wrapped twice at the waist.

It stands in a narrow backstreet of timber frontages, paper lanterns dissolving into soft focus. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 9. `south-korea-1.jpg`

*Güney Kore · kart + ülke kapağı*

```
A full-length display mannequin wearing an oversized tonal cream outfit, every piece a shade of the same colour: a soft-shouldered bone blazer over a fine cream knit and wide-leg cream trousers, plain cream leather loafers, a small structured bone shoulder bag at the hip and a slim leather belt.

It stands in a quiet street of low concrete and glass frontages, pale and clean under soft overcast. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 10. `china-1.jpg`

*Çin · kart + ülke kapağı*

```
A full-length display mannequin wearing a cream silk jacket with a stand collar and tonal frog fastenings over a bone silk shell top and straight sand trousers, flat cream shoes with tonal embroidery, a small structured silk-covered clay bag at the hip, a pale carved stone pendant on a silk cord and a folded silk scarf with tonal cloud motifs.

It stands in a courtyard house of grey brick, a round moon-gate dissolving into soft focus behind. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 11. `india-1.jpg`

*Hindistan · kart + ülke kapağı*

```
A full-length display mannequin wearing a bone silk sari draped in soft pleats with a wide tonal clay border over a fitted cream blouse, flat embroidered leather mojari slippers, a cream-and-terracotta beaded clutch held at the hip and a set of fine metal bangles.

It stands in a sandstone courtyard with carved lattice screens, warm diffused light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

## 12. `australia-1.jpg`

*Avustralya · kart + ülke kapağı*

```
A full-length display mannequin wearing a cream linen shirt worn open over a bone linen tank and wide sand linen trousers, flat tan leather slides, a wide-brimmed straw hat, a woven jute tote at the hip and plain-framed sunglasses.

It stands in a coastal headland path of pale scrub and sandstone, sea haze beyond. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```


---

# 2. parti — kalan 36 ülke + 8 dönem

1. parti bittikten sonra.


## Türkiye

### 1. `turkiye-3.jpg`

*Türkiye · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long cream silk caftan-coat with tonal embroidery at the collar and cuffs over wide bone trousers, a narrow woven sash at the waist, flat terracotta leather slippers and a small clay shoulder bag.

It stands in the shaded stone courtyard of an old han, a low arcade of pointed arches and a worn fountain. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Fransa

### 2. `france-3.jpg`

*Fransa · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a cream wool coat worn open over a bone knit dress, warm-grey tights, dark brown leather ankle boots, a small clay top-handle bag and a folded silk scarf at the throat.

It stands in an empty café terrace at first light, rattan chairs stacked against zinc-topped tables. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## İtalya

### 3. `italy-2.jpg`

*İtalya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing an unlined warm-grey wool jacket over a cream poplin shirt and pleated sand trousers, suede loafers, a soft tan leather weekend bag and a folded clay silk tie.

It stands in a narrow old-town alley of ochre plaster and closed shutters, dry leaves on the cobbles, low afternoon sun. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 4. `italy-3.jpg`

*İtalya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long bone linen dress cinched with a woven leather belt, a short clay knit cardigan, flat tan leather sandals, a small straw-and-leather bag and a slim gold-tone hoop earring.

It stands in a sun-warmed coastal terrace, pale stucco wall and a lemon tree dissolving into soft focus. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Birleşik Krallık

### 5. `united-kingdom-2.jpg`

*Birleşik Krallık · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a double-breasted warm-grey wool coat over a fine cream merino polo neck and straight dark trousers, chunky black-brown lace-up boots and a plain leather holdall.

It stands in a covered Victorian market hall, cast-iron columns and a glazed roof, light diffusing down through it. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 6. `united-kingdom-3.jpg`

*Birleşik Krallık · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a clay corduroy jacket over a cream shirt and wide bone trousers, dark brown leather brogues, a plain wool flat cap and a soft leather crossbody bag.

It stands in a misty park avenue of bare plane trees, low winter sun breaking through. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Almanya

### 7. `germany-2.jpg`

*Almanya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing an unlined warm-grey wool coat over a bone merino long-sleeve and tapered sand trousers, minimal cream leather sneakers, a flat bone canvas tote and a plain dark leather belt with an unmarked buckle.

It stands in a long modernist colonnade of pale concrete piers receding into soft focus. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 8. `germany-3.jpg`

*Almanya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a straight bone cotton overshirt buttoned over a cream tee and straight warm-grey trousers, hems cut square, plain cream leather sneakers and a flat warm-grey pouch.

It stands in an empty tram platform of pale tiles under a glass canopy, soft grey daylight. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## İspanya

### 9. `spain-2.jpg`

*İspanya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a bone linen shirt-dress belted with woven leather, flat cream espadrilles, a round straw bag and a folded embroidered shawl over one arm.

It stands in a tiled courtyard with a small fountain and a shaded arcade, dappled light on the stone. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 10. `spain-3.jpg`

*İspanya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long clay linen dress with a deep ruffled hem, a fringed cream shawl pinned at one shoulder, terracotta espadrilles and a woven straw basket.

It stands in an olive grove at golden hour, silvery leaves dissolving into warm blur. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Norveç

### 11. `norway-2.jpg`

*Norveç · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a matte sand shell jacket over the patterned cream wool sweater and straight wool trousers, brown leather boots and a waxed canvas rucksack.

It stands in a timber boathouse jetty of weathered silver planks over still water. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 12. `norway-3.jpg`

*Norveç · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long cream wool coat over a bone knit dress and warm-grey leggings, shearling-lined leather boots, a felted wool shoulder bag and a knitted hat.

It stands in the edge of a snow-dusted pine wood under soft flat winter light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Fas

### 13. `morocco-2.jpg`

*Fas · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a caftan in tonal cream-and-clay stripes with hand-knotted sfifa trim, a narrow woven belt, flat leather slippers, a tasselled woven bag and a hammered metal cuff.

It stands in a riad courtyard, zellige tilework and a still shallow pool softened by blur. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 14. `morocco-3.jpg`

*Fas · 2. fotoğraf levhası*

```
A full-length display mannequin wearing an embroidered cream caftan with a wide tonal clay border at hem and cuffs, a fine wool wrap over one shoulder, a narrow woven belt, terracotta babouches and a woven bag.

It stands in the edge of the desert at dusk, low dunes and a single palm in warm haze. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Nijerya

### 15. `nigeria-2.jpg`

*Nijerya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a long wax-print kaftan whose tonal clay geometry reads as texture, a folded head wrap in the same cloth, flat leather sandals, a beaded cuff in bone and terracotta and a small structured clay bag.

It stands in a covered market walkway, bolts of folded cloth stacked and blurred along one side. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 16. `nigeria-3.jpg`

*Nijerya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a flowing cream linen robe with wide sleeves and tonal clay embroidery at the neckline over matching straight trousers, flat leather slippers, a small leather pouch and a strand of bone and terracotta beads.

It stands in a wide veranda with carved timber posts, warm late light across the boards. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Güney Afrika

### 17. `south-africa-2.jpg`

*Güney Afrika · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a lightweight sand utility jacket over a plain cream tee and loose knee-length shorts, flat leather sandals, a cream canvas tote and two beaded bracelets.

It stands in a coastal road above the sea, low fynbos scrub and bright sea haze. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 18. `south-africa-3.jpg`

*Güney Afrika · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long bone wrap dress with a tonal geometric border, a wide beaded collar in bone and terracotta, flat leather sandals and a woven clay shoulder bag.

It stands in a modern concrete courtyard planted with aloes, hard sun and deep shade. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## ABD

### 19. `united-states-2.jpg`

*ABD · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a warm-grey hooded sweatshirt with no print under an open sand overshirt, straight sand jeans, plain cream low-top sneakers, a flat nylon crossbody bag and a plain cap.

It stands in a concrete underpass with painted columns, flat shaded light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 20. `united-states-3.jpg`

*ABD · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a cream western-cut shirt with a pointed yoke under a tan suede jacket, straight bone jeans, brown leather boots, a worn leather belt and a pale felt hat.

It stands in a dry open plain with a weathered fence line, dust haze and a low sun. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Kanada

### 21. `canada-2.jpg`

*Kanada · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a quilted bone vest over a cream flannel overshirt in a muted tonal check and straight warm-grey trousers, brown leather winter boots, thick undyed wool socks turned over the boot tops and knitted mittens.

It stands in a frozen lakeside edged with bare birches, pale flat light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 22. `canada-3.jpg`

*Kanada · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long warm-grey wool coat over a cream cable-knit jumper and straight trousers, leather winter boots, a shearling-lined shoulder bag and a ribbed wool scarf.

It stands in an old stone street under fresh snow, lamp posts receding into soft focus. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Meksika

### 23. `mexico-2.jpg`

*Meksika · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a cream cotton blouse with dense tonal clay floral hand embroidery across the yoke, a long bone cotton skirt, woven leather huaraches, a woven palm hat and a striped woven tote.

It stands in a shaded arcade around a plaza, stone columns and dappled light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 24. `mexico-3.jpg`

*Meksika · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long tiered cream cotton dress with a narrow woven sash, an embroidered clay rebozo draped over one shoulder, flat leather sandals and a woven basket.

It stands in a courtyard of terracotta pots with an agave softened into blur, late afternoon. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Brezilya

### 25. `brazil-2.jpg`

*Brezilya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a cropped bone crochet top, a long clay wrap skirt, flat terracotta sandals, a woven straw tote and plain-framed sunglasses.

It stands in a hillside street of low painted houses in warm muted tones, steps falling away behind. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 26. `brazil-3.jpg`

*Brezilya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long bone crochet dress with an open airy stitch, a cream cotton sarong knotted at the hip, flat sandals, a woven straw tote and a woven cuff.

It stands in a shaded tropical garden, large leaves softly blurred, warm filtered light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Japonya

### 27. `japan-2.jpg`

*Japonya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a wrap-front bone jacket over a long cream tunic and wide warm-grey trousers, dark brown split-toe boots and a folded furoshiki wrapping cloth in tonal clay.

It stands in a temple approach of raked gravel and dark pine, grey stone underfoot, soft light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 28. `japan-3.jpg`

*Japonya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a layered look in bone and warm grey — a long sleeveless overlayer over a wide-sleeved top and cropped trousers — a cord belt, flat leather sandals and a small square bag.

It stands in a modern concrete gallery courtyard with raked gravel, muted and still. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Güney Kore

### 29. `south-korea-2.jpg`

*Güney Kore · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a long warm-grey wool coat over a cream hoodie with no print and straight sand trousers, chunky cream sneakers, a small crossbody bag and a plain cap.

It stands in a hillside alley of stepped lanes and low walls, warm late light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 30. `south-korea-3.jpg`

*Güney Kore · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a hanbok-inspired look: a short bone wrap jacket with wide sleeves over a long high-waisted clay skirt, a fabric sash tied at the chest, flat embroidered shoes and a small knotted pouch.

It stands in a traditional timber courtyard, tiled eaves and paper screens softly blurred. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Çin

### 31. `china-2.jpg`

*Çin · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a long bone silk dress with a stand collar and a side fastening under a short clay silk jacket, flat embroidered shoes and a small beaded clutch.

It stands in a water-town lane, stone steps dropping to a canal, pale reflections behind. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 32. `china-3.jpg`

*Çin · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long cream silk coat with a stand collar worn open over wide warm-grey trousers, flat leather shoes, a structured clay bag and a pale carved stone bangle.

It stands in a contemporary interior of concrete and timber screens, soft light falling through them. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Hindistan

### 33. `india-2.jpg`

*Hindistan · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a long cream kurta with tonal clay embroidery at the placket over straight bone churidar trousers, a folded sand dupatta over one shoulder, embroidered mojari and fine bangles.

It stands in a stepped courtyard of worn stone, a shaded arcade blurred behind. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 34. `india-3.jpg`

*Hindistan · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a long clay silk lehenga skirt with a woven tonal border, a fitted cream blouse, a bone dupatta draped across the body, flat embroidered slippers and a beaded potli bag.

It stands in a palace corridor of receding arches, warm late light along the stone. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Avustralya

### 35. `australia-2.jpg`

*Avustralya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a long cream linen dress under an open sand linen overshirt, flat tan leather slides, a wide-brimmed straw hat and a woven jute tote.

It stands in a timber boardwalk over dunes, bleached grey planks and marram grass. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 36. `australia-3.jpg`

*Avustralya · 2. fotoğraf levhası*

```
A full-length display mannequin wearing a bone knitted tank over wide cream trousers with an oversized sand linen shirt worn open above them, flat leather slides, a raffia shoulder bag and plain sunglasses.

It stands in the shaded veranda of a weatherboard house, warm filtered light through the posts. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with generous empty space above the head, below the shoes and on both sides. Only one crop is taken from this file, so the whole look stays visible head to shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Dönem ve genel

### 37. `eras/era-1900.jpg`

*1900'ler · La Belle Époque*

```
A full-length display mannequin wearing a floor-sweeping gored skirt in bone linen, a high-necked cream blouse with a lace collar and leg-of-mutton sleeves, a fitted warm-grey jacket tightly nipped at the waist, buttoned brown leather ankle boots, a wide-brimmed straw hat trimmed with cream ribbon and a small beaded drawstring purse carried at the hip.

It stands in a glasshouse conservatory, iron glazing bars and palms diffusing the light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 38. `eras/era-1950.jpg`

*1950'ler · The New Look*

```
A full-length display mannequin wearing a full circle skirt in heavy bone cotton held out by a stiffened petticoat, a fitted cream blouse with a small collar, a wide clay leather belt cinching the waist, a short nipped warm-grey jacket, pointed low-heeled leather shoes, short cream gloves, a pillbox hat and a structured clay top-handle handbag at the hip.

It stands in a department-store arcade of polished floor and slender columns, soft lamplight. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 39. `eras/era-1970.jpg`

*1970'ler · Free Spirit*

```
A full-length display mannequin wearing high-waisted flared trousers in warm sand corduroy, a fitted cream rib-knit top, a fringed clay suede jacket worn open, a printed silk scarf in tonal cream and terracotta paisley at the neck, stacked-heel brown leather boots, a round woven shoulder bag on a long strap and tinted round sunglasses with plain frames.

It stands in a sun-bleached coastal road edged with dry grass, warm haze. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 40. `eras/era-1990.jpg`

*1990'lar · Minimal & Grunge*

```
A full-length display mannequin wearing a bias-cut bone satin slip dress under an oversized flannel overshirt in a muted cream-and-clay check worn open, chunky dark-brown lace-up boots, a small shoulder bag on a thin strap at the hip and a fine chain choker.

It stands in a bare loft with tall industrial windows, flat grey light on a concrete floor. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 41. `eras/era-2000.jpg`

*2000'ler · Y2K*

```
A full-length display mannequin wearing low-rise straight sand denim with a wide unmarked buckle belt, a cropped top in soft pewter-grey metallic jersey, a cropped cream shearling shrug, chunky-soled cream sandals, a tiny clay baguette bag at the hip and tinted micro sunglasses with plain frames.

It stands in a mall concourse of pale polished floor and chrome rails dissolving into blur. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 42. `eras/era-2010.jpg`

*2010'lar · Street Meets Runway*

```
A full-length display mannequin wearing an oversized cream hoodie with no print under a longline warm-grey tailored coat worn open, tapered sand trousers, plain cream leather low-top sneakers, a small nylon crossbody bag across the body and a plain cream cap.

It stands in a city crossing of glass frontages and grey pavement under flat overcast light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 43. `eras/era-2020.jpg`

*2020'ler · The Quiet Wardrobe*

```
A full-length display mannequin wearing an oversized matte bone technical suit — soft-shouldered jacket and wide trousers — over a sculptural cream knit with an exaggerated collar, plain clay leather slip-ons, a soft unstructured tote at the hip and a sand overshirt carried over one arm showing neat tonal darning and visible running-stitch mending.

It stands in a bright minimal gallery of pale plaster and polished concrete. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 44. `eras/passport-paper.jpg`

*Pasaport arka planı*

```
A plain sheet of warm cream laid paper photographed flat and evenly lit, its fibres and faint laid lines visible. Nothing printed on it.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

Flat, even and edge to edge — a background texture with no subject, tiled behind other content.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 1:1 square, 2048×2048.
```


---

# 3. parti — tutarlılık için yenilenecek 9 dosya

Bu dokuzu değiştirildi, ama **eski tarzda**: flat lay ya da askılık. Yeni
mankenli tarza geçilecekse bunlar da yeniden üretilmeli, yoksa set ikiye
bölünmüş görünür. Telif riski yok, acelesi de yok.

### 1. `turkiye-1.jpg` ✅

*Türkiye · kart + ülke kapağı*

```
A full-length display mannequin wearing an oversized cream wool blazer worn open over a fine bone knit top, wide-leg sand trousers, terracotta leather loafers, a soft terracotta leather shoulder bag at the hip and a long cream silk scarf whose edge carries fine tonal oya needle lace.

It stands in a quiet Istanbul side street of worn stone buildings with projecting bay windows and a shuttered doorway, early morning. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 2. `turkiye-2.jpg` ✅

*Türkiye · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a camel trench coat belted over a bone cotton shirt and warm-grey tailored trousers, brown leather ankle boots, a flat woven tote whose kilim geometry is worked in clay and cream, and a folded embroidered cream wool shawl over one shoulder.

It stands in a Bosphorus waterfront promenade at dawn, plane trees and a low stone parapet, pale water beyond. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 3. `france-1.jpg` ✅

*Fransa · kart + ülke kapağı*

```
A full-length display mannequin wearing a belted camel trench coat over a bone cashmere crew-neck knit and straight warm-grey wool trousers, flat dark-brown leather ballet shoes, a small structured clay leather handbag at the hip and a narrow cream silk scarf knotted at the neck.

It stands in a Haussmann street corner of pale limestone with wrought-iron balconies and tall shutters, soft overcast light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 4. `france-2.jpg` ✅

*Fransa · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a soft camel blazer over a bone long-sleeved top with a fine tonal stripe, straight-leg sand denim, flat brown leather loafers, a small rectangular terracotta leather bag and a fine metal chain necklace.

It stands in a tree-lined canal path with an iron footbridge and stone quay, the water muted to warm grey. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```

### 5. `italy-1.jpg` ✅

*İtalya · kart + ülke kapağı*

```
A full-length display mannequin wearing a sand linen single-breasted suit with a soft unpadded shoulder worn open over a cream cotton shirt, brown leather loafers with a thin sole, a woven leather belt, a tan leather document folio carried at the hip and a folded warm-grey silk pocket square.

It stands in a stone loggia of rounded arches over a terracotta tiled floor, warm light raking along the columns. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 6. `united-kingdom-1.jpg` ✅

*Birleşik Krallık · kart + ülke kapağı*

```
A full-length display mannequin wearing a warm-grey wool overcoat with a wide notched lapel over a cream chunky-knit jumper and trousers in a faint warm-grey glen check, heavy dark-brown welted lace-up boots, a plain canvas-and-leather satchel at the hip and a scarf in a muted bone-and-clay tartan — an anonymous traditional check, never a fashion house's signature check.

It stands in a damp Georgian terrace street of dark brick and iron railings, flat northern light, wet paving. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 7. `germany-1.jpg` ✅

*Almanya · kart + ülke kapağı*

```
A full-length display mannequin wearing a matte bone technical shell jacket with flat taped seams over a plain cream cotton tee and straight warm-grey trousers, plain low-profile cream leather sneakers with no stripes or marks, a flat warm-grey crossbody pouch at the hip and a plain steel-strap watch with a blank dial.

It stands in a bare concrete courtyard with tall steel-framed windows, flat even northern light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 8. `spain-1.jpg` ✅

*İspanya · kart + ülke kapağı*

```
A full-length display mannequin wearing a clay-toned skirt with deep tiered ruffles, a cream linen blouse with a wide neckline, a short sand bolero jacket, terracotta espadrilles with jute soles, a round woven straw basket carried at the hip, a fringed cream shawl with tonal floral embroidery and a carved wooden hair comb.

It stands in a whitewashed Andalusian lane cut by deep shadow, terracotta pots along a low wall. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 9. `canada-1.jpg` ✅

*Kanada · kart + ülke kapağı*

```
A full-length display mannequin wearing a long oatmeal down parka with a deep hood worn open over a warm-grey wool overshirt, a cream thermal base layer and lined sand trousers, heavy brown leather winter boots with a lugged sole, undyed wool mittens, a ribbed cream beanie and a waxed clay canvas backpack.

It stands in a snowy street of timber-clad houses under soft overcast light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```


---

# 4. parti — 21 şehir görseli

Telif riski yok; sorun yalnızca üzerlerindeki görünür `AI生成` filigranı.
En son bunlar.

Bunlarda **manken yok.** Şehir kartı şehri tanıtmak zorunda; oraya da manken
koyarsak ülke kartından ayırt edilemez hâle gelir. Işık, palet, sığ alan
derinliği ve yasak listesi diğerleriyle aynı.

Hepsi **3:4 dikey, 1536×2048**.

### 1. `city-bangalore.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A tree-lined Bangalore street with a quiet café frontage, dappled light through the canopy. No signage, no people.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 2. `city-beijing.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A narrow Beijing hutong of grey brick with a single red-painted doorway, soft morning light.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 3. `city-cairns.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Palms and tropical planting along the Cairns esplanade, bright even light, the sea just visible beyond.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 4. `city-cappadocia.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Cappadocia's fairy chimneys at sunrise with hot air balloons drifting high above, warm light across the tufa. No people on the ground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 5. `city-delhi.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A narrow Old Delhi bazaar lane with a cycle rickshaw at rest and spice sacks along the wall, warm dusty light. Nobody in frame.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 6. `city-guangzhou.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A covered Guangzhou market lane lit by warm hanging lamps, produce crates stacked along it. No stallholders, no readable signs.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 7. `city-istanbul.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A red nostalgic tram standing on empty cobbles in Istanbul at first light, shutters still closed along the street.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 8. `city-los-angeles.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A row of tall palms along a Los Angeles sidewalk against a pastel stucco façade, late afternoon sun.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 9. `city-manaus.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Brightly painted riverboats moored at Manaus, the Amazon wide behind them, warm late light. No signage, no people.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 10. `city-melbourne.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A Melbourne laneway of layered spray paint and brick, treated as colour and texture, overcast light. No legible words, nobody in it.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 11. `city-miami.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Pastel Art Deco façades along Miami Beach in low golden light, clean geometry, empty pavement.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 12. `city-montreal.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
A snow-covered street in Vieux-Montréal, stone façades and iron railings under fresh snow, soft grey light.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 13. `city-mugla.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Wooden gulet boats moored in a Bodrum harbour, coiled ropes on the quay, early morning calm.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 14. `city-mumbai.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The curve of Marine Drive and its sea wall at dusk, lights beginning along the sweep, calm water.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 15. `city-new-york.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Yellow taxis and rising steam on a New York avenue at dusk, wet asphalt, warm reflected light. No people, no readable signage.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 16. `city-rio.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The black and white wave mosaic of the Copacabana promenade with Sugarloaf in the haze beyond, morning light.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 17. `city-sao-paulo.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The architectural line of Avenida Paulista, towers receding into soft haze, flat overcast light.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 18. `city-shanghai.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The Pudong skyline across the water from the Bund at dusk, lights coming on, still water. No people on the promenade.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 19. `city-sydney.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
Sydney Harbour in early morning light, the Opera House shells pale against the water, the bridge soft in the distance.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 20. `city-toronto.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The CN Tower against a wide winter sky, seen from a quiet street below, cool flat daylight.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 21. `city-vancouver.jpg`

*Şehir kartı + şehir sayfası kapağı*

```
The Vancouver seawall with mountains rising beyond, low cloud, soft northern light. Empty path.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

A single clear subject in the centre of the frame with generous empty space on all sides, the foreground sharp and the far background softly blurred.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

No people, no faces, no hands, no body parts, no skin. No brand logos, no text, no lettering, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```


---

## Zaten yeni tarzda olan iki dosya

`eras/atlas-hero.jpg` ✅ ve `eras/era-1920.jpg` ✅ mankenli üretildi, yeni
tarza uyuyorlar; yeniden üretilmeleri gerekmiyor. Prompt'ları yukarıda yeni
sözleşmeye göre yazıldı, tekrar gerekirse diye.


### `eras/atlas-hero.jpg` ✅

```
Three full-length display mannequins side by side on low stone plinths, each wearing a complete outfit from a different part of the world: a belted camel trench coat with straight cream trousers and leather loafers; a long cream silk caftan with tonal embroidery and flat woven slippers; an oversized bone linen suit worn open over a cream shirt, with leather sandals. Each carries a bag at the hip.

They stand in a bright empty gallery of pale plaster and polished concrete, a tall window out of frame throwing soft light across the wall. The background is softly out of focus; the mannequins and their outfits are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The three mannequins stand full length in a row across the middle of the frame, sharp against a softly blurred background, the upper third of the image left as plain empty wall because a headline sits there, and the floor visible below the shoes.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```


### `eras/era-1920.jpg` ✅

```
A full-length display mannequin wearing a straight drop-waist dress in bone silk with a band of tonal beading across the hip and a fringe hem, a long rope of cream pearls, a cream silk cloche hat, T-bar leather shoes and a small beaded clutch held at the hip.

It stands in an Art Deco lobby of geometric plaster relief and polished stone, warm lamplight. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Generic unbranded garments only: no brand logos, no designer monograms or signature house patterns (no Burberry-style house check, no LV- or GG-style monogram), no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```
