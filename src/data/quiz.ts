import type { Lang } from '@/types/country'

export interface QuizOption {
  label: Record<Lang, string>
  profiles: string[]
}

export interface QuizQuestion {
  text: Record<Lang, string>
  options: QuizOption[]
}

export interface StyleProfile {
  key: string
  emoji: string
  name: Record<Lang, string>
  description: Record<Lang, string>
  countries: string[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    text: {
      tr: 'İdeal hafta sonu planın hangisi?',
      en: 'What is your ideal weekend plan?',
      zh: '你理想的周末计划是什么？',
      hi: 'आपका आदर्श सप्ताहांत योजना क्या है?',
      es: '¿Cuál es tu plan de fin de semana ideal?',
      ar: 'ما هي خطتك المثالية لعطلة نهاية الأسبوع؟',
    },
    options: [
      {
        label: {
          tr: 'Sakin bir kafede kitap ve kahve',
          en: 'A quiet café with a book and coffee',
          zh: '在安静的咖啡馆看书喝咖啡',
          hi: 'शांत कैफे में किताब और कॉफ़ी',
          es: 'Un café tranquilo con un libro y café',
          ar: 'مقهى هادئ مع كتاب وقهوة',
        },
        profiles: ['minimal'],
      },
      {
        label: {
          tr: 'Müze ve tarihi sokaklar',
          en: 'Museums and historic streets',
          zh: '博物馆和历史街区',
          hi: 'संग्रहालय और ऐतिहासिक गलियां',
          es: 'Museos y calles históricas',
          ar: 'المتاحف والشوارع التاريخية',
        },
        profiles: ['classic'],
      },
      {
        label: {
          tr: 'Konser ya da festival',
          en: 'A concert or a festival',
          zh: '音乐会或音乐节',
          hi: 'कॉन्सर्ट या फेस्टिवल',
          es: 'Un concierto o un festival',
          ar: 'حفلة موسيقية أو مهرجان',
        },
        profiles: ['bold'],
      },
      {
        label: {
          tr: 'Sokak pazarları ve vintage avı',
          en: 'Street markets and vintage hunting',
          zh: '街头市集和复古淘宝',
          hi: 'स्ट्रीट मार्केट और विंटेज खरीदारी',
          es: 'Mercadillos y búsqueda de vintage',
          ar: 'أسواق الشوارع والبحث عن القطع القديمة',
        },
        profiles: ['street'],
      },
    ],
  },
  {
    text: {
      tr: 'Dolabında en çok hangi renk var?',
      en: 'Which colour dominates your wardrobe?',
      zh: '你的衣柜里最多的颜色是什么？',
      hi: 'आपकी अलमारी में कौन सा रंग सबसे ज़्यादा है?',
      es: '¿Qué color domina tu armario?',
      ar: 'ما اللون الذي يغلب على خزانة ملابسك؟',
    },
    options: [
      {
        label: {
          tr: 'Siyah, beyaz, gri',
          en: 'Black, white, grey',
          zh: '黑、白、灰',
          hi: 'काला, सफ़ेद, ग्रे',
          es: 'Negro, blanco, gris',
          ar: 'أسود، أبيض، رمادي',
        },
        profiles: ['minimal'],
      },
      {
        label: {
          tr: 'Bej ve lacivert',
          en: 'Beige and navy',
          zh: '米色和藏青',
          hi: 'बेज और नेवी',
          es: 'Beige y azul marino',
          ar: 'بيج وكحلي',
        },
        profiles: ['classic'],
      },
      {
        label: {
          tr: 'Canlı renkler',
          en: 'Vivid colours',
          zh: '鲜艳的色彩',
          hi: 'चमकीले रंग',
          es: 'Colores vivos',
          ar: 'ألوان زاهية',
        },
        profiles: ['bold'],
      },
      {
        label: {
          tr: 'Toprak tonları',
          en: 'Earth tones',
          zh: '大地色系',
          hi: 'अर्थ टोन',
          es: 'Tonos tierra',
          ar: 'ألوان ترابية',
        },
        profiles: ['artisan'],
      },
    ],
  },
  {
    text: {
      tr: 'Ayakkabı tercihin?',
      en: 'Your go-to shoes?',
      zh: '你常穿的鞋子是？',
      hi: 'आपके पसंदीदा जूते?',
      es: '¿Tus zapatos favoritos?',
      ar: 'ما حذاؤك المفضل؟',
    },
    options: [
      {
        label: {
          tr: 'Temiz beyaz sneaker',
          en: 'Clean white sneakers',
          zh: '干净的小白鞋',
          hi: 'साफ़ सफ़ेद स्नीकर्स',
          es: 'Zapatillas blancas impecables',
          ar: 'حذاء رياضي أبيض نظيف',
        },
        profiles: ['minimal', 'street'],
      },
      {
        label: {
          tr: 'Deri loafer',
          en: 'Leather loafers',
          zh: '皮革乐福鞋',
          hi: 'लेदर लोफर्स',
          es: 'Mocasines de cuero',
          ar: 'حذاء لوفر جلدي',
        },
        profiles: ['classic'],
      },
      {
        label: {
          tr: 'Renkli statement sneaker',
          en: 'Colourful statement sneakers',
          zh: '彩色潮鞋',
          hi: 'रंगीन स्टेटमेंट स्नीकर्स',
          es: 'Zapatillas llamativas de colores',
          ar: 'حذاء رياضي ملون لافت',
        },
        profiles: ['street', 'bold'],
      },
      {
        label: {
          tr: 'Rahat sandalet',
          en: 'Comfy sandals',
          zh: '舒适的凉鞋',
          hi: 'आरामदायक सैंडल',
          es: 'Sandalias cómodas',
          ar: 'صندل مريح',
        },
        profiles: ['coastal'],
      },
    ],
  },
  {
    text: {
      tr: 'Bir aksesuar seç:',
      en: 'Pick one accessory:',
      zh: '选一件配饰：',
      hi: 'एक एक्सेसरी चुनें:',
      es: 'Elige un accesorio:',
      ar: 'اختر إكسسواراً واحداً:',
    },
    options: [
      {
        label: {
          tr: 'İnce, sade bir saat',
          en: 'A slim, simple watch',
          zh: '简约纤薄的手表',
          hi: 'पतली, सादी घड़ी',
          es: 'Un reloj fino y sencillo',
          ar: 'ساعة رفيعة بسيطة',
        },
        profiles: ['minimal'],
      },
      {
        label: {
          tr: 'İpek fular',
          en: 'A silk scarf',
          zh: '真丝丝巾',
          hi: 'रेशमी स्कार्फ',
          es: 'Un pañuelo de seda',
          ar: 'وشاح حريري',
        },
        profiles: ['classic'],
      },
      {
        label: {
          tr: 'Büyük, gösterişli takılar',
          en: 'Big statement jewellery',
          zh: '夸张的大件首饰',
          hi: 'बड़ी, दिखावटी ज्वेलरी',
          es: 'Joyería grande y llamativa',
          ar: 'مجوهرات كبيرة لافتة',
        },
        profiles: ['bold'],
      },
      {
        label: {
          tr: 'El yapımı bileklik',
          en: 'A handmade bracelet',
          zh: '手工手链',
          hi: 'हस्तनिर्मित कंगन',
          es: 'Una pulsera artesanal',
          ar: 'سوار مصنوع يدوياً',
        },
        profiles: ['artisan'],
      },
    ],
  },
  {
    text: {
      tr: 'Tatil valizinde olmazsa olmazın?',
      en: 'What must be in your holiday suitcase?',
      zh: '你的度假行李箱里必不可少的是什么？',
      hi: 'आपके छुट्टी के सूटकेस में क्या ज़रूरी है?',
      es: '¿Qué no puede faltar en tu maleta de vacaciones?',
      ar: 'ما الذي لا غنى عنه في حقيبة عطلتك؟',
    },
    options: [
      {
        label: {
          tr: 'Her şeyle uyumlu az parça',
          en: 'Few pieces that match everything',
          zh: '少量百搭单品',
          hi: 'कुछ ऐसे कपड़े जो सबके साथ मेल खाएं',
          es: 'Pocas prendas que combinan con todo',
          ar: 'قطع قليلة تتناسب مع كل شيء',
        },
        profiles: ['minimal'],
      },
      {
        label: {
          tr: 'Şık bir blazer',
          en: 'A smart blazer',
          zh: '一件精致的西装外套',
          hi: 'एक स्मार्ट ब्लेज़र',
          es: 'Un blazer elegante',
          ar: 'بليزر أنيق',
        },
        profiles: ['classic'],
      },
      {
        label: {
          tr: 'Desenli, dikkat çeken parçalar',
          en: 'Printed, eye-catching pieces',
          zh: '印花吸睛单品',
          hi: 'प्रिंटेड, ध्यान खींचने वाले कपड़े',
          es: 'Prendas estampadas llamativas',
          ar: 'قطع مطبوعة جذابة',
        },
        profiles: ['bold', 'street'],
      },
      {
        label: {
          tr: 'Yüzme kıyafeti ve keten',
          en: 'Swimwear and linen',
          zh: '泳装和亚麻衣物',
          hi: 'स्विमवियर और लिनन',
          es: 'Bañador y lino',
          ar: 'ملابس سباحة وكتان',
        },
        profiles: ['coastal'],
      },
    ],
  },
  {
    text: {
      tr: 'Seni en çok ne etkiler?',
      en: 'What impresses you the most?',
      zh: '什么最能打动你？',
      hi: 'आपको सबसे ज़्यादा क्या प्रभावित करता है?',
      es: '¿Qué te impresiona más?',
      ar: 'ما الذي يبهرك أكثر؟',
    },
    options: [
      {
        label: {
          tr: 'Temiz, yalın tasarım',
          en: 'Clean, pure design',
          zh: '简洁纯粹的设计',
          hi: 'साफ़, सरल डिज़ाइन',
          es: 'Diseño limpio y puro',
          ar: 'تصميم نظيف وبسيط',
        },
        profiles: ['minimal'],
      },
      {
        label: {
          tr: 'Zamansız zarafet',
          en: 'Timeless elegance',
          zh: '永恒的优雅',
          hi: 'कालातीत खूबसूरती',
          es: 'Elegancia atemporal',
          ar: 'أناقة خالدة',
        },
        profiles: ['classic'],
      },
      {
        label: {
          tr: 'Enerji ve cesaret',
          en: 'Energy and boldness',
          zh: '活力与大胆',
          hi: 'ऊर्जा और साहस',
          es: 'Energía y audacia',
          ar: 'الطاقة والجرأة',
        },
        profiles: ['bold', 'coastal'],
      },
      {
        label: {
          tr: 'El işçiliği ve hikâye',
          en: 'Craftsmanship and story',
          zh: '手工艺与故事',
          hi: 'शिल्प कौशल और कहानी',
          es: 'Artesanía e historia',
          ar: 'الحرفية والقصة',
        },
        profiles: ['artisan'],
      },
    ],
  },
]

export const styleProfiles: StyleProfile[] = [
  {
    key: 'minimal',
    emoji: '🤍',
    name: {
      tr: 'Minimalist',
      en: 'The Minimalist',
      zh: '极简主义者',
      hi: 'मिनिमलिस्ट',
      es: 'El Minimalista',
      ar: 'البسيط',
    },
    description: {
      tr: 'Az ama kusursuz. Temiz çizgiler, nötr renkler ve işlev — senin stilin Japonya’nın sadeliği, Almanya’nın işlevselliği ve Norveç’in kuzey dinginliğiyle konuşuyor.',
      en: 'Few but flawless. Clean lines, neutral colours and function — your style speaks Japanese simplicity, German functionality and Nordic calm.',
      zh: '少而精。干净的线条、中性的色彩和实用功能——你的风格体现了日本的简约、德国的实用和北欧的宁静。',
      hi: 'कम लेकिन बेहतरीन। साफ़ लाइनें, न्यूट्रल रंग और फंक्शन — आपकी स्टाइल जापानी सादगी, जर्मन कार्यक्षमता और नॉर्डिक शांति बोलती है।',
      es: 'Poco pero impecable. Líneas limpias, colores neutros y funcionalidad — tu estilo habla de la sencillez japonesa, la funcionalidad alemana y la calma nórdica.',
      ar: 'قليل لكن لا تشوبه شائبة. خطوط نظيفة وألوان محايدة ووظيفية — أسلوبك يجسد البساطة اليابانية والعملية الألمانية والهدوء الاسكندنافي.',
    },
    countries: ['japan', 'germany', 'norway'],
  },
  {
    key: 'classic',
    emoji: '🎩',
    name: {
      tr: 'Klasik Zarafet',
      en: 'The Classic',
      zh: '经典优雅',
      hi: 'क्लासिक',
      es: 'El Clásico',
      ar: 'الكلاسيكي',
    },
    description: {
      tr: 'Zamansız parçalar senin işin. İtalyan terziliği, Fransız şıklığı ve İngiliz geleneği — trendler gelir geçer, sen kalırsın.',
      en: 'Timeless pieces are your thing. Italian tailoring, French chic and British heritage — trends come and go, you remain.',
      zh: '经典单品是你的最爱。意大利剪裁、法式优雅和英伦传统——潮流来来去去，而你始终如一。',
      hi: 'कालातीत कपड़े आपकी पहचान हैं। इतालवी सिलाई, फ्रांसीसी शान और ब्रिटिश परंपरा — ट्रेंड आते-जाते हैं, आप रहते हैं।',
      es: 'Las prendas atemporales son lo tuyo. Sastrería italiana, chic francés y herencia británica — las tendencias van y vienen, tú permaneces.',
      ar: 'القطع الخالدة هي شغفك. الخياطة الإيطالية والأناقة الفرنسية والتراث البريطاني — الصيحات تأتي وتذهب وأنت تبقى.',
    },
    countries: ['italy', 'france', 'united-kingdom'],
  },
  {
    key: 'bold',
    emoji: '🔥',
    name: {
      tr: 'Cesur ve Renkli',
      en: 'The Bold',
      zh: '大胆多彩',
      hi: 'बोल्ड',
      es: 'El Audaz',
      ar: 'الجريء',
    },
    description: {
      tr: 'Renkten ve desenden korkmuyorsun. Nijerya’nın özgüveni, Hindistan’ın zenginliği ve Brezilya’nın enerjisi tam sana göre.',
      en: 'You fear no colour or print. Nigeria’s confidence, India’s richness and Brazil’s energy are made for you.',
      zh: '你从不畏惧色彩和印花。尼日利亚的自信、印度的华丽和巴西的活力，都是为你而生。',
      hi: 'आप रंग या प्रिंट से नहीं डरते। नाइजीरिया का आत्मविश्वास, भारत की समृद्धि और ब्राज़ील की ऊर्जा आपके लिए बनी है।',
      es: 'No le temes al color ni a los estampados. La confianza de Nigeria, la riqueza de India y la energía de Brasil están hechas para ti.',
      ar: 'لا تخشى الألوان أو النقوش. ثقة نيجيريا وثراء الهند وطاقة البرازيل صُنعت لك.',
    },
    countries: ['nigeria', 'india', 'brazil'],
  },
  {
    key: 'street',
    emoji: '👟',
    name: {
      tr: 'Sokak Ruhu',
      en: 'The Street Spirit',
      zh: '街头达人',
      hi: 'स्ट्रीट स्पिरिट',
      es: 'El Urbano',
      ar: 'روح الشارع',
    },
    description: {
      tr: 'Trendleri podyumdan önce sokakta yakalarsın. Seul’un hızı, New York’un rahatlığı ve Tokyo’nun avangardı senin haritan.',
      en: 'You catch trends on the street before the runway. Seoul’s speed, New York’s ease and Tokyo’s avant-garde are your map.',
      zh: '你总是在T台之前就在街头捕捉潮流。首尔的速度、纽约的随性和东京的前卫，就是你的时尚地图。',
      hi: 'आप रनवे से पहले सड़कों पर ट्रेंड पकड़ते हैं। सियोल की रफ़्तार, न्यूयॉर्क की सहजता और टोक्यो की अवांगार्ड आपका नक्शा है।',
      es: 'Atrapas las tendencias en la calle antes que en la pasarela. La velocidad de Seúl, la soltura de Nueva York y la vanguardia de Tokio son tu mapa.',
      ar: 'تلتقط الصيحات من الشارع قبل منصات العرض. سرعة سيول وراحة نيويورك وطليعية طوكيو هي خريطتك.',
    },
    countries: ['south-korea', 'united-states', 'japan'],
  },
  {
    key: 'artisan',
    emoji: '🧵',
    name: {
      tr: 'Zanaat Âşığı',
      en: 'The Artisan Soul',
      zh: '匠心之魂',
      hi: 'कारीगर की आत्मा',
      es: 'El Artesano',
      ar: 'روح الحرفي',
    },
    description: {
      tr: 'Her parçada bir hikâye arıyorsun. Fas’ın dokusu, Meksika’nın nakışı ve Türkiye’nin zanaat mirası senin dilin.',
      en: 'You look for a story in every piece. Morocco’s textures, Mexico’s embroidery and Türkiye’s craft heritage speak your language.',
      zh: '你在每件衣服里寻找故事。摩洛哥的纹理、墨西哥的刺绣和土耳其的手工艺传统，正是你的语言。',
      hi: 'आप हर कपड़े में एक कहानी ढूंढते हैं। मोरक्को की बुनावट, मेक्सिको की कढ़ाई और तुर्की की शिल्प विरासत आपकी भाषा बोलती है।',
      es: 'Buscas una historia en cada prenda. Las texturas de Marruecos, los bordados de México y la artesanía de Türkiye hablan tu idioma.',
      ar: 'تبحث عن قصة في كل قطعة. نسيج المغرب وتطريز المكسيك وتراث الحرف التركي يتحدث لغتك.',
    },
    countries: ['morocco', 'mexico', 'turkiye'],
  },
  {
    key: 'coastal',
    emoji: '🌊',
    name: {
      tr: 'Sahil Rahatlığı',
      en: 'The Coastal Soul',
      zh: '海岸风情',
      hi: 'कोस्टल सोल',
      es: 'El Costero',
      ar: 'روح الساحل',
    },
    description: {
      tr: 'Güneş, keten ve özgür silüetler. Avustralya’nın sörf rahatlığı, İspanya’nın Akdeniz sıcaklığı ve Brezilya’nın plaj kültürü seni anlatıyor.',
      en: 'Sun, linen and free silhouettes. Australia’s surf ease, Spain’s Mediterranean warmth and Brazil’s beach culture describe you.',
      zh: '阳光、亚麻和自由的廓形。澳大利亚的冲浪休闲、西班牙的地中海热情和巴西的海滩文化，说的就是你。',
      hi: 'धूप, लिनन और आज़ाद सिल्हूट। ऑस्ट्रेलिया की सर्फ़ सहजता, स्पेन की भूमध्यसागरीय गर्माहट और ब्राज़ील की बीच संस्कृति आपको बयां करती है।',
      es: 'Sol, lino y siluetas libres. La soltura surfista de Australia, el calor mediterráneo de España y la cultura playera de Brasil te describen.',
      ar: 'الشمس والكتان والقصّات الحرة. راحة ركوب الأمواج الأسترالية ودفء البحر المتوسط الإسباني وثقافة الشاطئ البرازيلية توصفك.',
    },
    countries: ['australia', 'spain', 'brazil'],
  },
]
