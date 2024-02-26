import { useState, useEffect } from "react";

function useWindowSize(){
    const [size, setSize] = useState({
        width:window.innerWidth
    });
    const handleResize = () => {
        setSize({
          width: window.innerWidth,
        });
      };
    
useEffect(() =>{

setSize({
    width:window.innerWidth
})
window.addEventListener('resize', handleResize)

return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

return size;
}

export default useWindowSize;