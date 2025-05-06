import VantaRings from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const vantaEffect = VantaRings({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xc12fcc,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="vantaBackground" />;
};

export default VantaBackground;