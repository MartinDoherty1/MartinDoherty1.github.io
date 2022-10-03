import React from "react";
import './AboutInterests.css';

export default function AboutInterests() {
    return(
        <div>
            <AboutSection/>
            <InterestSection/>
        </div>
    )
}

function AboutSection(){
    return(
        <div>
            <h1 className="AboutInterestHeading">About</h1>
            <p id="AboutText">Currently in second year studying computer science @ QUB. </p>
        </div>
        
    )
}

function InterestSection(){
    return(
        <div>
            <h1 className="AboutInterestHeading">Interests</h1>
            <div id="listContainer">
                <ul className="InterestList">
                    <li>Hurling</li>
                    <li>Sailing</li>
                    <li>Programming</li>
                    <li>Reading</li>
                </ul>
            </div>
        </div>
    )
}