import {useRef, useEffect} from "react";
import { useI18n } from "../constants/i18n-core";

const Hero = () => {
  const videoRef = useRef();
  const { t } = useI18n();

  useEffect(() => {
  if(videoRef.current) videoRef.current.playbackRate = 1;
  }, []);

  return (
    <section id="hero">
      <div>

          <h1> MacBook Pro</h1>
          <img src="/title.png" alt="MacBook Pro"/>

      </div>
    <video src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>{t('hero.buy')}</button>

      <p>{t('hero.price')}</p>
    </section>
  )
}
export default Hero
