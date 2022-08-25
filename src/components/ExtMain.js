import React from "react";
import '../assets/css/styles.css';

import icon from "../assets/images/logos-clima-02.png"
import logoUV from "../assets/images/logos-clima-uv.png";
import logoWind from "../assets/images/logos-clima-13.png";
import logoHum from "../assets/images/logos-clima-16.png";

function ExtMain() {


    return (
        <>
            <div className="ExtMain">
                <div className="ExtMain-top">
                    <div className="ExtMain-top-left">
                        <div className="ExtMain-top-left-top">
                            Mañana
                        </div>
                        <div className="ExtMain-top-left-bottom">
                            Sab, Ago 09
                        </div>
                    </div>
                    <div className="ExtMain-top-right">
                        <div className="ExtMain-top-right-left">
                            20°
                        </div>
                        <div className="ExtMain-top-right-right">
                            <img src={icon} alt="icono" />
                        </div>
                    </div>
                </div>
                <div className="ExtMain-bottom">

                    <div className="ExtMain-bottom-item" >
                        <div className="ExtMain-bottom-item-top" >
                            <img src={logoUV} alt="logoUV" />
                        </div>
                        <div className="ExtMain-bottom-item-bottom" >
                            3 Bajo
                        </div>
                    </div>
                    <div className="ExtMain-bottom-item" >
                        <div className="ExtMain-bottom-item-top" >
                            <img src={logoWind} alt="logoWind" />
                        </div>
                        <div className="ExtMain-bottom-item-bottom" >
                            10 km/h
                        </div>
                    </div>
                    <div className="ExtMain-bottom-item" >
                        <div className="ExtMain-bottom-item-top" >
                            <img src={logoHum} alt="logoHum" />
                        </div>
                        <div className="ExtMain-bottom-item-bottom" >
                            50 %
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ExtMain;