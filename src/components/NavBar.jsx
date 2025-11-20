import React from 'react'
import { navLinks } from '../constants'
import {useI18n} from "../constants/i18n-core.jsx";

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();
  const next = lang === 'en' ? 'id' : 'en';
  const label = lang === 'en' ? 'EN' : 'ID';
  return (
    <button
      className="lang-toggle"
      aria-label="Change language"
      title="Change language"
      onClick={() => setLang(next)}
    >
      {label}
    </button>
  );
};


const NavBar = () => {
  const { t } = useI18n();
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo"/>

        <ul>
          {navLinks.map(({label}) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button aria-label={t('nav.search')} title={t('nav.search')}>
            <img src="/search.svg" alt="Search"/>
          </button>
          <button aria-label={t('nav.cart')} title={t('nav.cart')}>
            <img src="/cart.svg" alt="Cart"/>
          </button>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  )
}
export default NavBar
