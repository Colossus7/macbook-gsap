//14 and 16 --> Presentation Controls

import {useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import MacBookModel16 from "../models/Macbook-16.jsx";
import MacBookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const animationDuration = 1;
const offset_distance = 10;

const fade_meshes = (group, opacity) => {
  if(!group) return;

  group.traverse((child) => {
    if(child.isMesh){
      child.material.transaparent = true;
      gsap.to(child.material, {opacity, duration : animationDuration})
    }
  })
}

const moveGroup = (group, x) => {
  if(!group) return;

  gsap.to(group.position, {x, duration : animationDuration})
}


const ModelSwitcher = ({scale, isMobile}) => {
  const scale_large_desktop = 0.08;
  const scale_large_mobile = 0.05;

  const smallMacBookref = useRef();
  const largeMacBookref = useRef();

  const showLargeMacBook = scale === scale_large_desktop || scale === scale_large_mobile;

  useGSAP(() => {
    if(showLargeMacBook) {
      moveGroup(smallMacBookref.current, -offset_distance);
      moveGroup(largeMacBookref.current, 0);

      fade_meshes(smallMacBookref.current, 0);
      fade_meshes(largeMacBookref.current, 1);
    }else {
      moveGroup(smallMacBookref.current, 0);
      moveGroup(largeMacBookref.current, offset_distance);

      fade_meshes(smallMacBookref.current, 1);
      fade_meshes(largeMacBookref.current, 0);
    }

  }, [scale])

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
   // polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: {mass:1, tension:0, friction:25},
  }

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookref}>
        <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookref}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  )
}
export default ModelSwitcher
