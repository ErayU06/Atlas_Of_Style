import type { Country, LocalizedText } from '@/types/country'
import { extras1 } from './countries-i18n-1'
import { extras2 } from './countries-i18n-2'

const countryExtras: Record<string, (typeof extras1)[string]> = {
  ...extras1,
  ...extras2,
}

const baseCountries: Country[] = [
  {
    slug: 'turkiye',
    flag: '🇹🇷',
    region: 'europe',
    name: { tr: 'Türkiye', en: 'Türkiye' },
    tagline: {
      tr: 'Doğu ile Batı’nın buluştuğu sokak stili',
      en: 'Where East meets West in street style',
    },
    intro: {
      tr: 'Katmanlı, zengin ve zanaat dolu — geleneksel dokular modern silüetlerle yaşar.',
      en: 'Layered, rich and craft-driven — traditional textures live inside modern silhouettes.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Dört mevsimin net yaşandığı iklim, katmanlı giyimi bir zorunluluktan sanata çevirir: ince hırkalar, şallar ve mevsimlik trençler dolabın temelidir.',
          en: 'Four distinct seasons turn layering from a necessity into an art: light cardigans, shawls and mid-season trenches form the wardrobe’s backbone.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Bayram şıklığı, düğün zarafeti ve pazar yeri renkleri; giyimde hem özen hem cömertlik kültürü hâkimdir. El işçiliği — dantel, oya, kilim desenleri — günlük stile sızar.',
          en: 'Holiday elegance, wedding refinement and bazaar colours: dressing well is both care and generosity. Handcraft — lace, oya edging, kilim patterns — seeps into everyday style.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Osmanlı sarayının kaftanları ve işlemeli kumaşları, cumhuriyetin modern terziliğiyle birleşti. İstanbul, yüzyıllardır kumaş ve desen ticaretinin kalbi.',
          en: 'Ottoman court kaftans and embroidered fabrics merged with republican-era modern tailoring. Istanbul has been a heart of textile and pattern trade for centuries.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Dünyanın en büyük tekstil üreticilerinden biri olarak Türkiye’de kaliteli kumaşa erişim kolaydır; bu da "az ama iyi dikilmiş" giyim alışkanlığını besler.',
          en: 'As one of the world’s largest textile producers, quality fabric is within easy reach — feeding a habit of few but well-made garments.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'İstanbul sokak modası — eşarbın modern yorumu, oversize ceketler, vintage karışımlar — uluslararası moda haftalarında giderek daha çok referans alınıyor.',
          en: 'Istanbul street style — modern headscarf styling, oversized blazers, vintage mixes — is increasingly referenced on international fashion weeks.',
        },
      },
    ],
  },
  {
    slug: 'france',
    flag: '🇫🇷',
    region: 'europe',
    name: { tr: 'Fransa', en: 'France' },
    tagline: {
      tr: 'Zahmetsiz Paris şıklığı',
      en: 'Effortless Parisian elegance',
    },
    intro: {
      tr: 'Az parçayla çok şey söylemek — ölçülü ama asla özensiz değil.',
      en: 'Saying a lot with a few pieces — restrained, but never careless.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Ilıman iklim; hafif trençkotları, kaşmir trikoları ve ara sezon paltolarını yılın büyük bölümünde kullanışlı kılar.',
          en: 'A temperate climate keeps light trench coats, cashmere knits and mid-season overcoats useful most of the year.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Kafe kültürü, sanat ve edebiyat, "doğal görünmek için çok çalışmayı" bir yaşam biçimine dönüştürdü.',
          en: "Café culture, art and literature turned 'working hard to look natural' into a way of life.",
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Bir zamanlar saray modasının merkezi olan Fransa, 20. yüzyılda haute couture’ü kurumsallaştırdı ve modern gardırobu yeniden tanımladı.',
          en: 'Once the centre of court fashion, France institutionalised haute couture in the 20th century and redefined the modern wardrobe.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Lüks moda evleri ekonomiyi sürükler; kaliteye yatırım yapmak ve az ama iyi parça almak kültürel bir alışkanlıktır.',
          en: 'Luxury houses drive the economy; investing in quality and buying few but good pieces is a cultural habit.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Paris Moda Haftası hâlâ sezonun ölçüsünü belirler; Fransız stili kapsül gardırop fikriyle tüm dünyaya yayıldı.',
          en: 'Paris Fashion Week still sets the measure of the season, and French style spread worldwide through the capsule-wardrobe idea.',
        },
      },
    ],
  },
  {
    slug: 'italy',
    flag: '🇮🇹',
    region: 'europe',
    name: { tr: 'İtalya', en: 'Italy' },
    tagline: {
      tr: 'Terzilik, deri ve sprezzatura',
      en: 'Tailoring, leather and sprezzatura',
    },
    intro: {
      tr: 'Mükemmel dikilmiş ama asla kasıntı olmayan — çalışılmış rahatlık.',
      en: 'Perfectly made yet never stiff — studied nonchalance.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Akdeniz iklimi keteni, hafif yünleri ve açık renk takımları öne çıkarır; kışın bile katmanlar incedir.',
          en: 'The Mediterranean climate favours linen, lightweight wools and pale suits; even winter layers stay thin.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: '"La bella figura" — iyi izlenim bırakmak — sosyal bir erdemdir. Ayakkabı ve saat, karakterin özeti sayılır.',
          en: "'La bella figura' — making a good impression — is a social virtue. Shoes and a watch count as a summary of character.",
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Floransa’nın deri atölyeleri ve Napoli’nin yumuşak omuzlu ceket terziliği, İtalyan stilinin iki sütunudur.',
          en: 'Florence’s leather workshops and Naples’ soft-shouldered tailoring are the two pillars of Italian style.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Aile işletmesi atölyelerden global lüks markalara uzanan üretim zinciri, "Made in Italy" etiketini bir kalite vaadine çevirir.',
          en: 'A production chain stretching from family workshops to global luxury brands turns “Made in Italy” into a promise of quality.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Milano Moda Haftası ve Pitti Uomo, erkek giyiminde dünyanın pusulasıdır; sprezzatura kavramı sokak stiline yerleşti.',
          en: 'Milan Fashion Week and Pitti Uomo are the world’s compass in menswear; the idea of sprezzatura settled into street style.',
        },
      },
    ],
  },
  {
    slug: 'united-kingdom',
    flag: '🇬🇧',
    region: 'europe',
    name: { tr: 'Birleşik Krallık', en: 'United Kingdom' },
    tagline: {
      tr: 'Terziliğin punk isyanıyla buluştuğu yer',
      en: 'Where tailoring meets punk rebellion',
    },
    intro: {
      tr: 'Kuralları en iyi bilenler, onları en iyi bozanlardır.',
      en: 'Those who know the rules best break them best.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Yağmurlu ve değişken hava; trençkotu, yün kazakları ve sağlam botları günlük üniformaya dönüştürür.',
          en: 'Rainy, changeable weather turns the trench coat, wool jumpers and sturdy boots into a daily uniform.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Sınıf kodları, kulüp kültürü ve müzik sahneleri; İngiliz stili hem geleneğe sadık hem ona başkaldıran bir diyalogdur.',
          en: 'Class codes, club culture and music scenes: British style is a dialogue both loyal to tradition and rebelling against it.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Savile Row terziliği dünyaya takım elbiseyi öğretti; 70’lerde punk, aynı sokaklarda onu parçalayıp yeniden dikti.',
          en: 'Savile Row taught the world the suit; in the 70s punk ripped it apart and re-stitched it on the same streets.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Londra, finansın ciddiyetiyle yaratıcı endüstrilerin cesaretini yan yana barındırır; vintage pazarları ekonominin canlı parçasıdır.',
          en: 'London holds the seriousness of finance next to the boldness of creative industries; vintage markets are a lively part of the economy.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Burberry trençi, Dr. Martens botu ve ekose desen; İngiliz kodları dünya gardırobunun kalıcı parçaları.',
          en: 'The Burberry trench, the Dr. Martens boot and tartan check: British codes are permanent pieces of the world wardrobe.',
        },
      },
    ],
  },
  {
    slug: 'germany',
    flag: '🇩🇪',
    region: 'europe',
    name: { tr: 'Almanya', en: 'Germany' },
    tagline: {
      tr: 'Minimalizm, işlev ve temiz çizgiler',
      en: 'Minimalism, function and clean lines',
    },
    intro: {
      tr: 'Az ama kusursuz — her parçanın bir görevi var.',
      en: 'Few but flawless — every piece has a job.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Serin ve yağışlı iklim, teknik kumaşları ve kaliteli dış giyimi öne çıkarır.',
          en: 'A cool, wet climate prioritises technical fabrics and quality outerwear.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Pratiklik bir estetik değerdir; Berlin’in techno kültürü siyahı ve rahat silüetleri neredeyse resmi kıyafet yaptı.',
          en: 'Practicality is an aesthetic value; Berlin’s techno culture made black and relaxed silhouettes almost an official dress code.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Bauhaus’un "biçim işlevi izler" ilkesi, Alman tasarım DNA’sının modaya da işleyen çekirdeğidir.',
          en: 'The Bauhaus principle “form follows function” is the core of German design DNA — fashion included.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Mühendislik kültürü, outdoor ve teknik giyimde güçlü markalar doğurdu; kaliteye ödenen bedel yatırım sayılır.',
          en: 'An engineering culture produced strong outdoor and technical-wear brands; money spent on quality counts as investment.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Adidas ve Puma’nın spor mirası, Berlin sokak stiliyle birleşip dünya athleisure akımını besledi.',
          en: 'The sports heritage of Adidas and Puma merged with Berlin street style to feed the global athleisure wave.',
        },
      },
    ],
  },
  {
    slug: 'spain',
    flag: '🇪🇸',
    region: 'europe',
    name: { tr: 'İspanya', en: 'Spain' },
    tagline: {
      tr: 'Akdeniz sıcaklığı, flamenko ritmi',
      en: 'Mediterranean warmth, flamenco rhythm',
    },
    intro: {
      tr: 'Rengârenk, tutkulu ve her zaman kutlamaya hazır.',
      en: 'Colourful, passionate and always ready for a celebration.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Sıcak yazlar keten ve pamuğu, serin akşamlar şık bir ceketi gerektirir; İspanyol stili güneşe göre ayarlıdır.',
          en: 'Hot summers call for linen and cotton, cool evenings for a sharp jacket; Spanish style is tuned to the sun.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Feria’larda flamenko elbiseleri, günlük hayatta bakımlı rahatlık; İspanyollar sokakta bile özenlidir.',
          en: 'Flamenco dresses at the ferias, polished ease in daily life; Spaniards stay put-together even on the street.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Endülüs’ten kalan desen zenginliği ve deri işçiliği, İspanyol zanaatının görünmez altyapısıdır.',
          en: 'Pattern richness and leather craft inherited from Al-Andalus form the invisible infrastructure of Spanish craft.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Zara ve Inditex’in doğduğu ülke: hızlı modanın merkezi olmak, İspanyolların trendleri erken benimsemesini sağlar.',
          en: 'The birthplace of Zara and Inditex: being the centre of fast fashion makes Spaniards early adopters of trends.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Espadril, Manila şalı ve flamenko volanları; İspanyol detayları yaz koleksiyonlarında sürekli geri döner.',
          en: 'Espadrilles, the Manila shawl and flamenco ruffles: Spanish details keep returning in summer collections.',
        },
      },
    ],
  },
  {
    slug: 'norway',
    flag: '🇳🇴',
    region: 'europe',
    name: { tr: 'Norveç', en: 'Norway' },
    tagline: {
      tr: 'Kuzey sadeliği ve yün mirası',
      en: 'Nordic simplicity and a wool heritage',
    },
    intro: {
      tr: 'Soğuğa karşı zarif çözümler — az renk, çok doku.',
      en: 'Elegant answers to the cold — few colours, many textures.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Uzun kışlar yünü bir yaşam malzemesi yapar; katman sistemi (içlik, yün, kabuk) herkesin bildiği formüldür.',
          en: 'Long winters make wool a material of life; the layering system (base, wool, shell) is a formula everyone knows.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: '"Friluftsliv" — açık havada yaşam — kıyafetin doğayla uyumlu ve dayanıklı olmasını gerektirir.',
          en: "'Friluftsliv' — open-air living — demands clothing that is durable and in tune with nature.",
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Setesdal ve Selbu’nun geleneksel örgü desenleri, Norveç kazağını dünya çapında tanınan bir simgeye çevirdi.',
          en: 'Traditional knitting patterns from Setesdal and Selbu turned the Norwegian jumper into a world-famous icon.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Yüksek yaşam standardı, az ama uzun ömürlü parçalara yatırımı mümkün kılar; sürdürülebilirlik pazarlık konusu değildir.',
          en: 'A high standard of living enables investing in few but long-lasting pieces; sustainability is non-negotiable.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'İskandinav minimalizmi ve "gorpcore" akımıyla Norveç outdoor estetiği şehir gardıroplarına taşındı.',
          en: 'With Scandinavian minimalism and the “gorpcore” wave, Norwegian outdoor aesthetics moved into city wardrobes.',
        },
      },
    ],
  },
  {
    slug: 'morocco',
    flag: '🇲🇦',
    region: 'africa',
    name: { tr: 'Fas', en: 'Morocco' },
    tagline: {
      tr: 'Çöl renkleri ve zanaat şiiri',
      en: 'Desert colours and the poetry of craft',
    },
    intro: {
      tr: 'Dokunun ve desenin konuştuğu bir gardırop geleneği.',
      en: 'A wardrobe tradition where texture and pattern do the talking.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Sıcak gündüzler ve serin geceler, akışkan kumaşları ve katmanlı hafif parçaları zorunlu kılar.',
          en: 'Hot days and cool nights make flowing fabrics and light layers essential.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Celaba ve kaftan, hem günlük hayatta hem törenlerde yaşar; nakış, bölge ve kimlik anlatır.',
          en: 'The djellaba and kaftan live in both daily life and ceremony; embroidery tells of region and identity.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Berberi dokumacılığı, Fes’in deri tabakhaneleri ve Sahra ticaret yolları; Fas tekstili bin yıllık bir sohbettir.',
          en: 'Berber weaving, the tanneries of Fez and Saharan trade routes: Moroccan textile is a thousand-year conversation.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'El dokuması kilimler ve deri işleri, turizmin ötesinde gerçek bir ihracat ve geçim kaynağıdır.',
          en: 'Hand-woven rugs and leather goods are a real export and livelihood beyond tourism.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Yves Saint Laurent’ın Marakeş aşkından beri Fas estetiği — toprak tonları, işlemeler, püsküller — podyumların vazgeçilmezi.',
          en: 'Since Yves Saint Laurent’s love affair with Marrakech, Moroccan aesthetics — earth tones, embroidery, tassels — are runway staples.',
        },
      },
    ],
  },
  {
    slug: 'nigeria',
    flag: '🇳🇬',
    region: 'africa',
    name: { tr: 'Nijerya', en: 'Nigeria' },
    tagline: {
      tr: 'Ankara desenleri ve özgüven patlaması',
      en: 'Ankara prints and an explosion of confidence',
    },
    intro: {
      tr: 'Cesur renkler, güçlü silüetler — burada kıyafet bir beyandır.',
      en: 'Bold colours, powerful silhouettes — here clothing is a statement.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Tropikal iklim, nefes alan pamukları ve canlı batik-baskı kumaşları öne çıkarır.',
          en: 'A tropical climate favours breathable cottons and vivid wax-print fabrics.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Aso-ebi geleneği — törenlerde aile ve grupların aynı kumaşla giyinmesi — kıyafeti kolektif kimliğe dönüştürür.',
          en: 'The aso-ebi tradition — families and groups wearing the same fabric at ceremonies — turns clothing into collective identity.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Yoruba dokumacılığı ve aso-oke kumaşı yüzyıllık prestij taşır; başlık (gele) tek başına bir sanat biçimidir.',
          en: 'Yoruba weaving and aso-oke cloth carry centuries of prestige; the headwrap (gele) is an art form on its own.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Lagos, Afrika’nın en hızlı büyüyen moda sahnesi; genç tasarımcılar geleneksel kumaşları global sokak stiliyle harmanlıyor.',
          en: 'Lagos is Africa’s fastest-growing fashion scene; young designers blend traditional fabrics with global street style.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Afrobeats’in dünya çapında yükselişiyle Nijerya sokak modası da global sahneye taşındı; Ankara baskıları artık her yerde.',
          en: 'With the global rise of Afrobeats, Nigerian street fashion hit the world stage; Ankara prints are everywhere now.',
        },
      },
    ],
  },
  {
    slug: 'south-africa',
    flag: '🇿🇦',
    region: 'africa',
    name: { tr: 'Güney Afrika', en: 'South Africa' },
    tagline: {
      tr: 'On bir dilin tek gardıropta buluşması',
      en: 'Eleven languages meeting in one wardrobe',
    },
    intro: {
      tr: 'Geleneksel boncuk işinden sokak markalarına — çeşitlilik stilin kendisi.',
      en: 'From traditional beadwork to street brands — diversity is the style itself.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Güneşli ve ılıman iklim; rahat kesimler, şortlar ve hafif ceketler dört mevsim çalışır.',
          en: 'A sunny, mild climate: relaxed cuts, shorts and light jackets work all year.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Ndebele desenleri, Xhosa boncuk işi ve township sokak kültürü; Güney Afrika’da stil, hikâye anlatımıdır.',
          en: 'Ndebele patterns, Xhosa beadwork and township street culture: in South Africa, style is storytelling.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Apartheid döneminin direniş sembollerinden özgürlük sonrasının kutlama renklerine; moda burada tarihle beraber dönüştü.',
          en: 'From resistance symbols of the apartheid era to the celebratory colours of freedom: fashion transformed alongside history.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Cape Town ve Johannesburg’un tasarım haftaları, kıtanın en organize moda ekonomisini taşıyor.',
          en: 'The fashion weeks of Cape Town and Johannesburg carry the continent’s most organised fashion economy.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Amapiano müziğiyle yükselen Güney Afrika sokak stili — bol pantolonlar, bucket hat’ler — dünya gençliğini etkiliyor.',
          en: 'Riding the amapiano wave, South African street style — baggy trousers, bucket hats — is influencing youth worldwide.',
        },
      },
    ],
  },
  {
    slug: 'united-states',
    flag: '🇺🇸',
    region: 'north-america',
    name: { tr: 'Amerika Birleşik Devletleri', en: 'United States' },
    tagline: {
      tr: 'Denim, spor giyim ve sokak kültürü',
      en: 'Denim, sportswear and street culture',
    },
    intro: {
      tr: 'Rahatlığın icat edildiği yer — kot, tişört ve sneaker’ın anavatanı.',
      en: 'Where comfort was invented — the homeland of jeans, tees and sneakers.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Kıta büyüklüğündeki ülkede her iklim var; bu da "her duruma uygun rahatlık" felsefesini doğurdu.',
          en: 'A continent-sized country holds every climate — which produced a philosophy of all-situations comfort.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Kampüs stili, hip-hop, kaykay ve workwear; Amerikan modası alt kültürlerin buluşma noktasıdır.',
          en: 'Campus style, hip-hop, skate and workwear: American fashion is a meeting point of subcultures.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Levi’s’in işçi pantolonu, Hollywood’un beyaz tişörtü, Nike’ın sneaker’ı; Amerikan klasiği, işlevden doğan ikonlardır.',
          en: 'Levi’s work trousers, Hollywood’s white tee, Nike’s sneaker: American classics are icons born from function.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Spor giyim devleri ve hızlı moda perakendesi; Amerika "giyilebilir ticaret"in en büyük laboratuvarı.',
          en: 'Sportswear giants and fast-fashion retail: America is the biggest laboratory of wearable commerce.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Streetwear, sneaker kültürü ve athleisure; son 30 yılın tüm büyük akımları buradan dünyaya yayıldı.',
          en: 'Streetwear, sneaker culture and athleisure: every major wave of the last 30 years spread from here.',
        },
      },
    ],
  },
  {
    slug: 'canada',
    flag: '🇨🇦',
    region: 'north-america',
    name: { tr: 'Kanada', en: 'Canada' },
    tagline: {
      tr: 'Soğuk için tasarlanmış sessiz işlevsellik',
      en: 'Quiet functionality built for the cold',
    },
    intro: {
      tr: 'Gösterişsiz ama teknik olarak kusursuz — kışı ciddiye alan stil.',
      en: 'Unassuming yet technically flawless — a style that takes winter seriously.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Uzun ve sert kışlar, kaz tüyü parkaları ve termal katmanları günlük gerçeklik yapar.',
          en: 'Long, harsh winters make down parkas and thermal layers a daily reality.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Çok kültürlü şehirler, outdoor yaşam aşkı ve mütevazılık; Kanadalı stili "iyi ama bağırmayan" diye özetlenir.',
          en: 'Multicultural cities, a love of the outdoors and modesty: Canadian style sums up as “good, but not loud about it”.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Kürk ticaretinden kış sporları mirasına; Kanada’nın giyim tarihi hayatta kalma teknolojisinin tarihidir.',
          en: 'From the fur trade to winter-sports heritage: Canada’s clothing history is a history of survival technology.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Canada Goose ve Arc’teryx gibi markalar, teknik dış giyimi lüks kategoriye taşıdı.',
          en: 'Brands like Canada Goose and Arc’teryx carried technical outerwear into the luxury category.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Teknik outdoor estetiği şehir modasına dönüşürken Kanada markaları bu dönüşümün öncüsü oldu.',
          en: 'As technical outdoor aesthetics became city fashion, Canadian brands led the transformation.',
        },
      },
    ],
  },
  {
    slug: 'mexico',
    flag: '🇲🇽',
    region: 'north-america',
    name: { tr: 'Meksika', en: 'Mexico' },
    tagline: {
      tr: 'El nakışı, canlı renkler ve gurur',
      en: 'Hand embroidery, vivid colours and pride',
    },
    intro: {
      tr: 'Her dikişte bir festival — renkten korkmayan bir gelenek.',
      en: 'A festival in every stitch — a tradition unafraid of colour.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Sıcak ve güneşli iklim; hafif pamuklar, guayabera gömlekleri ve şapkalar stilin temelidir.',
          en: 'A hot, sunny climate: light cottons, guayabera shirts and hats are style fundamentals.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Frida Kahlo’nun dünyaya öğrettiği gibi: huipil elbiseler, çiçek taçları ve nakış, kimliğin kutlamasıdır.',
          en: 'As Frida Kahlo taught the world: huipil dresses, flower crowns and embroidery are celebrations of identity.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Aztek ve Maya dokuma gelenekleri, sömürge dönemi terziliğiyle birleşip benzersiz bir melez estetik doğurdu.',
          en: 'Aztec and Maya weaving traditions merged with colonial tailoring to birth a unique hybrid aesthetic.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Oaxaca ve Chiapas’ın zanaat kooperatifleri, geleneksel teknikleri yaşayan ekonomilere dönüştürüyor.',
          en: 'Craft cooperatives in Oaxaca and Chiapas turn traditional techniques into living economies.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Ölüler Günü estetiği ve Meksika nakışı, dünya markalarının koleksiyonlarına düzenli olarak ilham veriyor.',
          en: 'Day of the Dead aesthetics and Mexican embroidery regularly inspire collections worldwide.',
        },
      },
    ],
  },
  {
    slug: 'brazil',
    flag: '🇧🇷',
    region: 'south-america',
    name: { tr: 'Brezilya', en: 'Brazil' },
    tagline: {
      tr: 'Tropikal renk ve özgür silüetler',
      en: 'Tropical colour and free silhouettes',
    },
    intro: {
      tr: 'Vücutla barışık, hareketli ve güneşli bir moda dili.',
      en: 'A fashion language at peace with the body — moving and sunlit.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Yıl boyu sıcak; plaj kültürü, hafif kumaşları ve rahat kesimleri günlük stile taşır.',
          en: 'Warm all year; beach culture carries light fabrics and relaxed cuts into everyday style.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Karnavalın gösterişi ile sokağın rahatlığı; Brezilyalılar renk giymekten çekinmez.',
          en: 'Carnival’s flamboyance meets street ease; Brazilians are never shy of colour.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Afrika, Portekiz ve yerli miraslarının karışımı; Brezilya modası, ülkenin melez kimliğinin aynasıdır.',
          en: 'A blend of African, Portuguese and Indigenous heritages; Brazilian fashion mirrors the country’s mixed identity.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'São Paulo Moda Haftası Latin Amerika’nın en büyüğü; mayo ve plaj giyiminde dünya lideri.',
          en: 'São Paulo Fashion Week is Latin America’s biggest; the country leads the world in swimwear and beachwear.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Havaianas terlikten bikiniye, Brezilya plaj estetiği yaz gardırobunu küresel olarak tanımlar.',
          en: 'From Havaianas flip-flops to bikinis, Brazilian beach aesthetics define the global summer wardrobe.',
        },
      },
    ],
  },
  {
    slug: 'japan',
    flag: '🇯🇵',
    region: 'asia',
    name: { tr: 'Japonya', en: 'Japan' },
    tagline: {
      tr: 'Avangard silüetler, kusursuz detay',
      en: 'Avant-garde silhouettes, flawless detail',
    },
    intro: {
      tr: 'Gelenek ve geleceğin aynı sokakta yürüdüğü yer.',
      en: 'Where tradition and the future walk the same street.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Net dört mevsim, mevsimsel gardırop geçişini bir ritüele dönüştürür.',
          en: 'Four clear seasons turn the seasonal wardrobe change into a ritual.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Harajuku’nun çılgın alt kültürlerinden wabi-sabi’nin sade güzelliğine; Japon stili uçların uyumudur.',
          en: 'From Harajuku’s wild subcultures to wabi-sabi’s quiet beauty: Japanese style is a harmony of extremes.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Kimono’nun katlama ve bağlama sanatı, 80’lerde Rei Kawakubo ve Yohji Yamamoto ile dünya modasını kökten sarstı.',
          en: 'The kimono’s art of folding and tying shook world fashion to its roots in the 80s via Rei Kawakubo and Yohji Yamamoto.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Üstün kumaş teknolojisi ve denim zanaatı; Japon üretimi "dünyanın en iyisi" demenin kısayoludur.',
          en: 'Superior fabric technology and denim craft: “Japanese-made” is shorthand for best in the world.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Dekonstrüksiyon, oversize silüetler ve "Japon denim"i; Tokyo’nun etkisi her koleksiyonda hissedilir.',
          en: 'Deconstruction, oversized silhouettes and Japanese denim: Tokyo’s influence is felt in every collection.',
        },
      },
    ],
  },
  {
    slug: 'south-korea',
    flag: '🇰🇷',
    region: 'asia',
    name: { tr: 'Güney Kore', en: 'South Korea' },
    tagline: {
      tr: 'K-fashion: temiz, genç ve hızlı',
      en: 'K-fashion: clean, young and fast',
    },
    intro: {
      tr: 'Trendlerin ışık hızıyla doğup yayıldığı laboratuvar.',
      en: 'The laboratory where trends are born and spread at light speed.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Soğuk kışlar ve sıcak yazlar, güçlü bir dış giyim ve katman kültürü oluşturur.',
          en: 'Cold winters and hot summers build a strong culture of outerwear and layering.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'K-pop idolleri stil elçisidir; gençler aynı hafta podyumdan sokağa inen trendleri benimser.',
          en: 'K-pop idols are style ambassadors; young people adopt trends the same week they leave the runway.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Hanbok’un zarif çizgileri, bir nesilde dünyanın en dinamik moda sahnesine evrildi.',
          en: 'The graceful lines of the hanbok evolved within a generation into the world’s most dynamic fashion scene.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Seul Moda Haftası ve devasa online perakende ekosistemi; moda burada teknolojiyle iç içedir.',
          en: 'Seoul Fashion Week and a huge online retail ecosystem: fashion here is inseparable from technology.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Oversize takımlar, ton-sür-ton kombinler ve kusursuz katmanlar; K-stil artık global gençliğin referansı.',
          en: 'Oversized suits, tonal outfits and flawless layering: K-style is now the reference for global youth.',
        },
      },
    ],
  },
  {
    slug: 'china',
    flag: '🇨🇳',
    region: 'asia',
    name: { tr: 'Çin', en: 'China' },
    tagline: {
      tr: 'İpek yolundan sokak stiline',
      en: 'From the Silk Road to street style',
    },
    intro: {
      tr: 'Binlerce yıllık estetik, dijital çağın hızıyla buluşuyor.',
      en: 'Millennia of aesthetics meeting the speed of the digital age.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Geniş coğrafya her iklimi barındırır; kuzeyde kalın katmanlar, güneyde hafif ipekler.',
          en: 'A vast geography holds every climate: heavy layers in the north, light silks in the south.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Genç kuşak, hanfu geleneğini sokakta yeniden canlandırıyor; "guochao" (ulusal dalga) yerli markaları yüceltiyor.',
          en: 'The young generation is reviving hanfu on the streets; “guochao” (the national wave) celebrates homegrown brands.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'İpek, qipao’nun zarif kesimi ve saray nakışı; Çin modası dünyanın en eski kesintisiz geleneklerinden biridir.',
          en: 'Silk, the elegant cut of the qipao and court embroidery: Chinese fashion is one of the world’s oldest unbroken traditions.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Dünyanın en büyük tekstil üreticisi ve lüks tüketim pazarlarından biri; Şanghay moda başkenti olarak parlıyor.',
          en: 'The world’s largest textile producer and one of its biggest luxury markets; Shanghai shines as a fashion capital.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Li-Ning gibi markalar podyumlara döndü; Çinli tasarımcılar artık trend takip etmiyor, yaratıyor.',
          en: 'Brands like Li-Ning returned to the runway; Chinese designers no longer follow trends — they create them.',
        },
      },
    ],
  },
  {
    slug: 'india',
    flag: '🇮🇳',
    region: 'asia',
    name: { tr: 'Hindistan', en: 'India' },
    tagline: {
      tr: 'Renk, nakış ve tekstil zenginliği',
      en: 'Colour, embroidery and textile wealth',
    },
    intro: {
      tr: 'Bir sari, altı metre kumaş ve sonsuz zarafet.',
      en: 'A sari, six metres of fabric and infinite grace.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Sıcak iklim, pamuğun ve ipeğin anavatanı olmayı anlamlı kılar; kumaşlar nefes alır, renkler konuşur.',
          en: 'A hot climate makes sense of being the homeland of cotton and silk; fabrics breathe and colours speak.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Düğünler günlerce sürer ve her gün ayrı bir kostüm şölenidir; giyim burada törenin kalbidir.',
          en: 'Weddings last days, each day a new costume spectacle; clothing here is the heart of ceremony.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Dünya yüzyıllarca Hint kumaşının peşinde koştu; batik, ipek ve el dokuması hâlâ canlı gelenekler.',
          en: 'The world chased Indian fabric for centuries; block print, silk and handloom remain living traditions.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Dünyanın en büyük tekstil üreticilerinden; el işçiliği, milyonlarca zanaatkârın geçim kaynağı.',
          en: 'One of the world’s largest textile producers; handcraft is the livelihood of millions of artisans.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: 'Sari drape’leri, nakış detayları ve mücevher tonları, dünya podyumlarına düzenli ilham veriyor.',
          en: 'Sari drapes, embroidery details and jewel tones regularly inspire the world’s runways.',
        },
      },
    ],
  },
  {
    slug: 'australia',
    flag: '🇦🇺',
    region: 'oceania',
    name: { tr: 'Avustralya', en: 'Australia' },
    tagline: {
      tr: 'Güneş, keten ve rahat zarafet',
      en: 'Sun, linen and easy elegance',
    },
    intro: {
      tr: 'Sahilden şehre aynı rahatlık — abartısız ama hep şık.',
      en: 'The same ease from beach to city — unforced yet always stylish.',
    },
    sections: [
      {
        key: 'climate',
        text: {
          tr: 'Güneşli iklim, keten ve pamuğu temel yapar; şapka ve güneş gözlüğü aksesuar değil gerekliliktir.',
          en: 'A sunny climate makes linen and cotton foundational; hats and sunglasses are necessities, not accessories.',
        },
      },
      {
        key: 'culture',
        text: {
          tr: 'Sörf kültürü ve outdoor yaşam; Avustralyalılar "fazla giyinmiş" görünmekten hoşlanmaz.',
          en: 'Surf culture and outdoor living: Australians dislike looking overdressed.',
        },
      },
      {
        key: 'history',
        text: {
          tr: 'Merinos yünü endüstrisinden plaj giyiminin icadına; ada kıtanın stili her zaman iklimle konuştu.',
          en: 'From the merino wool industry to the invention of beachwear: the island continent’s style always spoke with the climate.',
        },
      },
      {
        key: 'economy',
        text: {
          tr: 'Dünyanın en kaliteli merinos yününün kaynağı; resort-wear markaları global pazarda güçlü.',
          en: 'Source of the world’s finest merino wool; resort-wear brands hold strong positions globally.',
        },
      },
      {
        key: 'trends',
        text: {
          tr: '"Coastal cool" estetiği — doğal tonlar, rahat kesimler — dünyada tatil gardırobunun standartı oldu.',
          en: 'The “coastal cool” aesthetic — natural tones, relaxed cuts — became the standard of holiday wardrobes worldwide.',
        },
      },
    ],
  },
]

export const countries: Country[] = baseCountries.map((c) => {
  const extra = countryExtras[c.slug]
  if (!extra) return c
  const expand = (
    base: LocalizedText,
    key: 'name' | 'tagline' | 'intro',
  ): LocalizedText => ({
    ...base,
    zh: extra.zh[key],
    hi: extra.hi[key],
    es: extra.es[key],
    ar: extra.ar[key],
  })
  return {
    ...c,
    name: expand(c.name, 'name'),
    tagline: expand(c.tagline, 'tagline'),
    intro: expand(c.intro, 'intro'),
    sections: c.sections.map((s) => ({
      ...s,
      text: {
        ...s.text,
        zh: extra.zh.sections[s.key],
        hi: extra.hi.sections[s.key],
        es: extra.es.sections[s.key],
        ar: extra.ar.sections[s.key],
      },
    })),
  }
})
