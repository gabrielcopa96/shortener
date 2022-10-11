import { useEffect, useState } from "react"


const useWidth = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {

    
        const windowWidth = window.screen.width;
    
        console.log(windowWidth);
    
    
        if(windowWidth) {
          setWidth(windowWidth);
        }
    
      }, [])

    return {
        width
    }
}

export default useWidth