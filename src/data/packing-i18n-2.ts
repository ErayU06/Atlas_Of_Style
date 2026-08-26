import type { Season } from './packing'

type ExtraList = Record<'zh' | 'hi' | 'es' | 'ar', string[]>

/** Packing extras — Americas & Asia-Pacific countries, non-tr/en languages */
export const packingExtras2: Record<string, Record<Season, ExtraList>> = {
  'united-states': {
    spring: {
      zh: ['牛仔夹克', '卫衣', '白色运动鞋', '直筒牛仔裤', '棒球帽'],
      hi: ['डेनिम जैकेट', 'हूडी', 'सफेद स्नीकर्स', 'स्ट्रेट जींस', 'बेसबॉल कैप'],
      es: ['Chaqueta vaquera', 'Sudadera con capucha', 'Zapatillas blancas', 'Vaqueros rectos', 'Gorra de béisbol'],
      ar: ['جاكيت دنيم', 'هودي', 'حذاء رياضي أبيض', 'جينز مستقيم', 'قبعة بيسبول'],
    },
    summer: {
      zh: ['印花T恤', '斜纹短裤', '帆布鞋', '渔夫帽', '墨镜'],
      hi: ['ग्राफिक टी', 'चino शॉर्ट्स', 'कैनवास स्नीकर्स', 'बकेट हैट', 'धूप का चश्मा'],
      es: ['Camiseta gráfica', 'Shorts chinos', 'Zapatillas de lona', 'Gorro pescador', 'Gafas de sol'],
      ar: ['تيشيرت برسومات', 'شورت قطني', 'حذاء قماشي', 'قبعة باكيت', 'نظارات شمسية'],
    },
    autumn: {
      zh: ['法兰绒衬衫', '夹克外套', '工装靴', '深色牛仔裤', '针织帽'],
      hi: ['फ्लैनेल शर्ट', 'वर्सिटी जैकेट', 'वर्क बूट्स', 'डार्क जींस', 'बीनी'],
      es: ['Camisa de franela', 'Chaqueta varsity', 'Botas de trabajo', 'Vaqueros oscuros', 'Gorro de lana'],
      ar: ['قميص فلانيل', 'جاكيت جامعي', 'حذاء عمل', 'جينز غامق', 'قبعة صوف'],
    },
    winter: {
      zh: ['派克大衣', '保暖卫衣', '羊毛裤', '防寒靴', '触摸屏手套'],
      hi: ['पारका', 'थर्मल हूडी', 'ऊनी पैंट', 'इंसुलेटेड बूट्स', 'टचस्क्रीन दस्ताने'],
      es: ['Parka', 'Sudadera térmica', 'Pantalón de lana', 'Botas aisladas', 'Guantes táctiles'],
      ar: ['باركا', 'هودي حراري', 'بنطال صوف', 'حذاء معزول', 'قفازات لمسية'],
    },
  },
  canada: {
    spring: {
      zh: ['防雨夹克', '抓绒衫', '防水鞋', '修身牛仔裤', '轻便围巾'],
      hi: ['रेन जैकेट', 'फ्लीस', 'वॉटरप्रूफ जूते', 'स्लिम जींस', 'हल्का स्कार्फ'],
      es: ['Chubasquero', 'Forro polar', 'Calzado impermeable', 'Vaqueros slim', 'Bufanda ligera'],
      ar: ['جاكيت مطر', 'سترة صوف خفيفة', 'حذاء مقاوم للماء', 'جينز ضيق', 'وشاح خفيف'],
    },
    summer: {
      zh: ['棉质T恤', '徒步短裤', '越野跑鞋', '遮阳帽', '驱蚊喷雾'],
      hi: ['कॉटन टी', 'हाइकिंग शॉर्ट्स', 'ट्रेल शूज़', 'सन हैट', 'मच्छर भगाने वाला स्प्रे'],
      es: ['Camiseta de algodón', 'Shorts de senderismo', 'Zapatillas de trail', 'Sombrero de sol', 'Repelente'],
      ar: ['تيشيرت قطني', 'شورت مشي', 'حذاء رياضي للدروب', 'قبعة شمس', 'طارد ناموس'],
    },
    autumn: {
      zh: ['绗缝背心', '格纹衬衫', '皮靴', '粗棒针织毛衣', '羊毛袜'],
      hi: ['क्विल्टेड वेस्ट', 'फ्लैनेल शर्ट', 'लेदर बूट्स', 'चंकी निट', 'ऊनी मोज़े'],
      es: ['Chaleco acolchado', 'Camisa de franela', 'Botas de cuero', 'Jersey grueso', 'Calcetines de lana'],
      ar: ['سترة مبطنة بدون أكمام', 'قميص فلانيل', 'حذاء جلدي', 'كنزة صوف سميكة', 'جوارب صوف'],
    },
    winter: {
      zh: ['长款羽绒服', '保暖内衣', '防滑冬靴', '毛线帽', '厚手套'],
      hi: ['लंबा डाउन कोट', 'थर्मल अंडरवियर', 'ग्रिप वाले विंटर बूट्स', 'बीनी', 'मोटे दस्ताने'],
      es: ['Abrigo de plumas largo', 'Ropa térmica', 'Botas de invierno con agarre', 'Gorro', 'Guantes gruesos'],
      ar: ['معطف ريش طويل', 'ملابس داخلية حرارية', 'حذاء شتوي مانع للانزلاق', 'قبعة صوف', 'قفازات سميكة'],
    },
  },
  mexico: {
    spring: {
      zh: ['亚麻衬衫', '奇诺裤', '皮革凉鞋', '编织腰带', '墨镜'],
      hi: ['लिनन शर्ट', 'चino पैंट', 'लेदर सैंडल', 'बुनी बेल्ट', 'धूप का चश्मा'],
      es: ['Camisa de lino', 'Pantalón chino', 'Sandalias de cuero', 'Cinturón trenzado', 'Gafas de sol'],
      ar: ['قميص كتان', 'بنطال قطني', 'صندل جلدي', 'حزام مضفر', 'نظارات شمسية'],
    },
    summer: {
      zh: ['刺绣衬衫', '宽松长裤', '草编凉鞋', '草帽', '防晒霜'],
      hi: ['कढ़ाई वाली गुआयाबेरा', 'फ्लोई पैंट', 'एस्पैड्रिल', 'स्ट्रॉ हैट', 'सनस्क्रीन'],
      es: ['Guayabera bordada', 'Pantalón fluido', 'Espadrilles', 'Sombrero de paja', 'Protector solar'],
      ar: ['قميص جوايابيرا مطرز', 'بنطال واسع', 'إسبادريل', 'قبعة قش', 'واقي شمس'],
    },
    autumn: {
      zh: ['轻牛仔夹克', '彩色连衣裙', '短靴', '印花围巾', '斜挎包'],
      hi: ['हल्की डेनिम जैकेट', 'रंगीन ड्रेस', 'एंकल बूट्स', 'प्रिंटेड स्कार्फ', 'क्रॉसबॉडी बैग'],
      es: ['Chaqueta vaquera ligera', 'Vestido colorido', 'Botines', 'Bufanda estampada', 'Bolso cruzado'],
      ar: ['جاكيت دنيم خفيف', 'فستان ملون', 'حذاء قصير', 'وشاح مطبوع', 'حقيبة كتف'],
    },
    winter: {
      zh: ['羊毛披风', '高领毛衣', '修身长裤', '切尔西靴', '皮手套'],
      hi: ['ऊनी पोंचो', 'टर्टलनेक', 'स्लिम पैंट', 'चेल्सी बूट्स', 'लेदर दस्ताने'],
      es: ['Poncho de lana', 'Cuello alto', 'Pantalón slim', 'Botas Chelsea', 'Guantes de cuero'],
      ar: ['بونشو صوفي', 'كنزة برقبة عالية', 'بنطال ضيق', 'حذاء تشيلسي', 'قفازات جلدية'],
    },
  },
  brazil: {
    spring: {
      zh: ['亚麻衬衫', '修身短裤', '皮革凉鞋', '编织手链', '墨镜'],
      hi: ['लिनन शर्ट', 'टेलर्ड शॉर्ट्स', 'लेदर सैंडल', 'बीडेड ब्रेसलेट', 'धूप का चश्मा'],
      es: ['Camisa de lino', 'Shorts sastre', 'Sandalias de cuero', 'Pulsera de cuentas', 'Gafas de sol'],
      ar: ['قميص كتان', 'شورت أنيق', 'صندل جلدي', 'سوار خرز', 'نظارات شمسية'],
    },
    summer: {
      zh: ['飘逸背心', '印花沙滩裤', '人字拖', '遮阳帽', '防水包'],
      hi: ['फ्लोई टैंक टॉप', 'प्रिंटेड स्विम शॉर्ट्स', 'फ्लिप-फ्लॉप', 'सन हैट', 'ड्राई बैग'],
      es: ['Camiseta de tirantes fluida', 'Bañador estampado', 'Chanclas', 'Sombrero de sol', 'Bolsa impermeable'],
      ar: ['بلوزة بلا أكمام', 'شورت سباحة مطبوع', 'شبشب', 'قبعة شمس', 'حقيبة ضد الماء'],
    },
    autumn: {
      zh: ['轻针织开衫', '飘逸连衣裙', '平底凉鞋', '藤编包', '薄围巾'],
      hi: ['हल्का निट कार्डिगन', 'फ्लोई ड्रेस', 'फ्लैट सैंडल', 'रतन बैग', 'पतला स्कार्फ'],
      es: ['Cárdigan ligero', 'Vestido fluido', 'Sandalias planas', 'Bolso de ratán', 'Bufanda fina'],
      ar: ['كارديغان خفيف', 'فستان واسع', 'صندل مسطح', 'حقيبة راتان', 'وشاح رقيق'],
    },
    winter: {
      zh: ['牛仔夹克', '长袖上衣', '修身牛仔裤', '白色运动鞋', '薄针织帽'],
      hi: ['डेनिम जैकेट', 'लंबी बाजू का टॉप', 'स्लिम जींस', 'सफेद स्नीकर्स', 'पतली बीनी'],
      es: ['Chaqueta vaquera', 'Top de manga larga', 'Vaqueros slim', 'Zapatillas blancas', 'Gorro fino'],
      ar: ['جاكيت دنيم', 'بلوزة بأكمام طويلة', 'جينز ضيق', 'حذاء رياضي أبيض', 'قبعة رقيقة'],
    },
  },
  japan: {
    spring: {
      zh: ['米色风衣', '白T恤', '宽松长裤', '极简运动鞋', '折叠伞'],
      hi: ['बेज ट्रेंच', 'सफेद टी', 'वाइड पैंट', 'मिनिमल स्नीकर्स', 'फोल्डिंग छाता'],
      es: ['Gabardina beige', 'Camiseta blanca', 'Pantalón ancho', 'Zapatillas minimalistas', 'Paraguas plegable'],
      ar: ['ترنش بيج', 'تيشيرت أبيض', 'بنطال واسع', 'حذاء رياضي بسيط', 'مظلة قابلة للطي'],
    },
    summer: {
      zh: ['亚麻衬衫', '百慕大短裤', '帆布便鞋', '渔夫帽', '便携风扇'],
      hi: ['लिनन शर्ट', 'बरमूडा शॉर्ट्स', 'कैनवास स्लिप-ऑन', 'बकेट हैट', 'पोर्टेबल पंखा'],
      es: ['Camisa de lino', 'Bermudas', 'Alpargatas de lona', 'Gorro pescador', 'Ventilador portátil'],
      ar: ['قميص كتان', 'شورت برمودا', 'حذاء قماشي سهل الارتداء', 'قبعة باكيت', 'مروحة محمولة'],
    },
    autumn: {
      zh: ['灯芯绒衬衫', '针织背心', '深色牛仔裤', '乐福鞋', '帆布托特包'],
      hi: ['कॉर्डरॉय शर्ट', 'निट वेस्ट', 'डार्क जींस', 'लोफर्स', 'कैनवास टोट'],
      es: ['Camisa de pana', 'Chaleco de punto', 'Vaqueros oscuros', 'Mocasines', 'Tote de lona'],
      ar: ['قميص قطيفة', 'سترة محبوكة بدون أكمام', 'جينز غامق', 'حذاء لوفر', 'حقيبة قماشية'],
    },
    winter: {
      zh: ['羊毛大衣', '高领毛衣', '褶裥长裤', '皮靴', '羊绒围巾'],
      hi: ['ऊनी ओवरकोट', 'टर्टलनेक', 'प्लीटेड पैंट', 'लेदर बूट्स', 'कश्मीरी स्कार्फ'],
      es: ['Abrigo de lana', 'Cuello alto', 'Pantalón plisado', 'Botas de cuero', 'Bufanda de cachemira'],
      ar: ['معطف صوفي', 'كنزة برقبة عالية', 'بنطال بكسرات', 'حذاء جلدي', 'وشاح كشمير'],
    },
  },
  'south-korea': {
    spring: {
      zh: ['超大西装外套', '直筒牛仔裤', '厚底运动鞋', '迷你单肩包', '银饰'],
      hi: ['ओवरसाइज़्ड ब्लेज़र', 'स्ट्रेट जींस', 'चंकी स्नीकर्स', 'मिनी शोल्डर बैग', 'सिल्वर ज्वेलरी'],
      es: ['Blazer oversize', 'Vaqueros rectos', 'Zapatillas chunky', 'Mini bolso de hombro', 'Joyería de plata'],
      ar: ['بليزر واسع', 'جينز مستقيم', 'حذاء رياضي سميك', 'حقيبة كتف صغيرة', 'مجوهرات فضية'],
    },
    summer: {
      zh: ['超大印花T恤', '工装短裤', '运动凉鞋', '棒球帽', '斜挎小包'],
      hi: ['ओवरसाइज़्ड ग्राफिक टी', 'कार्गो शॉर्ट्स', 'स्पोर्टी सैंडल', 'बॉल कैप', 'क्रॉसबॉडी पाउच'],
      es: ['Camiseta gráfica oversize', 'Shorts cargo', 'Sandalias deportivas', 'Gorra', 'Riñonera cruzada'],
      ar: ['تيشيرت واسع برسومات', 'شورت كارغو', 'صندل رياضي', 'قبعة بيسبول', 'حقيبة صغيرة كروس'],
    },
    autumn: {
      zh: ['长款开衫', '百褶中裙', '乐福鞋', '贝雷帽', '链条包'],
      hi: ['लॉन्ग कार्डिगन', 'प्लीटेड मिडी स्कर्ट', 'लोफर्स', 'बेरेट', 'चेन बैग'],
      es: ['Cárdigan largo', 'Falda midi plisada', 'Mocasines', 'Boina', 'Bolso de cadena'],
      ar: ['كارديغان طويل', 'تنورة ميدي بكسرات', 'حذاء لوفر', 'قبعة بيريه', 'حقيبة بسلسلة'],
    },
    winter: {
      zh: ['长款羽绒服', '针织连衣裙', '保暖打底裤', '厚底靴', '耳罩'],
      hi: ['लंबा पफर कोट', 'निट ड्रेस', 'थर्मल लेगिंग्स', 'चंकी बूट्स', 'ईयर मफ'],
      es: ['Abrigo acolchado largo', 'Vestido de punto', 'Leggings térmicos', 'Botas chunky', 'Orejeras'],
      ar: ['معطف منتفخ طويل', 'فستان محبوك', 'ليجنز حراري', 'حذاء سميك', 'واقيات أذن'],
    },
  },
  china: {
    spring: {
      zh: ['轻薄西装外套', '真丝衬衫', '九分烟管裤', '白色运动鞋', '小丝巾'],
      hi: ['हल्का ब्लेज़र', 'सिल्क शर्ट', 'क्रॉप्ड सिगरेट पैंट', 'सफेद स्नीकर्स', 'छोटा सिल्क स्कार्फ'],
      es: ['Blazer ligero', 'Camisa de seda', 'Pantalón capri', 'Zapatillas blancas', 'Pañuelo de seda pequeño'],
      ar: ['بليزر خفيف', 'قميص حرير', 'بنطال قصير', 'حذاء رياضي أبيض', 'وشاح حرير صغير'],
    },
    summer: {
      zh: ['亚麻衬衫', '飘逸长裤', '皮革凉鞋', '草编帽', '折扇'],
      hi: ['लिनन शर्ट', 'फ्लोई पैंट', 'लेदर सैंडल', 'स्ट्रॉ हैट', 'तह करने वाला पंखा'],
      es: ['Camisa de lino', 'Pantalón fluido', 'Sandalias de cuero', 'Sombrero de paja', 'Abanico plegable'],
      ar: ['قميص كتان', 'بنطال واسع', 'صندل جلدي', 'قبعة قش', 'مروحة يدوية'],
    },
    autumn: {
      zh: ['中式立领夹克', '高领毛衣', '阔腿裤', '乐福鞋', '结构感托特包'],
      hi: ['मंदारिन कॉलर जैकेट', 'टर्टलनेक', 'वाइड लेग पैंट', 'लोफर्स', 'स्ट्रक्चर्ड टोट'],
      es: ['Chaqueta de cuello mao', 'Cuello alto', 'Pantalón palazzo', 'Mocasines', 'Tote estructurado'],
      ar: ['جاكيت بياقة صينية', 'كنزة برقبة عالية', 'بنطال واسع', 'حذاء لوفر', 'حقيبة منظمة'],
    },
    winter: {
      zh: ['绗缝羽绒服', '羊绒毛衣', '羊毛长裤', '皮靴', '针织帽'],
      hi: ['क्विल्टेड डाउन जैकेट', 'कश्मीरी स्वेटर', 'ऊनी पैंट', 'लेदर बूट्स', 'बीनी'],
      es: ['Plumífero acolchado', 'Jersey de cachemira', 'Pantalón de lana', 'Botas de cuero', 'Gorro'],
      ar: ['جاكيت ريش مبطن', 'كنزة كشمير', 'بنطال صوف', 'حذاء جلدي', 'قبعة صوف'],
    },
  },
  india: {
    spring: {
      zh: ['棉质库尔塔', '修身长裤', '刺绣平底鞋', '手镯', '棉质围巾'],
      hi: ['कॉटन कुर्ता', 'स्लिम पैंट', 'कढ़ाई वाले मोजड़ी', 'चूड़ियां', 'कॉटन दुपट्टा'],
      es: ['Kurta de algodón', 'Pantalón slim', 'Mojari bordados', 'Brazaletes', 'Dupatta de algodón'],
      ar: ['كورتا قطنية', 'بنطال ضيق', 'حذاء موجاري مطرز', 'أساور', 'دوباتا قطنية'],
    },
    summer: {
      zh: ['亚麻库尔塔', '飘逸阔腿裤', '皮革凉鞋', '太阳镜', '棉质托特包'],
      hi: ['लिनन कुर्ता', 'फ्लोई पलाज़ो', 'लेदर सैंडल', 'धूप का चश्मा', 'कॉटन टोट'],
      es: ['Kurta de lino', 'Palazzo fluido', 'Sandalias de cuero', 'Gafas de sol', 'Tote de algodón'],
      ar: ['كورتا كتان', 'بنطال بالازو واسع', 'صندل جلدي', 'نظارات شمسية', 'حقيبة قطنية'],
    },
    autumn: {
      zh: ['尼赫鲁夹克', '真丝库尔塔', '修身长裤', '皮革乐福鞋', '口袋巾'],
      hi: ['नेहरू जैकेट', 'सिल्क कुर्ता', 'स्लिम पैंट', 'लेदर लोफर्स', 'पॉकेट स्क्वायर'],
      es: ['Chaqueta Nehru', 'Kurta de seda', 'Pantalón slim', 'Mocasines de cuero', 'Pañuelo de bolsillo'],
      ar: ['جاكيت نهرو', 'كورتا حريرية', 'بنطال ضيق', 'حذاء لوفر جلدي', 'منديل جيب'],
    },
    winter: {
      zh: ['羊毛披肩', '高领毛衣', '修身牛仔裤', '切尔西靴', '皮手套'],
      hi: ['ऊनी शॉल', 'टर्टलनेक', 'स्लिम जींस', 'चेल्सी बूट्स', 'लेदर दस्ताने'],
      es: ['Chal de lana', 'Cuello alto', 'Vaqueros slim', 'Botas Chelsea', 'Guantes de cuero'],
      ar: ['شال صوفي', 'كنزة برقبة عالية', 'جينز ضيق', 'حذاء تشيلسي', 'قفازات جلدية'],
    },
  },
  australia: {
    spring: {
      zh: ['亚麻衬衫', '奇诺短裤', '白色运动鞋', '墨镜', '轻针织开衫'],
      hi: ['लिनन शर्ट', 'चino शॉर्ट्स', 'सफेद स्नीकर्स', 'धूप का चश्मा', 'हल्का निट कार्डिगन'],
      es: ['Camisa de lino', 'Shorts chinos', 'Zapatillas blancas', 'Gafas de sol', 'Cárdigan ligero'],
      ar: ['قميص كتان', 'شورت قطني', 'حذاء رياضي أبيض', 'نظارات شمسية', 'كارديغان خفيف'],
    },
    summer: {
      zh: ['透气T恤', '沙滩短裤', '人字拖', '冲浪帽', '高倍防晒霜'],
      hi: ['सांस लेने वाली टी', 'बोर्ड शॉर्ट्स', 'थॉन्ग्स', 'सर्फ कैप', 'हाई SPF सनस्क्रीन'],
      es: ['Camiseta transpirable', 'Bañador de surf', 'Chanclas', 'Gorra de surf', 'Protector solar alto'],
      ar: ['تيشيرت قطني مريح', 'شورت سباحة', 'شبشب', 'قبعة ركوب أمواج', 'واقي شمس قوي'],
    },
    autumn: {
      zh: ['美利奴毛衣', '深色牛仔裤', '切尔西靴', '轻围巾', '防雨外套'],
      hi: ['मेरिनो स्वेटर', 'डार्क जींस', 'चेल्सी बूट्स', 'हल्का स्कार्फ', 'रेन शेल'],
      es: ['Jersey de merino', 'Vaqueros oscuros', 'Botas Chelsea', 'Bufanda ligera', 'Chubasquero'],
      ar: ['كنزة ميرينو', 'جينز غامق', 'حذاء تشيلسي', 'وشاح خفيف', 'جاكيت مطر'],
    },
    winter: {
      zh: ['羊毛大衣', '针织毛衣', '修身长裤', '皮靴', '毛线帽'],
      hi: ['ऊनी कोट', 'निट स्वेटर', 'स्लिम पैंट', 'लेदर बूट्स', 'बीनी'],
      es: ['Abrigo de lana', 'Jersey de punto', 'Pantalón slim', 'Botas de cuero', 'Gorro'],
      ar: ['معطف صوفي', 'كنزة محبوكة', 'بنطال ضيق', 'حذاء جلدي', 'قبعة صوف'],
    },
  },
}
