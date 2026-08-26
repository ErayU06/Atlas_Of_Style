import type { Lang, LocalizedText } from '@/types/country'

export interface GuideStop {
  name: LocalizedText
  desc: LocalizedText
}

export interface GuideDay {
  title: LocalizedText
  stops: GuideStop[]
}

export interface CityGuide {
  slug: string
  countrySlug: string
  city: LocalizedText
  title: LocalizedText
  subtitle: LocalizedText
  days: GuideDay[]
}

export const guides: CityGuide[] = [
  {
    slug: 'istanbul',
    countrySlug: 'turkiye',
    city: { tr: 'İstanbul', en: 'Istanbul' },
    title: { tr: '3 Günlük Stil Rotası', en: 'A 3-Day Style Itinerary' },
    subtitle: {
      tr: 'Vintage mağazalardan tasarım atölyelerine — İstanbul’u bir moda severin gözünden gez.',
      en: 'From vintage shops to design ateliers — see Istanbul through a fashion lover’s eyes.',
    },
    days: [
      {
        title: { tr: 'Gün 1 — Karaköy ve Galata', en: 'Day 1 — Karaköy & Galata' },
        stops: [
          {
            name: { tr: 'Karaköy sokakları', en: 'Streets of Karaköy' },
            desc: {
              tr: 'Sabah kahvesiyle başla; sokak stilini izlemek için en iyi nokta. Butik kahvecilerin arasında genç tasarımcıların pop-up mağazalarını yakala.',
              en: 'Start with morning coffee; the best spot for people-watching. Catch young designers’ pop-up stores among the boutique cafés.',
            },
          },
          {
            name: { tr: 'Galata çevresi vintage turu', en: 'Vintage hunt around Galata' },
            desc: {
              tr: 'Serdar-ı Ekrem sokağındaki vintage ve ikinci el butiklerde 70’lerden denim, el yapımı deri çantalar ve retro eşarplar bul.',
              en: 'Find 70s denim, handmade leather bags and retro scarves in the vintage boutiques of Serdar-ı Ekrem street.',
            },
          },
          {
            name: { tr: 'Tasarım atölyeleri', en: 'Design ateliers' },
            desc: {
              tr: 'Galata’nın ara sokaklarındaki atölye-mağazalarda takı ve seramik tasarımcılarıyla tanış; çoğu ürün tek üretim.',
              en: 'Meet jewellery and ceramic designers in the workshop-stores of Galata’s side streets; most pieces are one-offs.',
            },
          },
        ],
      },
      {
        title: { tr: 'Gün 2 — Nişantaşı şıklığı', en: 'Day 2 — Nişantaşı Elegance' },
        stops: [
          {
            name: { tr: 'Abdi İpekçi Caddesi', en: 'Abdi İpekçi Avenue' },
            desc: {
              tr: 'Türkiye’nin lüks moda caddesi. Vitrinleri gezerken Türk terzilik kalitesini yerinde gör.',
              en: 'Türkiye’s luxury fashion avenue. See Turkish tailoring quality up close while window-shopping.',
            },
          },
          {
            name: { tr: 'Türk tasarımcı butikleri', en: 'Turkish designer boutiques' },
            desc: {
              tr: 'Les Benjamins, Dice Kayek gibi markaların ve bağımsız tasarımcıların butiklerinde yerel yaratıcılığı keşfet.',
              en: 'Discover local creativity in boutiques of brands like Les Benjamins and Dice Kayek and independent designers.',
            },
          },
          {
            name: { tr: 'Maçka Parkı molası', en: 'A break at Maçka Park' },
            desc: {
              tr: 'Şehrin en şık insanlarının öğle yürüyüşü yaptığı park; İstanbul şıklığını doğal ortamında izle.',
              en: 'The park where the city’s best-dressed take their lunch stroll; watch Istanbul chic in its natural habitat.',
            },
          },
        ],
      },
      {
        title: { tr: 'Gün 3 — Tarih ve zanaat', en: 'Day 3 — History & Craft' },
        stops: [
          {
            name: { tr: 'Kapalıçarşı', en: 'Grand Bazaar' },
            desc: {
              tr: 'Kuyumcular, kaşmir şalcılar ve deri ustaları arasında kaybol. Pazarlık etmek deneyimin parçası.',
              en: 'Get lost among jewellers, cashmere shawl sellers and leather masters. Bargaining is part of the experience.',
            },
          },
          {
            name: { tr: 'Arasta Çarşısı', en: 'Arasta Bazaar' },
            desc: {
              tr: 'Daha sakin bir alternatif; el dokuması tekstiller ve geleneksel desenler için ideal.',
              en: 'A calmer alternative; ideal for hand-woven textiles and traditional patterns.',
            },
          },
          {
            name: { tr: 'Balat renkleri', en: 'Colours of Balat' },
            desc: {
              tr: 'Renkli evlerin arasında antikacılar ve küçük tasarım dükkanları; fotoğraf için gün batımı saati mükemmel.',
              en: 'Antique shops and small design stores among colourful houses; golden hour is perfect for photos.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'paris',
    countrySlug: 'france',
    city: { tr: 'Paris', en: 'Paris' },
    title: { tr: '3 Günlük Stil Rotası', en: 'A 3-Day Style Itinerary' },
    subtitle: {
      tr: 'Lüks vitrinlerden vintage pasajlara — Paris şıklığının peşinde üç gün.',
      en: 'From luxury windows to vintage passages — three days chasing Parisian chic.',
    },
    days: [
      {
        title: { tr: 'Gün 1 — Le Marais', en: 'Day 1 — Le Marais' },
        stops: [
          {
            name: { tr: 'Rue des Francs-Bourgeois', en: 'Rue des Francs-Bourgeois' },
            desc: {
              tr: 'Bağımsız butikler ve konsept mağazalar; Parisli "zahmetsiz şıklığın" kaynağı.',
              en: 'Independent boutiques and concept stores; the source of Parisian "effortless chic".',
            },
          },
          {
            name: { tr: 'Merci konsept mağazası', en: 'Merci concept store' },
            desc: {
              tr: 'Moda, tasarım ve yaşam tarzının buluştuğu efsanevi mağaza; kapsül gardırop fikrinin tapınağı.',
              en: 'The legendary store where fashion, design and lifestyle meet; a temple of the capsule wardrobe.',
            },
          },
          {
            name: { tr: 'Place des Vosges', en: 'Place des Vosges' },
            desc: {
              tr: 'Günü şehrin en zarif meydanında bitir; galerilerin ve kemeraltı butiklerinin tadını çıkar.',
              en: 'End the day in the city’s most elegant square; enjoy the galleries and arcade boutiques.',
            },
          },
        ],
      },
      {
        title: { tr: 'Gün 2 — Lüks ve tarih', en: 'Day 2 — Luxury & Heritage' },
        stops: [
          {
            name: { tr: 'Rue Saint-Honoré', en: 'Rue Saint-Honoré' },
            desc: {
              tr: 'Büyük moda evlerinin kalbi; vitrin düzenlemeleri başlı başına birer sanat eseri.',
              en: 'The heart of the great fashion houses; the window displays are artworks in themselves.',
            },
          },
          {
            name: { tr: 'Palais Royal bahçeleri', en: 'Palais Royal gardens' },
            desc: {
              tr: 'Tarihi kemerlerin altındaki butiklerde haute couture’un izini sür.',
              en: 'Trace haute couture in the boutiques under the historic arcades.',
            },
          },
          {
            name: { tr: 'Musée des Arts Décoratifs', en: 'Musée des Arts Décoratifs' },
            desc: {
              tr: 'Moda tarihi koleksiyonuyla Fransız şıklığının köklerini gör.',
              en: 'See the roots of French chic with its fashion history collection.',
            },
          },
        ],
      },
      {
        title: { tr: 'Gün 3 — Vintage ve pasajlar', en: 'Day 3 — Vintage & Passages' },
        stops: [
          {
            name: { tr: 'Saint-Ouen Bit Pazarı', en: 'Saint-Ouen Flea Market' },
            desc: {
              tr: 'Dünyanın en ünlü bit pazarı; vintage Chanel’den antika düğmelere her şey var. Erken git.',
              en: 'The world’s most famous flea market; from vintage Chanel to antique buttons. Go early.',
            },
          },
          {
            name: { tr: 'Kapalı pasajlar', en: 'Covered passages' },
            desc: {
              tr: 'Galerie Vivienne ve Passage des Panoramas’ta 19. yüzyıl atmosferinde küçük butikler.',
              en: 'Small boutiques in the 19th-century atmosphere of Galerie Vivienne and Passage des Panoramas.',
            },
          },
          {
            name: { tr: 'Canal Saint-Martin', en: 'Canal Saint-Martin' },
            desc: {
              tr: 'Genç Paris’in buluşma noktası; sokak stili gözlemi ve bağımsız mağazalar için ideal kapanış.',
              en: 'Young Paris’s meeting point; the perfect finale for street-style watching and indie shops.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'tokyo',
    countrySlug: 'japan',
    city: { tr: 'Tokyo', en: 'Tokyo' },
    title: { tr: '3 Günlük Stil Rotası', en: 'A 3-Day Style Itinerary' },
    subtitle: {
      tr: 'Avangard butiklerden denim cennetine — Tokyo’nun moda haritası.',
      en: 'From avant-garde boutiques to a denim paradise — Tokyo’s fashion map.',
    },
    days: [
      {
        title: { tr: 'Gün 1 — Harajuku ve Omotesandō', en: 'Day 1 — Harajuku & Omotesandō' },
        stops: [
          {
            name: { tr: 'Takeshita Sokağı', en: 'Takeshita Street' },
            desc: {
              tr: 'Gençlik alt kültürlerinin kalbi; en cesur sokak stillerini burada görürsün.',
              en: 'The heart of youth subcultures; the boldest street styles live here.',
            },
          },
          {
            name: { tr: 'Omotesandō caddesi', en: 'Omotesandō Avenue' },
            desc: {
              tr: 'Mimarisi bile görülmeye değer lüks butikler; "Tokyo’nun Champs-Élysées’si".',
              en: 'Luxury boutiques worth seeing for their architecture alone; Tokyo’s Champs-Élysées.',
            },
          },
          {
            name: { tr: 'Cat Street vintage turu', en: 'Cat Street vintage hunt' },
            desc: {
              tr: 'Vintage ve bağımsız mağazalarla dolu sakin sokak; 90’lar Japon sokak modasının izleri.',
              en: 'A calm street full of vintage and indie shops; traces of 90s Japanese street fashion.',
            },
          },
        ],
      },
      {
        title: { tr: 'Gün 2 — Shibuya ve Daikanyama', en: 'Day 2 — Shibuya & Daikanyama' },
        stops: [
          {
            name: { tr: 'Shibuya 109 ve çevresi', en: 'Shibuya 109 & around' },
            desc: {
              tr: 'Trend avcılığının merkezi; Japon genç modasını bir binada toplu gör.',
              en: 'The centre of trend hunting; see Japanese youth fashion gathered in one building.',
            },
          },
          {
            name: { tr: 'Daikanyama butikleri', en: 'Daikanyama boutiques' },
            desc: {
              tr: 'Şehrin en sofistike semti; seçki mağazaları ve sakin kafeler.',
              en: 'The city’s most sophisticated district; select shops and quiet cafés.',
            },
          },
          {
            name: { tr: 'Tsutaya T-Site', en: 'Tsutaya T-Site' },
            desc: {
              tr: 'Kitapçıdan öte bir yaşam tarzı mabedi; moda yayınlarının en iyi seçkisi.',
              en: 'More than a bookstore — a lifestyle shrine with the best selection of fashion publications.',
            },
          },
        ],
      },
      {
        title: { tr: 'Gün 3 — Koenji ve denim', en: 'Day 3 — Koenji & Denim' },
        stops: [
          {
            name: { tr: 'Koenji vintage sokakları', en: 'Koenji vintage streets' },
            desc: {
              tr: 'Tokyo’nun vintage başkenti; uygun fiyatlı ikinci el hazineler.',
              en: 'Tokyo’s vintage capital; affordable second-hand treasures.',
            },
          },
          {
            name: { tr: 'Japon denim atölyeleri', en: 'Japanese denim ateliers' },
            desc: {
              tr: 'Selvedge denim’in doğduğu atölye-mağazalar; bir çift "ömürlük" kot edin.',
              en: 'Workshop-stores where selvedge denim was born; get a pair of "lifetime" jeans.',
            },
          },
          {
            name: { tr: 'Shimokitazawa', en: 'Shimokitazawa' },
            desc: {
              tr: 'Bohem ruhlu semt; plakçılar, tiyatrolar ve rahat sokak stiliyle günü kapat.',
              en: 'A bohemian district; close the day with record shops, theatres and relaxed street style.',
            },
          },
        ],
      },
    ],
  },
]

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}

export function guideLang(text: LocalizedText, lang: Lang) {
  return pick(text, lang)
}

// --- Extra languages (zh/hi/es/ar), merged at module load ---
import { guideExtras } from './guides-i18n'
import { pick } from '@/types/country'

for (const g of guides) {
  const ex = guideExtras[g.slug]
  if (!ex) continue
  Object.assign(g.city, ex.city)
  Object.assign(g.title, ex.title)
  Object.assign(g.subtitle, ex.subtitle)
  ex.days.forEach((dayExtra, i) => {
    const day = g.days[i]
    if (!day) return
    Object.assign(day.title, dayExtra.title)
    dayExtra.stops.forEach((stopExtra, j) => {
      const stop = day.stops[j]
      if (!stop) return
      Object.assign(stop.name, stopExtra.name)
      Object.assign(stop.desc, stopExtra.desc)
    })
  })
}
