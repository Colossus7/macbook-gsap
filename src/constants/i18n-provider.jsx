// src/constants/i18n-provider.jsx

//Export React Component

import React, { useEffect, useMemo, useState } from 'react';
import { I18nContext, resources } from './i18n-core';

function getInitialLang() {
  const saved = localStorage.getItem('lang');
  return (saved === 'en' || saved === 'id') ? saved : 'en';
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    const dict = resources[lang] || resources.en;
    return (key) => key.split('.').reduce((acc, part) => acc?.[part], dict) ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}