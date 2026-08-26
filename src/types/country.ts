export type Region =
  | 'europe'
  | 'asia'
  | 'north-america'
  | 'south-america'
  | 'oceania'
  | 'africa'

export type Lang = 'tr' | 'en' | 'zh' | 'hi' | 'es' | 'ar'

export const allLangs: Lang[] = ['tr', 'en', 'zh', 'hi', 'es', 'ar']

export const langNames: Record<Lang, string> = {
  tr: 'Türkçe',
  en: 'English',
  zh: '中文',
  hi: 'हिन्दी',
  es: 'Español',
  ar: 'العربية',
}

export type LocalizedText = { tr: string; en: string } & Partial<
  Record<Exclude<Lang, 'tr' | 'en'>, string>
>

/** Reads a localized text with fallback to English. */
export function pick(text: LocalizedText, lang: Lang): string {
  return text[lang] ?? text.en
}

export interface CountrySection {
  key: 'climate' | 'culture' | 'history' | 'economy' | 'trends'
  text: LocalizedText
}

export interface Country {
  slug: string
  flag: string
  region: Region
  name: LocalizedText
  tagline: LocalizedText
  intro: LocalizedText
  sections: CountrySection[]
}
