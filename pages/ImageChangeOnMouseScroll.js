import React, { useEffect, useState } from "react";
import ImageToggleOnMouseScroll from "../src/ImageToggleOnMouseScroll";

const ImageChangeOnMouseScroll = () =>{
    const [currentImage, setCurrentImage] = useState(null);
    useEffect(()=>{
        window.document.title = currentImage;
        console.log(`Setting document title: ${currentImage}`);
    });
    return [1,2,3,4,5].map(id => {
        return <div key={id} onMouseOver={()=>{
            setCurrentImage(id);
            console.log(`Image Id: ${id}`);
        }} >
        <ImageToggleOnMouseScroll primaryImage="/static/images/colorImage.png" secondaryImage="/static/images/blackWhite/bwImage.png" />                
    </div>
    });
}

export default ImageChangeOnMouseScroll;