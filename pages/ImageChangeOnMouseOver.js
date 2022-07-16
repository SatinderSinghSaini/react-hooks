import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () =>{
    return <div>
                <ImageToggleOnMouseOver primaryImage="/static/images/colorImage.png" secondaryImage="/static/images/blackWhite/bwImage.png" />                
            </div>
}

export default ImageChangeOnMouseOver;