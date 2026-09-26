import type { Lang } from '@/types/country'
import type { Season } from './packing'

export type StyleGender = 'male' | 'female'

type Items = Record<Lang, string[]>

/**
 * The gendered half of the packing advice.
 *
 * Deliberately keyed by season, not by country. The country lists already
 * carry what is specific to a place — the fabrics its markets sell, what its
 * evenings expect of a guest — and none of that changes with who is wearing
 * it. What does change is the silhouette the climate asks for, and that is a
 * function of the season. Splitting it this way keeps one editorial voice per
 * destination instead of two diverging ones, and keeps this file small enough
 * to be written properly in all six languages rather than machine-translated.
 *
 * Shown as a clearly separate group, never merged into the shared list: a
 * traveller who did not answer the question, or whose answer is neither of
 * these, sees exactly what the app always showed.
 */
export const genderedSeasonalExtras: Record<
  StyleGender,
  Record<Season, Items>
> = {
  female: {
    spring: {
      tr: [
        'İnce trençkot veya uzun hırka — katman eklemek, kalın bir mont taşımaktan kolay',
        'Diz altı etek veya geniş paça pantolon, ani rüzgâra karşı',
        'Yağmura dayanıklı, topuksuz bir bot',
        'İnce bir eşarp: hem boyun hem omuz örtüsü',
      ],
      en: [
        'A light trench or a longline cardigan — layering beats carrying a heavy coat',
        'A midi skirt or wide-leg trousers, for a wind that arrives without warning',
        'One rain-ready flat boot',
        'A fine scarf: neck warmth one hour, shoulder cover the next',
      ],
      zh: [
        '轻薄风衣或长款开衫——叠穿比带厚外套更省力',
        '中长裙或阔腿裤，应对说来就来的风',
        '一双防雨平底靴',
        '一条薄围巾：既能保暖，也能披肩',
      ],
      hi: [
        'हल्का ट्रेंच या लंबा कार्डिगन — परतें जोड़ना भारी कोट ढोने से आसान है',
        'मिडी स्कर्ट या चौड़ी मोहरी की पतलून, अचानक चलने वाली हवा के लिए',
        'बारिश में चलने लायक एक फ्लैट बूट',
        'एक बारीक स्कार्फ़: कभी गर्दन के लिए, कभी कंधों के लिए',
      ],
      es: [
        'Una gabardina ligera o un cárdigan largo: superponer pesa menos que cargar un abrigo',
        'Falda midi o pantalón ancho, para un viento que llega sin avisar',
        'Una bota plana resistente a la lluvia',
        'Un pañuelo fino: abrigo para el cuello, luego chal',
      ],
      ar: [
        'معطف خفيف أو كارديغان طويل — الطبقات أسهل من حمل معطف ثقيل',
        'تنورة متوسطة الطول أو بنطال واسع، لريح تأتي دون سابق إنذار',
        'حذاء مسطّح يتحمّل المطر',
        'وشاح رفيع: دفء للعنق تارة، وغطاء للكتفين تارة أخرى',
      ],
    },
    summer: {
      tr: [
        'Keten veya pamuk elbise — sentetik kumaş sıcakta cilde yapışır',
        'Omuzları örten hafif bir üst: ibadet yerleri ve klimalı mekânlar için',
        'Uzun yürüyüşe uygun, bantları yumuşak sandalet',
        'Geniş kenarlı şapka; gölge kremden uzun dayanır',
      ],
      en: [
        'Linen or cotton dresses — synthetics cling once the heat sets in',
        'One light top that covers the shoulders, for places of worship and cold air conditioning',
        'Sandals broken in enough for a long walk',
        'A wide-brimmed hat; shade outlasts sunscreen',
      ],
      zh: [
        '亚麻或棉质连衣裙——天一热，化纤就贴身',
        '一件能遮肩的轻薄上衣，适合宗教场所和强冷气',
        '一双磨合好、能久走的凉鞋',
        '宽檐帽；遮阳比防晒霜持久',
      ],
      hi: [
        'लिनन या सूती ड्रेस — गर्मी बढ़ते ही सिंथेटिक कपड़ा चिपकता है',
        'कंधे ढकने वाला एक हल्का टॉप, पूजा स्थलों और तेज़ एसी के लिए',
        'लंबी सैर के लायक, पहने-पहनाए सैंडल',
        'चौड़े किनारे वाली टोपी; छाया सनस्क्रीन से ज़्यादा टिकती है',
      ],
      es: [
        'Vestidos de lino o algodón: lo sintético se pega en cuanto aprieta el calor',
        'Una prenda ligera que cubra los hombros, para templos y aire acondicionado fuerte',
        'Sandalias ya domadas, aptas para caminar mucho',
        'Sombrero de ala ancha; la sombra dura más que la crema',
      ],
      ar: [
        'فساتين من الكتان أو القطن — الأقمشة الصناعية تلتصق بالجسم مع اشتداد الحر',
        'قطعة خفيفة تغطّي الكتفين، لدور العبادة وأماكن التكييف القوي',
        'صندل مُجرَّب يصلح للمشي الطويل',
        'قبعة عريضة الحواف؛ الظل يدوم أكثر من واقي الشمس',
      ],
    },
    autumn: {
      tr: [
        'Diz altı yün palto — çanta ve fotoğraf makinesiyle birlikte çalışır',
        'Kalın çorap veya külotlu çorap; akşam sıcaklığı öğleden on derece düşer',
        'Su geçirmez bilek botu',
        'Bir kazak fazladan: otel odaları mevsim başında ısıtılmaz',
      ],
      en: [
        'A knee-length wool coat — it works with a bag and a camera, a cape does not',
        'Thick socks or opaque tights; evenings drop ten degrees from the afternoon',
        'Waterproof ankle boots',
        'One sweater more than you think: rooms are rarely heated this early in the season',
      ],
      zh: [
        '及膝羊毛大衣——背包、拿相机都方便',
        '厚袜或不透明打底裤；傍晚比午后低十度',
        '防水短靴',
        '多带一件毛衣：换季初期房间往往还没供暖',
      ],
      hi: [
        'घुटनों तक का ऊनी कोट — बैग और कैमरे के साथ निभ जाता है',
        'मोटे मोज़े या गाढ़ी टाइट्स; शाम दोपहर से दस डिग्री नीचे गिरती है',
        'वाटरप्रूफ एंकल बूट',
        'सोच से एक स्वेटर ज़्यादा: मौसम की शुरुआत में कमरे गर्म नहीं होते',
      ],
      es: [
        'Un abrigo de lana hasta la rodilla: convive con el bolso y la cámara',
        'Calcetines gruesos o medias tupidas; la tarde cae diez grados al anochecer',
        'Botines impermeables',
        'Un jersey más de la cuenta: a principios de temporada no suelen calentar las habitaciones',
      ],
      ar: [
        'معطف صوفي حتى الركبة — ينسجم مع الحقيبة والكاميرا',
        'جوارب سميكة أو جوارب طويلة معتمة؛ المساء أبرد من الظهيرة بعشر درجات',
        'حذاء قصير مقاوم للماء',
        'كنزة إضافية: الغرف نادراً ما تُدفّأ في أول الموسم',
      ],
    },
    winter: {
      tr: [
        'Uzun, rüzgâr kesen bir kaban — tek parça, üç ince katmandan sıcak tutar',
        'Termal içlik: kalınlık değil, ince bir kat hacim kazandırmaz',
        'Tabanı tırtıklı, buzda tutan bot',
        'Bere, atkı, eldiven — ısının çoğu baş ve elden kaçar',
      ],
      en: [
        'A long coat that blocks wind — one good layer beats three thin ones',
        'Thermal base layers: warmth without the bulk that ruins a silhouette',
        'Boots with real grip; cobblestones ice over before pavements do',
        'Hat, scarf, gloves — most of the heat leaves through the head and hands',
      ],
      zh: [
        '能挡风的长大衣——一件好外套胜过三件薄的',
        '保暖内衣：御寒又不臃肿',
        '防滑靴；石板路结冰比人行道早',
        '帽子、围巾、手套——热量多从头和手散失',
      ],
      hi: [
        'हवा रोकने वाला लंबा कोट — एक अच्छी परत तीन पतली परतों से बेहतर है',
        'थर्मल इनरवियर: गर्माहट, बिना भारीपन के',
        'अच्छी पकड़ वाले बूट; पक्की सड़क से पहले पत्थर की गली जमती है',
        'टोपी, स्कार्फ़, दस्ताने — ज़्यादातर गर्मी सिर और हाथों से जाती है',
      ],
      es: [
        'Un abrigo largo que corte el viento: una buena capa vale por tres finas',
        'Ropa térmica interior: calor sin el volumen que estropea la silueta',
        'Botas con agarre de verdad; el adoquín se hiela antes que la acera',
        'Gorro, bufanda y guantes: el calor se va por la cabeza y las manos',
      ],
      ar: [
        'معطف طويل يصدّ الريح — طبقة جيدة واحدة تكفي عن ثلاث رقيقة',
        'ملابس داخلية حرارية: دفء دون انتفاخ يفسد القَوام',
        'حذاء بنعل يمسك الأرض؛ الحصى يتجمّد قبل الرصيف',
        'قبعة ووشاح وقفازات — معظم الحرارة تهرب من الرأس واليدين',
      ],
    },
  },
  male: {
    spring: {
      tr: [
        'Yağmur geçirmez ince ceket — katlanıp çantada yer kaplamayan cinsten',
        'İki pantolon: biri chino, biri koyu denim; ikisi de akşama kadar taşır',
        'Üstüne ceket giyilebilen ince bir kazak',
        'Islanınca form bozmayan, deri olmayan bir spor ayakkabı',
      ],
      en: [
        'A packable rain shell — the kind that folds into its own pocket',
        'Two trousers: one chino, one dark denim; both carry into the evening',
        'A thin knit that takes a jacket over it',
        'A non-leather trainer that keeps its shape when it gets wet',
      ],
      zh: [
        '可收纳的防雨外套——能折进自己口袋的那种',
        '两条裤子：一条休闲裤、一条深色牛仔；都能穿到晚上',
        '一件能套外套的薄针织衫',
        '一双淋湿也不变形的非皮质球鞋',
      ],
      hi: [
        'मोड़कर रखने लायक रेन जैकेट — जो अपनी ही जेब में समा जाए',
        'दो पतलूनें: एक चिनो, एक गहरी डेनिम; दोनों शाम तक चल जाती हैं',
        'एक पतला बुना स्वेटर जिस पर जैकेट पहनी जा सके',
        'भीगने पर आकार न खोने वाला ग़ैर-चमड़े का स्नीकर',
      ],
      es: [
        'Un cortavientos impermeable plegable, de los que caben en su propio bolsillo',
        'Dos pantalones: un chino y un vaquero oscuro; ambos llegan hasta la noche',
        'Un punto fino que admita una chaqueta encima',
        'Una zapatilla no de piel que no se deforme al mojarse',
      ],
      ar: [
        'سترة مطر قابلة للطي — من النوع الذي يُحفظ في جيبه',
        'بنطالان: واحد قطني وآخر جينز داكن؛ كلاهما يصلح حتى المساء',
        'كنزة رفيعة تحتمل سترة فوقها',
        'حذاء رياضي غير جلدي لا يفقد شكله عند البلل',
      ],
    },
    summer: {
      tr: [
        'Keten gömlek — tişörtten serin, akşam yemeğine de girer',
        'Diz üstü şort ve yanında bir kumaş pantolon: bazı mekânlar şortu almaz',
        'Terletmeyen pamuk çorap, yedekli',
        'Güneş gözlüğü ve şapka; gölge bulunan bir şey değil, taşınan bir şey',
      ],
      en: [
        'A linen shirt — cooler than a t-shirt and it still gets you into dinner',
        'Shorts plus one pair of proper trousers: some rooms will not seat shorts',
        'Cotton socks that breathe, and a spare pair',
        'Sunglasses and a hat; shade is carried, not found',
      ],
      zh: [
        '亚麻衬衫——比T恤凉快，也能出席晚餐',
        '短裤之外再带一条正装长裤：有些场合不接待短裤',
        '透气棉袜，多备一双',
        '墨镜和帽子；阴凉是带在身上的，不是碰上的',
      ],
      hi: [
        'लिनन शर्ट — टी-शर्ट से ठंडी, और डिनर में भी चल जाती है',
        'शॉर्ट्स के साथ एक ढंग की पतलून: कुछ जगहें शॉर्ट्स में नहीं बिठातीं',
        'सांस लेने वाले सूती मोज़े, एक जोड़ी अतिरिक्त',
        'धूप का चश्मा और टोपी; छाया साथ ले जाई जाती है, मिलती नहीं',
      ],
      es: [
        'Camisa de lino: más fresca que una camiseta y sirve para cenar',
        'Pantalón corto y, además, uno largo de vestir: hay sitios que no sientan bermudas',
        'Calcetines de algodón que transpiren, y un par de repuesto',
        'Gafas de sol y sombrero; la sombra se lleva encima, no se encuentra',
      ],
      ar: [
        'قميص كتّان — أبرد من التيشيرت ويصلح للعشاء أيضاً',
        'شورت ومعه بنطال رسمي: بعض الأماكن لا تستقبل الشورت',
        'جوارب قطنية تتنفّس، مع زوج احتياطي',
        'نظارة شمسية وقبعة؛ الظل يُحمل ولا يُصادَف',
      ],
    },
    autumn: {
      tr: [
        'Yün karışımlı bir ceket veya kaban — kapüşonlu mont her akşam yakışmaz',
        'Üç katman mantığı: tişört, kazak, dış giysi; gün içinde ikisini çıkarırsın',
        'Su itici deri veya nubuk bot',
        'Koyu renk bir atkı; tek parçayla kıyafeti toparlar',
      ],
      en: [
        'A wool-blend jacket or overcoat — a hooded shell is not an evening answer',
        'Think in three layers: tee, knit, outer; you will shed two by midday',
        'Water-repellent leather or nubuck boots',
        'One dark scarf; it pulls an outfit together with a single piece',
      ],
      zh: [
        '羊毛混纺夹克或大衣——连帽冲锋衣撑不起晚间场合',
        '三层思路：T恤、针织、外套；到中午会脱掉两件',
        '防泼水的皮质或牛巴戈短靴',
        '一条深色围巾；一件单品就能收住整身',
      ],
      hi: [
        'ऊन-मिश्रित जैकेट या ओवरकोट — हुड वाली विंडचीटर शाम के लिए जवाब नहीं',
        'तीन परतों में सोचें: टी-शर्ट, बुना, बाहरी; दोपहर तक दो उतर जाएँगी',
        'पानी रोकने वाले चमड़े या नुबक बूट',
        'एक गहरे रंग का स्कार्फ़; अकेला ही पूरे पहनावे को बाँध देता है',
      ],
      es: [
        'Chaqueta o abrigo de mezcla de lana: un cortavientos con capucha no vale para la noche',
        'Piensa en tres capas: camiseta, punto, exterior; a mediodía te quitas dos',
        'Botas de piel o nobuk repelentes al agua',
        'Una bufanda oscura; ella sola cohesiona el conjunto',
      ],
      ar: [
        'سترة أو معطف من مزيج الصوف — الجاكيت بقلنسوة لا يصلح للسهرة',
        'فكّر بثلاث طبقات: تيشيرت، كنزة، طبقة خارجية؛ ستخلع اثنتين عند الظهر',
        'حذاء جلدي أو نوبوك طارد للماء',
        'وشاح داكن؛ قطعة واحدة تجمع الإطلالة',
      ],
    },
    winter: {
      tr: [
        'İçi dolgulu, dışı rüzgâr kesen uzun mont',
        'Termal içlik ve yün çorap — pamuk çorap ıslanınca soğutur',
        'Kaymayan tabanlı, sıcak tutan bot',
        'Bere ve eldiven; dokunmatik ekran uyumlu olanı telefonu cepte tutar',
      ],
      en: [
        'A long insulated coat with a wind-blocking face',
        'Thermal base layer and wool socks — cotton socks chill once damp',
        'Warm boots with a sole that grips',
        'Beanie and gloves; touchscreen-friendly ones keep the phone out of bare hands',
      ],
      zh: [
        '长款保暖外套，外层要防风',
        '保暖内衣和羊毛袜——棉袜一湿就冷',
        '保暖且防滑的靴子',
        '毛线帽和手套；可触屏的那种不用脱手套掏手机',
      ],
      hi: [
        'हवा रोकने वाली बाहरी परत वाला लंबा गर्म कोट',
        'थर्मल इनरवियर और ऊनी मोज़े — सूती मोज़े गीले होकर ठंडक देते हैं',
        'गर्म और अच्छी पकड़ वाले बूट',
        'बीनी और दस्ताने; टचस्क्रीन वाले हों तो फ़ोन के लिए हाथ खोलने न पड़ें',
      ],
      es: [
        'Un abrigo largo acolchado con exterior cortaviento',
        'Camiseta térmica y calcetines de lana: el algodón enfría en cuanto se humedece',
        'Botas abrigadas con suela que agarre',
        'Gorro y guantes; los compatibles con pantalla evitan descubrirse las manos',
      ],
      ar: [
        'معطف طويل معزول بطبقة خارجية تصدّ الريح',
        'طبقة داخلية حرارية وجوارب صوفية — القطن يبرّد حين يبتلّ',
        'حذاء دافئ بنعل يمسك الأرض',
        'قبعة وقفازات؛ المناسبة للشاشة تغنيك عن كشف يديك للهاتف',
      ],
    },
  },
}

/** The extra items for one traveller, or none when the question is unanswered. */
export function genderedExtrasFor(
  gender: StyleGender | null,
  season: Season,
  lang: Lang,
): string[] {
  if (!gender) return []
  return genderedSeasonalExtras[gender][season][lang] ?? []
}
