import React from 'react'
import {useMediaQuery} from "react-responsive";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { useI18n } from "../constants/i18n-core";

const Showcase = () => {

  const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
  const { t } = useI18n();

  useGSAP(() => {
    if(!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end:'bottom top',
          scrub: true,
          pin: true,
        }
      });

      timeline.to('.mask img', {
        transform: 'scale(1.1)'
      }).to('.content', {opacity: 1, y: 0, ease: 'power1.in'})
    }
  }, [isTablet])

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="MacBook Pro"/>
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            {/* Left side */}
            <h2>{t('showcase.title')}</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                {t('showcase.intro_1')}{" "}
                <span className="text-white">{t('showcase.intro_2_emph')}</span>
                {t('showcase.intro_3')}
              </p>
              <p>{t('showcase.p2')}</p>
              <p>{t('showcase.p3')}</p>
              <p>
                <a
                  href={t('showcase.learn_url')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {t('showcase.learn_text')}
                </a>
              </p>
            </div>
          </div>
          {/* Right side */}
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>{t('showcase.metrics.up_to')}</p>
              <h3>{t('showcase.metrics.faster_4x')}</h3>
              <p>{t('showcase.metrics.pro_render_than_m2')}</p>
            </div>
          </div>
          <div className="space-y-2">
            <p>{t('showcase.metrics.up_to')}</p>
            <h3>{t('showcase.metrics.faster_1_5x')}</h3>
            <p>{t('showcase.metrics.cpu_than_m2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Showcase
