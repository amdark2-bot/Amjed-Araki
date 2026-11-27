export type LanguageCode = 'ar' | 'en' | 'fr' | 'es';

export type DivisionId =
  | 'all'
  | 'writing'
  | 'design'
  | 'media'
  | 'digital'
  | 'education'
  | 'advisory';

export interface LocalizedText {
  ar: string;
  en: string;
  fr: string;
  es: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  division: Exclude<DivisionId, 'all'>;
  title: LocalizedText;
  description: LocalizedText;
  deliveryMode: LocalizedText;
  deliverableScope: LocalizedText;
}

export interface DivisionMeta {
  id: Exclude<DivisionId, 'all'>;
  index: string;
  label: LocalizedText;
  shortLabel: LocalizedText;
  summary: LocalizedText;
}
