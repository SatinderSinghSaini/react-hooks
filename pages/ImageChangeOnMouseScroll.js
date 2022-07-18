import React from "react";
import ImageToggleOnMouseScroll from "../src/ImageToggleOnMouseScroll";

const ImageChangeOnMouseScroll = () =>{
    return [1,2,3,4,5].map(id => {
        return <div key={id} >
        <ImageToggleOnMouseScroll primaryImage="/static/images/colorImage.png" secondaryImage="/static/images/blackWhite/bwImage.png" />                
    </div>
    });
}

export default ImageChangeOnMouseScroll;