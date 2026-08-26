import type { Lang } from '@/types/country'
import type { Season } from './packing'

type CityList = { tr: string[]; en: string[] } & Partial<Record<'zh' | 'hi' | 'es' | 'ar', string[]>>

/** City-specific packing lists: city → season → items */
export const cityPackingData: Record<string, Record<Season, CityList>> = {
  istanbul: {
    spring: { tr: ['Trençkot', 'İnce triko', 'Loafer', 'Slim jean', 'Katlanır şemsiye'], en: ['Trench coat', 'Light knit', 'Loafers', 'Slim jeans', 'Compact umbrella'] },
    summer: { tr: ['Keten gömlek', 'Nefes alan tişört', 'Espadril', 'Chino şort', 'Güneş gözlüğü'], en: ['Linen shirt', 'Breathable tee', 'Espadrilles', 'Chino shorts', 'Sunglasses'] },
    autumn: { tr: ['Uzun hırka', 'Uzun kollu üst', 'Chelsea bot', 'Fular', 'Koyu kot'], en: ['Long cardigan', 'Long-sleeve top', 'Chelsea boots', 'Scarf', 'Dark denim'] },
    winter: { tr: ['Yün kaban', 'Kalın kazak', 'Su geçirmez bot', 'Bere', 'Şal'], en: ['Wool coat', 'Heavy sweater', 'Waterproof boots', 'Beanie', 'Shawl'] },
  },
  cappadocia: {
    spring: { tr: ['Rüzgarlık', 'Polar', 'Yürüyüş ayakkabısı', 'Jean', 'Bere'], en: ['Windbreaker', 'Fleece', 'Hiking shoes', 'Jeans', 'Beanie'] },
    summer: { tr: ['Tişört', 'Trekking şortu', 'Yürüyüş sandaleti', 'Şapka', 'Gece için hafif polar'], en: ['Tee', 'Trekking shorts', 'Hiking sandals', 'Sun hat', 'Light fleece for nights'] },
    autumn: { tr: ['Termal üst', 'Softshell ceket', 'Yürüyüş botu', 'Yün çorap', 'Hafif eldiven'], en: ['Thermal top', 'Softshell jacket', 'Hiking boots', 'Wool socks', 'Light gloves'] },
    winter: { tr: ['Termal içlik', 'Kaz tüyü mont', 'Kar botu', 'Kalın bere ve eldiven', 'Yün kazak'], en: ['Thermal base layer', 'Down jacket', 'Snow boots', 'Thick beanie & gloves', 'Wool sweater'] },
  },
  mugla: {
    spring: { tr: ['Keten gömlek', 'Chino pantolon', 'Espadril', 'Hafif hırka', 'Güneş gözlüğü'], en: ['Linen shirt', 'Chinos', 'Espadrilles', 'Light cardigan', 'Sunglasses'] },
    summer: { tr: ['Mayo', 'Keten gömlek', 'Deri sandalet', 'Hasır şapka', 'Güneş kremi'], en: ['Swimwear', 'Linen shirt', 'Leather sandals', 'Straw hat', 'Sunscreen'] },
    autumn: { tr: ['Uzun kollu tişört', 'Hafif ceket', 'Loafer', 'Jean', 'İnce şal'], en: ['Long-sleeve tee', 'Light jacket', 'Loafers', 'Jeans', 'Light scarf'] },
    winter: { tr: ['Yağmurluk', 'Triko kazak', 'Bot', 'Jean', 'Hırka'], en: ['Raincoat', 'Knit sweater', 'Boots', 'Jeans', 'Cardigan'] },
  },
  'new-york': {
    spring: { tr: ['Trençkot', 'Beyaz sneaker', 'Katmanlı üstler', 'Slim jean', 'Şemsiye'], en: ['Trench coat', 'White sneakers', 'Layered tops', 'Slim jeans', 'Umbrella'] },
    summer: { tr: ['Tişört', 'Nefes alan pantolon', 'Sneaker', 'Beyzbol şapkası', 'Güneş gözlüğü'], en: ['Tee', 'Breathable trousers', 'Sneakers', 'Baseball cap', 'Sunglasses'] },
    autumn: { tr: ['Deri ceket', 'Triko', 'Bot', 'Koyu kot', 'Bere'], en: ['Leather jacket', 'Knitwear', 'Boots', 'Dark denim', 'Beanie'] },
    winter: { tr: ['Uzun şişme mont', 'Termal içlik', 'Su geçirmez bot', 'Bere ve eldiven', 'Atkı'], en: ['Long puffer coat', 'Thermal base layer', 'Waterproof boots', 'Beanie & gloves', 'Scarf'] },
  },
  'los-angeles': {
    spring: { tr: ['Açık gömlek', 'Tişört', 'Beyaz sneaker', 'Hafif ceket', 'Güneş gözlüğü'], en: ['Open shirt', 'Tee', 'White sneakers', 'Light jacket', 'Sunglasses'] },
    summer: { tr: ['Tişört', 'Şort', 'Sandalet', 'Şapka', 'Güneş kremi'], en: ['Tee', 'Shorts', 'Sandals', 'Cap', 'Sunscreen'] },
    autumn: { tr: ['Denim ceket', 'Uzun kollu üst', 'Sneaker', 'Slim jean', 'Güneş gözlüğü'], en: ['Denim jacket', 'Long-sleeve top', 'Sneakers', 'Slim jeans', 'Sunglasses'] },
    winter: { tr: ['Hafif mont', 'Kazak', 'Jean', 'Sneaker', 'Yağmurluk'], en: ['Light coat', 'Sweater', 'Jeans', 'Sneakers', 'Rain jacket'] },
  },
  miami: {
    spring: { tr: ['Keten tişört', 'Şort', 'Sandalet', 'Güneş gözlüğü', 'Şapka'], en: ['Linen tee', 'Shorts', 'Sandals', 'Sunglasses', 'Hat'] },
    summer: { tr: ['Açık renk keten', 'Mayo', 'Terlik', 'Yağmur pançosu', 'Güneş kremi'], en: ['Light-coloured linen', 'Swimwear', 'Flip-flops', 'Rain poncho', 'Sunscreen'] },
    autumn: { tr: ['Hafif gömlek', 'Chino şort', 'Loafer', 'Güneş gözlüğü', 'İnce hırka'], en: ['Light shirt', 'Chino shorts', 'Loafers', 'Sunglasses', 'Thin cardigan'] },
    winter: { tr: ['Tişört', 'Hafif hırka', 'Chino', 'Loafer', 'Güneş gözlüğü'], en: ['Tee', 'Light cardigan', 'Chinos', 'Loafers', 'Sunglasses'] },
  },
  beijing: {
    spring: { tr: ['Rüzgarlık', 'Katmanlı üstler', 'Sneaker', 'Jean', 'Hafif atkı'], en: ['Windbreaker', 'Layered tops', 'Sneakers', 'Jeans', 'Light scarf'] },
    summer: { tr: ['Tişört', 'Nefes alan pantolon', 'Sandalet', 'Şapka', 'Güneş kremi'], en: ['Tee', 'Breathable trousers', 'Sandals', 'Hat', 'Sunscreen'] },
    autumn: { tr: ['Kazak', 'Hafif mont', 'Jean', 'Sneaker', 'Atkı'], en: ['Sweater', 'Light coat', 'Jeans', 'Sneakers', 'Scarf'] },
    winter: { tr: ['Termal içlik', 'Uzun kaz tüyü mont', 'Kalın bot', 'Bere, atkı ve eldiven', 'Yün kazak'], en: ['Thermal base layer', 'Long down coat', 'Thick boots', 'Beanie, scarf & gloves', 'Wool sweater'] },
  },
  shanghai: {
    spring: { tr: ['Hafif ceket', 'Uzun kollu üst', 'Sneaker', 'Jean', 'Şemsiye'], en: ['Light jacket', 'Long-sleeve top', 'Sneakers', 'Jeans', 'Umbrella'] },
    summer: { tr: ['Hızlı kuruyan tişört', 'Nefes alan şort', 'Sandalet', 'Şemsiye', 'Güneş kremi'], en: ['Quick-dry tee', 'Breathable shorts', 'Sandals', 'Umbrella', 'Sunscreen'] },
    autumn: { tr: ['Trençkot', 'Triko', 'Loafer', 'Koyu kot', 'İnce atkı'], en: ['Trench coat', 'Knitwear', 'Loafers', 'Dark denim', 'Light scarf'] },
    winter: { tr: ['Yün palto', 'Termal içlik', 'Bot', 'Bere', 'Kalın atkı'], en: ['Wool overcoat', 'Thermal base layer', 'Boots', 'Beanie', 'Thick scarf'] },
  },
  guangzhou: {
    spring: { tr: ['Tişört', 'Hafif ceket', 'Sneaker', 'Chino', 'Şemsiye'], en: ['Tee', 'Light jacket', 'Sneakers', 'Chinos', 'Umbrella'] },
    summer: { tr: ['Hızlı kuruyan tişört', 'Şort', 'Sandalet', 'Yağmurluk', 'Şapka'], en: ['Quick-dry tee', 'Shorts', 'Sandals', 'Raincoat', 'Hat'] },
    autumn: { tr: ['Tişört', 'Hafif gömlek', 'Chino', 'Sneaker', 'Güneş gözlüğü'], en: ['Tee', 'Light shirt', 'Chinos', 'Sneakers', 'Sunglasses'] },
    winter: { tr: ['Hafif kazak', 'Ceket', 'Jean', 'Sneaker', 'İnce atkı'], en: ['Light sweater', 'Jacket', 'Jeans', 'Sneakers', 'Thin scarf'] },
  },
  delhi: {
    spring: { tr: ['Pamuk kurta', 'Hafif pantolon', 'Sandalet', 'Pamuk şal', 'Güneş gözlüğü'], en: ['Cotton kurta', 'Light trousers', 'Sandals', 'Cotton scarf', 'Sunglasses'] },
    summer: { tr: ['Pamuk veya keten üst', 'Bol pantolon', 'Sandalet', 'Şapka', 'Güneş kremi'], en: ['Cotton or linen top', 'Loose trousers', 'Sandals', 'Hat', 'Sunscreen'] },
    autumn: { tr: ['Tişört', 'Hafif ceket', 'Chino', 'Sneaker', 'Şal'], en: ['Tee', 'Light jacket', 'Chinos', 'Sneakers', 'Scarf'] },
    winter: { tr: ['Kazak', 'Ceket', 'Jean', 'Kapalı ayakkabı', 'Şal'], en: ['Sweater', 'Jacket', 'Jeans', 'Closed shoes', 'Shawl'] },
  },
  mumbai: {
    spring: { tr: ['Pamuk tişört', 'Hafif pantolon', 'Sandalet', 'Güneş gözlüğü', 'Şapka'], en: ['Cotton tee', 'Light trousers', 'Sandals', 'Sunglasses', 'Hat'] },
    summer: { tr: ['Hızlı kuruyan üst', 'Yağmurluk', 'Su geçirmez ayakkabı', 'Şemsiye', 'Su geçirmez çanta'], en: ['Quick-dry top', 'Raincoat', 'Waterproof shoes', 'Umbrella', 'Waterproof bag'] },
    autumn: { tr: ['Tişört', 'Hafif pantolon', 'Sandalet', 'Şemsiye', 'Güneş gözlüğü'], en: ['Tee', 'Light trousers', 'Sandals', 'Umbrella', 'Sunglasses'] },
    winter: { tr: ['Tişört', 'Hafif gömlek', 'Chino', 'Sneaker', 'İnce hırka'], en: ['Tee', 'Light shirt', 'Chinos', 'Sneakers', 'Thin cardigan'] },
  },
  bangalore: {
    spring: { tr: ['Tişört', 'Hafif gömlek', 'Chino', 'Sneaker', 'Güneş gözlüğü'], en: ['Tee', 'Light shirt', 'Chinos', 'Sneakers', 'Sunglasses'] },
    summer: { tr: ['Tişört', 'Pamuk pantolon', 'Sandalet', 'Şemsiye', 'Şapka'], en: ['Tee', 'Cotton trousers', 'Sandals', 'Umbrella', 'Hat'] },
    autumn: { tr: ['Tişört', 'Hafif ceket', 'Jean', 'Sneaker', 'Şemsiye'], en: ['Tee', 'Light jacket', 'Jeans', 'Sneakers', 'Umbrella'] },
    winter: { tr: ['Tişört', 'Hafif kazak', 'Jean', 'Sneaker', 'İnce atkı'], en: ['Tee', 'Light sweater', 'Jeans', 'Sneakers', 'Thin scarf'] },
  },
  sydney: {
    spring: { tr: ['Tişört', 'Hafif ceket', 'Sneaker', 'Jean', 'Güneş gözlüğü'], en: ['Tee', 'Light jacket', 'Sneakers', 'Jeans', 'Sunglasses'] },
    summer: { tr: ['Tişört', 'Şort', 'Sandalet', 'Şapka', 'Güneş kremi'], en: ['Tee', 'Shorts', 'Sandals', 'Hat', 'Sunscreen'] },
    autumn: { tr: ['Uzun kollu üst', 'Hafif mont', 'Jean', 'Sneaker', 'Şemsiye'], en: ['Long-sleeve top', 'Light coat', 'Jeans', 'Sneakers', 'Umbrella'] },
    winter: { tr: ['Kazak', 'Ceket', 'Jean', 'Kapalı ayakkabı', 'İnce atkı'], en: ['Sweater', 'Jacket', 'Jeans', 'Closed shoes', 'Light scarf'] },
  },
  melbourne: {
    spring: { tr: ['Katmanlı üstler', 'Trençkot', 'Sneaker', 'Jean', 'Şemsiye'], en: ['Layered tops', 'Trench coat', 'Sneakers', 'Jeans', 'Umbrella'] },
    summer: { tr: ['Tişört', 'Şort', 'Sandalet', 'Şapka', 'Akşam için hırka'], en: ['Tee', 'Shorts', 'Sandals', 'Hat', 'Cardigan for evenings'] },
    autumn: { tr: ['Kazak', 'Ceket', 'Bot', 'Koyu kot', 'Atkı'], en: ['Sweater', 'Jacket', 'Boots', 'Dark denim', 'Scarf'] },
    winter: { tr: ['Yün mont', 'Triko kazak', 'Bot', 'Şemsiye', 'Bere'], en: ['Wool coat', 'Knit sweater', 'Boots', 'Umbrella', 'Beanie'] },
  },
  cairns: {
    spring: { tr: ['Tişört', 'Şort', 'Sandalet', 'Şapka', 'Güneş kremi'], en: ['Tee', 'Shorts', 'Sandals', 'Hat', 'Sunscreen'] },
    summer: { tr: ['Hızlı kuruyan üst', 'Şort', 'Sandalet', 'Yağmurluk', 'Sinek kovucu'], en: ['Quick-dry top', 'Shorts', 'Sandals', 'Raincoat', 'Insect repellent'] },
    autumn: { tr: ['Tişört', 'Hafif pantolon', 'Sandalet', 'Şemsiye', 'Güneş gözlüğü'], en: ['Tee', 'Light trousers', 'Sandals', 'Umbrella', 'Sunglasses'] },
    winter: { tr: ['Tişört', 'Hafif uzun kollu', 'Şort', 'Sneaker', 'Güneş kremi'], en: ['Tee', 'Light long-sleeve', 'Shorts', 'Sneakers', 'Sunscreen'] },
  },
  rio: {
    spring: { tr: ['Tişört', 'Şort', 'Sandalet', 'Güneş gözlüğü', 'Hafif hırka'], en: ['Tee', 'Shorts', 'Sandals', 'Sunglasses', 'Light cardigan'] },
    summer: { tr: ['Mayo', 'Tişört', 'Terlik', 'Şapka', 'Güneş kremi'], en: ['Swimwear', 'Tee', 'Flip-flops', 'Hat', 'Sunscreen'] },
    autumn: { tr: ['Tişört', 'Hafif pantolon', 'Sneaker', 'Güneş gözlüğü', 'İnce gömlek'], en: ['Tee', 'Light trousers', 'Sneakers', 'Sunglasses', 'Light shirt'] },
    winter: { tr: ['Tişört', 'Hafif gömlek', 'Jean', 'Sneaker', 'İnce hırka'], en: ['Tee', 'Light shirt', 'Jeans', 'Sneakers', 'Thin cardigan'] },
  },
  'sao-paulo': {
    spring: { tr: ['Tişört', 'Hafif ceket', 'Chino', 'Sneaker', 'Şemsiye'], en: ['Tee', 'Light jacket', 'Chinos', 'Sneakers', 'Umbrella'] },
    summer: { tr: ['Tişört', 'Şort', 'Sandalet', 'Yağmurluk', 'Güneş gözlüğü'], en: ['Tee', 'Shorts', 'Sandals', 'Raincoat', 'Sunglasses'] },
    autumn: { tr: ['Kazak', 'Ceket', 'Jean', 'Sneaker', 'İnce atkı'], en: ['Sweater', 'Jacket', 'Jeans', 'Sneakers', 'Light scarf'] },
    winter: { tr: ['Kazak', 'Mont', 'Jean', 'Bot', 'Atkı'], en: ['Sweater', 'Coat', 'Jeans', 'Boots', 'Scarf'] },
  },
  manaus: {
    spring: { tr: ['Hızlı kuruyan tişört', 'Nefes alan şort', 'Sandalet', 'Yağmurluk', 'Sinek kovucu'], en: ['Quick-dry tee', 'Breathable shorts', 'Sandals', 'Raincoat', 'Insect repellent'] },
    summer: { tr: ['Hızlı kuruyan üst', 'Nefes alan pantolon', 'Sandalet', 'Şapka', 'Sinek kovucu'], en: ['Quick-dry top', 'Breathable trousers', 'Sandals', 'Hat', 'Insect repellent'] },
    autumn: { tr: ['Hızlı kuruyan tişört', 'Şort', 'Sandalet', 'Yağmurluk', 'Sinek kovucu'], en: ['Quick-dry tee', 'Shorts', 'Sandals', 'Raincoat', 'Insect repellent'] },
    winter: { tr: ['Hızlı kuruyan tişört', 'Nefes alan pantolon', 'Spor ayakkabı', 'Yağmurluk', 'Sinek kovucu'], en: ['Quick-dry tee', 'Breathable trousers', 'Sneakers', 'Raincoat', 'Insect repellent'] },
  },
  vancouver: {
    spring: { tr: ['Su geçirmez ceket', 'Katmanlı üstler', 'Su geçirmez ayakkabı', 'Jean', 'Şemsiye'], en: ['Waterproof jacket', 'Layered tops', 'Waterproof shoes', 'Jeans', 'Umbrella'] },
    summer: { tr: ['Tişört', 'Hafif ceket', 'Sneaker', 'Şort', 'Güneş gözlüğü'], en: ['Tee', 'Light jacket', 'Sneakers', 'Shorts', 'Sunglasses'] },
    autumn: { tr: ['Yağmurluk', 'Kazak', 'Su geçirmez bot', 'Jean', 'Bere'], en: ['Raincoat', 'Sweater', 'Waterproof boots', 'Jeans', 'Beanie'] },
    winter: { tr: ['Su geçirmez mont', 'Yün kazak', 'Bot', 'Bere ve eldiven', 'Atkı'], en: ['Waterproof coat', 'Wool sweater', 'Boots', 'Beanie & gloves', 'Scarf'] },
  },
  toronto: {
    spring: { tr: ['Ceket', 'Katmanlı üstler', 'Sneaker', 'Jean', 'Şemsiye'], en: ['Jacket', 'Layered tops', 'Sneakers', 'Jeans', 'Umbrella'] },
    summer: { tr: ['Tişört', 'Şort', 'Sandalet', 'Şapka', 'Güneş kremi'], en: ['Tee', 'Shorts', 'Sandals', 'Hat', 'Sunscreen'] },
    autumn: { tr: ['Kazak', 'Mont', 'Bot', 'Koyu kot', 'Bere'], en: ['Sweater', 'Coat', 'Boots', 'Dark denim', 'Beanie'] },
    winter: { tr: ['Kalın parka', 'Termal içlik', 'Kar botu', 'Bere ve eldiven', 'Kalın atkı'], en: ['Heavy parka', 'Thermal base layer', 'Snow boots', 'Beanie & gloves', 'Thick scarf'] },
  },
  montreal: {
    spring: { tr: ['Mont', 'Katmanlı üstler', 'Bot', 'Jean', 'Atkı'], en: ['Coat', 'Layered tops', 'Boots', 'Jeans', 'Scarf'] },
    summer: { tr: ['Tişört', 'Şort', 'Sandalet', 'Şapka', 'Güneş gözlüğü'], en: ['Tee', 'Shorts', 'Sandals', 'Hat', 'Sunglasses'] },
    autumn: { tr: ['Yün mont', 'Triko', 'Bot', 'Koyu kot', 'Bere'], en: ['Wool coat', 'Knitwear', 'Boots', 'Dark denim', 'Beanie'] },
    winter: { tr: ['Ağır parka', 'Termal içlik', 'Kar botu', 'Boyunluk', 'Bere ve eldiven'], en: ['Heavy parka', 'Thermal base layer', 'Snow boots', 'Neck warmer', 'Beanie & gloves'] },
  },
}

// --- Extra languages (zh/hi/es/ar), merged at module load ---
import { cityPackingExtras1 } from './packing-cities-i18n-1'
import { cityPackingExtras2 } from './packing-cities-i18n-2'

const cityPackingExtras = { ...cityPackingExtras1, ...cityPackingExtras2 }

for (const slug of Object.keys(cityPackingExtras)) {
  const base = cityPackingData[slug]
  if (!base) continue
  for (const season of Object.keys(cityPackingExtras[slug]) as Season[]) {
    base[season] = { ...base[season], ...cityPackingExtras[slug][season] }
  }
}

/** Localized city packing list with English fallback */
export function getCityPackingList(slug: string, season: Season, lang: Lang): string[] {
  const list = cityPackingData[slug]?.[season]
  if (!list) return []
  return list[lang] ?? list.en
}
