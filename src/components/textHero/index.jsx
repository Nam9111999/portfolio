import { useState, useEffect } from 'react';
import './style.css'

function TextHero() {
    const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className='text-hero'>
         <h2 className='text-hero__title'>Hi I'm Nam</h2>
            <div className='text-hero__inner-container' style={{clipPath:  'circle('+ scrollY * 2.5 + 'px at left center)'}} >
                <h2 className='text-hero__inner-title' >Hi I'm Nam</h2>
            </div>
          
        </div>
        
    )
}

export default TextHero