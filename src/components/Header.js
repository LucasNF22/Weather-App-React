import React from "react";


function Header() {
    const  locationsMenu = ()=>{
       
        document.getElementById("menu").classList.toggle("show");        
        document.getElementById("container-menu").classList.toggle("view");
        
}

    return (
        <>
        <div className="header">
            <div>
               
            </div>
            <div>
                <i className="fa-solid fa-magnifying-glass" onClick={locationsMenu}></i>
            </div>
        </div>
        </>
    )
}

export default Header;