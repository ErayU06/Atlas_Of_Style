import type { LocalizedText } from '@/types/country'

export interface City {
  slug: string
  countrySlug: string
  name: LocalizedText
  tagline: LocalizedText
  description: LocalizedText
  climate: LocalizedText
}

export const cities: City[] = [
  {
    slug: 'istanbul',
    countrySlug: 'turkiye',
    name: { tr: 'İstanbul', en: 'Istanbul' },
    tagline: { tr: 'İki kıtanın stil kesişimi', en: 'Where two continents meet in style' },
    description: {
      tr: 'İki kıtayı birleştiren şehir, stili de birleştirir: Kapalıçarşı’nın zanaat dokusuyla Nişantaşı’nın modern şıklığı aynı gün yaşanır. Katmanlı giyim burada bir tercih değil, yaşam biçimidir.',
      en: 'A city bridging two continents bridges styles too: the craft texture of the Grand Bazaar and the modern chic of Nişantaşı live the same day. Layering is not a choice here — it is a way of life.',
    },
    climate: {
      tr: 'Dört mevsim: kış 5-10°C yağmurlu, yaz 28°C nemli.',
      en: 'Four seasons: rainy 5-10°C winters, humid 28°C summers.',
    },
  },
  {
    slug: 'cappadocia',
    countrySlug: 'turkiye',
    name: { tr: 'Kapadokya', en: 'Cappadocia' },
    tagline: { tr: 'Peribacaları arasında outdoor şıklığı', en: 'Outdoor chic among fairy chimneys' },
    description: {
      tr: 'Peribacaları ve vadiler arasında fonksiyonellik öne çıkar; sabah balon turu için termal, gündüz yürüyüş için katman gerekir. Toprak tonları hem manzaraya hem fotoğraflara uyar.',
      en: 'Function comes first among fairy chimneys and valleys: thermals for dawn balloon rides, layers for daytime hikes. Earth tones suit both the landscape and your photos.',
    },
    climate: {
      tr: 'Karasal: kış -10°C’a iner, yaz gündüz 30°C+, gece serin.',
      en: 'Continental: winters down to -10°C, summer days 30°C+ with cool nights.',
    },
  },
  {
    slug: 'mugla',
    countrySlug: 'turkiye',
    name: { tr: 'Muğla', en: 'Muğla' },
    tagline: { tr: 'Ege’nin yelken ve keten rahatlığı', en: 'Sailing and linen ease of the Aegean' },
    description: {
      tr: 'Bodrum’un beyaz keten zarafeti, Fethiye’nin macera ruhu ve Datça’nın sakin şıklığı aynı kıyıda buluşur. Yazın tek kural: hafif, nefes alan, doğal kumaşlar.',
      en: 'Bodrum’s white linen elegance, Fethiye’s adventurous spirit and Datça’s calm chic meet on the same coast. One summer rule: light, breathable, natural fabrics.',
    },
    climate: {
      tr: 'Akdeniz: kış ılıman yağmurlu, yaz 35°C kuru sıcak.',
      en: 'Mediterranean: mild rainy winters, dry 35°C summers.',
    },
  },
  {
    slug: 'new-york',
    countrySlug: 'united-states',
    name: { tr: 'New York', en: 'New York' },
    tagline: { tr: 'Sokak stilinin dünya başkenti', en: 'The world capital of street style' },
    description: {
      tr: 'Beş ilçenin her biri ayrı bir stil dili konuşur; Manhattan’ın siyah-gri üniformasından Brooklyn’in vintage rahatlığına. Kışın katman, yazın nefes alan parçalar şart.',
      en: 'Each of the five boroughs speaks its own style language — from Manhattan’s black-grey uniform to Brooklyn’s vintage ease. Layers in winter, breathable pieces in summer are a must.',
    },
    climate: {
      tr: 'Kış -5°C karlı, yaz 30°C nemli; katman sistemi şart.',
      en: 'Snowy -5°C winters, humid 30°C summers; a layering system is essential.',
    },
  },
  {
    slug: 'los-angeles',
    countrySlug: 'united-states',
    name: { tr: 'Los Angeles', en: 'Los Angeles' },
    tagline: { tr: 'Güneşli sokak, rahat lüks', en: 'Sunny streets, relaxed luxury' },
    description: {
      tr: 'Güneşli sokak kültürü ve rahat lüks burada birleşir: sneaker, açık gömlek, vintage denim. Akşamlar serinlediğinde hafif bir katman yeterli olur.',
      en: 'Sunny street culture meets relaxed luxury: sneakers, open shirts, vintage denim. A light layer is all you need when evenings cool down.',
    },
    climate: {
      tr: 'Yıl boyu 18-28°C; akşamlar serin, yağmur az.',
      en: '18-28°C year-round; cool evenings, little rain.',
    },
  },
  {
    slug: 'miami',
    countrySlug: 'united-states',
    name: { tr: 'Miami', en: 'Miami' },
    tagline: { tr: 'Tropik renkler, Latin ritmi', en: 'Tropical colours, Latin rhythm' },
    description: {
      tr: 'Latin ritmi ve Art Deco renkleri sokak stiline yansır; pastel ketenler, canlı desenler. Nemli sıcakta açık renk ve bol kesim kurtarıcıdır.',
      en: 'Latin rhythm and Art Deco colours spill onto the streets: pastel linens, vivid prints. Light colours and relaxed cuts save you in the humid heat.',
    },
    climate: {
      tr: 'Tropik: kış 24°C, yaz 33°C nemli ve sağanaklı.',
      en: 'Tropical: 24°C winters, humid 33°C summers with downpours.',
    },
  },
  {
    slug: 'beijing',
    countrySlug: 'china',
    name: { tr: 'Pekin', en: 'Beijing' },
    tagline: { tr: 'İmparatorluk mirası, modern katmanlar', en: 'Imperial heritage, modern layers' },
    description: {
      tr: 'İmparatorluk mirasıyla ultra-modern yaşam yan yana; hutong sokaklarında sade, CBD’de keskin silüetler. Kuru soğukta termal katmanlar ve rüzgar kesen dış giyim öne çıkar.',
      en: 'Imperial heritage and ultra-modern life side by side: understated in the hutongs, sharp silhouettes in the CBD. Thermal layers and wind-blocking outerwear rule the dry cold.',
    },
    climate: {
      tr: 'Kuru karasal: kış -8°C rüzgarlı, yaz 32°C.',
      en: 'Dry continental: windy -8°C winters, 32°C summers.',
    },
  },
  {
    slug: 'shanghai',
    countrySlug: 'china',
    name: { tr: 'Şanghay', en: 'Shanghai' },
    tagline: { tr: 'Fütüristik silüet, rafine sokak', en: 'Futuristic skyline, refined streets' },
    description: {
      tr: 'Bund’un tarihi zarafeti ile Lujiazui’nin fütürizmi arasında rafine bir sokak stili doğar. Islak kış ve bunaltıcı yaz, teknik kumaşları ve akıllı katmanları zorunlu kılar.',
      en: 'A refined street style emerges between the Bund’s historic elegance and Lujiazui’s futurism. Wet winters and stifling summers make technical fabrics and smart layering essential.',
    },
    climate: {
      tr: 'Nemli: kış 3-8°C ıslak soğuk, yaz 35°C bunaltıcı.',
      en: 'Humid: damp 3-8°C winters, stifling 35°C summers.',
    },
  },
  {
    slug: 'guangzhou',
    countrySlug: 'china',
    name: { tr: 'Guangzhou', en: 'Guangzhou' },
    tagline: { tr: 'Subtropik hafiflik, ticaret enerjisi', en: 'Subtropical lightness, trading energy' },
    description: {
      tr: 'Ticaret şehrinin pratik enerjisi, subtropik iklimin hafifliğiyle birleşir. Yılın çoğunda ince ve nefes alan parçalar yeterlidir; yağmur sezonuna hazırlıklı olun.',
      en: 'The practical energy of a trading city meets subtropical lightness. Thin, breathable pieces suffice most of the year — just be ready for the rainy season.',
    },
    climate: {
      tr: 'Subtropik: kış 15°C, yaz 33°C muson yağmurlu.',
      en: 'Subtropical: 15°C winters, 33°C monsoon summers.',
    },
  },
  {
    slug: 'delhi',
    countrySlug: 'india',
    name: { tr: 'Delhi', en: 'Delhi' },
    tagline: { tr: 'Tarih ve rengin yoğun dansı', en: 'A dense dance of history and colour' },
    description: {
      tr: 'Eski Delhi’nin renk karmaşası ile Yeni Delhi’nin diplomatik şıklığı aynı şehirde yaşar. Pamuk ve keten yazın kurtarıcı, kış sabahlarında şal ve hafif ceket gerekir.',
      en: 'Old Delhi’s riot of colour and New Delhi’s diplomatic chic live in the same city. Cotton and linen save you in summer; a shawl and light jacket on winter mornings.',
    },
    climate: {
      tr: 'Aşırı uçlar: kış 8°C sisli, yaz 45°C.',
      en: 'Extremes: foggy 8°C winters, scorching 45°C summers.',
    },
  },
  {
    slug: 'mumbai',
    countrySlug: 'india',
    name: { tr: 'Mumbai', en: 'Mumbai' },
    tagline: { tr: 'Muson şıklığı, Bollywood enerjisi', en: 'Monsoon chic, Bollywood energy' },
    description: {
      tr: 'Bollywood enerjisi ve deniz meltemi şehrin stilini belirler; canlı ama pratik. Muson döneminde hızlı kuruyan kumaşlar ve suya dayanıklı ayakkabı olmazsa olmaz.',
      en: 'Bollywood energy and sea breeze define the city’s style — vivid yet practical. Quick-dry fabrics and water-resistant shoes are non-negotiable in monsoon season.',
    },
    climate: {
      tr: 'Muson: yıl boyu 25-32°C, Haziran-Eylül şiddetli yağmur.',
      en: 'Monsoon: 25-32°C year-round, heavy rain June-September.',
    },
  },
  {
    slug: 'bangalore',
    countrySlug: 'india',
    name: { tr: 'Bangalore', en: 'Bangalore' },
    tagline: { tr: 'Ilıman iklimin rahat modernliği', en: 'Easy modernity of a mild climate' },
    description: {
      tr: 'Hindistan’ın teknoloji başkenti, ılıman iklimiyle yıl boyu rahat giyim sunar; smart-casual burada ana dildir. Akşamlar için hafif bir ceket yeterli.',
      en: 'India’s tech capital offers year-round comfort thanks to its mild climate; smart-casual is the native language. A light jacket is enough for the evenings.',
    },
    climate: {
      tr: 'Ilıman: yıl boyu 18-30°C, hafif yağmur dönemleri.',
      en: 'Mild: 18-30°C year-round with light rainy spells.',
    },
  },
  {
    slug: 'sydney',
    countrySlug: 'australia',
    name: { tr: 'Sydney', en: 'Sydney' },
    tagline: { tr: 'Sörf rahatlığı, şehir zarafeti', en: 'Surf ease meets city elegance' },
    description: {
      tr: 'Sörf kültürü ile şehir zarafeti Bondi’den CBD’ye uzanır; rahat ama derli toplu. Yazın güneş koruması, kışın hafif katmanlar yeterlidir.',
      en: 'Surf culture and city elegance stretch from Bondi to the CBD — relaxed but put-together. Sun protection in summer, light layers in winter.',
    },
    climate: {
      tr: 'Ilıman: kış 8-17°C, yaz 26°C güneşli.',
      en: 'Temperate: 8-17°C winters, sunny 26°C summers.',
    },
  },
  {
    slug: 'melbourne',
    countrySlug: 'australia',
    name: { tr: 'Melbourne', en: 'Melbourne' },
    tagline: { tr: 'Dört mevsim bir günde, katman sanatı', en: 'Four seasons in a day, the art of layering' },
    description: {
      tr: 'Avustralya’nın stil başkenti, bir günde dört mevsim yaşatan havasıyla katman sanatının ustasıdır. Siyah ağırlıklı palet ve kahve kültürü şehrin imzasıdır.',
      en: 'Australia’s style capital masters the art of layering with its four-seasons-in-a-day weather. A black-heavy palette and coffee culture are the city’s signature.',
    },
    climate: {
      tr: 'Değişken: kış 6-14°C, yaz 25°C+; aynı gün dört mevsim.',
      en: 'Changeable: 6-14°C winters, 25°C+ summers; four seasons in one day.',
    },
  },
  {
    slug: 'cairns',
    countrySlug: 'australia',
    name: { tr: 'Cairns', en: 'Cairns' },
    tagline: { tr: 'Tropik hafiflik, macera ruhu', en: 'Tropical lightness, adventure spirit' },
    description: {
      tr: 'Büyük Set Resifi ve yağmur ormanına açılan kapı; stil burada tamamen fonksiyonel ve tropiktir. Hafif, hızlı kuruyan, güneşten koruyan parçalar öne çıkar.',
      en: 'The gateway to the Great Barrier Reef and the rainforest — style here is purely functional and tropical. Light, quick-dry, sun-protective pieces lead the way.',
    },
    climate: {
      tr: 'Tropik: yıl boyu 25-31°C, Kasım-Nisan yağışlı.',
      en: 'Tropical: 25-31°C year-round, wet November-April.',
    },
  },
  {
    slug: 'rio',
    countrySlug: 'brazil',
    name: { tr: 'Rio de Janeiro', en: 'Rio de Janeiro' },
    tagline: { tr: 'Plaj kültürünün renkli kalbi', en: 'The colourful heart of beach culture' },
    description: {
      tr: 'Copacabana’dan Ipanema’ya plaj kültürü şehrin DNA’sı; renkli, rahat, özgür. Vücutla barışık kesimler ve canlı desenler burada normdur.',
      en: 'Beach culture is in the city’s DNA from Copacabana to Ipanema — colourful, relaxed, free. Body-confident cuts and vivid prints are the norm.',
    },
    climate: {
      tr: 'Tropik: kış 22°C, yaz 32°C nemli.',
      en: 'Tropical: 22°C winters, humid 32°C summers.',
    },
  },
  {
    slug: 'sao-paulo',
    countrySlug: 'brazil',
    name: { tr: 'São Paulo', en: 'São Paulo' },
    tagline: { tr: 'Gri tonların kozmopolit şıklığı', en: 'Cosmopolitan chic in grey tones' },
    description: {
      tr: 'Brezilya’nın iş ve moda motoru, gri tonların kozmopolit şıklığını konuşur. Gündüz smart-casual, serin akşamlar için şık bir katman gerekir.',
      en: 'Brazil’s business and fashion engine speaks cosmopolitan chic in grey tones. Smart-casual by day, a sharp layer for cool evenings.',
    },
    climate: {
      tr: 'Subtropik: kış 12-22°C serin akşamlar, yaz 28°C yağmurlu.',
      en: 'Subtropical: 12-22°C winters with cool evenings, rainy 28°C summers.',
    },
  },
  {
    slug: 'manaus',
    countrySlug: 'brazil',
    name: { tr: 'Manaus', en: 'Manaus' },
    tagline: { tr: 'Amazon neminin fonksiyonel stili', en: 'Functional style in Amazon humidity' },
    description: {
      tr: 'Amazon’un kalbinde stil tamamen fonksiyon odaklıdır; nefes alan, nem çeken, hızlı kuruyan kumaşlar. Açık renkler ve kapalı ama hafif ayakkabılar önerilir.',
      en: 'In the heart of the Amazon, style is purely functional: breathable, moisture-wicking, quick-dry fabrics. Light colours and closed but light shoes are recommended.',
    },
    climate: {
      tr: 'Ekvatoral: yıl boyu 26-32°C, yüksek nem.',
      en: 'Equatorial: 26-32°C year-round, high humidity.',
    },
  },
  {
    slug: 'vancouver',
    countrySlug: 'canada',
    name: { tr: 'Vancouver', en: 'Vancouver' },
    tagline: { tr: 'Yağmur ve doğanın şık dengesi', en: 'A stylish balance of rain and nature' },
    description: {
      tr: 'Okyanus, dağ ve şehir aynı kadrajda; outdoor fonksiyonellik ile şehir şıklığı iç içedir. Su geçirmez katmanlar yılın yarısında günlük üniformadır.',
      en: 'Ocean, mountains and city in one frame — outdoor function and urban chic intertwined. Waterproof layers are the daily uniform half the year.',
    },
    climate: {
      tr: 'Okyanusal: kış 3-8°C yağmurlu, yaz 22°C.',
      en: 'Oceanic: rainy 3-8°C winters, 22°C summers.',
    },
  },
  {
    slug: 'toronto',
    countrySlug: 'canada',
    name: { tr: 'Toronto', en: 'Toronto' },
    tagline: { tr: 'Kozmopolit katmanlı şıklık', en: 'Cosmopolitan layered chic' },
    description: {
      tr: 'Dünyanın en kozmopolit şehirlerinden; her mahalle farklı bir kültürün stilini taşır. Sert kış, kalın parka ve katman sistemini zorunlu kılar.',
      en: 'One of the world’s most cosmopolitan cities — every neighbourhood carries a different culture’s style. The harsh winter demands a heavy parka and a layering system.',
    },
    climate: {
      tr: 'Karasal: kış -10°C karlı, yaz 27°C nemli.',
      en: 'Continental: snowy -10°C winters, humid 27°C summers.',
    },
  },
  {
    slug: 'montreal',
    countrySlug: 'canada',
    name: { tr: 'Montreal', en: 'Montreal' },
    tagline: { tr: 'Sert kışın Avrupai zarafeti', en: 'European elegance in a harsh winter' },
    description: {
      tr: 'Kuzey Amerika’nın en Avrupai şehri; -15°C’de bile şıklıktan ödün vermez. Yün palto, şık bot ve eşarptan oluşan kış üçlüsü burada bir sanat formudur.',
      en: 'North America’s most European city never compromises on chic, even at -15°C. The winter trio — wool coat, elegant boots, scarf — is an art form here.',
    },
    climate: {
      tr: 'Sert karasal: kış -15°C, yaz 26°C.',
      en: 'Harsh continental: -15°C winters, 26°C summers.',
    },
  },
]

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug)
}

export function citiesByCountry(countrySlug: string) {
  return cities.filter((c) => c.countrySlug === countrySlug)
}

// --- Extra languages (zh/hi/es/ar), merged at module load ---
import { cityExtras1 } from './cities-i18n-1'
import { cityExtras2 } from './cities-i18n-2'

const cityExtras = { ...cityExtras1, ...cityExtras2 }

for (const city of cities) {
  const ex = cityExtras[city.slug]
  if (!ex) continue
  Object.assign(city.name, ex.name)
  Object.assign(city.tagline, ex.tagline)
  Object.assign(city.description, ex.description)
  Object.assign(city.climate, ex.climate)
}
