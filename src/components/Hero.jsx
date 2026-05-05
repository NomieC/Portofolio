import {motion} from 'framer-motion';

import {styles} from '../styles';
import HeroContent from './sub/HeroContent';
import Planet from './sub/Planet';

const Hero = () => {
  return (
    <div className='relative h-screen w-full' style={{ overflow: 'visible' }}>
      {/* Layer 1 (Bottom): Blackhole Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className='rotate-180 absolute top-[-250px] md:top-[-440px] left-0 w-full h-full object-cover pointer-events-none'
        style={{ zIndex: 0 }}
      >
        <source src='./blackhole.webm' type='video/webm'/>
      </video>

      {/* Layer 2 (Middle): Planet Canvas — extends below hero so planet isn't clipped */}
      <div 
        className='absolute top-0 left-0 w-full pointer-events-none'
        style={{ zIndex: 1, height: '130vh' }}
      >
        <Planet />
      </div>

      {/* Layer 3 (Top): Text Content */}
      <div className='relative h-full w-full' style={{ zIndex: 2 }}>
        <HeroContent />
      </div>
    </div>
  )
}

export default Hero