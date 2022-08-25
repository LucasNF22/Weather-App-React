import React from "react";
import '../assets/css/styles.css';

import img1 from "../assets/images/logos-clima-04.png";
import img2 from "../assets/images/logos-clima-02.png";
import img3 from "../assets/images/logos-clima-03.png";
import img4 from "../assets/images/logos-clima-05.png";

function ExtDays() {


    return (
        <>
        <div className="details padding-top">
            <div className="card">
                <div className="extCard-left">
                    Domingo
                </div>
                <div className="extCard-right">
                    <div className="extCard-right-left">
                        24°
                    </div>
                    <div className="extCard-right-right">
                        <img src={img1} alt="img" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="extCard-left">
                    Lunes
                </div>
                <div className="extCard-right">
                    <div className="extCard-right-left">
                        18°
                    </div>
                    <div className="extCard-right-right">
                        <img src={img2} alt="img" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="extCard-left">
                    Martes
                </div>
                <div className="extCard-right">
                    <div className="extCard-right-left">
                        12°
                    </div>
                    <div className="extCard-right-right">
                        <img src={img3} alt="img" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="extCard-left">
                    Miércoles
                </div>
                <div className="extCard-right">
                    <div className="extCard-right-left">
                        10°
                    </div>
                    <div className="extCard-right-right">
                        <img src={img4} alt="img" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="extCard-left">
                    Jueves
                </div>
                <div className="extCard-right">
                    <div className="extCard-right-left">
                        11°
                    </div>
                    <div className="extCard-right-right">
                        <img src={img4} alt="img" />
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default ExtDays;