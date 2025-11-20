import React from 'react'
import {footerLinks} from "../constants/index.js";
import {useI18n} from "../constants/i18n-core.jsx";

const Footers = () => {
  const {t} = useI18n();
  return (
    <footer>
      <div className="info">
        <p>
          {t('footer.fp1')}
          <img src="/logo.svg" alt="Apple Logo"/>
        </p>
      </div>

      <hr />

      <div className="links">
        <p>{t('footer.fp2')}</p>

        <ul>
          {footerLinks.map(({ label, link }, index) => (
            <li key={index}>
              <a href={t(link)}>
                {t(label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )

}

export default Footers
