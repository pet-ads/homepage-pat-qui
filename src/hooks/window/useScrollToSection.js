import {useRef, useState } from 'react';

const useScrollToSection = () => {
  const sectionRef = useRef(null);
  const showArrow = useState(true);

  const scrollToSection = () => {
    
    sectionRef.current.scrollIntoView({ 
      
      behavior: 'smooth',
      block: 'start',  
      inline: 'nearest'
    
    });
  };

  return { showArrow, sectionRef, scrollToSection };
};

export default useScrollToSection;