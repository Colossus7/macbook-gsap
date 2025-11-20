import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {performanceImages, performanceImgPositions} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";
import {useI18n} from "../constants/i18n-core.jsx";

// Register GSAP plugins once at module load
gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const { t } = useI18n();
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const sectionRef = useRef(null);

  // GSAP animations scoped to section
  useGSAP(() => {
    const section = sectionRef.current;
    const mm = gsap.matchMedia();

    // Text fade-in and move-up on scroll (runs on all viewports)
    const pEl = section.querySelector('.content p');
    if (pEl) {
      gsap.fromTo(
        pEl,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pEl,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    }
    //Mobile only scrubbed timeline for images
    if(isMobile) return;
    // Desktop-only scrubbed timeline for images
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Prepare and animate each image to its final position at time 0
      performanceImgPositions.forEach((pos) => {
        // Skip p5 on desktop timeline as requested
        if (pos.id === "p5") return;
        const selector = `.${pos.id}`;
        // Ensure initial state
        gsap.set(selector, { position: "absolute", opacity: 0, y: 40 });

        const toVars = { opacity: 1, y: 0, ease: "none", duration: 1 };
        if (Object.prototype.hasOwnProperty.call(pos, "left")) toVars.left = `${pos.left}%`;
        if (Object.prototype.hasOwnProperty.call(pos, "right")) toVars.right = `${pos.right}%`;
        if (Object.prototype.hasOwnProperty.call(pos, "bottom")) toVars.bottom = `${pos.bottom}%`;
        if (Object.prototype.hasOwnProperty.call(pos, "transform")) toVars.transform = pos.transform;
        tl.to(selector, toVars, 0);
      });

      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  // Ensure ScrollTriggers refresh on resize
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="performance" ref={sectionRef}>
      <h2>{t('performance.title')}</h2>

        <div className="wrapper">
          {performanceImages.map((item,index) => (
            <img
              key={index}
              src={item.src}
              className={item.id}
              alt={item.alt || `Performance Image #${index + 1}`}
            />
            )
          )}
        </div>

      <div className="content">
        <p>
          {t('performance.p1_a')}
          , {' '}<span className="text-white">
          {t('performance.p1_span')}
          </span>{' '}
          {t('performance.p1_b')}
        </p>
      </div>
    </section>
  )
}
export default Performance
