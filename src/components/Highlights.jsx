import React from 'react'
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useI18n} from "../constants/i18n-core.jsx";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const {t} = useI18n();

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top center'
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <section id="highlights">
      <h2>{t('highlights.highlight_h2')}</h2>
      <h3>{t('highlights.highlight_h3')}</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop"/>
            <p>{t('highlights.highlight_p1')}</p>
          </div>
          <div>
            <img src="/sun.png" alt="sun"/>
            <p>
              {t('highlights.display.line1')} <br/>
              {t('highlights.display.line2')} <br/>
              {t('highlights.display.line3')}
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI"/>
            <p>
              {t('highlights.ai.line1')} <br/>
              <span>{t('highlights.ai.line2')}</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="battery"/>
            <p>
              {t('highlights.battery.up_to')} <br/>
              <span className="green-gradient">{' '}{t('highlights.battery.hours_highlight')}{' '}</span>
              {t('highlights.battery.tail')}<span className="text-dark-100">{t('highlights.battery.note')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Highlights
