# Görsel değiştirme planı — 1.1

88 görselin tamamı değişecek. Bu belge envanter ve brief; görseller değiştirildikçe
satırlar işaretlenir.

**⭐ = App Store ekran görüntülerinde görünüyor** (11 dosya) — bunlar değişince
mağaza görselleri de yenilenmeli.

**Tür:** `Foto` = gerçek fotoğraf (telif riski), `YZ` = yapay zekâ üretimi (`AI生成` filigranlı).

**Yön:** yerine gelen görsellerde **mekânda tam boy manken** var. Her ülke ve
her dönem için o yerin/dönemin tarzını taşıyan **komple bir kombin** — üst,
alt, dış giyim, ayakkabı, çanta, aksesuar — yüz hatsız mat krem bir vitrin
mankeninin üzerinde, arka planda o yerin havasını veren ve sığ alan
derinliğiyle eritilmiş gerçek bir mekân. Aynı ülkenin üç görselinde farklı
kombin ve farklı mekân. Manken olmayan tek yer: 21 şehir dosyası (şehir kartı
şehri tanıtmak zorunda, orada manken ülke kartıyla karışır) ve pasaport kâğıt
dokusu.

Hepsinde kural: **insan yok, el yok, marka logosu yok, tasarımcı monogramı veya
imza deseni yok** (Burberry tipi ev ekosesi, LV/GG tipi monogram), **yazı ve
filigran yok.** Yalnızca markasız, jenerik kıyafetler.

Son kolondaki referans `docs/image-prompts.md` içindeki prompt numarasını gösterir;
prompt'un tam metni orada, tek kaynak o belge. ✅ = değiştirildi.

**Durum (2026-11-06):** 31/88 dosya değiştirildi. **19 ülke kartının, 8 dönem
görselinin ve pasaport kâğıdının tamamı artık bizim.** Kalan 57: 36 ülke foto
levhası (`-2`, `-3`) ve 21 şehir. Telif riski taşıyan yalnızca o 36 fotoğraf.
Tek tarz istisnası `united-kingdom-1`: hâlâ flat lay, yenisi reddedildi.
Üretim ve atıf ayrıntıları `CREDITS.md`'de.


## Ülke görselleri — 57 dosya (19 ülke × 3)


### Türkiye

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `turkiye-1.jpg` ⭐ | 768×576 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Bir kafe terasında bankta oturan kadın; başörtüsü saça bağlı, beyaz tişört, açık kot, kırmızı spor ayakkabı, kırmızı omuz çantası | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #1 |
| `turkiye-2.jpg` ⭐ | 1050×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Siyah deri ceket, bere, krem atkı ve siyah etekli kadın | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #2 |
| `turkiye-3.jpg` | 1129×753 | Foto | Ülke sayfası 2. fotoğraf levhası | Deve tüyü paltolu adam, arkada Boğaz ve cami silüeti | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #1 |

### Fransa

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `france-1.jpg` ⭐ | 1400×1050 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Paris sokağında yürüyen kadın; deve tüyü trençkot, siyah deri pantolon, topuklu | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #3 |
| `france-2.jpg` ⭐ | 1050×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Mavi Paris kapısının önünden geçen kadın; kot ceket ve kot pantolon | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #4 |
| `france-3.jpg` | 1120×1121 | Foto | Ülke sayfası 2. fotoğraf levhası | Bol kot ceket, kot pantolon ve kırmızı çantalı kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #2 |

### İtalya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `italy-1.jpg` ⭐ | 1400×933 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Sonbaharda yapraklı bir ara sokakta yürüyen kadın; lacivert blazer, beyaz tişört, açık kot | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #5 |
| `italy-2.jpg` | 933×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Siyah blazer ve beyaz bol pantolonlu kişi, arkada kalabalık (moda haftası) | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #3 |
| `italy-3.jpg` | 934×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Turuncu kazak, siyah etek, beyaz kovboy çizmeli kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #4 |

### Birleşik Krallık

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `united-kingdom-1.jpg` ⭐ | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Kırmızı Londra telefon kulübelerinin önünde siyah deri ceketli kişi | ⚠️ **Değiştirildi ama eski tarzda** — mankenli yenisi Burberry tipi ekose çıktığı için kullanılmadı; yeniden üretilecek |
| `united-kingdom-2.jpg` | 933×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | **Marlboro logolu** yarış ceketi giyen kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #5 |
| `united-kingdom-3.jpg` | 934×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Desenli şal-palto ve puantiyeli etekli kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #6 |

### Almanya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `germany-1.jpg` ⭐ | 850×1275 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Uzun siyah deri palto ve siyah başörtülü kişi; arkada kırmızı-beyaz bariyer | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #7 |
| `germany-2.jpg` | 1120×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Otobüs durağında beyaz tişört ve puantiyeli pantolonlu ince kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #7 |
| `germany-3.jpg` | 1178×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Brandenburg Kapısı önünde başörtülü ve şişme montlu kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #8 |

### İspanya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `spain-1.jpg` ⭐ | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Gri oversize blazer, koyu pantolon, güneş gözlüğü ve gümüş çantalı kadın | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #8 |
| `spain-2.jpg` | 933×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Kot elbise ve yuvarlak hasır çantalı kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #9 |
| `spain-3.jpg` | 1124×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Siyah yelek ve uzun etekli kadın, grafitili duvar önünde | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #10 |

### Norveç

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `norway-1.jpg` | 1200×1200 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Beyaz sütuna yaslanmış kadın; siyah kolsuz üst, geniş beyaz pantolon | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #1 |
| `norway-2.jpg` | 500×500 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Fiyort önünde Nordik desenli kazaklı iki kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #11 |
| `norway-3.jpg` | 1400×1050 | Foto | Ülke sayfası 2. fotoğraf levhası | Nordik örgü kazak ve desenli saç bandı takan kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #12 |

### Fas

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `morocco-1.jpg` | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Parlak mavi takım elbiseli kadın, ıslak kaldırım | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #2 |
| `morocco-2.jpg` | 1050×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Chefchaouen'in mavi duvarı önünde çizgili kaftanlı kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #13 |
| `morocco-3.jpg` | 1054×753 | Foto | Ülke sayfası 2. fotoğraf levhası | Riad avlusunda bordo işlemeli kaftanlı kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #14 |

### Nijerya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `nigeria-1.jpg` | 934×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Kahverengi deri sarma elbiseli kadın — **BN style filigranı var** | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #3 |
| `nigeria-2.jpg` | 794×1191 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Yeşil-turuncu Ankara baskılı gelinlik benzeri elbise giyen kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #15 |
| `nigeria-3.jpg` | 933×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Kırmızı-siyah Ankara desenli elbiseli kadın, iç mekân | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #16 |

### Güney Afrika

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `south-africa-1.jpg` | 750×1000 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Beyaz gömlek ve çiçekli pantolonla korkuluğa yaslanmış kadın | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #4 |
| `south-africa-2.jpg` | 787×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Modern apartman önünde krem kıyafetli iki kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #17 |
| `south-africa-3.jpg` | 750×1000 | Foto | Ülke sayfası 2. fotoğraf levhası | Beyaz gömlek, saç bandı ve desenli pantolonlu kadın, güneşli | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #18 |

### ABD

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `united-states-1.jpg` | 969×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Sarı New York taksisinin yanında leopar desenli uzun paltolu kişi | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #5 |
| `united-states-2.jpg` | 1400×1015 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Günlük kıyafetlerle yürüyen bir grup insan | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #19 |
| `united-states-3.jpg` | 683×1024 | Foto | Ülke sayfası 2. fotoğraf levhası | Kot ceket ve ekose etekle karşıdan karşıya geçen kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #20 |

### Kanada

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `canada-1.jpg` ⭐ | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Kürk yakalı bej parka ve şapkalı kadın; karlı ıslak sokak, arkada yeşil kamyon | ✅ **Değiştirildi** (eski tarz) — yeni tarz prompt: `docs/image-prompts.md`, 3. parti #9 |
| `canada-2.jpg` | 590×887 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Gece sokak lambaları altında uzun koyu paltolu kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #21 |
| `canada-3.jpg` | 590×825 | Foto | Ülke sayfası 2. fotoğraf levhası | Uzun koyu palto, gri pantolon ve atkılı kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #22 |

### Meksika

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `mexico-1.jpg` | 1138×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Siyah deri ceket ve açık kot etekle karşıya geçen kadın; arkada turuncu çiçekli çit | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #6 |
| `mexico-2.jpg` | 683×1024 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Sarı takım elbiseyle yaya geçidinden geçen kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #23 |
| `mexico-3.jpg` | 1124×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Beyzbol şapkalı, bol kotlu kişi; sokak pazarı | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #24 |

### Brezilya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `brazil-1.jpg` | 1050×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Mavi çiçekli crop gömlek ve beyaz bol pantolonlu kadın, palmiyeler | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #7 |
| `brazil-2.jpg` | 800×533 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Sarı duvar ve afiş önünde duran kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #25 |
| `brazil-3.jpg` | 700×1049 | Foto | Ülke sayfası 2. fotoğraf levhası | Copacabana yürüyüş yolunda ekose etekli kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #26 |

### Japonya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `japan-1.jpg` | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Katmanlı koyu avangart kıyafet ve tozluklu kişi, Tokyo sokağı — **TokyoFashion.com filigranı var** | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #8 |
| `japan-2.jpg` | 934×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Çok renkli katmanlı Harajuku kıyafeti, mavi saçlı kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #27 |
| `japan-3.jpg` | 934×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Çok renkli Harajuku kıyafeti, pembe tozluklar | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #28 |

### Güney Kore

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `south-korea-1.jpg` | 1400×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Siyah balıkçı yaka ve soluk pembe hacimli etekli kadın, mor çanta | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #9 |
| `south-korea-2.jpg` | 1400×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Beton duvar önünde uzun siyah paltolu iki kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #29 |
| `south-korea-3.jpg` | 1024×683 | Foto | Ülke sayfası 2. fotoğraf levhası | Siyah giyimli iki kişi, kentsel meydan | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #30 |

### Çin

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `china-1.jpg` | 800×1067 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Tuğla duvar önünde eşleşen kot mavisi drapeli iki kişi | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #10 |
| `china-2.jpg` | 800×1200 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Beyaz gömlek ve uzun krem etekli kadın, dükkân önü | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #31 |
| `china-3.jpg` | 540×537 | Foto | Ülke sayfası 2. fotoğraf levhası | Siyah şişme ceket ve desenli çantalı kişi | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #32 |

### Hindistan

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `india-1.jpg` | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | Türbanlı ve sakallı adam; turkuaz kurta, pembe desenli pantolon, pembe duvar | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #11 |
| `india-2.jpg` | 1120×1400 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Desenli gömlek ve bej pantolonlu kişi, tozlu sokak | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #33 |
| `india-3.jpg` | 933×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Uzun paltolu kişi, tekstil pazarı | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #34 |

### Avustralya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `australia-1.jpg` | 933×1400 | Foto | Ülke kartı (Ana sayfa, Favoriler, Quiz sonucu, Dönemler listesi) **+** Ülke sayfası kapağı (dikey, tam genişlik) | İki kadın: biri açık mavi deri takım, diğeri yeşil çiçekli uzun elbise, kovboy çizme | ✅ **Değiştirildi** — Google Gemini, mekânda manken; prompt: `docs/image-prompts.md`, 1. parti #12 |
| `australia-2.jpg` | 1000×1333 | Foto | Ülke sayfası 1. fotoğraf levhası **+** Şehir Rehberi listesi ve rehber kapağı | Sydney Opera Binası yanında uzun beyaz örgü elbiseli kadın | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #35 |
| `australia-3.jpg` | 933×1400 | Foto | Ülke sayfası 2. fotoğraf levhası | Grafik baskılı tişörtlerle iki erkek, dükkân önü — **marka logoları görünüyor** | **Mekânda manken, komple kombin** — prompt: `docs/image-prompts.md`, 2. parti #36 |

## Şehir görselleri — 21 dosya

Hepsi **yapay zekâ üretimi** ve sol alt köşede görünür **`AI生成`** filigranı taşıyor.

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `city-bangalore.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Kahve dükkânı önünde krem ceketli adam | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #1 |
| `city-beijing.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Dar bir hutong sokağında gri paltolu adam | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #2 |
| `city-cairns.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Palmiyeli sahil yolunda hasır şapkalı beyaz giyimli kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #3 |
| `city-cappadocia.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Gün doğumunda kaya sırtında duran kişi, gökyüzünde sıcak hava balonları | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #4 |
| `city-delhi.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Kalabalık çarşı sokağında beyaz kurtalı adam, riksha | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #5 |
| `city-guangzhou.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Kalabalık pazar sokağında beyaz giyimli kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #6 |
| `city-istanbul.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Arnavut kaldırımlı sokakta trençkotlu kadın, arkada kırmızı Nostalji Tramvayı | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #7 |
| `city-los-angeles.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Palmiyeli kaldırımda beyaz gömlek ve kotlu kişi | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #8 |
| `city-manaus.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Nehir teknelerinin yanında bel çantalı kadın, 'MANAUS' tabelası | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #9 |
| `city-melbourne.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Grafitili ara sokakta elinde kahveyle siyah giyimli kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #10 |
| `city-miami.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Art Deco cepheler önünde pembe saten takımlı kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #11 |
| `city-montreal.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Karlı eski şehir sokağında uzun koyu paltolu kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #12 |
| `city-mugla.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Limanda beyaz gömlek ve şortlu adam, gulet tekneleri | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #13 |
| `city-mumbai.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Marine Drive'da neon turuncu gömlekli kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #14 |
| `city-new-york.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Siyah giyimli kadın, sarı taksiler arasında karşıdan karşıya | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #15 |
| `city-rio.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Copacabana dalga desenli kaldırımda renkli desenli gömlekli kadın | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #16 |
| `city-sao-paulo.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Kalabalık bulvarda gri sweatshirtlü adam | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #17 |
| `city-shanghai.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Bund'da deve tüyü paltolu kadın, arkada Pudong silüeti | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #18 |
| `city-sydney.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Opera Binası korkuluğunda lacivert gömlek ve beyaz pantolonlu adam | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #19 |
| `city-toronto.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Krem palto ve bereli kadın, arkada CN Kulesi | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #20 |
| `city-vancouver.jpg` | 800×1200 | YZ | Ülke sayfasındaki şehir kartı **+** Şehir sayfası kapağı (dikey) | Su kenarında gri polarlı kadın, arkada dağlar | **Yer görseli, manken yok** — prompt: `docs/image-prompts.md`, 4. parti #21 |

## Dönem ve genel görseller — 10 dosya

| Dosya | Boyut | Tür | Nerede görünüyor | Şu an ne gösteriyor | Yerine ne gelecek |
| --- | --- | --- | --- | --- | --- |
| `eras/era-1900.jpg` | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Sepya fotoğraf: Edward dönemi beyaz dantel elbiseli, şemsiyeli iki kadın | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/era-1920.jpg` ⭐ | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Boncuklu düşük belli flapper elbise ve tüylü bantlı kadın, art deco altın iç mekân | ✅ **Değiştirildi** — Google Gemini; zaten mankenli, yeni tarza uyuyor |
| `eras/era-1950.jpg` | 900×1321 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Soluk pembe geniş etekli New Look elbise, eldivenli kadın | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/era-1970.jpg` | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Turuncu İspanyol paça takım ve desenli eşarplı kadın, sokak | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/era-1990.jpg` | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Askılı elbise üzerine ekose gömlek giymiş kadın, gri zemin | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/era-2000.jpg` | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | File/grafik crop üst ve düşük belli İspanyol paça kot giyen kadın | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/era-2010.jpg` | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Gri oversize takım ve beyaz spor ayakkabılı kadın, koyu duvar | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/era-2020.jpg` | 900×1200 | Foto | Dönemler (Time Travel) sayfası dönem kapağı | Minimal bir kemer altında bej oversize terzi paltolu kişi | ✅ **Değiştirildi** — Google Gemini, mekânda manken |
| `eras/atlas-hero.jpg` ⭐ | 900×1200 | Foto | Ana sayfa kapak görseli | Galeri mekânında üç manken üzerinde krem drapeli giysi — **zaten insan içermiyor** | ✅ **Değiştirildi** — Google Gemini; zaten mankenli, yeni tarza uyuyor |
| `eras/passport-paper.jpg` | 700×467 | Foto | Moda Pasaportu arka plan dokusu | Düz krem kâğıt dokusu — **içerik yok, kişi yok** | ✅ **Değiştirildi** — Google Gemini, kâğıt dokusu, iç kısmı kırpıldı |

---

## App Store ekran görüntülerinde görünenler

Mağazadaki 7 ekran görüntüsünde **11 görsel** var. Bunlar değişince mağaza
görselleri de yenilenmeli, yoksa listedeki görsel ile uygulamadaki eşleşmez —
Apple bunu 2.3.3 (Accurate Metadata) altında ret sebebi sayıyor.

| Ekran görüntüsü | İçindeki görseller |
| --- | --- |
| Ana sayfa | `eras/atlas-hero.jpg` |
| Ülke listesi | `turkiye-1`, `france-1`, `italy-1`, `united-kingdom-1`, `germany-1`, `spain-1` |
| Canada rehberi | `canada-1.jpg` |
| Şehir Rehberleri | `turkiye-2.jpg`, `france-2.jpg` |
| Dönemler | `eras/era-1920.jpg` |
| What to Wear · Tools | *(fotoğraf yok)* |

Yani mağaza görsellerinden **5'i** yeniden çekilmeli; *What to Wear* ve *Tools*
ekranları fotoğraf içermediği için olduğu gibi kalabilir.

---

## Yeni görselleri nasıl ekleyeceğiz

### Teknik gereksinimler

Dosya adları **değişmeyecek** — kod `/images/<slug>-1.jpg` gibi adları doğrudan
üretiyor, yani yeni dosyayı aynı adla üzerine yazmak yeterli, kod değişikliği
gerekmiyor.

| | Kural |
| --- | --- |
| Biçim | `.jpg`, sRGB, alfa kanalı yok |
| Ülke `-1`, şehir, dönem, `atlas-hero` | **3:4 dikey**, 1536×2048 |
| Ülke `-2` ve `-3` | **4:5 dikey**, 1536×1920 |
| `passport-paper` | **1:1**, 2048×2048, sade doku |

> **Dikkat — kadraj kısıtı.** Kodda `SmartImage` aynı dosyayı farklı oranlarda
> kırpıyor: `portrait` = **3:4**, `editorial` = **4:5**, `story` = **16:10**.
> `<ülke>-1` hem 3:4 hem 16:10 olarak, `<ülke>-2` hem 4:5 hem 16:10 olarak
> kullanılıyor. Bu yüzden özne **dikey olarak tam ortada** ve çevresinde bol
> boşlukla durmalı; kenara yaslanan bir kompozisyon geniş kırpmada kesilir.
| Dosya boyutu | Her biri **200 KB altı** hedef (şu an bazıları 400 KB+; toplam 14.8 MB) |

Mevcut set 35 farklı ölçüde; yenileri tutarlı olsun. Boyutlandırma ve sıkıştırmayı
ben yapabilirim, sen ham dosyaları ver yeter.

### Nereden alacağız — üç seçenek

**1. Telifsiz stok (Unsplash / Pexels)** — ücretsiz, ticari kullanıma açık.
*Artısı:* hemen başlanabilir. *Eksisi:* "tanınabilir kişi yok" şartını sağlayan
moda görseli bulmak zor; aynı fotoğraflar başka uygulamalarda da çıkar.

**2. Yapay zekâ ile üretim** — mankene giydirilmiş giysi, kumaş dokusu, mimari.
*Artısı:* her kareyi tam istediğimiz gibi kurarız, telif ve kişilik hakkı sorunu
olmaz, görsel dil tutarlı olur. *Eksisi:* üretim maliyeti ve zaman.
**Filigransız bir servis kullan** — şu anki şehir görsellerindeki `AI生成` damgası
tam olarak bundan kaynaklanıyor.

**3. Kendi çekimin** — tam mülkiyet. Ülke kapsamı düşünülünce gerçekçi değil.

**Önerim: 2 numara, tek bir yönle.** Uygulamanın kendi kapak görseli
(`atlas-hero`) zaten **mankenler üzerinde giysi** gösteriyor ve insan içermiyor.
Bütün seti o dile çekersek hem "dijital moda müzesi" konsepti güçlenir, hem de
kişilik hakkı sorunu tamamen ortadan kalkar — yüz yoksa izin de gerekmez.

---

## Atıfları CREDITS.md'de nasıl tutacağız

Her görsel grubu için tek bir satır değil, **dosya bazında kaynak** tutacağız.
`CREDITS.md`'de şu tablo olacak:

| Sütun | Ne yazılacak |
| --- | --- |
| Dosya | `public/images/italy-1.jpg` |
| Kaynak | `Unsplash` · `Pexels` · `AI (<servis adı>)` · `Kendi çekimimiz` |
| Bağlantı / kimlik | Stok ise fotoğrafın URL'i; YZ ise üretim tarihi ve servis |
| Lisans | `Unsplash License` · `Pexels License` · `Üretilen içerik, hak sahibi: proje` |
| Atıf gerekli mi | Evet/Hayır — gerekiyorsa uygulama içinde nerede gösterildiği |

Kural: **kaynağı yazılmamış hiçbir görsel depoya girmeyecek.** Bugün yaşadığımız
sorun tam olarak bundan çıktı — dosyalarda metadata yok, commit mesajlarında
kaynak yok, kimse nereden geldiğini bilmiyordu.

Atıf zorunlu bir kaynak kullanırsak, Profil sayfasına bir **"Görsel kaynakları"**
ekranı eklenir ve oradan gösterilir. Unsplash ve Pexels atıf zorunlu kılmıyor,
yalnızca öneriyor; o yolu seçersek ekran gerekmez.

---

## Sıra

1. Yönü seç (yukarıdaki üç seçenekten biri)
2. Önce **⭐ işaretli 11 görsel** — mağaza görselleri bunlara bağlı
3. Sonra kalan 46 ülke görseli
4. Sonra 21 şehir görseli *(telif riski yok, yalnızca filigran sorunu — acelesi en az olan grup)*
5. Sonra 10 dönem/genel görsel
6. `CREDITS.md` her parti ile birlikte güncellenir
7. Yeni ekran görüntüleri alınır, 1.1 gönderilir
