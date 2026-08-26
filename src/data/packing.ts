import type { Lang } from '@/types/country'

export type Season = 'spring' | 'summer' | 'autumn' | 'winter'

type List = { tr: string[]; en: string[] } & Partial<Record<'zh' | 'hi' | 'es' | 'ar', string[]>>
export type PackingList = Record<Season, List>

export const seasonNames: Record<Season, Record<Lang, string>> = {
  spring: { tr: 'İlkbahar', en: 'Spring', zh: '春天', hi: 'वसंत', es: 'primavera', ar: 'الربيع' },
  summer: { tr: 'Yaz', en: 'Summer', zh: '夏天', hi: 'गर्मी', es: 'verano', ar: 'الصيف' },
  autumn: { tr: 'Sonbahar', en: 'Autumn', zh: '秋天', hi: 'शरद्', es: 'otoño', ar: 'الخريف' },
  winter: { tr: 'Kış', en: 'Winter', zh: '冬天', hi: 'सर्दी', es: 'invierno', ar: 'الشتاء' },
}

const southern = new Set(['australia', 'brazil', 'south-africa'])

export function seasonForMonth(month: number, slug: string): Season {
  let s: Season
  if (month === 11 || month <= 1) s = 'winter'
  else if (month <= 4) s = 'spring'
  else if (month <= 7) s = 'summer'
  else s = 'autumn'
  if (southern.has(slug)) {
    const flip: Record<Season, Season> = {
      winter: 'summer',
      summer: 'winter',
      spring: 'autumn',
      autumn: 'spring',
    }
    return flip[s]
  }
  return s
}

export const monthNames: Record<Lang, string[]> = {
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  zh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
}

export const packingData: Record<string, PackingList> = {
  turkiye: {
    spring: {
      tr: ['İnce trençkot', 'Katmanlı hırka', 'Rahat yürüyüş ayakkabısı', 'Şal / eşarp', 'Straight-fit jean'],
      en: ['Light trench coat', 'Layering cardigan', 'Comfy walking shoes', 'Shawl / scarf', 'Straight-fit jeans'],
    },
    summer: {
      tr: ['Keten gömlek', 'Nefes alan pamuklu tişört', 'Sandalet / sneaker', 'Güneş gözlüğü ve şapka', 'Akşam için ince ceket'],
      en: ['Linen shirt', 'Breathable cotton tees', 'Sandals / sneakers', 'Sunglasses and a hat', 'Light jacket for evenings'],
    },
    autumn: {
      tr: ['Orta kalınlıkta palto', 'Triko kazak', 'Bot', 'Yağmurluk', 'Koyu tonlu jean'],
      en: ['Mid-weight coat', 'Knit sweater', 'Boots', 'Raincoat', 'Dark-toned jeans'],
    },
    winter: {
      tr: ['Kalın kaşe kaban', 'Yün kazak', 'Su geçirmez bot', 'Atkı-bere-eldiven', 'Termal içlik (doğu için)'],
      en: ['Heavy wool overcoat', 'Wool sweaters', 'Waterproof boots', 'Scarf, beanie, gloves', 'Thermal base layer (for the east)'],
    },
  },
  france: {
    spring: {
      tr: ['Bej trençkot', 'Çizgili tişört', 'Balerin / loafer', 'İpek fular', 'Düz kesim pantolon'],
      en: ['Beige trench coat', 'Striped tee', 'Ballet flats / loafers', 'Silk scarf', 'Straight trousers'],
    },
    summer: {
      tr: ['Keten elbise', 'Beyaz gömlek', 'Espadril', 'Hasır çanta', 'Şık sandalet'],
      en: ['Linen dress', 'White shirt', 'Espadrilles', 'Straw bag', 'Smart sandals'],
    },
    autumn: {
      tr: ['Kaşmir triko', 'Klasik blazer', 'Deri bot', 'Koyu jean', 'Fötr şapka'],
      en: ['Cashmere knit', 'Classic blazer', 'Leather boots', 'Dark jeans', 'Felt hat'],
    },
    winter: {
      tr: ['Şık kaşe palto', 'Balıkçı yaka kazak', 'Deri eldiven', 'Kalın atkı', 'Topuksuz şık bot'],
      en: ['Elegant wool coat', 'Turtleneck sweater', 'Leather gloves', 'Chunky scarf', 'Flat smart boots'],
    },
  },
  italy: {
    spring: {
      tr: ['Hafif blazer', 'Pamuklu gömlek', 'Loafer', 'Chino pantolon', 'İnce fular'],
      en: ['Light blazer', 'Cotton shirt', 'Loafers', 'Chinos', 'Light scarf'],
    },
    summer: {
      tr: ['Keten takım / gömlek', 'Açık renk pantolon', 'Deri sandalet', 'Güneş gözlüğü', 'İnce polo'],
      en: ['Linen suit / shirt', 'Pale trousers', 'Leather sandals', 'Sunglasses', 'Fine polo'],
    },
    autumn: {
      tr: ['Deri ceket', 'İnce yün kazak', 'Chelsea bot', 'Koyu denim', 'Şık saat'],
      en: ['Leather jacket', 'Fine wool knit', 'Chelsea boots', 'Dark denim', 'Dress watch'],
    },
    winter: {
      tr: ['Terzi işi kaban', 'Kaşmir kazak', 'Deri bot', 'Yün atkı', 'Koyu flanel pantolon'],
      en: ['Tailored overcoat', 'Cashmere sweater', 'Leather boots', 'Wool scarf', 'Dark flannel trousers'],
    },
  },
  'united-kingdom': {
    spring: {
      tr: ['Trençkot', 'Katmanlı hırka', 'Su geçirmez ayakkabı', 'Şemsiye', 'Yün pantolon'],
      en: ['Trench coat', 'Layering cardigan', 'Waterproof shoes', 'Umbrella', 'Wool trousers'],
    },
    summer: {
      tr: ['Hafif ceket (akşam için)', 'Pamuklu gömlek', 'Rahat sneaker', 'İnce eşarp', 'Şort / midi etek'],
      en: ['Light jacket for evenings', 'Cotton shirt', 'Comfy sneakers', 'Light scarf', 'Shorts / midi skirt'],
    },
    autumn: {
      tr: ['Yün palto', 'Kalın triko', 'Deri bot', 'Şemsiye', 'Ekose atkı'],
      en: ['Wool coat', 'Chunky knit', 'Leather boots', 'Umbrella', 'Tartan scarf'],
    },
    winter: {
      tr: ['Kalın parka / kaşe kaban', 'Balıkçı kazağı', 'Su geçirmez bot', 'Bere ve eldiven', 'Termal çorap'],
      en: ['Heavy parka / overcoat', 'Fisherman jumper', 'Waterproof boots', 'Beanie and gloves', 'Thermal socks'],
    },
  },
  germany: {
    spring: {
      tr: ['Hafif parka', 'Basic tişörtler', 'Rahat sneaker', 'Kot ceket', 'Sırt çantası'],
      en: ['Light parka', 'Basic tees', 'Comfy sneakers', 'Denim jacket', 'Backpack'],
    },
    summer: {
      tr: ['Nefes alan tişört', 'Rahat pantolon / şort', 'Birkenstock tarzı sandalet', 'Hafif yağmurluk', 'Sneaker'],
      en: ['Breathable tees', 'Relaxed trousers / shorts', 'Birkenstock-style sandals', 'Light rain jacket', 'Sneakers'],
    },
    autumn: {
      tr: ['Teknik ceket', 'Yün kazak', 'Su geçirmez bot', 'Koyu tonlar', 'Atkı'],
      en: ['Technical jacket', 'Wool sweater', 'Waterproof boots', 'Dark tones', 'Scarf'],
    },
    winter: {
      tr: ['Kalın puffer / parka', 'Termal katmanlar', 'Kar botu', 'Bere-eldiven-atkı', 'Yün çorap'],
      en: ['Heavy puffer / parka', 'Thermal layers', 'Snow boots', 'Beanie, gloves, scarf', 'Wool socks'],
    },
  },
  spain: {
    spring: {
      tr: ['Hafif blazer', 'Keten gömlek', 'Espadril', 'Rahat chino', 'Güneş gözlüğü'],
      en: ['Light blazer', 'Linen shirt', 'Espadrilles', 'Relaxed chinos', 'Sunglasses'],
    },
    summer: {
      tr: ['İnce pamuk / keten', 'Şort ve tişört', 'Sandalet', 'Şapka', 'Akşam için ince gömlek'],
      en: ['Light cotton / linen', 'Shorts and tees', 'Sandals', 'Hat', 'Light shirt for evenings'],
    },
    autumn: {
      tr: ['İnce ceket', 'Triko', 'Deri ayakkabı', 'Jean', 'Hafif atkı'],
      en: ['Light jacket', 'Knitwear', 'Leather shoes', 'Jeans', 'Light scarf'],
    },
    winter: {
      tr: ['Orta kalınlıkta palto', 'Kazak', 'Kapalı ayakkabı / bot', 'Katmanlı içlik (iç bölgeler)', 'Şık eşarp'],
      en: ['Mid-weight coat', 'Sweaters', 'Closed shoes / boots', 'Layers for inland cold', 'Smart scarf'],
    },
  },
  norway: {
    spring: {
      tr: ['Su geçirmez ceket', 'Yün hırka', 'Katmanlı içlik', 'Yürüyüş ayakkabısı', 'İnce bere'],
      en: ['Waterproof jacket', 'Wool cardigan', 'Base layers', 'Hiking shoes', 'Light beanie'],
    },
    summer: {
      tr: ['Hafif outdoor ceket', 'Tişört + katman', 'Rahat yürüyüş ayakkabısı', 'Yağmurluk', 'Güneş gözlüğü (beyaz geceler)'],
      en: ['Light outdoor jacket', 'Tee plus layers', 'Walking shoes', 'Rain shell', 'Sunglasses for white nights'],
    },
    autumn: {
      tr: ['Rüzgar geçirmez kabuk', 'Norveç yünü kazak', 'Su geçirmez bot', 'Termal içlik', 'Eldiven'],
      en: ['Windproof shell', 'Norwegian wool sweater', 'Waterproof boots', 'Thermal base layer', 'Gloves'],
    },
    winter: {
      tr: ['Kaz tüyü parka', 'Kalın yün kazaklar', 'Termal iç takım', 'Kar botu', 'Bere, atkı, eldiven'],
      en: ['Down parka', 'Heavy wool knits', 'Thermal set', 'Snow boots', 'Beanie, scarf, gloves'],
    },
  },
  morocco: {
    spring: {
      tr: ['Akışkan uzun gömlek', 'Hafif pantolon / etek', 'Rahat sandalet', 'Omuz örtüsü', 'Güneş gözlüğü'],
      en: ['Flowy long shirt', 'Light trousers / skirt', 'Comfy sandals', 'Shoulder wrap', 'Sunglasses'],
    },
    summer: {
      tr: ['Bol keten / pamuk', 'Uzun nefes alan elbiseler', 'Sandalet', 'Şapka', 'Omuzları örten ince katman'],
      en: ['Loose linen / cotton', 'Long breathable dresses', 'Sandals', 'Hat', 'Light layer to cover shoulders'],
    },
    autumn: {
      tr: ['Hafif katmanlar', 'Kapalı rahat ayakkabı', 'Şal', 'Gündüz ince, akşam kalın parçalar', 'Rahat pantolon'],
      en: ['Light layers', 'Closed comfy shoes', 'Shawl', 'Light days, warm evenings', 'Relaxed trousers'],
    },
    winter: {
      tr: ['Orta kalınlıkta ceket', 'Triko', 'Kapalı ayakkabı', 'Şal / atkı', 'Katmanlı parçalar (geceler serin)'],
      en: ['Mid-weight jacket', 'Knitwear', 'Closed shoes', 'Shawl / scarf', 'Layers for cool nights'],
    },
  },
  nigeria: {
    spring: {
      tr: ['Nefes alan pamuk', 'Hafif gömlekler', 'Rahat sandalet', 'Güneş gözlüğü', 'Yağmur için ince katman'],
      en: ['Breathable cotton', 'Light shirts', 'Comfy sandals', 'Sunglasses', 'Light layer for rain'],
    },
    summer: {
      tr: ['Terletmeyen kumaşlar', 'Canlı renkli parçalar', 'Sandalet', 'Şapka', 'Yedek tişört (nem için)'],
      en: ['Sweat-friendly fabrics', 'Vivid pieces', 'Sandals', 'Hat', 'Spare tees for humidity'],
    },
    autumn: {
      tr: ['Hafif pamuklular', 'Rahat ayakkabı', 'İnce yağmurluk', 'Baskılı gömlek / elbise', 'Güneş kremi'],
      en: ['Light cottons', 'Comfy shoes', 'Light raincoat', 'Printed shirt / dress', 'Sunscreen'],
    },
    winter: {
      tr: ['Kuru sezon: hafif ve rahat', 'Toz için kapalı ayakkabı', 'İnce uzun kollu', 'Güneş gözlüğü', 'Hafif eşarp (harmattan)'],
      en: ['Dry season: light and easy', 'Closed shoes for dust', 'Light long sleeves', 'Sunglasses', 'Light scarf for harmattan'],
    },
  },
  'south-africa': {
    spring: {
      tr: ['Katmanlı hafif parçalar', 'Rahat pantolon', 'Sneaker', 'İnce ceket', 'Güneş gözlüğü'],
      en: ['Light layers', 'Relaxed trousers', 'Sneakers', 'Light jacket', 'Sunglasses'],
    },
    summer: {
      tr: ['Şort ve tişört', 'Yüzme kıyafeti', 'Sandalet', 'Şapka ve güneş kremi', 'Akşam için ince gömlek'],
      en: ['Shorts and tees', 'Swimwear', 'Sandals', 'Hat and sunscreen', 'Light shirt for evenings'],
    },
    autumn: {
      tr: ['Hafif katmanlar', 'Jean', 'Kapalı rahat ayakkabı', 'İnce hırka', 'Gündüz rahat parçalar'],
      en: ['Light layers', 'Jeans', 'Closed comfy shoes', 'Light cardigan', 'Easy daytime pieces'],
    },
    winter: {
      tr: ['Orta kalınlıkta ceket', 'Kazak', 'Kapalı ayakkabı', 'Katmanlı parçalar (sabah serin)', 'Eşarp'],
      en: ['Mid-weight jacket', 'Sweaters', 'Closed shoes', 'Layers for cool mornings', 'Scarf'],
    },
  },
}

packingData['united-states'] = {
  spring: {
    tr: ['Denim ceket', 'Tişörtler', 'Sneaker', 'Hafif hırka', 'Chino / jean'],
    en: ['Denim jacket', 'Tees', 'Sneakers', 'Light cardigan', 'Chinos / jeans'],
  },
  summer: {
    tr: ['Tişört ve şort', 'Rahat sneaker', 'Güneş gözlüğü', 'Klima için ince katman', 'Şapka'],
    en: ['Tees and shorts', 'Comfy sneakers', 'Sunglasses', 'Light layer for A/C', 'Cap'],
  },
  autumn: {
    tr: ['Flanel gömlek', 'Hafif ceket', 'Bot', 'Jean', 'Katmanlı tişört'],
    en: ['Flannel shirt', 'Light jacket', 'Boots', 'Jeans', 'Layering tees'],
  },
  winter: {
    tr: ['Kalın puffer (kuzey)', 'Kazak', 'Bot', 'Bere ve eldiven', 'Katmanlı içlik'],
    en: ['Heavy puffer for the north', 'Sweaters', 'Boots', 'Beanie and gloves', 'Base layers'],
  },
}

packingData.canada = {
  spring: {
    tr: ['Su geçirmez ceket', 'Katmanlı parçalar', 'Rahat bot', 'İnce kazak', 'Şemsiye'],
    en: ['Waterproof jacket', 'Layers', 'Comfy boots', 'Light sweater', 'Umbrella'],
  },
  summer: {
    tr: ['Tişört ve rahat pantolon', 'Hafif ceket (akşam)', 'Yürüyüş ayakkabısı', 'Güneş gözlüğü', 'Outdoor katmanı'],
    en: ['Tees and relaxed trousers', 'Light jacket for evenings', 'Walking shoes', 'Sunglasses', 'Outdoor layer'],
  },
  autumn: {
    tr: ['Yün kazak', 'Rüzgar geçirmez ceket', 'Bot', 'Koyu jean', 'Atkı'],
    en: ['Wool sweater', 'Windproof jacket', 'Boots', 'Dark jeans', 'Scarf'],
  },
  winter: {
    tr: ['Kaz tüyü parka', 'Termal iç takım', 'Kar botu', 'Bere, atkı, eldiven', 'Yün çoraplar'],
    en: ['Down parka', 'Thermal set', 'Snow boots', 'Beanie, scarf, gloves', 'Wool socks'],
  },
}

packingData.mexico = {
  spring: {
    tr: ['Hafif pamuklu gömlek', 'Rahat pantolon / etek', 'Sandalet', 'Şapka', 'İnce akşam katmanı'],
    en: ['Light cotton shirt', 'Relaxed trousers / skirt', 'Sandals', 'Hat', 'Light evening layer'],
  },
  summer: {
    tr: ['Nefes alan kumaşlar', 'Guayabera tarzı gömlek', 'Sandalet', 'Güneş gözlüğü', 'Yağmur için ince katman'],
    en: ['Breathable fabrics', 'Guayabera-style shirt', 'Sandals', 'Sunglasses', 'Light rain layer'],
  },
  autumn: {
    tr: ['Hafif katmanlar', 'Kapalı rahat ayakkabı', 'Renkli parçalar', 'İnce ceket', 'Şal'],
    en: ['Light layers', 'Closed comfy shoes', 'Colourful pieces', 'Light jacket', 'Shawl'],
  },
  winter: {
    tr: ['Orta kalınlıkta ceket (platoda serin)', 'Triko', 'Kapalı ayakkabı', 'Katmanlı parçalar', 'Eşarp'],
    en: ['Mid jacket for cool highlands', 'Knitwear', 'Closed shoes', 'Layers', 'Scarf'],
  },
}

packingData.brazil = {
  spring: {
    tr: ['Hafif elbiseler / şort', 'Tişörtler', 'Sandalet', 'İnce gömlek (akşam)', 'Güneş kremi'],
    en: ['Light dresses / shorts', 'Tees', 'Sandals', 'Light shirt for evenings', 'Sunscreen'],
  },
  summer: {
    tr: ['Yüzme kıyafeti', 'İnce pamuk / keten', 'Parmak arası terlik', 'Şapka ve gözlük', 'Rahat akşam parçaları'],
    en: ['Swimwear', 'Light cotton / linen', 'Flip-flops', 'Hat and shades', 'Easy evening pieces'],
  },
  autumn: {
    tr: ['Hafif katmanlar', 'Rahat pantolon', 'Sneaker', 'İnce yağmurluk', 'Tişörtler'],
    en: ['Light layers', 'Relaxed trousers', 'Sneakers', 'Light raincoat', 'Tees'],
  },
  winter: {
    tr: ['İnce ceket (güney serin)', 'Jean', 'Kapalı ayakkabı', 'Hafif kazak', 'Katmanlı parçalar'],
    en: ['Light jacket for the south', 'Jeans', 'Closed shoes', 'Light sweater', 'Layers'],
  },
}

packingData.japan = {
  spring: {
    tr: ['Hafif trenç / ceket', 'Katmanlı gömlek', 'Rahat yürüyüş ayakkabısı', 'Şık basic parçalar', 'İnce atkı'],
    en: ['Light trench / jacket', 'Layering shirts', 'Comfy walking shoes', 'Smart basics', 'Light scarf'],
  },
  summer: {
    tr: ['Nefes alan kumaşlar (nemli)', 'Hafif gömlekler', 'Rahat ayakkabı', 'Şemsiye / yağmurluk', 'Yedek tişört'],
    en: ['Breathable fabrics for humidity', 'Light shirts', 'Comfy shoes', 'Umbrella / raincoat', 'Spare tees'],
  },
  autumn: {
    tr: ['Oversize hırka', 'Hafif palto', 'Bot', 'Düz kesim pantolon', 'Katmanlı parçalar'],
    en: ['Oversized cardigan', 'Light coat', 'Boots', 'Straight trousers', 'Layers'],
  },
  winter: {
    tr: ['Şık kaban', 'Isıtıcı içlik (Heattech)', 'Kazak', 'Kapalı ayakkabı / bot', 'Atkı ve eldiven'],
    en: ['Smart coat', 'Thermal innerwear', 'Sweaters', 'Closed shoes / boots', 'Scarf and gloves'],
  },
}

packingData['south-korea'] = {
  spring: {
    tr: ['Hafif blazer / ceket', 'Ton-sür-ton basics', 'Sneaker', 'İnce hırka', 'Düz pantolon'],
    en: ['Light blazer / jacket', 'Tonal basics', 'Sneakers', 'Light cardigan', 'Straight trousers'],
  },
  summer: {
    tr: ['Oversize tişört', 'Nefes alan pantolon', 'Rahat sandalet / sneaker', 'Şapka', 'İnce gömlek katmanı'],
    en: ['Oversized tees', 'Breathable trousers', 'Sandals / sneakers', 'Cap', 'Light shirt layer'],
  },
  autumn: {
    tr: ['Trençkot', 'Triko', 'Bot', 'Koyu tonlar', 'Atkı'],
    en: ['Trench coat', 'Knitwear', 'Boots', 'Dark tones', 'Scarf'],
  },
  winter: {
    tr: ['Uzun puffer ("long padding")', 'Kalın kazak', 'Termal içlik', 'Bot', 'Bere ve eldiven'],
    en: ['Long puffer coat', 'Heavy knits', 'Thermal base layer', 'Boots', 'Beanie and gloves'],
  },
}

packingData.china = {
  spring: {
    tr: ['Hafif ceket', 'Katmanlı gömlek', 'Rahat ayakkabı', 'İnce kazak', 'Şık basic parçalar'],
    en: ['Light jacket', 'Layering shirts', 'Comfy shoes', 'Light sweater', 'Smart basics'],
  },
  summer: {
    tr: ['Nefes alan kumaşlar', 'Hafif tişört / gömlek', 'Sandalet / sneaker', 'Şemsiye (güneş + yağmur)', 'Güneş gözlüğü'],
    en: ['Breathable fabrics', 'Light tees / shirts', 'Sandals / sneakers', 'Umbrella for sun and rain', 'Sunglasses'],
  },
  autumn: {
    tr: ['İnce palto', 'Triko', 'Kapalı ayakkabı', 'Katmanlı parçalar', 'Eşarp'],
    en: ['Light coat', 'Knitwear', 'Closed shoes', 'Layers', 'Scarf'],
  },
  winter: {
    tr: ['Kalın kaban / puffer (kuzey)', 'Termal içlik', 'Kazak', 'Bot', 'Atkı-bere-eldiven'],
    en: ['Heavy coat / puffer for the north', 'Thermal base layer', 'Sweaters', 'Boots', 'Scarf, beanie, gloves'],
  },
}

packingData.india = {
  spring: {
    tr: ['Hafif pamuklular', 'Nefes alan gömlek / elbise', 'Rahat sandalet', 'Omuz örtüsü', 'Güneş gözlüğü'],
    en: ['Light cottons', 'Breathable shirts / dresses', 'Comfy sandals', 'Shoulder wrap', 'Sunglasses'],
  },
  summer: {
    tr: ['Bol pamuk / keten', 'Açık renkler', 'Sandalet', 'Şapka', 'Su şişesi ve güneş kremi'],
    en: ['Loose cotton / linen', 'Light colours', 'Sandals', 'Hat', 'Water bottle and sunscreen'],
  },
  autumn: {
    tr: ['Hafif katmanlar', 'Rahat kapalı ayakkabı', 'Şal', 'Festival için şık parça', 'Pamuklular'],
    en: ['Light layers', 'Comfy closed shoes', 'Shawl', 'One dressy piece for festivals', 'Cottons'],
  },
  winter: {
    tr: ['İnce ceket / hırka (kuzey serin)', 'Katmanlı parçalar', 'Kapalı ayakkabı', 'Şal', 'Hafif kazak'],
    en: ['Light jacket / cardigan for the north', 'Layers', 'Closed shoes', 'Shawl', 'Light sweater'],
  },
}

packingData.australia = {
  spring: {
    tr: ['Hafif katmanlar', 'Rahat pantolon / şort', 'Sneaker', 'İnce ceket', 'Güneş gözlüğü'],
    en: ['Light layers', 'Relaxed trousers / shorts', 'Sneakers', 'Light jacket', 'Sunglasses'],
  },
  summer: {
    tr: ['Keten / pamuk', 'Yüzme kıyafeti', 'Sandalet', 'Şapka ve yüksek SPF', 'Rahat akşam parçaları'],
    en: ['Linen / cotton', 'Swimwear', 'Sandals', 'Hat and high SPF', 'Easy evening pieces'],
  },
  autumn: {
    tr: ['İnce kazak', 'Jean', 'Kapalı rahat ayakkabı', 'Hafif ceket', 'Katmanlı tişört'],
    en: ['Light sweater', 'Jeans', 'Closed comfy shoes', 'Light jacket', 'Layering tees'],
  },
  winter: {
    tr: ['Orta kalınlıkta ceket', 'Triko', 'Bot / kapalı ayakkabı', 'Katmanlı parçalar', 'Eşarp (güney için)'],
    en: ['Mid-weight jacket', 'Knitwear', 'Boots / closed shoes', 'Layers', 'Scarf for the south'],
  },
}

// --- Extra languages (zh/hi/es/ar), merged at module load ---
import { packingExtras1 } from './packing-i18n-1'
import { packingExtras2 } from './packing-i18n-2'

const packingExtras = { ...packingExtras1, ...packingExtras2 }

for (const slug of Object.keys(packingExtras)) {
  const base = packingData[slug]
  if (!base) continue
  for (const season of Object.keys(packingExtras[slug]) as Season[]) {
    base[season] = { ...base[season], ...packingExtras[slug][season] }
  }
}

/** Localized packing list with English fallback */
export function getPackingList(slug: string, season: Season, lang: Lang): string[] {
  const list = packingData[slug]?.[season]
  if (!list) return []
  return list[lang] ?? list.en
}
