# Görsel üretim prompt'ları

`docs/image-replacement.md` ile birlikte okunur. Her prompt **olduğu gibi
kopyalanıp yapıştırılabilir** — ortak stil kuralları her birinin içine
gömülü, ayrıca bir ön metin eklemen gerekmiyor.


## Ortak stil rehberi

Bütün set tek bir görsel dilde olsun diye, her prompt'ta aynı dört blok var.

**Işık.** Tek yönden gelen yumuşak gün ışığı, uzun ve yumuşak gölgeler.
Sert flaş yok, renkli jel yok. Yüzeyler mat ve dokunulabilir: sıva, ham
keten, cilasız ahşap, taş, kâğıt.

**Renk.** Sıcak nötr taban — krem, kum, kemik, sıcak gri, yumuşak kil.
Tek vurgu rengi **terracotta `#c2603a`** (uygulamanın ana aksan rengi).
Doygun mavi, yeşil ve neon yok.

**Kompozisyon.** Tek ve net bir özne, **dikey olarak tam ortada**, çevresinde
bol boşluk. Bu şart: kod aynı dosyayı yerine göre 3:4, 4:5 ve 16:10 olarak
kırpıyor; kenara yaslanmış bir kompozisyon geniş kırpmada kesilir.

**Ruh hali.** Müze/arşiv sessizliği. Reklam değil, yaşam tarzı çekimi değil.
Editoryal fotoğraf, 50mm, f/4, doğal ışık, ince grenli.

**Her prompt'ta yasaklı:** insan, yüz, el, vücut parçası, manken kafası,
marka logosu, yazı, tabela, filigran, okunabilir herhangi bir metin.


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


## 1. `eras/atlas-hero.jpg`

*Ana sayfa kapak görseli*

```
Three headless dress forms on low stone plinths in a bright empty gallery, each draped in a different cream and sand coloured garment — one long column dress, one loosely draped robe, one structured coat. Pale plaster wall behind, polished concrete floor, soft shadows pooling at the bases.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 2. `turkiye-1.jpg`

*Türkiye · kart + ülke kapağı*

```
A camel trench coat on a headless dress form standing against an old Istanbul stone wall, a terracotta red leather shoulder bag hanging from a hook beside it. Weathered stone, a hint of worn timber shutter at the edge.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 3. `france-1.jpg`

*Fransa · kart + ülke kapağı*

```
A camel trench coat on a headless dress form in front of a tall painted Parisian door, its deep blue muted almost to grey. Pale limestone façade, a brass handle catching the light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 4. `italy-1.jpg`

*İtalya · kart + ülke kapağı*

```
A narrow Italian stone alley in autumn, dry fallen leaves across the cobbles, warm low sunlight down the length of it. Ochre plaster walls, closed shutters, completely empty.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 5. `united-kingdom-1.jpg`

*Birleşik Krallık · kart + ülke kapağı*

```
A row of classic red London telephone boxes seen straight on, wet pavement in front, soft overcast light. Their red reads as deep terracotta rather than bright pillar-box. No people, no posters, no readable panels.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 6. `germany-1.jpg`

*Almanya · kart + ülke kapağı*

```
A raw concrete Berlin wall with a red and white striped construction barrier standing in front of it, flat northern daylight. Minimal, architectural, the stripes the only strong note.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 7. `spain-1.jpg`

*İspanya · kart + ülke kapağı*

```
A grey wool oversized blazer on a headless dress form against a sunlit warm concrete wall, a silver clutch resting on a plinth at its base. Hard Mediterranean light, a clean diagonal shadow across the wall.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 8. `canada-1.jpg`

*Kanada · kart + ülke kapağı*

```
A snowy old-town Montreal street in soft grey winter light, snow still falling, stone façades and iron railings under a thin white layer. Completely empty, no vehicles, no shop signs.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

## 9. `turkiye-2.jpg`

*Türkiye · fotoğraf levhası + rehber kapağı*

```
A black leather jacket and a heavy cream wool scarf laid flat and overlapping on a warm stone surface, photographed from directly above. The grain of the leather and the loose weave of the wool both visible.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## 10. `france-2.jpg`

*Fransa · fotoğraf levhası + rehber kapağı*

```
A tall painted Parisian door in muted blue, straight on and filling most of the frame: panelled wood, worn paint, a brass handle and a stone step. Nothing else in the picture.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## 11. `eras/era-1920.jpg`

*1920'ler · dönem kapağı*

```
A 1920s beaded drop-waist evening dress on a headless dress form in a dim art deco interior, soft gold geometric panelling behind it. A single warm light rakes across the beadwork; the rest falls into shadow.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

---

# 2. parti — kalan 56 fotoğraf

Telif riski taşıyan grup. 1. parti bittikten sonra bunlar.


## Türkiye


### 1. `turkiye-3.jpg` — *fotoğraf levhası*

```
A quiet wooden jetty on the Bosphorus at dawn, still water, the silhouette of a domed mosque and minarets far off in soft haze. Weathered timber planks in the foreground, nothing else.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Fransa


### 2. `france-3.jpg` — *fotoğraf levhası*

```
A red leather handbag resting on folded indigo denim, arranged on a pale limestone ledge and photographed from above. Crisp morning light, clean shadows.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## İtalya


### 3. `italy-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A charcoal wool tailored blazer on a headless dress form, close in on the shoulder and lapel so the hand stitching and the weave of the cloth are visible. Warm plaster wall behind.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 4. `italy-3.jpg` — *fotoğraf levhası*

```
A pair of white leather boots standing beside a folded burnt-orange knitted jumper on a pale stone floor, photographed from slightly above. Long raking light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Birleşik Krallık


### 5. `united-kingdom-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A plain unbranded racing jacket in cream and deep red on a headless dress form, straight on, against a flat grey studio wall. No logos, no numbers, no lettering of any kind.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 6. `united-kingdom-3.jpg` — *fotoğraf levhası*

```
Folded paisley wool cloth and a length of polka dot silk overlapping on a dark wooden table, photographed from above. Soft window light from the left.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Almanya


### 7. `germany-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
The glass and steel geometry of an empty Berlin bus shelter, seen straight on in flat northern daylight. Reflections in the glass, clean lines, nobody inside.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 8. `germany-3.jpg` — *fotoğraf levhası*

```
The Brandenburg Gate at first light, empty square in front of it, pale stone against a soft grey sky. Wide and still.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## İspanya


### 9. `spain-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A round woven straw bag resting against folded chambray denim on a sunlit terracotta tiled floor. Hard Spanish light, a strong shadow from the bag.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 10. `spain-3.jpg` — *fotoğraf levhası*

```
A weathered Barcelona wall of layered painted plaster, worn back in patches to the stone beneath. Texture study, flat light, no graffiti lettering or tags.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Norveç


### 11. `norway-1.jpg` — *kart + ülke kapağı*

```
A pale timber and white plaster Nordic interior corner, a single tall window throwing soft northern light across the floorboards. Spare, cold, quiet.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 12. `norway-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
Two Nordic patterned wool sweaters folded and stacked on a weathered wooden bench, a fjord blurred far behind. Grey overcast light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 13. `norway-3.jpg` — *fotoğraf levhası*

```
Extreme close-up of Nordic knitting: cream and charcoal yarn, the stitch pattern filling the frame. Soft side light raking across the wool.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Fas


### 14. `morocco-1.jpg` — *kart + ülke kapağı*

```
A zellij tile wall in cream, ochre and soft clay, with a carved wooden door set into it. Hard afternoon sun, deep clean shadows.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 15. `morocco-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A blue-washed stepped lane in Chefchaouen, early morning, the walls every shade of faded indigo and chalk. Completely empty.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 16. `morocco-3.jpg` — *fotoğraf levhası*

```
An embroidered burgundy kaftan hanging on a wooden peg in a riad courtyard, tiled floor below, dappled light through a lattice.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Nijerya


### 17. `nigeria-1.jpg` — *kart + ülke kapağı*

```
An Ankara print dress on a headless dress form against a plain warm studio backdrop, the bold pattern reading clearly. Even soft light, no props.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 18. `nigeria-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
Bolts of Ankara wax print cloth stacked and overlapping, photographed from above, the geometry of the patterns filling the frame.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 19. `nigeria-3.jpg` — *fotoğraf levhası*

```
Extreme close-up of Ankara wax print fabric: the crackle of the wax resist and the depth of the dye, filling the frame.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Güney Afrika


### 20. `south-africa-1.jpg` — *kart + ülke kapağı*

```
A white linen shirt and a pair of floral printed trousers laid flat and overlapping on a pale concrete surface, photographed from above.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 21. `south-africa-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
The façade of a modern Cape Town apartment block, white balconies in a clean repeating grid, hard sunlight and sharp shadow.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 22. `south-africa-3.jpg` — *fotoğraf levhası*

```
A woven straw headband resting on folded patterned cotton in full sun, photographed from above, strong shadow to one side.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## ABD


### 23. `united-states-1.jpg` — *kart + ülke kapağı*

```
A classic yellow New York taxi parked on a wet street at dusk, steam rising from a grate, warm reflections on the asphalt. No people, no visible plates or lettering.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 24. `united-states-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A New York fire escape against a brick façade, seen from below, late afternoon light raking across the iron.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 25. `united-states-3.jpg` — *fotoğraf levhası*

```
Folded tartan wool and a denim jacket overlapping on a weathered wooden floor, photographed from above. Soft window light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Kanada


### 26. `canada-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A single street lamp on an empty snow-covered street at night, warm light falling on fresh snow, dark façades beyond.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 27. `canada-3.jpg` — *fotoğraf levhası*

```
A heavy charcoal wool coat and a thick scarf folded together on a pale wooden surface, photographed from above. Close in on the texture of the wool.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Meksika


### 28. `mexico-1.jpg` — *kart + ülke kapağı*

```
A warm pink and ochre painted wall with bougainvillea spilling across it, hard midday sun, deep shadow. Architectural, empty.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 29. `mexico-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A bright yellow painted wall meeting a zebra crossing, seen straight on from across the street. Flat graphic composition, strong light, nobody in it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 30. `mexico-3.jpg` — *fotoğraf levhası*

```
A market stall of folded handwoven textiles in clay reds, cream and ochre, stacked and photographed from the front. No stallholder, no price cards.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Brezilya


### 31. `brazil-1.jpg` — *kart + ülke kapağı*

```
Palm fronds overlapping against a cream stucco wall, strong tropical sun throwing their shadow across it. Graphic and simple.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 32. `brazil-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A sun-bleached yellow wall in Rio with a weathered wooden door, layers of old paint, hard afternoon light. No posters, no writing.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 33. `brazil-3.jpg` — *fotoğraf levhası*

```
The black and white wave mosaic of the Copacabana promenade filling the frame, seen from above, morning light. Completely empty.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Japonya


### 34. `japan-1.jpg` — *kart + ülke kapağı*

```
A layered black avant-garde silhouette on a headless dress form, straight on against a plain pale studio backdrop. Sculptural folds, soft even light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 35. `japan-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A flat lay of colourful Harajuku accessories — hair clips, ribbons, socks, a small bag — arranged in a loose grid on a pale surface, shot from above.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 36. `japan-3.jpg` — *fotoğraf levhası*

```
Close-up of pink knitted leg warmers and a scatter of small hair clips on a pale surface, soft daylight, shot from above.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Güney Kore


### 37. `south-korea-1.jpg` — *kart + ülke kapağı*

```
A pale pink voluminous skirt on a headless dress form against a clean white studio wall, the fabric caught mid-drape. Soft even light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 38. `south-korea-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
A minimalist Seoul concrete façade, a single deep-set opening, flat daylight. Architectural, spare, empty.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 39. `south-korea-3.jpg` — *fotoğraf levhası*

```
A Seoul side street at night lit by warm signage glow, wet asphalt reflecting it. Signs rendered as abstract light only, no readable characters, nobody in the street.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Çin


### 40. `china-1.jpg` — *kart + ülke kapağı*

```
A denim-blue draped dress on a headless dress form in front of an old brick wall, soft afternoon light, the folds of the cloth catching it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 41. `china-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
The weathered timber shopfront of an old Shanghai lane house, shutters half closed, soft light. No signboard, no characters, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 42. `china-3.jpg` — *fotoğraf levhası*

```
Close-up of black quilted fabric, the stitched channels running diagonally across the frame, raking side light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Hindistan


### 43. `india-1.jpg` — *kart + ülke kapağı*

```
A deep pink painted Jaipur wall with a carved arched window set into it, hard sun, clean shadow. Architectural, empty.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 44. `india-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
Bolts of brightly dyed cloth stacked in a tall column, photographed straight on, the colours running from clay to saffron. No shop, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 45. `india-3.jpg` — *fotoğraf levhası*

```
Folded silk saris stacked on a dark wooden counter, photographed from above, the gold borders catching soft light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Avustralya


### 46. `australia-1.jpg` — *kart + ülke kapağı*

```
A pale blue leather jacket and a pair of cowboy boots arranged on a sunlit concrete floor, photographed from above. Hard Australian light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 3:4 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 47. `australia-2.jpg` — *fotoğraf levhası + rehber kapağı*

```
The shell roofs of the Sydney Opera House seen close and from below, white tile against clear morning sky. Abstract, architectural, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space above, below and on both sides: the frame is cropped to 4:5 in one place and to a wide 16:10 band through the middle in another, and must read in both.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

### 48. `australia-3.jpg` — *fotoğraf levhası*

```
A Melbourne laneway wall of layered spray paint, worn and overlapping, treated as pure colour and texture. No legible words, tags or figures.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 4:5 portrait, 1536×1920.
```

## Dönem ve genel


### 49. `eras/era-1900.jpg` — *1900'ler*

```
An Edwardian white lace gown on a headless dress form inside a museum vitrine, soft glass reflection, warm low light. The lace detail crisp against a dim background.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 50. `eras/era-1950.jpg` — *1950'ler*

```
A pale pink full-skirted New Look dress on a headless dress form, the skirt held wide, a pair of gloves resting on the plinth beside it. Clean studio light, soft shadow.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 51. `eras/era-1970.jpg` — *1970'ler*

```
A burnt-orange flared trouser suit on a headless dress form against a patterned seventies wallpaper in ochre and clay. Warm tungsten-leaning light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 52. `eras/era-1990.jpg` — *1990'lar*

```
A check flannel shirt hung open over a slip dress on a headless dress form, flat grey studio backdrop, cool even light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 53. `eras/era-2000.jpg` — *2000'ler*

```
Low-rise flared jeans and a mesh top on a headless dress form against a glossy pale backdrop, slightly harder light with a cool sheen.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 54. `eras/era-2010.jpg` — *2010'lar*

```
A grey oversized suit on a headless dress form with a pair of white trainers on the plinth below, raw concrete wall behind, flat daylight.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 55. `eras/era-2020.jpg` — *2020'ler*

```
A beige oversized tailored coat on a headless dress form standing in a minimal plaster archway, soft diffuse daylight, long quiet shadow.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 56. `eras/passport-paper.jpg` — *Pasaport arka planı*

```
A plain sheet of warm cream laid paper photographed flat and evenly lit, its fibres and faint laid lines visible. Nothing printed on it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Flat, even and edge to edge — a background texture with no subject, tiled behind other content.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 1:1 square, 2048×2048.
```

---

# 3. parti — 21 şehir görseli

Telif riski yok; sorun yalnızca üzerlerindeki `AI生成` filigranı. En son bunlar.

Hepsi **3:4 dikey, 1536×2048** — şehir kartı ve şehir sayfası kapağı olarak kullanılıyor.


### 1. `city-bangalore.jpg`

```
A tree-lined Bangalore street with a quiet café frontage, dappled light through the canopy. No signage, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 2. `city-beijing.jpg`

```
A narrow Beijing hutong of grey brick with a single red-painted doorway, soft morning light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 3. `city-cairns.jpg`

```
Palms and tropical planting along the Cairns esplanade, bright even light, the sea just visible beyond.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 4. `city-cappadocia.jpg`

```
Cappadocia's fairy chimneys at sunrise with hot air balloons drifting high above, warm light across the tufa. No people on the ground.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 5. `city-delhi.jpg`

```
A narrow Old Delhi bazaar lane with a cycle rickshaw at rest and spice sacks along the wall, warm dusty light. Nobody in frame.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 6. `city-guangzhou.jpg`

```
A covered Guangzhou market lane lit by warm hanging lamps, produce crates stacked along it. No stallholders, no readable signs.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 7. `city-istanbul.jpg`

```
A red nostalgic tram standing on empty cobbles in Istanbul at first light, shutters still closed along the street.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 8. `city-los-angeles.jpg`

```
A row of tall palms along a Los Angeles sidewalk against a pastel stucco façade, late afternoon sun.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 9. `city-manaus.jpg`

```
Brightly painted riverboats moored at Manaus, the Amazon wide behind them, warm late light. No signage, no people.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 10. `city-melbourne.jpg`

```
A Melbourne laneway of layered spray paint and brick, treated as colour and texture, overcast light. No legible words, nobody in it.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 11. `city-miami.jpg`

```
Pastel Art Deco façades along Miami Beach in low golden light, clean geometry, empty pavement.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 12. `city-montreal.jpg`

```
A snow-covered street in Vieux-Montréal, stone façades and iron railings under fresh snow, soft grey light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 13. `city-mugla.jpg`

```
Wooden gulet boats moored in a Bodrum harbour, coiled ropes on the quay, early morning calm.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 14. `city-mumbai.jpg`

```
The curve of Marine Drive and its sea wall at dusk, lights beginning along the sweep, calm water.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 15. `city-new-york.jpg`

```
Yellow taxis and rising steam on a New York avenue at dusk, wet asphalt, warm reflected light. No people, no readable signage.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 16. `city-rio.jpg`

```
The black and white wave mosaic of the Copacabana promenade with Sugarloaf in the haze beyond, morning light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 17. `city-sao-paulo.jpg`

```
The architectural line of Avenida Paulista, towers receding into soft haze, flat overcast light.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 18. `city-shanghai.jpg`

```
The Pudong skyline across the water from the Bund at dusk, lights coming on, still water. No people on the promenade.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 19. `city-sydney.jpg`

```
Sydney Harbour in early morning light, the Opera House shells pale against the water, the bridge soft in the distance.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 20. `city-toronto.jpg`

```
The CN Tower against a wide winter sky, seen from a quiet street below, cool flat daylight.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```

### 21. `city-vancouver.jpg`

```
The Vancouver seawall with mountains rising beyond, low cloud, soft northern light. Empty path.

Soft directional daylight from one side, long gentle shadows, matte tactile surfaces — plaster, raw linen, unvarnished wood, stone, paper. Warm neutral palette: cream, sand, bone, warm grey, soft clay. Terracotta #c2603a is the only accent colour. No saturated blue, green or neon.

Subject centred with generous empty space on all sides.

Quiet museum-archive mood: still, considered, unstaged. Editorial photography, 50mm, f/4, natural light, fine grain.

No people, no faces, no hands, no body parts. Dress forms are headless. No brand logos, no text, no lettering, no signage, no watermark, no readable writing anywhere in the frame.

Output: 3:4 portrait, 1536×2048.
```
