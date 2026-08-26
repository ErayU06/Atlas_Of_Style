import type { Season } from './packing'

type ExtraList = Record<'zh' | 'hi' | 'es' | 'ar', string[]>

export const packingExtras1: Record<string, Record<Season, ExtraList>> = {
  turkiye: {
    spring: {
      zh: ['轻薄风衣', '叠穿开衫', '舒适步行鞋', '披肩 / 围巾', '直筒牛仔裤'],
      hi: ['हल्का ट्रेंच कोट', 'लेयरिंग कार्डिगन', 'आरामदायक जूते', 'शॉल / स्कार्फ', 'स्ट्रेट जीन्स'],
      es: ['Gabardina ligera', 'Cárdigan de capas', 'Calzado cómodo', 'Chal / bufanda', 'Vaqueros rectos'],
      ar: ['معطف ترنش خفيف', 'كارديغان للطبقات', 'حذاء مشي مريح', 'شال / وشاح', 'جينز مستقيم'],
    },
    summer: {
      zh: ['亚麻衬衫', '透气棉T恤', '凉鞋 / 球鞋', '墨镜和帽子', '晚间薄外套'],
      hi: ['लिनन शर्ट', 'साँस लेने वाली टी', 'सैंडल / स्नीकर', 'धूप का चश्मा और टोपी', 'शाम के लिए हल्की जैकेट'],
      es: ['Camisa de lino', 'Camisetas de algodón', 'Sandalias / deportivas', 'Gafas de sol y sombrero', 'Chaqueta ligera de noche'],
      ar: ['قميص كتان', 'تيشيرتات قطنية', 'صنادل / سنيكرز', 'نظارة شمس وقبعة', 'سترة خفيفة للمساء'],
    },
    autumn: {
      zh: ['中厚大衣', '针织毛衣', '靴子', '雨衣', '深色牛仔裤'],
      hi: ['मीडियम कोट', 'बुना स्वेटर', 'बूट', 'रेनकोट', 'गहरी जीन्स'],
      es: ['Abrigo medio', 'Jersey de punto', 'Botas', 'Impermeable', 'Vaqueros oscuros'],
      ar: ['معطف متوسط السماكة', 'سترة تريكو', 'بوت', 'معطف مطر', 'جينز داكن'],
    },
    winter: {
      zh: ['厚呢大衣', '羊毛毛衣', '防水靴', '围巾帽子手套', '保暖内衣（东部用）'],
      hi: ['मोटा ऊनी कोट', 'ऊनी स्वेटर', 'वॉटरप्रूफ़ बूट', 'स्कार्फ-टोपी-दस्ताने', 'थर्मल इनर (पूर्व के लिए)'],
      es: ['Abrigo de lana grueso', 'Jerséis de lana', 'Botas impermeables', 'Bufanda, gorro, guantes', 'Capa térmica (para el este)'],
      ar: ['معطف صوف سميك', 'سترات صوفية', 'بوت مقاوم للماء', 'وشاح وقبعة وقفازات', 'طبقة حرارية (للشرق)'],
    },
  },
  france: {
    spring: {
      zh: ['米色风衣', '条纹T恤', '芭蕾鞋 / 乐福鞋', '丝巾', '直筒长裤'],
      hi: ['बेज ट्रेंच कोट', 'धारीदार टी', 'बैले फ्लैट / लोफ़र', 'रेशमी स्कार्फ', 'सीधी पैंट'],
      es: ['Gabardina beige', 'Camiseta de rayas', 'Bailarinas / mocasines', 'Pañuelo de seda', 'Pantalón recto'],
      ar: ['ترنش بيج', 'تيشيرت مخطط', 'فلات / لوفرز', 'وشاح حرير', 'بنطال مستقيم'],
    },
    summer: {
      zh: ['亚麻连衣裙', '白衬衫', '草编鞋', '草编包', '优雅凉鞋'],
      hi: ['लिनन ड्रेस', 'सफ़ेद शर्ट', 'एस्पैड्रिल', 'स्ट्रॉ बैग', 'स्मार्ट सैंडल'],
      es: ['Vestido de lino', 'Camisa blanca', 'Alpargatas', 'Bolso de paja', 'Sandalias elegantes'],
      ar: ['فستان كتان', 'قميص أبيض', 'إسبادريل', 'حقيبة قش', 'صنادل أنيقة'],
    },
    autumn: {
      zh: ['羊绒针织', '经典西装外套', '皮靴', '深色牛仔裤', '呢帽'],
      hi: ['कश्मीरी निट', 'क्लासिक ब्लेज़र', 'लेदर बूट', 'गहरी जीन्स', 'फेल्ट हैट'],
      es: ['Punto de cachemira', 'Blazer clásico', 'Botas de cuero', 'Vaqueros oscuros', 'Sombrero de fieltro'],
      ar: ['تريكو كشمير', 'بليزر كلاسيكي', 'بوت جلدي', 'جينز داكن', 'قبعة لباد'],
    },
    winter: {
      zh: ['优雅呢大衣', '高领毛衣', '皮手套', '厚围巾', '平底靴'],
      hi: ['शानदार ऊनी कोट', 'टर्टलनेक स्वेटर', 'लेदर दस्ताने', 'मोटा स्कार्फ', 'फ्लैट बूट'],
      es: ['Abrigo de lana elegante', 'Jersey de cuello alto', 'Guantes de cuero', 'Bufanda gruesa', 'Botas planas'],
      ar: ['معطف صوف أنيق', 'سترة بياقة عالية', 'قفازات جلدية', 'وشاح سميك', 'بوت مسطح'],
    },
  },
  italy: {
    spring: {
      zh: ['轻薄西装外套', '棉衬衫', '乐福鞋', '卡其裤', '薄围巾'],
      hi: ['हल्का ब्लेज़र', 'सूती शर्ट', 'लोफ़र', 'चिनो पैंट', 'हल्का स्कार्फ'],
      es: ['Blazer ligero', 'Camisa de algodón', 'Mocasines', 'Chinos', 'Bufanda ligera'],
      ar: ['بليزر خفيف', 'قميص قطن', 'لوفرز', 'تشينو', 'وشاح خفيف'],
    },
    summer: {
      zh: ['亚麻套装 / 衬衫', '浅色长裤', '皮凉鞋', '墨镜', '精致Polo衫'],
      hi: ['लिनन सूट / शर्ट', 'हल्की पैंट', 'लेदर सैंडल', 'धूप का चश्मा', 'फाइन पोलो'],
      es: ['Traje / camisa de lino', 'Pantalón claro', 'Sandalias de cuero', 'Gafas de sol', 'Polo fino'],
      ar: ['بدلة / قميص كتان', 'بنطال فاتح', 'صنادل جلدية', 'نظارة شمس', 'بولو ناعم'],
    },
    autumn: {
      zh: ['皮夹克', '细羊毛针织', '切尔西靴', '深色丹宁', '正装表'],
      hi: ['लेदर जैकेट', 'फाइन ऊनी निट', 'चेल्सी बूट', 'गहरी डेनिम', 'ड्रेस वॉच'],
      es: ['Cazadora de cuero', 'Punto de lana fina', 'Botas Chelsea', 'Denim oscuro', 'Reloj elegante'],
      ar: ['جاكيت جلد', 'تريكو صوف ناعم', 'بوت تشيلسي', 'دنيم داكن', 'ساعة أنيقة'],
    },
    winter: {
      zh: ['定制大衣', '羊绒毛衣', '皮靴', '羊毛围巾', '深色法兰绒裤'],
      hi: ['टेलर्ड ओवरकोट', 'कश्मीरी स्वेटर', 'लेदर बूट', 'ऊनी स्कार्फ', 'गहरी फलानेल पैंट'],
      es: ['Abrigo de sastre', 'Jersey de cachemira', 'Botas de cuero', 'Bufanda de lana', 'Pantalón de franela oscuro'],
      ar: ['معطف خياطة راقية', 'سترة كشمير', 'بوت جلدي', 'وشاح صوف', 'بنطال فلانيل داكن'],
    },
  },
  'united-kingdom': {
    spring: {
      zh: ['风衣', '叠穿开衫', '防水鞋', '雨伞', '羊毛长裤'],
      hi: ['ट्रेंच कोट', 'लेयरिंग कार्डिगन', 'वॉटरप्रूफ़ जूते', 'छाता', 'ऊनी पैंट'],
      es: ['Gabardina', 'Cárdigan de capas', 'Calzado impermeable', 'Paraguas', 'Pantalón de lana'],
      ar: ['معطف ترنش', 'كارديغان للطبقات', 'حذاء مقاوم للماء', 'مظلة', 'بنطال صوف'],
    },
    summer: {
      zh: ['轻薄外套（晚间）', '棉衬衫', '舒适球鞋', '薄围巾', '短裤 / 中长裙'],
      hi: ['हल्की जैकेट (शाम)', 'सूती शर्ट', 'आरामदायक स्नीकर', 'हल्का स्कार्फ', 'शॉर्ट्स / मिडी स्कर्ट'],
      es: ['Chaqueta ligera (noche)', 'Camisa de algodón', 'Deportivas cómodas', 'Bufanda ligera', 'Shorts / falda midi'],
      ar: ['سترة خفيفة للمساء', 'قميص قطن', 'سنيكرز مريح', 'وشاح خفيف', 'شورت / تنورة ميدي'],
    },
    autumn: {
      zh: ['羊毛大衣', '粗针织', '皮靴', '雨伞', '格纹围巾'],
      hi: ['ऊनी कोट', 'चंकी निट', 'लेदर बूट', 'छाता', 'टार्टन स्कार्फ'],
      es: ['Abrigo de lana', 'Punto grueso', 'Botas de cuero', 'Paraguas', 'Bufanda de tartán'],
      ar: ['معطف صوف', 'تريكو سميك', 'بوت جلدي', 'مظلة', 'وشاح ترتان'],
    },
    winter: {
      zh: ['厚派克 / 大衣', '渔夫毛衣', '防水靴', '帽子手套', '保暖袜'],
      hi: ['मोटा पार्का / ओवरकोट', 'फिशरमैन जंपर', 'वॉटरप्रूफ़ बूट', 'टोपी और दस्ताने', 'थर्मल मोज़े'],
      es: ['Parka gruesa / abrigo', 'Jersey de pescador', 'Botas impermeables', 'Gorro y guantes', 'Calcetines térmicos'],
      ar: ['باركا سميكة / معطف', 'سترة صياد', 'بوت مقاوم للماء', 'قبعة وقفازات', 'جوارب حرارية'],
    },
  },
  germany: {
    spring: {
      zh: ['轻薄派克', '基础T恤', '舒适球鞋', '牛仔夹克', '双肩包'],
      hi: ['हल्का पार्का', 'बेसिक टी', 'आरामदायक स्नीकर', 'डेनिम जैकेट', 'बैकपैक'],
      es: ['Parka ligera', 'Camisetas básicas', 'Deportivas cómodas', 'Cazadora vaquera', 'Mochila'],
      ar: ['باركا خفيفة', 'تيشيرتات أساسية', 'سنيكرز مريح', 'جاكيت دنيم', 'حقيبة ظهر'],
    },
    summer: {
      zh: ['透气T恤', '宽松长裤 / 短裤', '勃肯风凉鞋', '轻雨衣', '球鞋'],
      hi: ['साँस लेने वाली टी', 'ढीली पैंट / शॉर्ट्स', 'बिर्केनस्टॉक स्टाइल सैंडल', 'हल्की रेन जैकेट', 'स्नीकर'],
      es: ['Camisetas transpirables', 'Pantalón relajado / shorts', 'Sandalias tipo Birkenstock', 'Chubasquero ligero', 'Deportivas'],
      ar: ['تيشيرتات متنفسة', 'بنطال مريح / شورت', 'صنادل بيركنستوك', 'معطف مطر خفيف', 'سنيكرز'],
    },
    autumn: {
      zh: ['机能夹克', '羊毛毛衣', '防水靴', '深色调', '围巾'],
      hi: ['टेक्निकल जैकेट', 'ऊनी स्वेटर', 'वॉटरप्रूफ़ बूट', 'गहरे टोन', 'स्कार्फ'],
      es: ['Chaqueta técnica', 'Jersey de lana', 'Botas impermeables', 'Tonos oscuros', 'Bufanda'],
      ar: ['جاكيت تقني', 'سترة صوف', 'بوت مقاوم للماء', 'درجات داكنة', 'وشاح'],
    },
    winter: {
      zh: ['厚羽绒 / 派克', '保暖层次', '雪地靴', '帽子手套围巾', '羊毛袜'],
      hi: ['मोटा पफ़र / पार्का', 'थर्मल परतें', 'स्नो बूट', 'टोपी-दस्ताने-स्कार्फ', 'ऊनी मोज़े'],
      es: ['Puffer grueso / parka', 'Capas térmicas', 'Botas de nieve', 'Gorro, guantes, bufanda', 'Calcetines de lana'],
      ar: ['جاكيت منتفخ / باركا', 'طبقات حرارية', 'بوت ثلج', 'قبعة وقفازات ووشاح', 'جوارب صوف'],
    },
  },
  spain: {
    spring: {
      zh: ['轻薄西装外套', '亚麻衬衫', '草编鞋', '宽松卡其裤', '墨镜'],
      hi: ['हल्का ब्लेज़र', 'लिनन शर्ट', 'एस्पैड्रिल', 'रिलैक्स्ड चिनो', 'धूप का चश्मा'],
      es: ['Blazer ligero', 'Camisa de lino', 'Alpargatas', 'Chinos relajados', 'Gafas de sol'],
      ar: ['بليزر خفيف', 'قميص كتان', 'إسبادريل', 'تشينو مريح', 'نظارة شمس'],
    },
    summer: {
      zh: ['薄棉 / 亚麻', '短裤和T恤', '凉鞋', '帽子', '晚间薄衬衫'],
      hi: ['हल्का सूती / लिनन', 'शॉर्ट्स और टी', 'सैंडल', 'टोपी', 'शाम की हल्की शर्ट'],
      es: ['Algodón / lino ligero', 'Shorts y camisetas', 'Sandalias', 'Sombrero', 'Camisa ligera de noche'],
      ar: ['قطن / كتان خفيف', 'شورتات وتيشيرتات', 'صنادل', 'قبعة', 'قميص خفيف للمساء'],
    },
    autumn: {
      zh: ['轻薄夹克', '针织衫', '皮鞋', '牛仔裤', '薄围巾'],
      hi: ['हल्की जैकेट', 'निटवियर', 'लेदर जूते', 'जीन्स', 'हल्का स्कार्फ'],
      es: ['Chaqueta ligera', 'Punto', 'Zapatos de cuero', 'Vaqueros', 'Bufanda ligera'],
      ar: ['جاكيت خفيف', 'تريكو', 'حذاء جلدي', 'جينز', 'وشاح خفيف'],
    },
    winter: {
      zh: ['中厚大衣', '毛衣', '包鞋 / 靴子', '层次内搭（内陆）', '优雅围巾'],
      hi: ['मीडियम कोट', 'स्वेटर', 'बंद जूते / बूट', 'परतें (अंतर्देशीय)', 'स्मार्ट स्कार्फ'],
      es: ['Abrigo medio', 'Jerséis', 'Zapatos cerrados / botas', 'Capas para el interior', 'Bufanda elegante'],
      ar: ['معطف متوسط', 'سترات', 'حذاء مغلق / بوت', 'طبقات للداخل', 'وشاح أنيق'],
    },
  },
  norway: {
    spring: {
      zh: ['防水夹克', '羊毛开衫', '打底层次', '徒步鞋', '薄针织帽'],
      hi: ['वॉटरप्रूफ़ जैकेट', 'ऊनी कार्डिगन', 'बेस लेयर', 'हाइकिंग जूते', 'हल्की बीनी'],
      es: ['Chaqueta impermeable', 'Cárdigan de lana', 'Capas base', 'Zapatos de senderismo', 'Gorro ligero'],
      ar: ['جاكيت مقاوم للماء', 'كارديغان صوف', 'طبقات أساسية', 'حذاء مشي جبلي', 'قبعة خفيفة'],
    },
    summer: {
      zh: ['轻户外夹克', 'T恤+层次', '舒适步行鞋', '防雨外壳', '墨镜（白夜）'],
      hi: ['हल्की आउटडोर जैकेट', 'टी + परतें', 'वॉकिंग जूते', 'रेन शेल', 'धूप का चश्मा (व्हाइट नाइट्स)'],
      es: ['Chaqueta outdoor ligera', 'Camiseta + capas', 'Calzado de paseo', 'Cortavientos de lluvia', 'Gafas de sol (noches blancas)'],
      ar: ['جاكيت خارجي خفيف', 'تيشيرت + طبقات', 'حذاء مشي', 'غلاف مطر', 'نظارة شمس (ليالٍ بيضاء)'],
    },
    autumn: {
      zh: ['防风外壳', '挪威羊毛毛衣', '防水靴', '保暖打底', '手套'],
      hi: ['विंडप्रूफ़ शेल', 'नॉर्वेज़ियन ऊनी स्वेटर', 'वॉटरप्रूफ़ बूट', 'थर्मल बेस', 'दस्ताने'],
      es: ['Cortavientos', 'Jersey de lana noruego', 'Botas impermeables', 'Capa térmica', 'Guantes'],
      ar: ['غلاف مقاوم للرياح', 'سترة صوف نرويجية', 'بوت مقاوم للماء', 'طبقة حرارية', 'قفازات'],
    },
    winter: {
      zh: ['羽绒派克', '厚羊毛毛衣', '保暖内衣套装', '雪地靴', '帽子围巾手套'],
      hi: ['डाउन पार्का', 'मोटे ऊनी निट', 'थर्मल सेट', 'स्नो बूट', 'बीनी-स्कार्फ-दस्ताने'],
      es: ['Parka de plumón', 'Puntos de lana gruesos', 'Conjunto térmico', 'Botas de nieve', 'Gorro, bufanda, guantes'],
      ar: ['باركا ريش', 'سترات صوف سميكة', 'طقم حراري', 'بوت ثلج', 'قبعة ووشاح وقفازات'],
    },
  },
  morocco: {
    spring: {
      zh: ['飘逸长衬衫', '轻薄长裤 / 裙', '舒适凉鞋', '披肩', '墨镜'],
      hi: ['फ्लोई लंबी शर्ट', 'हल्की पैंट / स्कर्ट', 'आरामदायक सैंडल', 'शोल्डर रैप', 'धूप का चश्मा'],
      es: ['Camisa larga fluida', 'Pantalón / falda ligera', 'Sandalias cómodas', 'Pañuelo de hombros', 'Gafas de sol'],
      ar: ['قميص طويل انسيابي', 'بنطال / تنورة خفيفة', 'صنادل مريحة', 'غطاء كتفين', 'نظارة شمس'],
    },
    summer: {
      zh: ['宽松亚麻 / 棉', '透气长裙', '凉鞋', '帽子', '遮肩薄层'],
      hi: ['ढीला लिनन / सूती', 'लंबी साँस लेने वाली ड्रेस', 'सैंडल', 'टोपी', 'कंधे ढकने वाली परत'],
      es: ['Lino / algodón holgado', 'Vestidos largos frescos', 'Sandalias', 'Sombrero', 'Capa ligera para hombros'],
      ar: ['كتان / قطن واسع', 'فساتين طويلة متنفسة', 'صنادل', 'قبعة', 'طبقة خفيفة للكتفين'],
    },
    autumn: {
      zh: ['轻薄层次', '包脚舒适鞋', '披肩', '昼薄夜厚', '宽松长裤'],
      hi: ['हल्की परतें', 'बंद आरामदायक जूते', 'शॉल', 'दिन हल्का, शाम गर्म', 'ढीली पैंट'],
      es: ['Capas ligeras', 'Calzado cerrado cómodo', 'Chal', 'Día ligero, noche abrigada', 'Pantalón relajado'],
      ar: ['طبقات خفيفة', 'حذاء مغلق مريح', 'شال', 'نهاراً خفيف وليلاً دافئ', 'بنطال مريح'],
    },
    winter: {
      zh: ['中厚夹克', '针织衫', '包脚鞋', '披肩 / 围巾', '层次（夜凉）'],
      hi: ['मीडियम जैकेट', 'निटवियर', 'बंद जूते', 'शॉल / स्कार्फ', 'परतें (ठंडी रात)'],
      es: ['Chaqueta media', 'Punto', 'Calzado cerrado', 'Chal / bufanda', 'Capas para noches frescas'],
      ar: ['جاكيت متوسط', 'تريكو', 'حذاء مغلق', 'شال / وشاح', 'طبقات لليالٍ باردة'],
    },
  },
  nigeria: {
    spring: {
      zh: ['透气棉料', '轻薄衬衫', '舒适凉鞋', '墨镜', '防雨薄层'],
      hi: ['साँस लेने वाला सूती', 'हल्की शर्ट', 'आरामदायक सैंडल', 'धूप का चश्मा', 'बारिश की हल्की परत'],
      es: ['Algodón transpirable', 'Camisas ligeras', 'Sandalias cómodas', 'Gafas de sol', 'Capa ligera de lluvia'],
      ar: ['قطن متنفس', 'قمصان خفيفة', 'صنادل مريحة', 'نظارة شمس', 'طبقة خفيفة للمطر'],
    },
    summer: {
      zh: ['排汗面料', '亮色单品', '凉鞋', '帽子', '备用T恤（防潮）'],
      hi: ['पसीना-रोधी कपड़े', 'जीवंत पीस', 'सैंडल', 'टोपी', 'अतिरिक्त टी (नमी)'],
      es: ['Tejidos anti-sudor', 'Piezas vistosas', 'Sandalias', 'Sombrero', 'Camisetas extra (humedad)'],
      ar: ['أقمشة مضادة للعرق', 'قطع زاهية', 'صنادل', 'قبعة', 'تيشيرتات إضافية للرطوبة'],
    },
    autumn: {
      zh: ['轻薄棉料', '舒适鞋', '薄雨衣', '印花衬衫 / 裙', '防晒霜'],
      hi: ['हल्का सूती', 'आरामदायक जूते', 'हल्का रेनकोट', 'प्रिंटेड शर्ट / ड्रेस', 'सनस्क्रीन'],
      es: ['Algodones ligeros', 'Calzado cómodo', 'Impermeable ligero', 'Camisa / vestido estampado', 'Protector solar'],
      ar: ['قطنيات خفيفة', 'حذاء مريح', 'معطف مطر خفيف', 'قميص / فستان منقوش', 'واقي شمس'],
    },
    winter: {
      zh: ['旱季：轻装', '防尘包脚鞋', '薄长袖', '墨镜', '薄围巾（哈马丹风）'],
      hi: ['शुष्क ऋतु: हल्का पहनावा', 'धूल के लिए बंद जूते', 'हल्की लंबी बाँह', 'धूप का चश्मा', 'हल्का स्कार्फ (हरमातान)'],
      es: ['Estación seca: ligero y cómodo', 'Calzado cerrado para el polvo', 'Mangas largas ligeras', 'Gafas de sol', 'Bufanda ligera (harmattan)'],
      ar: ['الموسم الجاف: خفيف ومريح', 'حذاء مغلق للغبار', 'أكمام طويلة خفيفة', 'نظارة شمس', 'وشاح خفيف للهرمتان'],
    },
  },
  'south-africa': {
    spring: {
      zh: ['轻薄层次', '宽松长裤', '球鞋', '轻薄夹克', '墨镜'],
      hi: ['हल्की परतें', 'ढीली पैंट', 'स्नीकर', 'हल्की जैकेट', 'धूप का चश्मा'],
      es: ['Capas ligeras', 'Pantalón relajado', 'Deportivas', 'Chaqueta ligera', 'Gafas de sol'],
      ar: ['طبقات خفيفة', 'بنطال مريح', 'سنيكرز', 'جاكيت خفيف', 'نظارة شمس'],
    },
    summer: {
      zh: ['短裤和T恤', '泳装', '凉鞋', '帽子和防晒', '晚间薄衬衫'],
      hi: ['शॉर्ट्स और टी', 'स्विमवियर', 'सैंडल', 'टोपी और सनस्क्रीन', 'शाम की हल्की शर्ट'],
      es: ['Shorts y camisetas', 'Bañador', 'Sandalias', 'Sombrero y protector solar', 'Camisa ligera de noche'],
      ar: ['شورتات وتيشيرتات', 'ملابس سباحة', 'صنادل', 'قبعة وواقي شمس', 'قميص خفيف للمساء'],
    },
    autumn: {
      zh: ['轻薄层次', '牛仔裤', '包脚舒适鞋', '薄开衫', '日间休闲单品'],
      hi: ['हल्की परतें', 'जीन्स', 'बंद आरामदायक जूते', 'हल्का कार्डिगन', 'आसान दिन के पीस'],
      es: ['Capas ligeras', 'Vaqueros', 'Calzado cerrado cómodo', 'Cárdigan ligero', 'Piezas fáciles de día'],
      ar: ['طبقات خفيفة', 'جينز', 'حذاء مغلق مريح', 'كارديغان خفيف', 'قطع نهارية مريحة'],
    },
    winter: {
      zh: ['中厚夹克', '毛衣', '包脚鞋', '层次（晨凉）', '围巾'],
      hi: ['मीडियम जैकेट', 'स्वेटर', 'बंद जूते', 'परतें (ठंडी सुबह)', 'स्कार्फ'],
      es: ['Chaqueta media', 'Jerséis', 'Calzado cerrado', 'Capas para mañanas frescas', 'Bufanda'],
      ar: ['جاكيت متوسط', 'سترات', 'حذاء مغلق', 'طبقات لصباح بارد', 'وشاح'],
    },
  },
}
