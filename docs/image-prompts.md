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

**Desen kuralı olumlu yazıldı.** Prompt'lar "şu markanın deseni olmasın"
demiyor; **"düz, özgün, markasız giysi; desen varsa basit çizgi, düz renk ya da
özgün geometrik motif"** diyor. Sebebi deneyle görüldü: olumsuz talimatta geçen
marka adı üreticiyi o markaya çekiyor — `united-kingdom-1`'in atkısı tam bu
yüzden tescilli bir ev ekosesine dönüşmüştü. Prompt metinlerinde artık hiçbir
marka adı geçmiyor. **Ekose ve tartan da setten tamamen çıkarıldı.**

**Her prompt'ta yasaklı:** gerçek insan, yüz, el, ten, saç; marka logosu,
monogram, tekrar eden baş harfler; yazı, harf, tabela, afiş, plaka, bakım
etiketi, askı etiketi, filigran, okunabilir herhangi bir metin. Ayrıca **tek bir
ünlü yapının kadraj ortasında durduğu kompozisyon yok** — yer, atmosferinden ve
malzemesinden tanınmalı.


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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## İspanya

### 9. `spain-2.jpg`

*İspanya · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a bone linen shirt-dress belted with woven leather, flat cream espadrilles, a round straw bag and a folded embroidered shawl over one arm.

It stands in a courtyard of worn cream stone with a small fountain and a shaded arcade, dappled light; any tilework is pale and sun-bleached, in cream and clay only. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Fas

### 13. `morocco-2.jpg`

*Fas · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a caftan in tonal cream-and-clay stripes with hand-knotted sfifa trim, a narrow woven belt, flat leather slippers, a tasselled woven bag and a hammered metal cuff.

It stands in a riad courtyard of carved plaster and tadelakt walls in cream and clay, a still shallow pool softened by blur. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 4:5 portrait, 1536×1920.
```


## Kanada

### 21. `canada-2.jpg`

*Kanada · 1. fotoğraf levhası + rehber kapağı*

```
A full-length display mannequin wearing a quilted bone vest over a cream brushed-flannel overshirt with a simple broad tonal stripe, and straight warm-grey trousers, brown leather winter boots, thick undyed wool socks turned over the boot tops and knitted mittens.

It stands in a frozen lakeside edged with bare birches, pale flat light. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 40. `eras/era-1990.jpg`

*1990'lar · Minimal & Grunge*

```
A full-length display mannequin wearing a bias-cut bone satin slip dress under an oversized flannel overshirt in a muted cream and clay with a simple broad stripe, worn open, chunky dark-brown lace-up boots, a small shoulder bag on a thin strap at the hip and a fine chain choker.

It stands in a bare loft with tall industrial windows, flat grey light on a concrete floor. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the decade's defining waistline at the exact vertical centre: the file is shown as a 3:4 portrait and is also cropped to a wide 16:10 band through that centre, and the band on its own must still read as this decade.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 44. `eras/passport-paper.jpg`

*Pasaport arka planı*

```
A plain sheet of warm cream laid paper photographed flat and evenly lit, its fibres and faint laid lines visible. Nothing printed on it.

Warm neutral palette: cream, sand, bone. Nothing saturated, no accent colour, no pattern, no printing.

Flat, even and edge to edge — a background texture with no subject, tiled behind other content.

Soft even daylight straight on, no strong shadow and no vignette, so the sheet tiles seamlessly behind other content. Flat copy photography, 50mm, f/8, everything in focus, fine grain.

No people, no faces, no hands, no objects of any kind. No brand logos, no text, no lettering, no printing, no watermark, no readable writing anywhere on the sheet.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

### 6. `united-kingdom-1.jpg` ✅

*Birleşik Krallık · kart + ülke kapağı*

```
A full-length display mannequin wearing a warm-grey wool overcoat with a wide notched lapel over a cream chunky-knit jumper and plain warm-grey wool flannel trousers, heavy dark-brown welted lace-up boots, a plain canvas-and-leather satchel at the hip and a chunky ribbed knitted scarf in a single solid soft clay, with no pattern of any kind.

It stands in a damp Georgian terrace street of dark brick and iron railings, flat northern light, wet paving. The background is softly out of focus; the mannequin and its outfit are sharp and in the foreground.

Soft natural daylight from one side, long gentle shadows, matte tactile surfaces. Warm neutral palette: cream, sand, bone, warm grey, soft clay — the setting may carry the muted local colours of the place but stays inside that family. Terracotta #c2603a is the only strong accent. No saturated blue, green or neon.

The mannequin stands full length in the exact centre of the frame, sharp against a softly blurred background, with clear empty space above the head, below the shoes and on both sides. Place the waist at the exact vertical centre and carry the bag at hip height: the same file is cropped to 3:4, to 4:5 and to a wide 16:10 band through that centre, and the band on its own must still show the outer layer, the top, the bottom and the bag.

Quiet museum-archive mood: still, considered, unstaged. Editorial fashion photography, 85mm, f/2.0, shallow depth of field, natural light, fine grain.

The figure is a faceless display mannequin in smooth matte cream-white: either a plain abstract head with no eyes, nose, mouth or hair, or no head at all, finished cleanly at the neck. Its arms and hands are the same smooth matte material, simplified, with no skin texture and no fingernails. No real people, no human faces, no human hands, no skin anywhere in the frame.

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

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

Plain, original, unbranded garments; patterns are simple stripes, solids or original geometric motifs. No brand logos, no monograms, no repeated initials, no text, no lettering, no care labels, no hang tags, no shop signs, no posters, no number plates, no watermark, no readable writing anywhere in the frame. The place must read through its atmosphere, materials and light, never through one famous landmark centred in the shot.

Output: 3:4 portrait, 1536×2048.
```

---

# 5. parti — 21 şehir görseli

Uygulama şehir turlarına kaydığı için bu 21 dosya setin en görünür parçası.
Önceki partilerden **üç farkı** var.

**1. Şehrin adı prompt'un ilk cümlesinde geçiyor.** İlk denemede geçmiyordu ve
sonuç felaketti: İstanbul prompt'u "pale stone hillside lane, lime-washed
walls" diye tarif edilince Gemini bir Cornwall balıkçı kasabası üretti. Üretici
İstanbul'un nasıl göründüğünü zaten biliyor; tarif etmek yerine adını söylemek
gerekiyor.

**2. Ünlü yapı yasağı kalktı.** O kural ülke görselleri için yazılmıştı, orada
konu giysiydi. Şehir kartının tek işi 68 pikselde bile "burası İstanbul"
demek; minareyi, vapuru, cumbayı yasaklayınca geriye jenerik bir kasaba
kalıyor. Yerine **iki hedefli yasak** kondu, çünkü gerçek risk bütün yapılar
değil, belirli ikisi:
- **Sydney Opera Binası** — Opera House Trust görsel haklarını iddia ediyor.
- **Kurtarıcı İsa heykeli (Rio)** — heykeltıraş Landowski 1961'de öldü, eser
  telifi 2031'e kadar sürüyor.
Ayasofya, Galata, Bodrum Kalesi, Yasak Şehir, hutong'lar, Mughal anıtları,
Kapadokya: hepsi yüzyıllık, telif yok. Vancouver'da ayrıca totem ve yerli
oymaları yasak — kültürel mülkiyet.

**3. Objektif değişti.** `85mm f/2.0` arka planı eritiyordu; giyside doğruydu,
şehirde mimariyi yok ediyor. Artık **28-35mm, f/5.6-f/8**, baştan sona net.
Figür de küçüldü: kadrajın altıda biri ile dörtte biri arası, şehrin içinde
bir insan, kadrajın öznesi değil.

**Teslim öncesi zorunlu kontrol:** her görseli ters görsel aramadan geçir. Bir
yüz tanınan birine benziyorsa o dosyayı kullanma, yeniden ürettir.

| Dosya | Kırpmalar | Prompt'taki kural |
| --- | --- | --- |
| Şehir | 3:4 + 4:5 + 5:6 | Güçlü şekiller içeride, üst/alt onda bir boşluk, küçük boyda da okunur |

## 1. `city-istanbul.jpg`

*İstanbul · Türkiye*

```
A rich, high-detail editorial travel photograph of Istanbul, Türkiye.

A steep cobbled lane in a historic hillside quarter dropping straight down to the Bosphorus. Ottoman timber houses with overhanging upper storeys and shuttered bay windows in faded clay, ochre and cream crowd both sides. At the foot of the lane the strait opens out: a passenger ferry crossing the water, gulls over it, and on the far shore a low grey skyline of domes and slender minarets in the morning haze. Worn granite setts, a cat on a step, laundry lines overhead.

Early morning, low golden light raking down the lane, soft mist on the water.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a long warm-grey wool coat, a clay-red scarf, bone trousers, brown leather boots and a tan leather satchel. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 2. `city-cappadocia.jpg`

*Kapadokya · Türkiye*

```
A rich, high-detail editorial travel photograph of Cappadocia, Türkiye.

A valley of pale tuff fairy chimneys at dawn, with rock-cut cave dwellings carved directly into the cliffs: arched doorways, carved window openings, stone terraces and pigeon houses in the rock face. Dozens of hot-air balloons rise in the distance across the whole width of the valley, plain and unmarked. Dry golden grasses and vine terraces in the foreground.

First light, the sun just clearing the ridge, long warm shadows across the rock, cool blue in the hollows.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a sand canvas field jacket, a clay knitted beanie, warm-grey trousers, walking boots and a waxed rucksack. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 3. `city-mugla.jpg`

*Muğla · Türkiye*

```
A rich, high-detail editorial travel photograph of the Muğla coast, Türkiye.

A whitewashed Aegean harbour town on a steep hillside: cubic lime-washed houses with blue timber shutters, bougainvillea in clay pink and magenta spilling over garden walls, narrow stepped alleys of worn stone. Below, a horseshoe bay of clear turquoise water with wooden gulet schooners moored along a stone quay, masts bare, and a low crusader stone castle on the headland.

Late afternoon, hard Mediterranean sun softening to gold, deep shadow in the alleys, the sea glittering.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a cream linen shirt, bone linen trousers, a woven belt, flat tan sandals and a straw tote. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 4. `city-new-york.jpg`

*New York · ABD*

```
A rich, high-detail editorial travel photograph of New York City, United States.

A downtown street of nineteenth-century cast-iron facades: tall arched windows, fluted columns painted deep green and cream, black fire escapes zigzagging down every frontage. Wooden water towers stand on the rooftops against the sky. Steam drifts from a vent in the asphalt, a yellow taxi passes too fast to read any marking, bare plane trees line the kerb and a brownstone stoop with iron railings sits in the foreground.

Late autumn afternoon, low sun firing down the avenue between the buildings, long shadows, cold clear air.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a long bone wool overcoat, a warm-grey roll-neck, dark tailored trousers, leather ankle boots and a structured clay leather bag. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 5. `city-los-angeles.jpg`

*Los Angeles · ABD*

```
A rich, high-detail editorial travel photograph of Los Angeles, United States.

A wide residential boulevard lined with tall thin palms running to a vanishing point. Low mid-century stucco bungalows in cream, sand and pale mint with flat roofs, carports and picture windows; bougainvillea over a breeze-block wall, a jacaranda dropping violet flowers on the pavement. Behind the rooftops the dry warm-grey hills rise through the afternoon haze.

Golden hour, long palm shadows striping the road, warm hazy light, a soft smog gradient in the sky.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear an oversized sand linen shirt, a cream tank, bone wide-leg trousers, leather slides and a soft tan shoulder bag. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 6. `city-miami.jpg`

*Miami · ABD*

```
A rich, high-detail editorial travel photograph of Miami, United States.

A seafront row of Art Deco hotels in pastel pink, mint, cream and butter yellow: rounded corners, horizontal eyebrow ledges over the windows, porthole glass, glass-brick panels and stepped parapets. Royal palms along the pavement, a strip of sand beyond with white timber lifeguard towers, and the Atlantic flat and bright behind.

Strong subtropical light just past midday softening toward afternoon, crisp shadows under the eyebrow ledges, a high blue sky.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a clay-and-cream wide-stripe camp shirt, bone linen shorts, canvas sneakers and a woven straw tote. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 7. `city-beijing.jpg`

*Pekin · Çin*

```
A rich, high-detail editorial travel photograph of Beijing, China.

A hutong lane of grey brick courtyard walls topped with upturned grey tile roofs. A red lacquered timber gate with brass door studs, carved lintel and a pair of round stone drums sits halfway along; bicycles lean against the wall, a bare scholar tree reaches over from a courtyard. Beyond the rooftops at the end of the lane, a glimpse of a yellow-glazed imperial tile roof above a deep red wall.

Clear dry winter morning, hard low sunlight, blue shadow on the grey brick, breath-cold air.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a long sand quilted coat, a cream high-neck knit, warm-grey trousers, leather boots and a clay wool scarf. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 8. `city-shanghai.jpg`

*Şanghay · Çin*

```
A rich, high-detail editorial travel photograph of Shanghai, China.

A narrow lilong lane of shikumen houses: grey brick terraces with carved stone gateways, heavy black timber doors and Western-style stone lintels, bamboo poles of laundry strung overhead between the walls. Plane trees lean in from the street at the end of the lane, and beyond them, far off and softly hazed, the towers of the modern skyline across the river.

Dusk, the last warm light on the upper brickwork while the lane below falls into cool blue shadow.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a tailored bone wool blazer, a cream silk shell, warm-grey trousers, leather loafers and a slim sand leather bag. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 9. `city-guangzhou.jpg`

*Guangzhou · Çin*

```
A rich, high-detail editorial travel photograph of Guangzhou, China.

A qilou arcade street: continuous colonnades carrying the upper storeys out over the pavement, pastel stucco facades in cream, celadon and faded rose mixing Western mouldings with Chinese tilework, timber louvred shutters and ornate balustrades. Huge banyan trees drop aerial roots along the kerb, and the pavement under the arcade is worn smooth.

Humid subtropical morning, diffused light through haze, soft shadows, moisture in the air.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a light sand linen shirt-jacket, a cream tee, bone cropped trousers, woven flats and a large soft canvas carryall. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 10. `city-delhi.jpg`

*Delhi · Hindistan*

```
A rich, high-detail editorial travel photograph of Delhi, India.

A Mughal monument in red sandstone inlaid with white marble: deep scalloped arches, a high iwan portal, carved jali lattice screens casting intricate shadows, chhatri pavilions on the roofline and a bulbous dome. In front, a formal charbagh garden with long still water channels, clipped lawns and sandstone paths; parakeets in the trees.

Winter morning, soft golden haze, the sandstone glowing warm, long low shadows across the garden.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a long cream cotton tunic, bone tapered trousers, a clay hand-woven shawl over one shoulder and flat tan sandals. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 11. `city-mumbai.jpg`

*Mumbai · Hindistan*

```
A rich, high-detail editorial travel photograph of Mumbai, India.

The long curving sea wall of a bayfront promenade, lined with 1930s Art Deco apartment blocks in weathered cream and ochre: rounded corner balconies, vertical fins, ziggurat parapets. Grey basalt tetrapods are piled along the water, waves breaking over them and throwing spray across the promenade; coconut palms bend in the wind.

Monsoon afternoon, heavy slate cloud with a bright silver break low on the horizon, wet stone, spray haze.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a sand waxed-cotton rain coat over a cream shirt, bone cropped trousers, rubber-soled sandals and a waterproof canvas satchel. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 12. `city-bangalore.jpg`

*Bengaluru · Hindistan*

```
A rich, high-detail editorial travel photograph of Bengaluru, India.

A quiet avenue under enormous old rain trees whose canopies meet overhead, dappling the road. Along it, a colonial-era bungalow with a deep red-oxide verandah, monkey-top gables over the windows, whitewashed columns and a low garden wall; flowering gulmohar drops scarlet petals on the pavement, and a stone-edged lake shows through the trees.

Mild morning, dappled light through the canopy, soft shadows, clean air after overnight rain.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a cream cotton overshirt, a bone tee, warm-grey tapered trousers, canvas sneakers and a slim sand crossbody bag. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 13. `city-sydney.jpg`

*Sydney · Avustralya*

```
A rich, high-detail editorial travel photograph of Sydney, Australia.

A harbourside street of Victorian terraces with two tiers of cast-iron lace verandahs, painted cream and heritage green, standing above honey-coloured sandstone retaining walls and stone steps. Below, the harbour opens out: deep blue water, a green-and-cream passenger ferry crossing it, sandstone headlands with gum trees, and the steel arch of the harbour bridge far off on the left.

Bright clear morning, hard Southern-Hemisphere sun, crisp shadows, saturated blue water.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a bone cotton overshirt, a cream ribbed tee, sand chino shorts, canvas shoes and a woven straw tote. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces. Do not include the Sydney Opera House anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 14. `city-melbourne.jpg`

*Melbourne · Avustralya*

```
A rich, high-detail editorial travel photograph of Melbourne, Australia.

A wide inner-city boulevard of dark bluestone kerbs and plane trees, flanked by Victorian buildings with ornate cast-iron verandahs and rendered parapets in cream and warm grey. A tram runs down the centre of the road on its own tracks, overhead wires crossing the sky in a fine grid; a narrow bluestone laneway opens off to one side, its cobbles wet and its brick walls plain and unpainted.

Changeable afternoon, a shaft of sun breaking through heavy cloud and lighting one side of the street while the other stays in shadow, wet road reflecting the sky.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a charcoal-warm wool overcoat, a cream knit, warm-grey trousers, leather derbies and a clay wool scarf. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces. The laneway walls are plain brick and stone: no murals, no street art, no painted lettering.

Output: 3:4 portrait, 1536×2048.
```

## 15. `city-cairns.jpg`

*Cairns · Avustralya*

```
A rich, high-detail editorial travel photograph of Cairns, Tropical North Queensland, Australia.

A tropical street of timber Queenslander houses raised on stumps, with wide shaded verandahs, lattice screens and corrugated iron roofs, painted cream, pale blue and faded clay. Coconut palms and flame trees along the road; beyond the rooftops a boardwalk runs over tidal mudflats and mangroves, and steep rainforest-covered mountains rise directly behind the town.

Humid tropical morning, towering white cloud over the ranges, bright diffused light, deep green shadow under the verandahs.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a sand technical overshirt, a cream tee, bone quick-dry shorts, leather sandals, a light rucksack and a woven sun hat. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 16. `city-rio.jpg`

*Rio de Janeiro · Brezilya*

```
A rich, high-detail editorial travel photograph of Rio de Janeiro, Brazil.

A beachfront promenade paved in the famous sweeping black-and-white Portuguese stone wave mosaic, royal palms along its edge. To one side the long curve of golden sand and surf; ahead, a bare granite monolith rises straight out of the sea at the mouth of the bay, and behind the beachfront a steep green hillside of densely stacked, brightly painted small houses.

Late afternoon, warm low sun along the beach, long palm shadows across the mosaic, sea haze softening the granite peak.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a clay-and-cream vertically striped short-sleeve shirt, bone linen trousers, flat tan sandals and a woven straw bag. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces. Do not include the Christ the Redeemer statue anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 17. `city-sao-paulo.jpg`

*São Paulo · Brezilya*

```
A rich, high-detail editorial travel photograph of São Paulo, Brazil.

A dense modern avenue walled on both sides by tall concrete and glass towers of every decade, receding to a hazy vanishing point with no horizon visible. A long curving white modernist apartment block with horizontal brise-soleil fins dominates one side; jacaranda trees in flower break the grey, and the wide asphalt is wet and reflective.

Overcast afternoon drizzle, flat silver light, the towers fading into mist with distance, reflections on the road.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a warm-grey tailored overcoat, a cream knit, bone straight trousers, dark leather boots and a clay leather document bag. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 18. `city-manaus.jpg`

*Manaus · Brezilya*

```
A rich, high-detail editorial travel photograph of Manaus, in the Brazilian Amazon.

A Belle Epoque opera house in the middle of the rainforest city: a pink and cream neoclassical building with a tall dome covered in glazed tiles in a diamond pattern, columns and a grand stair, standing on a plaza paved in black-and-white stone waves. Around the plaza, two-storey colonial houses faced with patterned azulejo tiles in faded blue and ochre; above the rooftops, a wall of dense jungle, and beyond it the dark water of the river with floating timber docks.

Equatorial afternoon, huge white cumulus building over the forest, bright humid light, deep shadow under the colonnade.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a cream long-sleeve cotton shirt with rolled sleeves, sand quick-dry trousers, leather boots, a waxed duffel and a wide woven hat. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 19. `city-vancouver.jpg`

*Vancouver · Kanada*

```
A rich, high-detail editorial travel photograph of Vancouver, Canada.

A waterfront seawall path of wet grey concrete curving along the inlet, with slender blue-green glass residential towers rising on one side and tall Douglas firs and cedars leaning over from a forested shore on the other. Across the water, snow-capped coastal mountains stand close and steep above the city. Floatplane wakes and small boats on the flat grey-green water, driftwood on a pebble beach.

Rain just stopped, low cloud tearing open over the mountains, cool silver light with a warm break on the peaks, everything wet and reflective.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a sand waxed rain shell, a cream knitted fleece, warm-grey trousers, waterproof boots, a clay beanie and a roll-top rucksack. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces. Do not include totem poles or any Indigenous carving, crest or cultural object.

Output: 3:4 portrait, 1536×2048.
```

## 20. `city-toronto.jpg`

*Toronto · Kanada*

```
A rich, high-detail editorial travel photograph of Toronto, Canada.

A residential street of Victorian bay-and-gable houses in deep red brick, with steep gables, decorative bargeboard, bay windows and wide wooden porches behind low hedges. Enormous maples arch over the road in full autumn colour, dropping leaves across the pavement; streetcar wires cross the sky at the intersection, and far away between the rooftops the thin spire of the city's tall concrete tower stands against the sky.

Clear October afternoon, low warm sun through red and gold leaves, long shadows, crisp blue sky.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a long sand wool coat, a cream roll-neck, warm-grey trousers, leather boots, a clay wool scarf and a structured bone leather tote. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```

## 21. `city-montreal.jpg`

*Montreal · Kanada*

```
A rich, high-detail editorial travel photograph of Montreal, Canada.

A residential street of three-storey row houses in grey limestone and dark red brick, each with an exterior wrought-iron staircase curling up from the pavement to the first-floor door, iron balconies and cornices above. Deep snow banks line the kerb, bare trees stand against the facades, and the street is packed white under foot.

Clear cold winter afternoon, very low sun, long blue shadows on the snow, warm gold light on the upper brickwork.

Shot wide and deep, not with a long portrait lens: 28-35mm, f/5.6 to f/8, the architecture sharp from foreground to the far end of the view, with real depth and layers. Very high detail in stone, plaster, timber, tile and paving. Natural colour, richly but not garishly graded, warm highlights and clean shadows. Fine photographic grain, no HDR halos, no oversharpening, no tilt-shift miniature effect.

One person appears in the scene for life and scale, small in the frame and clearly secondary to the city: roughly a sixth to a quarter of the frame height, placed off to one side or walking along the view, seen from behind or in profile so the face is not the subject. They wear a long cream down-filled coat, a clay knitted scarf and hat, bone wool trousers, shearling-lined boots and warm-grey mittens. The person is entirely fictional and must not resemble any real, identifiable individual: no celebrity likeness, no public figure. An ordinary adult, naturally proportioned, believable skin and hands, not retouched. No children.

Compose for a 3:4 vertical frame that is also cropped to 4:5 and to 5:6 and shown as a small thumbnail, so keep the strongest shapes well inside the frame and leave about a tenth of the height spare at the top and bottom. The picture must still say which city it is at thumbnail size.

No readable writing anywhere in the frame: no shop signs, no street name plates, no posters, no banners, no destination boards, no vehicle livery or number plates, no advertising, no murals or street art, no brand logos or monograms, no watermark. Garments are plain and unbranded. Any other people are distant, small and out of focus, with no readable faces.

Output: 3:4 portrait, 1536×2048.
```
