import { pt } from './pt';
import { en } from './en';

export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang = 'pt';

export const translations = { pt, en } as const;

export type Lang = keyof typeof translations;

/**
 * Extract the current language from the URL.
 * Example: /en/projects → "en" | /projects → "pt" (default)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 * Usage: const t = useTranslations(lang); t('nav.about')
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // fallback to the key itself if missing
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

/**
 * Build a URL for the alternate language.
 * Example: current "/projects" + target "en" → "/en/projects"
 */
export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const current = getLangFromUrl(url);
  let path = url.pathname;

  // Remove current language prefix if present
  if (current !== defaultLang) {
    path = path.replace(`/${current}`, '') || '/';
  }

  // Add target language prefix unless it's the default
  if (targetLang === defaultLang) {
    return path;
  }
  return `/${targetLang}${path === '/' ? '' : path}`;
}
