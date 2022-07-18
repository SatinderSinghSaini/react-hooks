import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnMouseScroll = ({primaryImage, secondaryImage})=>{

    const [inView, setInView] = useState(false);
    
    const isInView = ()=>{
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleScroll = () =>{
        debugger;
        setInView(isInView());
    }

    useEffect(()=>{
        debugger;
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll); 
        }
    },[]);

    const imageRef = useRef(null);

    return  <div>
                <img 
                    src={inView ? primaryImage: secondaryImage} ref={imageRef}/>
            </div>
}
export default ImageToggleOnMouseScroll;