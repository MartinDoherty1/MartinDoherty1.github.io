import React from "react";
import './Bottom.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Bottom() {
    return(
        <div id="BottomContainer">
            <a href="https://github.com/MartinDoherty1" id="github">
                <FontAwesomeIcon icon={faGithub} className="Icons" size={"2x"} href="https://github.com/MartinDoherty1" />
            </a>
        </div>
    )
}