import Blob from '@components/blob'
import './style.css'
import TextHero from '../../components/textHero'
import { useState, useEffect } from 'react';


function Test() {
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
        <div className='test'>
            <TextHero/>
            <div className='more'>sdfs</div>
        </div>
    )
}

export default Test