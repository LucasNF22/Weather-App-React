import React from "react";
import { Link } from 'react-router-dom';

function ExtHeader() {


    return (
        <>
        <div className="header" >
            
            <div>
            <Link className="link" to="/" ><i className="fa-solid fa-angle-left"></i></Link>
            </div>
            <div className="headerTitle">
                Próximos 7 días
            </div>
            <div>
                
            </div>
        </div>
        </>
    )
}

export default ExtHeader;