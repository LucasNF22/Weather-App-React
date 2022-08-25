import React from "react";


function Locations() {

    const locationsMenu = () => {
        document.getElementById("menu").classList.toggle("show");

        document.getElementById("container-menu").classList.toggle("view");
    }

    return (
        <>
            <div className="container-locations" id="container-menu" onClick={locationsMenu} >

            </div>
            <div className="locations" id="menu" >
                <div className="locations-title" >
                    Ciudades
                </div>

                <input type="text" name="citySearch" id="citySearch" placeholder="Introduce tu ciudad..." className="imputForm" />

                <div className="locations-subtitle" >
                    Tus ciudades
                </div>

                <div className="card-city" >
                    Morón, Buenos Aires.
                </div>
                <div className="card-city" >
                    Claromecó, Buenos Aires.
                </div>
                <div className="card-city" >
                    Valencia, España.
                </div>

            </div>
        </>
    )
}

export default Locations;