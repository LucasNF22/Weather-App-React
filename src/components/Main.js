import React from "react";
import '../assets/css/styles.css';
import icon from "../assets/images/logos-clima-04.png"

function Main() {


    return (
        <>
        <div className="main">
            <div className="title">
                Ituzaingó, 
            </div>
            <div className="title">
                Buenos Aires. 
            </div>
            <div className="subTitle">
                Vier, Ago 08 
            </div>
        </div>
        <div className="mainIcon">
            <img src={icon} alt="icono"/>           
            <div className="temp" >
                <div className="temp-num" >
                  24
                </div>
                <div className="temp-desc" >
                    Soleado
                </div>
            </div>
        </div>
        </>
    )
}

export default Main;