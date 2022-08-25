import React from "react";
import '../assets/css/styles.css';

import img1 from '../assets/images/logos-clima-04.png'
import img2 from '../assets/images/logos-clima-02.png'
import img3 from '../assets/images/logos-clima-03.png'
import img4 from '../assets/images/logos-clima-05.png'

function HoursSlide() {


    return (
        <>

            <div className="slide">

                <div className="card-day">
                    <div>
                        12:00
                    </div>
                    <div>
                        <img src={img1} alt="img"/>
                    </div>
                    <div>
                        20°
                    </div>
                </div>
                <div className="card-day" id="active">
                    <div  >
                        Ahora
                    </div>
                    <div>
                        <img src={img1} alt="img"/>
                    </div>
                    <div>
                        20°
                    </div>
                </div>
                <div className="card-day">
                    <div>
                        14:00
                    </div>
                    <div>
                        <img src={img2} alt="img"/>
                    </div>
                    <div>
                        18°
                    </div>
                </div>
                <div className="card-day">
                    <div>
                        15:00
                    </div>
                    <div>
                        <img src={img3} alt="img"/>
                    </div>
                    <div>
                        17°
                    </div>
                </div>
                <div className="card-day">
                    <div>
                        16:00
                    </div>
                    <div>
                        <img src={img3} alt="img"/>
                    </div>
                    <div>
                        17°
                    </div>
                </div>
                <div className="card-day">
                    <div>
                        17:00
                    </div>
                    <div>
                        <img src={img4} alt="img"/>
                    </div>
                    <div>
                        15°
                    </div>
                </div>
                <div className="card-day">
                    <div>
                        18:00
                    </div>
                    <div>
                        <img src={img4} alt="img"/>
                    </div>
                    <div>
                        15°
                    </div>
                </div>
                <div className="card-day">
                    <div>
                        19:00
                    </div>
                    <div>
                        <img src={img4} alt="img"/>
                    </div>
                    <div>
                        15°
                    </div>
                </div>


            </div>
        </>
    )
}

export default HoursSlide;