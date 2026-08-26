type T4 = Record<'zh' | 'hi' | 'es' | 'ar', string>

interface StopExtra {
  name: T4
  desc: T4
}
interface DayExtra {
  title: T4
  stops: StopExtra[]
}
interface GuideExtra {
  city: T4
  title: T4
  subtitle: T4
  days: DayExtra[]
}

/** City guide translations for zh/hi/es/ar — merged into guides at module load */
export const guideExtras: Record<string, GuideExtra> = {
  istanbul: {
    city: { zh: '伊斯坦布尔', hi: 'इस्तांबुल', es: 'Estambul', ar: 'إسطنبول' },
    title: { zh: '3日时尚路线', hi: '3-दिवसीय स्टाइल यात्रा', es: 'Ruta de estilo de 3 días', ar: 'مسار أناقة لمدة 3 أيام' },
    subtitle: {
      zh: '从复古小店到设计工作室——用时尚爱好者的眼光看伊斯坦布尔。',
      hi: 'विंटेज दुकानों से डिज़ाइन स्टूडियो तक — इस्तांबुल को एक फैशन प्रेमी की नज़र से देखें।',
      es: 'De tiendas vintage a talleres de diseño — Estambul a través de los ojos de un amante de la moda.',
      ar: 'من متاجر القطع القديمة إلى استوديوهات التصميم — شاهد إسطنبول بعيون عاشق للموضة.',
    },
    days: [
      {
        title: { zh: '第1天 — 卡拉柯伊与加拉塔', hi: 'दिन 1 — काराकॉय और गलाता', es: 'Día 1 — Karaköy y Gálata', ar: 'اليوم 1 — كاراكوي وغلطة' },
        stops: [
          {
            name: { zh: '卡拉柯伊街区', hi: 'काराकॉय की गलियां', es: 'Calles de Karaköy', ar: 'شوارع كاراكوي' },
            desc: {
              zh: '从清晨咖啡开始；这里是观察街头时尚的最佳地点。在精品咖啡馆之间，可以发现年轻设计师的快闪店。',
              hi: 'सुबह की कॉफ़ी से शुरुआत करें; यह लोगों को देखने की सबसे अच्छी जगह है। बुटीक कैफे के बीच युवा डिज़ाइनरों की पॉप-अप दुकानें पकड़ें।',
              es: 'Empieza con un café por la mañana; el mejor lugar para observar gente. Descubre las tiendas pop-up de jóvenes diseñadores entre los cafés boutique.',
              ar: 'ابدأ بقهوة الصباح؛ إنه أفضل مكان لمراقبة أناقة المارة. اكتشف متاجر المصممين الشباب المؤقتة بين المقاهي الراقية.',
            },
          },
          {
            name: { zh: '加拉塔复古寻宝', hi: 'गलाता के आसपास विंटेज खोज', es: 'Búsqueda de vintage por Gálata', ar: 'البحث عن القطع القديمة حول غلطة' },
            desc: {
              zh: '在Serdar-ı Ekrem街的复古二手精品店里，可以找到70年代牛仔、手工皮包和复古丝巾。',
              hi: 'सरदार-ए एकरम स्ट्रीट की विंटेज बुटीक में 70 के दशक का डेनिम, हस्तनिर्मित चमड़े के बैग और रेट्रो स्कार्फ मिलेंगे।',
              es: 'Encuentra denim de los 70, bolsos de cuero artesanales y pañuelos retro en las boutiques vintage de la calle Serdar-ı Ekrem.',
              ar: 'اعثر على دنيم السبعينيات وحقائب جلدية مصنوعة يدوياً وأوشحة كلاسيكية في متاجر شارع سردار إكرم.',
            },
          },
          {
            name: { zh: '设计工作室', hi: 'डिज़ाइन स्टूडियो', es: 'Talleres de diseño', ar: 'استوديوهات التصميم' },
            desc: {
              zh: '在加拉塔小巷的工作室商店里结识珠宝和陶瓷设计师；大多数作品都是独一无二的。',
              hi: 'गलाता की गलियों के कार्यशाला-स्टोर में ज्वेलरी और सिरेमिक डिज़ाइनरों से मिलें; ज़्यादातर पीस एकल हैं।',
              es: 'Conoce a diseñadores de joyería y cerámica en los talleres-tienda de las callejuelas de Gálata; la mayoría de las piezas son únicas.',
              ar: 'تعرف على مصممي المجوهرات والسيراميك في متاجر الورش بأزقة غلطة؛ معظم القطع فريدة من نوعها.',
            },
          },
        ],
      },
      {
        title: { zh: '第2天 — 尼尚塔什的优雅', hi: 'दिन 2 — निशांताशी की शान', es: 'Día 2 — Elegancia de Nişantaşı', ar: 'اليوم 2 — أناقة نشان طاش' },
        stops: [
          {
            name: { zh: 'Abdi İpekçi 大道', hi: 'अब्दी इपेकची एवेन्यू', es: 'Avenida Abdi İpekçi', ar: 'جادة عبدي إيبكجي' },
            desc: {
              zh: '土耳其的奢侈时尚大道。逛橱窗时，近距离感受土耳其剪裁的精湛品质。',
              hi: 'तुर्की का लग्ज़री फैशन एवेन्यू। विंडो शॉपिंग करते हुए तुर्की सिलाई की गुणवत्ता को करीब से देखें।',
              es: 'La avenida de la moda de lujo de Türkiye. Aprecia la calidad de la sastrería turca mientras miras escaparates.',
              ar: 'جادة الأزياء الفاخرة في تركيا. شاهد جودة الخياطة التركية عن قرب أثناء التسوق.',
            },
          },
          {
            name: { zh: '土耳其设计师精品店', hi: 'तुर्की डिज़ाइनर बुटीक', es: 'Boutiques de diseñadores turcos', ar: 'متاجر المصممين الأتراك' },
            desc: {
              zh: '在 Les Benjamins、Dice Kayek 等品牌和独立设计师的精品店中，探索本土创意。',
              hi: 'Les Benjamins और Dice Kayek जैसे ब्रांडों और स्वतंत्र डिज़ाइनरों की बुटीक में स्थानीय रचनात्मकता खोजें।',
              es: 'Descubre la creatividad local en boutiques de marcas como Les Benjamins y Dice Kayek y de diseñadores independientes.',
              ar: 'اكتشف الإبداع المحلي في متاجر علامات مثل Les Benjamins وDice Kayek والمصممين المستقلين.',
            },
          },
          {
            name: { zh: '马奇卡公园小憩', hi: 'माच्का पार्क में विश्राम', es: 'Descanso en el parque Maçka', ar: 'استراحة في حديقة ماتشكا' },
            desc: {
              zh: '这座城市最时尚的人们午间散步的公园；在自然环境中欣赏伊斯坦布尔的优雅。',
              hi: 'वह पार्क जहां शहर के सबसे स्टाइलिश लोग दोपहर की सैर करते हैं; इस्तांबुल की शान को उसके प्राकृतिक वातावरण में देखें।',
              es: 'El parque donde los más elegantes de la ciudad pasean al mediodía; observa el chic de Estambul en su hábitat natural.',
              ar: 'الحديقة التي يتنزه فيها أكثر أهل المدينة أناقة وقت الظهيرة؛ شاهد أناقة إسطنبول في بيئتها الطبيعية.',
            },
          },
        ],
      },
      {
        title: { zh: '第3天 — 历史与手工艺', hi: 'दिन 3 — इतिहास और शिल्प', es: 'Día 3 — Historia y artesanía', ar: 'اليوم 3 — التاريخ والحرف' },
        stops: [
          {
            name: { zh: '大巴扎', hi: 'ग्रैंड बाज़ार', es: 'Gran Bazar', ar: 'البازار الكبير' },
            desc: {
              zh: '在珠宝商、羊绒披肩商和皮革匠人之间尽情迷路吧。讨价还价也是体验的一部分。',
              hi: 'ज्वेलर्स, कश्मीरी शॉल विक्रेताओं और चमड़े के उस्तादों के बीच खो जाएं। मोलभाव करना अनुभव का हिस्सा है।',
              es: 'Piérdete entre joyeros, vendedores de chales de cachemira y maestros del cuero. Regatear es parte de la experiencia.',
              ar: 'تجوّل بين الصاغة وبائعي الشالات الكشميرية وأساتذة الجلود. المساومة جزء من التجربة.',
            },
          },
          {
            name: { zh: '阿拉斯塔巴扎', hi: 'अरास्ता बाज़ार', es: 'Bazar Arasta', ar: 'بازار أراستا' },
            desc: {
              zh: '更安静的选择；是寻找手工纺织品和传统图案的理想之地。',
              hi: 'एक शांत विकल्प; हाथ से बुने वस्त्रों और पारंपरिक पैटर्न के लिए आदर्श।',
              es: 'Una alternativa más tranquila; ideal para textiles tejidos a mano y patrones tradicionales.',
              ar: 'بديل أكثر هدوءاً؛ مثالي للمنسوجات المنسوجة يدوياً والأنماط التقليدية.',
            },
          },
          {
            name: { zh: '巴拉特的色彩', hi: 'बालाट के रंग', es: 'Los colores de Balat', ar: 'ألوان بالات' },
            desc: {
              zh: '彩色房屋之间的古董店和小型设计店；日落时分是拍照的最佳时刻。',
              hi: 'रंगीन घरों के बीच प्राचीन वस्तुओं की दुकानें और छोटे डिज़ाइन स्टोर; तस्वीरों के लिए सूर्यास्त का समय बेहतरीन है।',
              es: 'Tiendas de antigüedades y pequeñas tiendas de diseño entre casas de colores; la hora dorada es perfecta para fotos.',
              ar: 'متاجر التحف ومتاجر التصميم الصغيرة بين المنازل الملونة؛ الساعة الذهبية مثالية للصور.',
            },
          },
        ],
      },
    ],
  },
  paris: {
    city: { zh: '巴黎', hi: 'पेरिस', es: 'París', ar: 'باريس' },
    title: { zh: '3日时尚路线', hi: '3-दिवसीय स्टाइल यात्रा', es: 'Ruta de estilo de 3 días', ar: 'مسار أناقة لمدة 3 أيام' },
    subtitle: {
      zh: '从奢华橱窗到复古拱廊——追逐巴黎时尚的三天。',
      hi: 'लग्ज़री शो विंडो से विंटेज पैसेज तक — पेरिस की शान के पीछे तीन दिन।',
      es: 'De escaparates de lujo a pasajes vintage — tres días tras el chic parisino.',
      ar: 'من واجهات المتاجر الفاخرة إلى الممرات العتيقة — ثلاثة أيام في مطاردة الأناقة الباريسية.',
    },
    days: [
      {
        title: { zh: '第1天 — 玛黑区', hi: 'दिन 1 — ले मारै', es: 'Día 1 — Le Marais', ar: 'اليوم 1 — لو ماريه' },
        stops: [
          {
            name: { zh: '弗朗布瓦西埃街', hi: 'रू दे फ्रांक्स-बुर्ज़ोआ', es: 'Rue des Francs-Bourgeois', ar: 'شارع فران بورجوا' },
            desc: {
              zh: '独立精品店和概念店云集；巴黎人"毫不费力的优雅"之源。',
              hi: 'स्वतंत्र बुटीक और कॉन्सेप्ट स्टोर; पेरिस के "अनायास शान" का स्रोत।',
              es: 'Boutiques independientes y concept stores; la fuente del "chic desenfadado" parisino.',
              ar: 'متاجر مستقلة ومتاجر مفاهيمية؛ مصدر "الأناقة غير المتكلفة" الباريسية.',
            },
          },
          {
            name: { zh: 'Merci 概念店', hi: 'Merci कॉन्सेप्ट स्टोर', es: 'Concept store Merci', ar: 'متجر Merci المفاهيمي' },
            desc: {
              zh: '时尚、设计与生活方式交汇的传奇商店；胶囊衣橱理念的殿堂。',
              hi: 'वह प्रसिद्ध स्टोर जहां फैशन, डिज़ाइन और लाइफस्टाइल मिलते हैं; कैप्सूल वॉर्डरोब का मंदिर।',
              es: 'La legendaria tienda donde se unen moda, diseño y estilo de vida; un templo del armario cápsula.',
              ar: 'المتجر الأسطوري حيث تلتقي الموضة والتصميم ونمط الحياة؛ معبد خزانة الملابس المصغرة.',
            },
          },
          {
            name: { zh: '孚日广场', hi: 'प्लेस दे वोज़', es: 'Place des Vosges', ar: 'ساحة فوج' },
            desc: {
              zh: '在这座城市最优雅的广场结束一天；尽情享受画廊和拱廊精品店。',
              hi: 'शहर के सबसे खूबसूरत चौक में दिन समाप्त करें; गैलरियों और आर्केड बुटीक का आनंद लें।',
              es: 'Termina el día en la plaza más elegante de la ciudad; disfruta de las galerías y las boutiques de los soportales.',
              ar: 'اختم يومك في أرقى ساحات المدينة؛ استمتع بالمعارض والمتاجر تحت الأقواس.',
            },
          },
        ],
      },
      {
        title: { zh: '第2天 — 奢华与传统', hi: 'दिन 2 — लग्ज़री और विरासत', es: 'Día 2 — Lujo y herencia', ar: 'اليوم 2 — الفخامة والتراث' },
        stops: [
          {
            name: { zh: '圣奥诺雷街', hi: 'रू सेंट-ओनोरे', es: 'Rue Saint-Honoré', ar: 'شارع سانت أونوريه' },
            desc: {
              zh: '大牌时装屋的心脏；橱窗陈列本身就是艺术品。',
              hi: 'बड़े फैशन हाउस का दिल; शो विंडो डिस्प्ले अपने आप में कलाकृति हैं।',
              es: 'El corazón de las grandes casas de moda; los escaparates son obras de arte en sí mismos.',
              ar: 'قلب دور الأزياء الكبرى؛ واجهات العرض أعمال فنية بحد ذاتها.',
            },
          },
          {
            name: { zh: '巴黎皇家宫殿花园', hi: 'पैले रॉयल गार्डन', es: 'Jardines del Palais Royal', ar: 'حدائق القصر الملكي' },
            desc: {
              zh: '在历史拱廊下的精品店中，追寻高级定制的足迹。',
              hi: 'ऐतिहासिक आर्केड के नीचे की बुटीक में ऑट कुचूर के निशान खोजें।',
              es: 'Sigue el rastro de la alta costura en las boutiques bajo las arcadas históricas.',
              ar: 'تتبع أثر الأزياء الراقية في المتاجر تحت الأقواس التاريخية.',
            },
          },
          {
            name: { zh: '装饰艺术博物馆', hi: 'म्यूज़े दे आर्ट्स डेकोरातिफ़', es: 'Musée des Arts Décoratifs', ar: 'متحف الفنون الزخرفية' },
            desc: {
              zh: '通过时尚历史收藏，领略法式优雅的根源。',
              hi: 'फैशन इतिहास संग्रह के साथ फ्रांसीसी शान की जड़ें देखें।',
              es: 'Descubre las raíces del chic francés con su colección de historia de la moda.',
              ar: 'شاهد جذور الأناقة الفرنسية من خلال مجموعة تاريخ الموضة.',
            },
          },
        ],
      },
      {
        title: { zh: '第3天 — 复古与拱廊', hi: 'दिन 3 — विंटेज और पैसेज', es: 'Día 3 — Vintage y pasajes', ar: 'اليوم 3 — القطع القديمة والممرات' },
        stops: [
          {
            name: { zh: '圣旺跳蚤市场', hi: 'सेंट-ओएन फ़्ली मार्केट', es: 'Mercado de pulgas de Saint-Ouen', ar: 'سوق سان توان للسلع المستعملة' },
            desc: {
              zh: '世界最著名的跳蚤市场；从复古香奈儿到古董纽扣应有尽有。记得早点去。',
              hi: 'दुनिया का सबसे मशहूर फ़्ली मार्केट; विंटेज शैनल से लेकर प्राचीन बटन तक सब कुछ। जल्दी जाएं।',
              es: 'El mercadillo más famoso del mundo; desde Chanel vintage hasta botones antiguos. Ve temprano.',
              ar: 'أشهر سوق مستعمل في العالم؛ من شانيل القديمة إلى الأزرار العتيقة. اذهب مبكراً.',
            },
          },
          {
            name: { zh: '有盖拱廊', hi: 'कवर्ड पैसेज', es: 'Pasajes cubiertos', ar: 'الممرات المغطاة' },
            desc: {
              zh: '在薇薇安长廊和全景廊街的19世纪氛围中，逛逛小精品店。',
              hi: 'गैलरी विवियन और पैसेज दे पनोरमा के 19वीं सदी के माहौल में छोटी बुटीक।',
              es: 'Pequeñas boutiques en el ambiente decimonónico de Galerie Vivienne y Passage des Panoramas.',
              ar: 'متاجر صغيرة في أجواء القرن التاسع عشر في غاليري فيفيان وممر بانوراما.',
            },
          },
          {
            name: { zh: '圣马丁运河', hi: 'कनाल सें-मार्टिन', es: 'Canal Saint-Martin', ar: 'قناة سان مارتان' },
            desc: {
              zh: '巴黎年轻人的聚集地；观察街头时尚、逛独立小店的完美收官之地。',
              hi: 'युवा पेरिस का मिलन स्थल; स्ट्रीट स्टाइल देखने और इंडी दुकानों के लिए सही समापन।',
              es: 'El punto de encuentro del París joven; el final perfecto para observar el estilo callejero y las tiendas independientes.',
              ar: 'نقطة لقاء شباب باريس؛ الختام المثالي لمراقبة أزياء الشارع والمتاجر المستقلة.',
            },
          },
        ],
      },
    ],
  },
  tokyo: {
    city: { zh: '东京', hi: 'टोक्यो', es: 'Tokio', ar: 'طوكيو' },
    title: { zh: '3日时尚路线', hi: '3-दिवसीय स्टाइल यात्रा', es: 'Ruta de estilo de 3 días', ar: 'مسار أناقة لمدة 3 أيام' },
    subtitle: {
      zh: '从前卫精品店到牛仔天堂——东京时尚地图。',
      hi: 'अवांगार्ड बुटीक से डेनिम पैराडाइज़ तक — टोक्यो का फैशन नक्शा।',
      es: 'De boutiques vanguardistas a un paraíso del denim — el mapa de la moda de Tokio.',
      ar: 'من المتاجر الطليعية إلى جنة الدنيم — خريطة موضة طوكيو.',
    },
    days: [
      {
        title: { zh: '第1天 — 原宿与表参道', hi: 'दिन 1 — हाराजुकू और ओमोतेसांडो', es: 'Día 1 — Harajuku y Omotesandō', ar: 'اليوم 1 — هاراجوكو وأوموتيساندو' },
        stops: [
          {
            name: { zh: '竹下通', hi: 'ताकेशिता स्ट्रीट', es: 'Calle Takeshita', ar: 'شارع تاكيشيتا' },
            desc: {
              zh: '青年亚文化的心脏；最大胆的街头风格都在这里。',
              hi: 'युवा सबकल्चर का दिल; सबसे बोल्ड स्ट्रीट स्टाइल यहीं मिलती है।',
              es: 'El corazón de las subculturas juveniles; aquí viven los estilos callejeros más atrevidos.',
              ar: 'قلب ثقافات الشباب الفرعية؛ هنا تعيش أكثر أزياء الشارع جرأة.',
            },
          },
          {
            name: { zh: '表参道', hi: 'ओमोतेसांडो एवेन्यू', es: 'Avenida Omotesandō', ar: 'جادة أوموتيساندو' },
            desc: {
              zh: '单是建筑就值得一看的奢侈品精品店；"东京的香榭丽舍大街"。',
              hi: 'लग्ज़री बुटीक जो सिर्फ अपनी आर्किटेक्चर के लिए देखने लायक हैं; "टोक्यो का शांज़ेलीज़े"।',
              es: 'Boutiques de lujo que merecen una visita solo por su arquitectura; los Campos Elíseos de Tokio.',
              ar: 'متاجر فاخرة تستحق الزيارة لعمارتها وحدها؛ "الشانزليزيه طوكيو".',
            },
          },
          {
            name: { zh: '猫街复古寻宝', hi: 'कैट स्ट्रीट विंटेज खोज', es: 'Búsqueda vintage en Cat Street', ar: 'البحث عن القطع القديمة في شارع القطط' },
            desc: {
              zh: '一条安静的街道，遍布复古和独立商店；90年代日本街头时尚的印记。',
              hi: 'विंटेज और इंडी दुकानों से भरी शांत गली; 90 के दशक की जापानी स्ट्रीट फैशन के निशान।',
              es: 'Una calle tranquila llena de tiendas vintage e independientes; rastros de la moda callejera japonesa de los 90.',
              ar: 'شارع هادئ مليء بالمتاجر القديمة والمستقلة؛ آثار موضة الشارع اليابانية في التسعينيات.',
            },
          },
        ],
      },
      {
        title: { zh: '第2天 — 涩谷与代官山', hi: 'दिन 2 — शिबुया और दाइकानयामा', es: 'Día 2 — Shibuya y Daikanyama', ar: 'اليوم 2 — شيبويا ودايكانياما' },
        stops: [
          {
            name: { zh: '涩谷109及周边', hi: 'शिबुया 109 और आसपास', es: 'Shibuya 109 y alrededores', ar: 'شيبويا 109 وما حولها' },
            desc: {
              zh: '潮流狩猎的中心；在一栋楼里看尽日本青年时尚。',
              hi: 'ट्रेंड शिकार का केंद्र; एक इमारत में जापानी युवा फैशन का समूह देखें।',
              es: 'El centro de la caza de tendencias; toda la moda juvenil japonesa reunida en un edificio.',
              ar: 'مركز صيد الصيحات؛ شاهد موضة الشباب الياباني مجتمعة في مبنى واحد.',
            },
          },
          {
            name: { zh: '代官山精品店', hi: 'दाइकानयामा बुटीक', es: 'Boutiques de Daikanyama', ar: 'متاجر دايكانياما' },
            desc: {
              zh: '这座城市最精致的街区；精选店和安静的咖啡馆。',
              hi: 'शहर का सबसे सोफिस्टिकेटेड इलाका; सिलेक्ट शॉप और शांत कैफे।',
              es: 'El barrio más sofisticado de la ciudad; tiendas selectas y cafés tranquilos.',
              ar: 'أرقى أحياء المدينة؛ متاجر منتقاة ومقاهٍ هادئة.',
            },
          },
          {
            name: { zh: '茑屋 T-Site', hi: 'Tsutaya T-Site', es: 'Tsutaya T-Site', ar: 'تسوطايا تي-سايت' },
            desc: {
              zh: '不仅仅是书店——更是一座生活方式殿堂，拥有最棒的时尚刊物精选。',
              hi: 'किताबों की दुकान से आगे — फैशन प्रकाशनों के बेहतरीन चयन वाला लाइफस्टाइल मंदिर।',
              es: 'Más que una librería: un santuario del estilo de vida con la mejor selección de publicaciones de moda.',
              ar: 'أكثر من مجرد مكتبة — معبد لنمط الحياة مع أفضل مختارات منشورات الموضة.',
            },
          },
        ],
      },
      {
        title: { zh: '第3天 — 高圆寺与牛仔', hi: 'दिन 3 — कोएंजी और डेनिम', es: 'Día 3 — Koenji y denim', ar: 'اليوم 3 — كوينجي والدنيم' },
        stops: [
          {
            name: { zh: '高圆寺复古街区', hi: 'कोएंजी विंटेज गलियां', es: 'Calles vintage de Koenji', ar: 'شوارع كوينجي القديمة' },
            desc: {
              zh: '东京的复古之都；价格亲民的二手宝藏。',
              hi: 'टोक्यो की विंटेज राजधानी; किफायती सेकंड-हैंड खजाने।',
              es: 'La capital vintage de Tokio; tesoros de segunda mano asequibles.',
              ar: 'عاصمة طوكيو للقطع القديمة؛ كنوز مستعملة بأسعار معقولة.',
            },
          },
          {
            name: { zh: '日本牛仔工坊', hi: 'जापानी डेनिम स्टूडियो', es: 'Talleres de denim japonés', ar: 'ورش الدنيم اليابانية' },
            desc: {
              zh: '赤耳丹宁诞生的工坊商店；入手一条"穿一辈子"的牛仔裤。',
              hi: 'वे कार्यशाला-स्टोर जहां सेल्वेज डेनिम का जन्म हुआ; एक "आजीवन" जींस का जोड़ा लें।',
              es: 'Los talleres-tienda donde nació el denim selvedge; hazte con unos vaqueros "para toda la vida".',
              ar: 'متاجر الورش حيث وُلد دنيم السيلفدج؛ اقتنِ بنطال جينز "يدوم مدى الحياة".',
            },
          },
          {
            name: { zh: '下北泽', hi: 'शिमोकिताज़ावा', es: 'Shimokitazawa', ar: 'شيموكيتازاوا' },
            desc: {
              zh: '波西米亚风情的街区；在唱片店、剧场和闲适的街头风格中结束这一天。',
              hi: 'बोहो आत्मा वाला इलाका; रिकॉर्ड शॉप, थिएटर और रिलैक्स्ड स्ट्रीट स्टाइल के साथ दिन समाप्त करें।',
              es: 'Un barrio bohemio; cierra el día con tiendas de discos, teatros y estilo callejero relajado.',
              ar: 'حي بوهيمي؛ اختم يومك بمتاجر الأسطوانات والمسارح وأزياء الشارع المريحة.',
            },
          },
        ],
      },
    ],
  },
}
