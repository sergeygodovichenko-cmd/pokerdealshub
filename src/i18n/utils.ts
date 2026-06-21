import { ui, defaultLang, locales } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) {
    return `/${lang}${path}`;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguages(currentPath: string, currentLang: string) {
  const langs = locales.filter((lang) => lang !== currentLang);
  const pathWithoutLang = currentPath.replace(`/${currentLang}`, '');

  return langs.map(lang => ({
    lang,
    path: `/${lang}${pathWithoutLang}`,
  }));
}
