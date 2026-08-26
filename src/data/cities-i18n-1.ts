type T4 = Record<'zh' | 'hi' | 'es' | 'ar', string>

export interface CityExtra {
  name: T4
  tagline: T4
  description: T4
  climate: T4
}

/** City translations (zh/hi/es/ar) — part 1, merged into cities at module load */
export const cityExtras1: Record<string, CityExtra> = {
  istanbul: {
    name: { zh: '伊斯坦布尔', hi: 'इस्तांबुल', es: 'Estambul', ar: 'إسطنبول' },
    tagline: { zh: '两大洲的风格交汇', hi: 'दो महाद्वीपों का स्टाइल संगम', es: 'Donde dos continentes se unen con estilo', ar: 'حيث تلتقي قارتان بالأناقة' },
    description: {
      zh: '这座横跨两大洲的城市也融合了风格：大巴扎的手工艺质感与尼尚塔什的现代优雅在同一天共存。在这里，叠穿不是选择，而是生活方式。',
      hi: 'दो महाद्वीपों को जोड़ने वाला शहर स्टाइल भी जोड़ता है: ग्रैंड बाज़ार की शिल्प बनावट और निशांताशी की आधुनिक शान एक ही दिन में जी जाती है। यहां लेयरिंग एक विकल्प नहीं, जीवन शैली है।',
      es: 'La ciudad que une dos continentes también une estilos: la artesanía del Gran Bazar y el chic moderno de Nişantaşı conviven el mismo día. Las capas aquí no son una opción, son una forma de vida.',
      ar: 'المدينة التي تربط قارتين تربط الأنماط أيضاً: حرفية البازار الكبير وأناقة نشان طاش العصرية تعيشان في اليوم نفسه. التنسيق بالطبقات هنا ليس خياراً، بل أسلوب حياة.',
    },
    climate: {
      zh: '四季分明：冬季多雨5-10°C，夏季潮湿28°C。',
      hi: 'चार मौसम: बारिश वाली 5-10°C सर्दियां, आर्द्र 28°C गर्मियां।',
      es: 'Cuatro estaciones: inviernos lluviosos de 5-10°C, veranos húmedos de 28°C.',
      ar: 'أربعة فصول: شتاء ممطر 5-10°م، صيف رطب 28°م.',
    },
  },
  cappadocia: {
    name: { zh: '卡帕多奇亚', hi: 'कैप्पाडोसिया', es: 'Capadocia', ar: 'كابادوكيا' },
    tagline: { zh: '精灵烟囱间的户外时尚', hi: 'परी चिमनियों के बीच आउटडोर शान', es: 'Chic outdoor entre chimeneas de hadas', ar: 'أناقة خارجية بين مداخن الجنيات' },
    description: {
      zh: '在精灵烟囱和峡谷之间，功能性是第一位：清晨热气球需要保暖内衣，白天徒步需要叠穿。大地色系既衬风景又衬照片。',
      hi: 'परी चिमनियों और घाटियों के बीच फंक्शन पहले आता है: सुबह की बैलून राइड के लिए थर्मल, दिन की हाइक के लिए लेयर। अर्थ टोन मनज़र और तस्वीरों दोनों पर खिलते हैं।',
      es: 'Entre chimeneas de hadas y valles, la función es lo primero: térmicas para el globo al amanecer, capas para las caminatas. Los tonos tierra favorecen al paisaje y a tus fotos.',
      ar: 'بين مداخن الجنيات والوديان، الوظيفة أولاً: ملابس حرارية لرحلة المنطاد فجراً، وطبقات لمسيرات النهار. الألوان الترابية تناسب المنظر وصورك.',
    },
    climate: {
      zh: '大陆性气候：冬季低至-10°C，夏季白天30°C以上，夜晚凉爽。',
      hi: 'महाद्वीपीय: सर्दियों में -10°C तक, गर्मियों में दिन 30°C+, रात ठंडी।',
      es: 'Continental: inviernos de hasta -10°C, días de verano de 30°C+ con noches frescas.',
      ar: 'مناخ قاري: شتاء حتى -10°م، أيام صيف 30°م+ وليالٍ باردة.',
    },
  },
  mugla: {
    name: { zh: '穆拉', hi: 'मुगला', es: 'Muğla', ar: 'موغلا' },
    tagline: { zh: '爱琴海的帆船与亚麻风情', hi: 'एजियन की सेलिंग और लिनन सहजता', es: 'Vela y lino en el Egeo', ar: 'الإبحار والكتان على بحر إيجه' },
    description: {
      zh: '博德鲁姆的白色亚麻优雅、费特希耶的冒险精神和达特恰的宁静时尚，汇聚在同一片海岸。夏天只有一条规则：轻盈、透气、天然面料。',
      hi: 'बोडरुम की सफेद लिनन शान, फेथिये का साहसिक जज़्बा और डात्चा की शांत शान एक ही तट पर मिलती है। गर्मी का एक ही नियम: हल्के, सांस लेने वाले, प्राकृतिक कपड़े।',
      es: 'La elegancia del lino blanco de Bodrum, el espíritu aventurero de Fethiye y la calma chic de Datça se unen en la misma costa. Una regla de verano: tejidos ligeros, transpirables y naturales.',
      ar: 'أناقة الكتان الأبيض في بودروم وروح المغامرة في فتحية وهدوء داتشا الأنيق يجتمعون على الساحل نفسه. قاعدة صيفية واحدة: أقمشة خفيفة وطبيعية تتنفس.',
    },
    climate: {
      zh: '地中海气候：冬季温和多雨，夏季干热35°C。',
      hi: 'भूमध्यसागरीय: हल्की बारिश वाली सर्दियां, शुष्क 35°C गर्मियां।',
      es: 'Mediterráneo: inviernos suaves y lluviosos, veranos secos de 35°C.',
      ar: 'متوسطي: شتاء معتدل ممطر، صيف جاف حار 35°م.',
    },
  },
  'new-york': {
    name: { zh: '纽约', hi: 'न्यूयॉर्क', es: 'Nueva York', ar: 'نيويورك' },
    tagline: { zh: '世界街头时尚之都', hi: 'स्ट्रीट स्टाइल की विश्व राजधानी', es: 'La capital mundial del estilo callejero', ar: 'العاصمة العالمية لأزياء الشارع' },
    description: {
      zh: '五个行政区各有各的风格语言——从曼哈顿的黑灰制服到布鲁克林的复古随性。冬天叠穿、夏天透气，都是必备。',
      hi: 'पांचों बोरो अपनी-अपनी स्टाइल भाषा बोलते हैं — मैनहटन की काली-ग्रे यूनिफॉर्म से ब्रुकलिन की विंटेज सहजता तक। सर्दियों में लेयर और गर्मियों में सांस लेने वाले कपड़े ज़रूरी।',
      es: 'Cada distrito habla su propio lenguaje de estilo: del uniforme negro-gris de Manhattan a la soltura vintage de Brooklyn. Capas en invierno y prendas transpirables en verano son imprescindibles.',
      ar: 'كل حي من الأحياء الخمسة يتحدث لغة أسلوب خاصة — من الزي الأسود والرمادي في مانهاتن إلى راحة الفينتاج في بروكلين. الطبقات شتاءً والأقمشة المتنفسة صيفاً ضرورية.',
    },
    climate: {
      zh: '冬季多雪-5°C，夏季潮湿30°C；叠穿系统必不可少。',
      hi: 'बर्फ़ीली -5°C सर्दियां, आर्द्र 30°C गर्मियां; लेयरिंग सिस्टम ज़रूरी।',
      es: 'Inviernos nevados de -5°C, veranos húmedos de 30°C; el sistema de capas es esencial.',
      ar: 'شتاء ثلجي -5°م، صيف رطب 30°م؛ نظام الطبقات أساسي.',
    },
  },
  'los-angeles': {
    name: { zh: '洛杉矶', hi: 'लॉस एंजिल्स', es: 'Los Ángeles', ar: 'لوس أنجلوس' },
    tagline: { zh: '阳光街头，闲适奢华', hi: 'धूप वाली सड़कें, आरामदायक लग्ज़री', es: 'Calles soleadas, lujo relajado', ar: 'شوارع مشمسة، فخامة مريحة' },
    description: {
      zh: '阳光街头文化与闲适奢华在此交融：运动鞋、敞领衬衫、复古牛仔。傍晚转凉时，加一件轻薄外套即可。',
      hi: 'धूप वाली स्ट्रीट संस्कृति और आरामदायक लग्ज़री यहां मिलते हैं: स्नीकर्स, खुली शर्ट, विंटेज डेनिम। शाम ठंडी हो तो हल्की लेयर काफी।',
      es: 'La cultura callejera soleada se une al lujo relajado: zapatillas, camisas abiertas, denim vintage. Una capa ligera basta cuando refresca por la noche.',
      ar: 'ثقافة الشوارع المشمسة تلتقي بالفخامة المريحة: أحذية رياضية وقمصان مفتوحة ودنيم قديم. طبقة خفيفة تكفي عندما تبرد الأمسيات.',
    },
    climate: {
      zh: '全年18-28°C；夜晚凉爽，少雨。',
      hi: 'साल भर 18-28°C; ठंडी शामें, कम बारिश।',
      es: '18-28°C todo el año; noches frescas, poca lluvia.',
      ar: '18-28°م طوال العام؛ أمسيات باردة وأمطار قليلة.',
    },
  },
  miami: {
    name: { zh: '迈阿密', hi: 'मियामी', es: 'Miami', ar: 'ميامي' },
    tagline: { zh: '热带色彩，拉丁节奏', hi: 'ट्रॉपिकल रंग, लैटिन लय', es: 'Colores tropicales, ritmo latino', ar: 'ألوان استوائية، إيقاع لاتيني' },
    description: {
      zh: '拉丁节奏与装饰艺术色彩洒满街头： pastel亚麻、鲜艳印花。在湿热中，浅色和宽松剪裁是你的救星。',
      hi: 'लैटिन लय और आर्ट डेको रंग सड़कों पर उतरते हैं: पैस्टल लिनन, जीवंत प्रिंट। उमस भरी गर्मी में हल्के रंग और ढीले कट बचाते हैं।',
      es: 'El ritmo latino y los colores Art Déco inundan las calles: linos pastel, estampados vivos. Los colores claros y los cortes holgados te salvan del calor húmedo.',
      ar: 'الإيقاع اللاتيني وألوان الآرت ديكو تملأ الشوارع: كتان باستيل ونقوش زاهية. الألوان الفاتحة والقصّات الواسعة تنقذك من الحر الرطب.',
    },
    climate: {
      zh: '热带：冬季24°C，夏季潮湿33°C伴有骤雨。',
      hi: 'ट्रॉपिकल: 24°C सर्दियां, आर्द्र 33°C गर्मियां और बौछारें।',
      es: 'Tropical: inviernos de 24°C, veranos húmedos de 33°C con chaparrones.',
      ar: 'استوائي: شتاء 24°م، صيف رطب 33°م مع زخات مطر.',
    },
  },
  beijing: {
    name: { zh: '北京', hi: 'बीजिंग', es: 'Pekín', ar: 'بكين' },
    tagline: { zh: '帝国遗风，现代叠穿', hi: 'शाही विरासत, आधुनिक लेयर', es: 'Herencia imperial, capas modernas', ar: 'إرث إمبراطوري، طبقات عصرية' },
    description: {
      zh: '帝国遗风与超现代生活并存：胡同里朴素低调，CBD里轮廓锐利。干冷的天气里，保暖层和防风外套是主角。',
      hi: 'शाही विरासत और अल्ट्रा-आधुनिक जीवन साथ-साथ: हुतोंग में सादगी, CBD में तेज़ सिल्हूट। सूखी ठंड में थर्मल लेयर और हवा रोकने वाली आउटरवियर आगे रहती है।',
      es: 'La herencia imperial y la vida ultramoderna conviven: sobriedad en los hutongs, siluetas afiladas en el CBD. Las capas térmicas y los cortavientos mandan en el frío seco.',
      ar: 'الإرث الإمبراطوري والحياة فائقة الحداثة جنباً إلى جنب: بساطة في الحواري، وقصّات حادة في الحي التجاري. الطبقات الحرارية والملابس الواقية من الرياح تتصدر في البرد الجاف.',
    },
    climate: {
      zh: '干冷大陆性：冬季多风-8°C，夏季32°C。',
      hi: 'शुष्क महाद्वीपीय: हवादार -8°C सर्दियां, 32°C गर्मियां।',
      es: 'Continental seco: inviernos ventosos de -8°C, veranos de 32°C.',
      ar: 'قاري جاف: شتاء عاصف -8°م، صيف 32°م.',
    },
  },
  shanghai: {
    name: { zh: '上海', hi: 'शंघाई', es: 'Shanghái', ar: 'شنغهاي' },
    tagline: { zh: '未来天际线，精致街头', hi: 'फ़्यूचरिस्टिक स्काईलाइन, परिष्कृत सड़कें', es: 'Skyline futurista, calles refinadas', ar: 'أفق مستقبلي، شوارع راقية' },
    description: {
      zh: '外滩的历史优雅与陆家嘴的未来主义之间，孕育出精致的街头风格。湿冷的冬天和闷热的夏天，让科技面料和聪明叠穿成为必需。',
      hi: 'बंड की ऐतिहासिक शान और लुजियाज़ुई के फ़्यूचरिज़्म के बीच परिष्कृत स्ट्रीट स्टाइल जन्म लेती है। भीगी सर्दी और उमस भरी गर्मी तकनीकी कपड़े और स्मार्ट लेयरिंग ज़रूरी बनाती है।',
      es: 'Entre la elegancia histórica del Bund y el futurismo de Lujiazui nace un estilo callejero refinado. Los inviernos húmedos y los veranos agobiantes hacen imprescindibles los tejidos técnicos y las capas inteligentes.',
      ar: 'بين أناقة البند التاريخية ومستقبلية لوجياتسوي يولد أسلوب شارع راقٍ. الشتاء الرطب والصيف الخانق يجعلان الأقمشة التقنية والطبقات الذكية ضرورية.',
    },
    climate: {
      zh: '潮湿：冬季湿冷3-8°C，夏季闷热35°C。',
      hi: 'आर्द्र: भीगी 3-8°C सर्दियां, उमस भरी 35°C गर्मियां।',
      es: 'Húmedo: inviernos fríos y húmedos de 3-8°C, veranos agobiantes de 35°C.',
      ar: 'رطب: شتاء بارد رطب 3-8°م، صيف خانق 35°م.',
    },
  },
  guangzhou: {
    name: { zh: '广州', hi: 'गुआंगझोउ', es: 'Cantón', ar: 'غوانزو' },
    tagline: { zh: '亚热带轻盈，商贸活力', hi: 'उपोष्णकटिबंधीय हल्कापन, व्यापारिक ऊर्जा', es: 'Ligereza subtropical, energía comercial', ar: 'خفة شبه استوائية، طاقة تجارية' },
    description: {
      zh: '商贸城市的务实活力与亚热带的轻盈相得益彰。一年中大部分时间穿轻薄透气的衣物即可——雨季记得做好准备。',
      hi: 'व्यापारिक शहर की व्यावहारिक ऊर्जा उपोष्णकटिबंधीय हल्केपन से मिलती है। साल के ज़्यादातर समय पतले, सांस लेने वाले कपड़े काफी — बस बारिश के मौसम के लिए तैयार रहें।',
      es: 'La energía práctica de una ciudad comercial se une a la ligereza subtropical. Prendas finas y transpirables bastan casi todo el año; solo prepárate para la temporada de lluvias.',
      ar: 'الطاقة العملية لمدينة تجارية تلتقي بخفة المناخ شبه الاستوائي. القطع الرقيقة المتنفسة تكفي معظم العام — فقط استعد لموسم الأمطار.',
    },
    climate: {
      zh: '亚热带：冬季15°C，夏季33°C季风降雨。',
      hi: 'उपोष्णकटिबंधीय: 15°C सर्दियां, 33°C मानसूनी गर्मियां।',
      es: 'Subtropical: inviernos de 15°C, veranos monzónicos de 33°C.',
      ar: 'شبه استوائي: شتاء 15°م، صيف موسمي ممطر 33°م.',
    },
  },
  delhi: {
    name: { zh: '德里', hi: 'दिल्ली', es: 'Delhi', ar: 'دلهي' },
    tagline: { zh: '历史与色彩的浓烈之舞', hi: 'इतिहास और रंगों का घना नृत्य', es: 'Una densa danza de historia y color', ar: 'رقصة كثيفة من التاريخ والألوان' },
    description: {
      zh: '旧德里的色彩狂欢与新德里的外交优雅共存一城。棉麻是夏天的救星；冬日清晨需要披肩和轻外套。',
      hi: 'पुरानी दिल्ली का रंग-बिरंग और नई दिल्ली की कूटनीतिक शान एक ही शहर में जीती है। सूती और लिनन गर्मियों में बचाते हैं; सर्दियों की सुबह शॉल और हल्की जैकेट चाहिए।',
      es: 'El caos de color del Viejo Delhi y el chic diplomático de Nueva Delhi viven en la misma ciudad. El algodón y el lino te salvan en verano; un chal y una chaqueta ligera en las mañanas de invierno.',
      ar: 'زحام ألوان دلهي القديمة وأناقة نيودلهي الدبلوماسية تعيشان في المدينة نفسها. القطن والكتان ينقذانك صيفاً؛ وشاح وسترة خفيفة في صباحات الشتاء.',
    },
    climate: {
      zh: '极端气候：冬季多雾8°C，夏季酷热45°C。',
      hi: 'चरम: धुंध भरी 8°C सर्दियां, 45°C गर्मियां।',
      es: 'Extremos: inviernos con niebla de 8°C, veranos abrasadores de 45°C.',
      ar: 'مناخ متطرف: شتاء ضبابي 8°م، صيف حارق 45°م.',
    },
  },
  mumbai: {
    name: { zh: '孟买', hi: 'मुंबई', es: 'Bombay', ar: 'مومباي' },
    tagline: { zh: '季风时尚，宝莱坞活力', hi: 'मानसूनी शान, बॉलीवुड ऊर्जा', es: 'Chic monzónico, energía Bollywood', ar: 'أناقة موسمية، طاقة بوليوود' },
    description: {
      zh: '宝莱坞的活力和海风定义了这座城市的风格——鲜艳而实用。季风季节里，速干面料和防水鞋必不可少。',
      hi: 'बॉलीवुड ऊर्जा और समुद्री हवा शहर की स्टाइल तय करती है — जीवंत लेकिन व्यावहारिक। मानसून में जल्दी सूखने वाले कपड़े और पानी रोधी जूते अनिवार्य।',
      es: 'La energía de Bollywood y la brisa marina definen el estilo de la ciudad: vívido pero práctico. Los tejidos de secado rápido y el calzado resistente al agua son imprescindibles en el monzón.',
      ar: 'طاقة بوليوود ونسيم البحر يحددان أسلوب المدينة — نابض لكن عملي. الأقمشة سريعة الجفاف والأحذية المقاومة للماء ضرورية في موسم الأمطار.',
    },
    climate: {
      zh: '季风气候：全年25-32°C，6月至9月暴雨。',
      hi: 'मानसून: साल भर 25-32°C, जून-सितंबर भारी बारिश।',
      es: 'Monzón: 25-32°C todo el año, lluvias fuertes de junio a septiembre.',
      ar: 'موسمي: 25-32°م طوال العام، أمطار غزيرة من يونيو إلى سبتمبر.',
    },
  },
}
