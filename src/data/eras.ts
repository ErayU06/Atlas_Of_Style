import type { LocalizedText } from '@/types/country'

export interface EraItem {
  /** Short garment/detail name. */
  name: LocalizedText
  /** One-line note on why it mattered. */
  note: LocalizedText
}

export interface Era {
  /** Stable id — also the timeline label root and the discovery key. */
  id: string
  /** Decade label shown on the timeline ("1920s"). */
  label: string
  span: string
  image: string
  /**
   * Atmosphere for this era, as raw `H S% L%` triples fed into the
   * `--era-tint` / `--era-wash` custom properties. Light and dark are kept
   * separate so contrast stays readable in both themes.
   */
  tint: string
  wash: string
  tintDark: string
  washDark: string
  title: LocalizedText
  tagline: LocalizedText
  description: LocalizedText
  items: EraItem[]
  /** Country slugs whose style story connects to this era. */
  countries: string[]
}

export const eras: Era[] = [
  {
    id: '1900',
    label: '1900s',
    span: '1900 — 1919',
    image: '/images/eras/era-1900.jpg',
    tint: '28 34% 40%',
    wash: '36 30% 95%',
    tintDark: '30 45% 62%',
    washDark: '28 14% 9%',
    title: {
      tr: 'La Belle Époque',
      en: 'La Belle Époque',
      zh: '美好年代',
      hi: 'ला बेल एपोक',
      es: 'La Belle Époque',
      ar: 'العصر الجميل',
    },
    tagline: {
      tr: 'Korsenin son yılları',
      en: 'The final years of the corset',
      zh: '束腰的最后岁月',
      hi: 'कोर्सेट के अंतिम वर्ष',
      es: 'Los últimos años del corsé',
      ar: 'السنوات الأخيرة للكورسيه',
    },
    description: {
      tr: 'Yer süpüren etekler, dantel yakalar ve el işi korseler. Sonra savaş geldi; kadınlar ilk kez fabrikada, tramvayda, hastanede giyinmek zorunda kaldı — ve moda pratikliği keşfetti.',
      en: 'Floor-sweeping skirts, lace collars and hand-boned corsets. Then war came, and women had to dress for factories, trams and hospitals — fashion discovered practicality.',
      zh: '拖地长裙、蕾丝领与手工束腰。战争来临后，女性必须为工厂、电车和医院而穿衣——时尚第一次发现了实用性。',
      hi: 'फर्श तक लंबी स्कर्ट, लेस कॉलर और हाथ से बने कोर्सेट। फिर युद्ध आया और महिलाओं को फैक्ट्री, ट्राम और अस्पताल के लिए कपड़े पहनने पड़े — फैशन ने व्यावहारिकता खोजी।',
      es: 'Faldas que barrían el suelo, cuellos de encaje y corsés hechos a mano. Luego llegó la guerra y las mujeres tuvieron que vestirse para fábricas, tranvías y hospitales: la moda descubrió lo práctico.',
      ar: 'تنانير تلامس الأرض، وأطواق من الدانتيل، وكورسيهات مصنوعة يدوياً. ثم جاءت الحرب، واضطرت النساء إلى اللباس للمصانع والترام والمستشفيات — فاكتشفت الموضة العملية.',
    },
    items: [
      {
        name: { tr: 'S silüeti korse', en: 'S-curve corset', zh: 'S 型束腰', hi: 'S-कर्व कोर्सेट', es: 'Corsé de curva S', ar: 'كورسيه بانحناء S' },
        note: {
          tr: 'Bedeni kumaşa göre şekillendiren son nesil',
          en: 'The last generation that shaped the body to the cloth',
          zh: '最后一代以衣塑形的设计',
          hi: 'कपड़े के अनुसार शरीर को ढालने वाली अंतिम पीढ़ी',
          es: 'La última generación que moldeaba el cuerpo a la tela',
          ar: 'الجيل الأخير الذي شكّل الجسد ليناسب القماش',
        },
      },
      {
        name: { tr: 'Dantel yakalı bluz', en: 'Lace-collar blouse', zh: '蕾丝领上衣', hi: 'लेस कॉलर ब्लाउज़', es: 'Blusa de cuello de encaje', ar: 'بلوزة بياقة دانتيل' },
        note: {
          tr: 'Zanaatın gündelik hayata girdiği yer',
          en: 'Where handcraft entered everyday life',
          zh: '手工艺进入日常生活之处',
          hi: 'जहाँ हस्तकला रोज़मर्रा में आई',
          es: 'Donde la artesanía entró en la vida diaria',
          ar: 'حيث دخلت الحرفة اليدوية الحياة اليومية',
        },
      },
      {
        name: { tr: 'Geniş kenarlı şapka', en: 'Wide-brimmed hat', zh: '宽檐帽', hi: 'चौड़े किनारे वाली टोपी', es: 'Sombrero de ala ancha', ar: 'قبعة عريضة الحواف' },
        note: {
          tr: 'Statü, gölge ve zarafet aynı anda',
          en: 'Status, shade and elegance at once',
          zh: '同时代表身份、遮阳与优雅',
          hi: 'रुतबा, छाया और शालीनता एक साथ',
          es: 'Estatus, sombra y elegancia a la vez',
          ar: 'مكانة وظل وأناقة في وقت واحد',
        },
      },
    ],
    countries: ['france', 'united-kingdom', 'turkiye'],
  },
  {
    id: '1920',
    label: '1920s',
    span: '1920 — 1929',
    image: '/images/eras/era-1920.jpg',
    tint: '40 58% 40%',
    wash: '40 24% 94%',
    tintDark: '42 62% 62%',
    washDark: '38 14% 8%',
    title: {
      tr: 'Caz Çağı',
      en: 'The Jazz Age',
      zh: '爵士年代',
      hi: 'जैज़ युग',
      es: 'La Era del Jazz',
      ar: 'عصر الجاز',
    },
    tagline: {
      tr: 'Bele veda, harekete merhaba',
      en: 'Goodbye waistline, hello movement',
      zh: '告别腰线，迎接自由',
      hi: 'कमर को अलविदा, गति को नमस्ते',
      es: 'Adiós a la cintura, hola al movimiento',
      ar: 'وداعاً للخصر، مرحباً بالحركة',
    },
    description: {
      tr: 'Bel çizgisi kalçaya düştü, saçlar kısaldı, elbiseler dans edebilmek için hafifledi. On yıl boyunca moda bir kadının nasıl görünmesi gerektiğini değil, ne yapmak istediğini anlattı.',
      en: 'The waist dropped to the hip, hair was cut short, dresses got light enough to dance in. For a decade fashion described not how a woman should look, but what she wanted to do.',
      zh: '腰线降至臀部，头发剪短，裙装轻盈到可以起舞。整整十年，时尚讲述的不是女性该有的模样，而是她想做的事。',
      hi: 'कमर कूल्हे तक गिरी, बाल छोटे हुए, पोशाकें नाचने लायक हल्की हो गईं। एक दशक तक फैशन ने बताया कि महिला कैसी दिखे नहीं, बल्कि वह क्या करना चाहती है।',
      es: 'La cintura bajó a la cadera, el pelo se cortó, los vestidos se aligeraron para poder bailar. Durante una década la moda no dijo cómo debía verse una mujer, sino qué quería hacer.',
      ar: 'انخفض الخصر إلى الورك، وقُصّ الشعر، وخفّت الفساتين حتى صار الرقص ممكناً. لعقد كامل لم تصف الموضة كيف يجب أن تبدو المرأة، بل ما تريد أن تفعله.',
    },
    items: [
      {
        name: { tr: 'Düşük belli elbise', en: 'Drop-waist dress', zh: '低腰连衣裙', hi: 'ड्रॉप-वेस्ट ड्रेस', es: 'Vestido de talle bajo', ar: 'فستان منخفض الخصر' },
        note: {
          tr: 'Kesimin bedeni serbest bıraktığı an',
          en: 'The moment cut set the body free',
          zh: '剪裁解放身体的时刻',
          hi: 'जब कट ने शरीर को आज़ाद किया',
          es: 'El momento en que el corte liberó el cuerpo',
          ar: 'اللحظة التي حرّر فيها القص الجسد',
        },
      },
      {
        name: { tr: 'Bob kesim saç', en: 'The bob cut', zh: '波波头', hi: 'बॉब कट', es: 'El corte bob', ar: 'قصة البوب' },
        note: {
          tr: 'Bir saç kesimi, bir manifesto',
          en: 'A haircut that worked as a manifesto',
          zh: '一款发型，一份宣言',
          hi: 'एक हेयरकट, एक घोषणापत्र',
          es: 'Un corte de pelo como manifiesto',
          ar: 'قصة شعر بمثابة بيان',
        },
      },
      {
        name: { tr: 'Boncuk ve püskül', en: 'Beads and fringe', zh: '珠饰与流苏', hi: 'मोती और झालर', es: 'Cuentas y flecos', ar: 'خرز وشراشيب' },
        note: {
          tr: 'Hareketi görünür kılan süsleme',
          en: 'Ornament that made movement visible',
          zh: '让动作可见的装饰',
          hi: 'गति को दृश्य बनाने वाला अलंकरण',
          es: 'Adorno que hacía visible el movimiento',
          ar: 'زخرفة تُظهر الحركة',
        },
      },
    ],
    countries: ['france', 'united-states', 'united-kingdom'],
  },
  {
    id: '1950',
    label: '1950s',
    span: '1947 — 1959',
    image: '/images/eras/era-1950.jpg',
    tint: '348 38% 48%',
    wash: '350 28% 96%',
    tintDark: '350 48% 68%',
    washDark: '345 12% 9%',
    title: {
      tr: 'Yeni Görünüm',
      en: 'The New Look',
      zh: '新风貌',
      hi: 'द न्यू लुक',
      es: 'El New Look',
      ar: 'المظهر الجديد',
    },
    tagline: {
      tr: 'İnce bel, dolu etek',
      en: 'Nipped waist, generous skirt',
      zh: '收紧腰身，蓬松裙摆',
      hi: 'पतली कमर, भरी स्कर्ट',
      es: 'Cintura ceñida, falda generosa',
      ar: 'خصر ضيق وتنورة واسعة',
    },
    description: {
      tr: 'Savaş sonrası kumaş kısıtlamaları kalkınca moda cömertliğe döndü: metrelerce kumaş, kusursuz terzilik ve eldivenle şapkayla tamamlanan bir gündüz giyimi disiplini.',
      en: 'When post-war fabric rationing ended, fashion turned generous again: metres of cloth, exacting tailoring, and a discipline of daywear finished with gloves and a hat.',
      zh: '战后布料配给结束后，时尚重归丰盈：数米面料、精准剪裁，以及以手套与帽子收尾的日装礼仪。',
      hi: 'युद्ध के बाद कपड़े की राशनिंग खत्म होते ही फैशन फिर उदार हुआ: मीटरों कपड़ा, बारीक सिलाई और दस्ताने-टोपी से पूरा होने वाला दिन का अनुशासन।',
      es: 'Al terminar el racionamiento de telas de la posguerra, la moda volvió a ser generosa: metros de tejido, sastrería exacta y una disciplina de día completada con guantes y sombrero.',
      ar: 'مع انتهاء تقنين الأقمشة بعد الحرب، عادت الموضة إلى الكرم: أمتار من القماش، وخياطة دقيقة، وانتظام في ملابس النهار يكتمل بالقفازات والقبعة.',
    },
    items: [
      {
        name: { tr: 'Kloş midi etek', en: 'Full circle skirt', zh: '圆裙', hi: 'सर्कल स्कर्ट', es: 'Falda de vuelo', ar: 'تنورة دائرية' },
        note: {
          tr: 'Bolluğun geri dönüşünün simgesi',
          en: 'The symbol of abundance returning',
          zh: '丰盛回归的象征',
          hi: 'समृद्धि की वापसी का प्रतीक',
          es: 'El símbolo del regreso de la abundancia',
          ar: 'رمز عودة الوفرة',
        },
      },
      {
        name: { tr: 'Geniş bel kemeri', en: 'Wide waist belt', zh: '宽腰带', hi: 'चौड़ी कमरबंद', es: 'Cinturón ancho', ar: 'حزام خصر عريض' },
        note: {
          tr: 'Silüeti tek hamlede tanımlayan detay',
          en: 'One detail that defined a whole silhouette',
          zh: '一个细节定义整个廓形',
          hi: 'एक विवरण जिसने पूरा सिल्हूट तय किया',
          es: 'Un detalle que definía toda la silueta',
          ar: 'تفصيلة واحدة تحدد القوام كله',
        },
      },
      {
        name: { tr: 'Eldiven ve pillbox şapka', en: 'Gloves and pillbox hat', zh: '手套与药盒帽', hi: 'दस्ताने और पिलबॉक्स हैट', es: 'Guantes y sombrero pillbox', ar: 'قفازات وقبعة بيلبوكس' },
        note: {
          tr: 'Şıklığın kurallı olduğu son dönem',
          en: 'The last era when elegance had rules',
          zh: '优雅仍有规则的最后年代',
          hi: 'वह अंतिम दौर जब शालीनता के नियम थे',
          es: 'La última época en que la elegancia tenía reglas',
          ar: 'آخر عصر كانت للأناقة فيه قواعد',
        },
      },
    ],
    countries: ['france', 'italy', 'united-states'],
  },
  {
    id: '1970',
    label: '1970s',
    span: '1968 — 1979',
    image: '/images/eras/era-1970.jpg',
    tint: '22 64% 44%',
    wash: '30 42% 94%',
    tintDark: '24 70% 60%',
    washDark: '26 16% 9%',
    title: {
      tr: 'Özgür Ruh',
      en: 'Free Spirit',
      zh: '自由灵魂',
      hi: 'आज़ाद रूह',
      es: 'Espíritu libre',
      ar: 'الروح الحرة',
    },
    tagline: {
      tr: 'Süet, İspanyol paça, güneş',
      en: 'Suede, flares and sunlight',
      zh: '麂皮、喇叭裤与阳光',
      hi: 'स्वेड, फ्लेयर और धूप',
      es: 'Ante, campanas y sol',
      ar: 'جلد الشامواه والقصّات الواسعة والشمس',
    },
    description: {
      tr: 'Moda ilk kez tek bir merkeze bakmadı. Fas pazarından Hindistan dokumalarına, Kaliforniya plajından Londra kulübüne uzanan bir karışım; dolap bir seyahat günlüğü gibi kurulmaya başladı.',
      en: 'For the first time fashion stopped looking at a single centre. A mix stretching from Moroccan markets and Indian weaves to Californian beaches and London clubs — the wardrobe became a travel diary.',
      zh: '时尚首次不再只看一个中心。从摩洛哥集市、印度织物到加州海滩与伦敦俱乐部的混搭——衣橱开始像一本旅行日记。',
      hi: 'पहली बार फैशन ने एक ही केंद्र को देखना छोड़ा। मोरक्को के बाज़ार और भारतीय बुनाई से कैलिफ़ोर्निया के समुद्र तट और लंदन के क्लब तक का मिश्रण — अलमारी एक यात्रा डायरी बन गई।',
      es: 'Por primera vez la moda dejó de mirar a un solo centro. Una mezcla que iba de los mercados marroquíes y los tejidos indios a las playas de California y los clubes de Londres: el armario se volvió un diario de viaje.',
      ar: 'لأول مرة توقفت الموضة عن النظر إلى مركز واحد. خليط يمتد من أسواق المغرب ومنسوجات الهند إلى شواطئ كاليفورنيا ونوادي لندن — وصارت الخزانة دفتر رحلات.',
    },
    items: [
      {
        name: { tr: 'İspanyol paça pantolon', en: 'Flared trousers', zh: '喇叭裤', hi: 'फ्लेयर्ड ट्राउज़र', es: 'Pantalón de campana', ar: 'بنطال واسع الأسفل' },
        note: {
          tr: 'Yürüyüşü bile değiştiren kesim',
          en: 'A cut that changed the way people walked',
          zh: '连走路方式都改变的剪裁',
          hi: 'चाल तक बदल देने वाला कट',
          es: 'Un corte que cambió incluso el andar',
          ar: 'قصّة غيّرت حتى طريقة المشي',
        },
      },
      {
        name: { tr: 'Püsküllü süet ceket', en: 'Fringed suede jacket', zh: '流苏麂皮夹克', hi: 'फ्रिंज स्वेड जैकेट', es: 'Chaqueta de ante con flecos', ar: 'جاكيت شامواه بشراشيب' },
        note: {
          tr: 'El yapımı görünmenin prestij olduğu yıllar',
          en: 'Years when looking handmade was the prestige',
          zh: '手工感即为体面的年代',
          hi: 'जब हस्तनिर्मित दिखना प्रतिष्ठा थी',
          es: 'Años en que parecer artesanal era el prestigio',
          ar: 'سنوات كان فيها المظهر اليدوي هو الوجاهة',
        },
      },
      {
        name: { tr: 'Desenli ipek fular', en: 'Printed silk scarf', zh: '印花丝巾', hi: 'प्रिंटेड सिल्क स्कार्फ़', es: 'Pañuelo de seda estampado', ar: 'وشاح حريري مطبوع' },
        note: {
          tr: 'Tek parçayla ülke değiştiren aksesuar',
          en: 'One accessory that could change your country',
          zh: '一件配饰即可切换地域',
          hi: 'एक एक्सेसरी जो देश बदल देती थी',
          es: 'Un accesorio capaz de cambiarte de país',
          ar: 'إكسسوار واحد يغيّر بلدك',
        },
      },
    ],
    countries: ['morocco', 'india', 'united-states', 'united-kingdom'],
  },
  {
    id: '1990',
    label: '1990s',
    span: '1990 — 1999',
    image: '/images/eras/era-1990.jpg',
    tint: '214 16% 38%',
    wash: '210 12% 95%',
    tintDark: '212 28% 68%',
    washDark: '215 10% 9%',
    title: {
      tr: 'Minimal ve Grunge',
      en: 'Minimal & Grunge',
      zh: '极简与颓废',
      hi: 'मिनिमल और ग्रंज',
      es: 'Minimal y grunge',
      ar: 'البساطة والغرانج',
    },
    tagline: {
      tr: 'Sade silüet, ham doku',
      en: 'Plain silhouette, raw texture',
      zh: '简约廓形，粗粝质感',
      hi: 'सादा सिल्हूट, कच्ची बुनावट',
      es: 'Silueta simple, textura cruda',
      ar: 'قوام بسيط ونسيج خام',
    },
    description: {
      tr: 'İki karşıt kamp aynı on yılı paylaştı: bir yanda kusursuz sadelik, diğer yanda ikinci el ve umursamazlık. İkisi de aynı şeyi söyledi — az parça, çok karakter.',
      en: 'Two opposite camps shared one decade: flawless simplicity on one side, thrift-store nonchalance on the other. Both said the same thing — fewer pieces, more character.',
      zh: '两个对立阵营共享同一个十年：一边是无瑕的极简，一边是二手店的随性。二者说的是同一句话——更少的单品，更多的个性。',
      hi: 'एक ही दशक में दो विपरीत खेमे: एक ओर निर्दोष सादगी, दूसरी ओर सेकंड-हैंड बेपरवाही। दोनों ने एक ही बात कही — कम कपड़े, ज़्यादा किरदार।',
      es: 'Dos bandos opuestos compartieron una década: la simplicidad impecable por un lado, la despreocupación de segunda mano por el otro. Ambos decían lo mismo: menos prendas, más carácter.',
      ar: 'تقاسم معسكران متناقضان عقداً واحداً: بساطة بلا عيوب من جهة، ولا مبالاة الملابس المستعملة من جهة أخرى. وقال الاثنان الشيء ذاته — قطع أقل وشخصية أكثر.',
    },
    items: [
      {
        name: { tr: 'Askılı saten elbise', en: 'Satin slip dress', zh: '缎面吊带裙', hi: 'सैटिन स्लिप ड्रेस', es: 'Vestido lencero de satén', ar: 'فستان ساتان بحمالات' },
        note: {
          tr: 'Süslemeyi tamamen kesen bir hat',
          en: 'A line that cut ornament out entirely',
          zh: '彻底剔除装饰的线条',
          hi: 'अलंकरण को पूरी तरह हटाने वाली रेखा',
          es: 'Una línea que eliminó todo adorno',
          ar: 'خط ألغى الزخرفة تماماً',
        },
      },
      {
        name: { tr: 'Oversize ekose gömlek', en: 'Oversized flannel shirt', zh: '宽大格纹衬衫', hi: 'ओवरसाइज़ फ्लैनल शर्ट', es: 'Camisa de franela oversize', ar: 'قميص فانيلا واسع' },
        note: {
          tr: 'Ödünç alınmış gibi giyinmenin doğuşu',
          en: 'The birth of dressing like you borrowed it',
          zh: '“像借来的”穿法的诞生',
          hi: 'उधार लिए जैसे पहनने की शुरुआत',
          es: 'El nacimiento de vestirse como si fuera prestado',
          ar: 'ولادة اللبس كأنك استعرته',
        },
      },
      {
        name: { tr: 'Kalın tabanlı bot', en: 'Chunky boots', zh: '厚底靴', hi: 'चंकी बूट्स', es: 'Botas robustas', ar: 'حِذاء بنعل عريض' },
        note: {
          tr: 'Rahatlığın stil olarak kabul edilmesi',
          en: 'Comfort finally accepted as style',
          zh: '舒适终于被视为风格',
          hi: 'आराम को स्टाइल मान लिया गया',
          es: 'La comodidad aceptada por fin como estilo',
          ar: 'قبول الراحة أخيراً كأسلوب',
        },
      },
    ],
    countries: ['united-states', 'japan', 'united-kingdom', 'germany'],
  },
  {
    id: '2000',
    label: '2000s',
    span: '2000 — 2009',
    image: '/images/eras/era-2000.jpg',
    tint: '196 58% 40%',
    wash: '200 30% 95%',
    tintDark: '194 62% 62%',
    washDark: '205 14% 9%',
    title: {
      tr: 'Y2K',
      en: 'Y2K',
      zh: '千禧年',
      hi: 'Y2K',
      es: 'Y2K',
      ar: 'مطلع الألفية',
    },
    tagline: {
      tr: 'Krom, parlaklık ve düşük bel',
      en: 'Chrome, gloss and low rise',
      zh: '铬色、光泽与低腰',
      hi: 'क्रोम, ग्लॉस और लो-राइज़',
      es: 'Cromo, brillo y tiro bajo',
      ar: 'الكروم واللمعان والخصر المنخفض',
    },
    description: {
      tr: 'Yeni bin yıl teknolojiyi bir estetiğe çevirdi: metalik yüzeyler, şeffaf malzemeler, ekran parlaklığı. Hızlı moda da tam bu yıllarda dolabın ritmini aylardan haftalara indirdi.',
      en: 'The new millennium turned technology into an aesthetic: metallic surfaces, transparent materials, screen shine. These were also the years fast fashion cut the wardrobe’s rhythm from months to weeks.',
      zh: '新千年把科技变成了美学：金属表面、透明材质、屏幕般的光泽。也正是这些年，快时尚把衣橱的节奏从数月压缩到数周。',
      hi: 'नई सहस्राब्दी ने तकनीक को सौंदर्य में बदला: धातुई सतहें, पारदर्शी सामग्री, स्क्रीन जैसी चमक। इन्हीं वर्षों में फास्ट फैशन ने अलमारी की लय महीनों से हफ्तों तक घटा दी।',
      es: 'El nuevo milenio convirtió la tecnología en estética: superficies metálicas, materiales transparentes, brillo de pantalla. También fueron los años en que la moda rápida redujo el ritmo del armario de meses a semanas.',
      ar: 'حوّلت الألفية الجديدة التقنية إلى جمالية: أسطح معدنية، ومواد شفافة، ولمعان الشاشات. وفي هذه السنوات أيضاً قصّت الأزياء السريعة إيقاع الخزانة من أشهر إلى أسابيع.',
    },
    items: [
      {
        name: { tr: 'Düşük bel denim', en: 'Low-rise denim', zh: '低腰牛仔', hi: 'लो-राइज़ डेनिम', es: 'Vaquero de tiro bajo', ar: 'دنيم منخفض الخصر' },
        note: {
          tr: 'Bir on yılı tek başına tanımlayan kesim',
          en: 'One cut that defined a decade on its own',
          zh: '独自定义十年的剪裁',
          hi: 'अकेले एक दशक तय करने वाला कट',
          es: 'Un corte que definió una década por sí solo',
          ar: 'قصّة واحدة عرّفت عقداً بأكمله',
        },
      },
      {
        name: { tr: 'Metalik crop üst', en: 'Metallic crop top', zh: '金属感短上衣', hi: 'मेटैलिक क्रॉप टॉप', es: 'Top corto metalizado', ar: 'توب قصير معدني' },
        note: {
          tr: 'Gelecek fikrinin kumaşa dönüşmesi',
          en: 'The idea of the future, turned into fabric',
          zh: '未来概念化为面料',
          hi: 'भविष्य का विचार, कपड़े में बदला',
          es: 'La idea de futuro convertida en tejido',
          ar: 'فكرة المستقبل متحوّلة إلى قماش',
        },
      },
      {
        name: { tr: 'Küçük renkli gözlük', en: 'Tinted micro sunglasses', zh: '彩色小墨镜', hi: 'रंगीन माइक्रो सनग्लासेज़', es: 'Micro gafas tintadas', ar: 'نظارات صغيرة ملوّنة' },
        note: {
          tr: 'Aksesuarın ana karakter olduğu an',
          en: 'When the accessory became the main character',
          zh: '配饰成为主角的时刻',
          hi: 'जब एक्सेसरी मुख्य किरदार बनी',
          es: 'Cuando el accesorio se volvió protagonista',
          ar: 'حين صار الإكسسوار البطل',
        },
      },
    ],
    countries: ['united-states', 'south-korea', 'japan', 'brazil'],
  },
  {
    id: '2010',
    label: '2010s',
    span: '2010 — 2019',
    image: '/images/eras/era-2010.jpg',
    tint: '155 14% 32%',
    wash: '150 10% 94%',
    tintDark: '155 24% 60%',
    washDark: '155 8% 9%',
    title: {
      tr: 'Sokak Podyuma Çıktı',
      en: 'Street Meets Runway',
      zh: '街头走上秀场',
      hi: 'स्ट्रीट मिली रैंप से',
      es: 'La calle sube a la pasarela',
      ar: 'الشارع يصعد المنصة',
    },
    tagline: {
      tr: 'Hoodie ile terzilik yan yana',
      en: 'Hoodies and tailoring, side by side',
      zh: '连帽衫与西装并肩',
      hi: 'हुडी और टेलरिंग, साथ-साथ',
      es: 'Sudaderas y sastrería, lado a lado',
      ar: 'الهودي والخياطة جنباً إلى جنب',
    },
    description: {
      tr: 'Trendi belirleyen yer podyumdan sokağa, dergiden telefona geçti. Bir görüntü artık altı ayda değil bir günde yayılıyordu; moda coğrafyası da böylece Seul, Lagos ve São Paulo’ya açıldı.',
      en: 'Trend-setting moved from the runway to the pavement, from magazines to phones. A look now travelled in a day rather than six months — and fashion’s map opened up to Seoul, Lagos and São Paulo.',
      zh: '潮流的发源地从秀场转向街头，从杂志转向手机。一个造型不再需要六个月，一天即可传遍——时尚版图也向首尔、拉各斯与圣保罗敞开。',
      hi: 'ट्रेंड तय करने की जगह रैंप से सड़क और मैगज़ीन से फ़ोन पर आ गई। कोई लुक छह महीने की जगह एक दिन में फैलने लगा — और फैशन का नक्शा सिओल, लागोस और साओ पाउलो तक खुल गया।',
      es: 'El poder de marcar tendencia pasó de la pasarela a la acera, de las revistas a los móviles. Un look viajaba en un día en lugar de seis meses, y el mapa de la moda se abrió a Seúl, Lagos y São Paulo.',
      ar: 'انتقل تحديد الاتجاهات من المنصة إلى الرصيف، ومن المجلات إلى الهواتف. صار المظهر ينتشر في يوم بدل ستة أشهر — وانفتحت خريطة الموضة على سيول ولاغوس وساو باولو.',
    },
    items: [
      {
        name: { tr: 'Oversize hoodie', en: 'Oversized hoodie', zh: '宽大连帽衫', hi: 'ओवरसाइज़ हुडी', es: 'Sudadera oversize', ar: 'هودي واسع' },
        note: {
          tr: 'Rahatlığın lüksle eşitlendiği parça',
          en: 'The piece that put comfort on a par with luxury',
          zh: '让舒适与奢华平起平坐的单品',
          hi: 'आराम को लक्ज़री के बराबर लाने वाला कपड़ा',
          es: 'La prenda que igualó comodidad y lujo',
          ar: 'القطعة التي ساوت الراحة بالفخامة',
        },
      },
      {
        name: { tr: 'Uzun terzi montu', en: 'Longline tailored coat', zh: '长版剪裁外套', hi: 'लॉन्गलाइन टेलर्ड कोट', es: 'Abrigo largo sastre', ar: 'معطف طويل مخيط' },
        note: {
          tr: 'Sokak kıyafetini ciddileştiren katman',
          en: 'The layer that made streetwear serious',
          zh: '让街头装严肃起来的一层',
          hi: 'स्ट्रीटवियर को गंभीर बनाने वाली लेयर',
          es: 'La capa que dio seriedad al streetwear',
          ar: 'الطبقة التي جعلت أزياء الشارع جدية',
        },
      },
      {
        name: { tr: 'Beyaz sneaker', en: 'Plain white sneaker', zh: '纯白运动鞋', hi: 'सादा सफ़ेद स्नीकर', es: 'Zapatilla blanca lisa', ar: 'حذاء رياضي أبيض بسيط' },
        note: {
          tr: 'Her dolapta bulunan tek ortak nokta',
          en: 'The one thing in every wardrobe on earth',
          zh: '全球衣橱唯一的共同点',
          hi: 'दुनिया की हर अलमारी की एक समान चीज़',
          es: 'Lo único presente en todos los armarios',
          ar: 'الشيء الوحيد الموجود في كل خزانة',
        },
      },
    ],
    countries: ['south-korea', 'nigeria', 'brazil', 'united-states'],
  },
  {
    id: '2020',
    label: '2020s',
    span: '2020 —',
    image: '/images/eras/era-2020.jpg',
    tint: '96 22% 34%',
    wash: '60 18% 95%',
    tintDark: '95 28% 58%',
    washDark: '80 10% 9%',
    title: {
      tr: 'Sessiz Dolap',
      en: 'The Quiet Wardrobe',
      zh: '安静的衣橱',
      hi: 'शांत अलमारी',
      es: 'El armario silencioso',
      ar: 'الخزانة الهادئة',
    },
    tagline: {
      tr: 'Cinsiyetsiz kesim, sessiz lüks',
      en: 'Genderless cuts, quiet luxury',
      zh: '无性别剪裁，低调奢华',
      hi: 'जेंडरलेस कट, क्वाइट लक्ज़री',
      es: 'Cortes sin género, lujo silencioso',
      ar: 'قصّات محايدة وفخامة هادئة',
    },
    description: {
      tr: 'Logolar küçüldü, kumaş öne çıktı. Onarım, ikinci el ve “az ama iyi” fikri ana akıma girdi; dolap artık ne kadar yeni olduğuyla değil ne kadar dayandığıyla ölçülüyor.',
      en: 'Logos shrank and fabric took over. Repair, resale and the idea of “fewer but better” went mainstream — a wardrobe is now measured by how long it lasts, not how new it is.',
      zh: '标志变小，面料成为主角。修补、二手与“少而精”的观念进入主流——衣橱的标准不再是多新，而是多耐久。',
      hi: 'लोगो छोटे हुए, कपड़ा आगे आया। मरम्मत, रीसेल और “कम लेकिन बेहतर” मुख्यधारा में आए — अलमारी अब नएपन से नहीं, टिकाऊपन से नापी जाती है।',
      es: 'Los logotipos se encogieron y el tejido tomó el mando. La reparación, la reventa y el “menos pero mejor” se volvieron mayoritarios: un armario se mide por lo que dura, no por lo nuevo que es.',
      ar: 'تقلّصت الشعارات وتقدّم القماش. صار الإصلاح وإعادة البيع وفكرة «أقل وأفضل» في صلب السائد — وتُقاس الخزانة اليوم بعمرها لا بجِدّتها.',
    },
    items: [
      {
        name: { tr: 'Oversize teknik takım', en: 'Oversized technical suit', zh: '宽大科技面料套装', hi: 'ओवरसाइज़ टेक्निकल सूट', es: 'Traje técnico oversize', ar: 'طقم تقني واسع' },
        note: {
          tr: 'Ofis ile sokak arasındaki sınırın silinmesi',
          en: 'The line between office and street, erased',
          zh: '办公与街头界限的消失',
          hi: 'दफ़्तर और सड़क की सीमा मिट गई',
          es: 'La frontera entre oficina y calle, borrada',
          ar: 'محو الحد بين المكتب والشارع',
        },
      },
      {
        name: { tr: 'Heykel gibi triko', en: 'Sculptural knitwear', zh: '雕塑感针织', hi: 'स्कल्प्चरल निटवियर', es: 'Punto escultórico', ar: 'تريكو نحتي' },
        note: {
          tr: 'Dokunun süslemenin yerini alması',
          en: 'Texture taking the place of ornament',
          zh: '质感取代装饰',
          hi: 'बुनावट ने अलंकरण की जगह ली',
          es: 'La textura ocupando el lugar del adorno',
          ar: 'النسيج يحلّ مكان الزخرفة',
        },
      },
      {
        name: { tr: 'Onarılmış vintage parça', en: 'Repaired vintage piece', zh: '修补过的复古单品', hi: 'मरम्मत किया विंटेज पीस', es: 'Prenda vintage reparada', ar: 'قطعة قديمة مُرمَّمة' },
        note: {
          tr: 'Eskimenin kusur değil hikâye sayılması',
          en: 'Wear read as story rather than flaw',
          zh: '磨损被视为故事而非瑕疵',
          hi: 'घिसाव को दोष नहीं, कहानी माना गया',
          es: 'El desgaste leído como historia, no defecto',
          ar: 'اعتبار آثار الاستعمال حكاية لا عيباً',
        },
      },
    ],
    countries: ['japan', 'norway', 'south-korea', 'turkiye'],
  },
]

export const getEra = (id: string) => eras.find((e) => e.id === id)

/**
 * Era of the day — deterministic, so the home screen stays stable across
 * re-renders while still rotating once a day.
 */
export function eraOfTheDay(): Era {
  const day = Math.floor(Date.now() / 86_400_000)
  return eras[day % eras.length]
}
