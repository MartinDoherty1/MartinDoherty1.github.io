import React from "react";
import './ImageHolder.css'
import headshot from '../../Images/HeadShot.jpeg'

export default function ImageHolder(){
    return(
        <div id="imageBox">
            <div id="imageHolder">
                <img src={headshot} alt="mugshot of marty" id="imageOfMe"/>
            </div>
        </div>

    )
}