import React from "react";
import '../assets/css/styles.css';
import logoUV from "../assets/images/logos-clima-04.png";
import logoWind from "../assets/images/logos-clima-13.png";
import logoHum from "../assets/images/logos-clima-16.png";

function Details() {


    return (
        <>
        <div className="details">
            <div className="card">
                <img src={logoUV} alt="logoUV" /> 
                <div>
                    8 alto
                </div>
            </div>
            <div className="card">
            <img src={logoWind} alt="logoUV" /> 
                <div>
                    19km/h
                </div>
            </div>
            <div className="card">
            <img src={logoHum} alt="logoUV" /> 
                <div>
                    64%
                </div>
            </div>
        </div>
        </>
    )
}

export default Details;