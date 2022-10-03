import React from "react"
import './QuickDetails.css'
import "@fontsource/inter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function QuickDetails(){
    return(
        <div>
            <h2 id="Info">Martin Doherty</h2>
            <p id="Title">Computer Science Student</p>
            <ButtonsLinks/>
        </div>
    )
}

function ButtonsLinks(){
    return(
        <div id="buttonHolder"> 
            <a href="mailto:martindoherty101@hotmail.com">
                <button id="EmailButton"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
            </a>
            
            <a href="https://www.linkedin.com/in/martin-doherty01/">
                <button id="LinkedinButton"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button>
            </a>
            
        </div>
    )
}
