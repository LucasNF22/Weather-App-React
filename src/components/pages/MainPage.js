import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css';

import Header from '../Header';
import Main from '../Main';
import Details from '../Details';
import HoursSlide from '../HoursSlide';

function MainPage() {
  
  
  
  return (
    <>
        
      <div className="main-body">
          
        
        <Header />
        <Main />
        <Details />
        <div className="extendedDiv" >
          <div>
            Hoy
          </div>
          <div>
            <Link className='link' to="/ext"  > 7 días <i className="fa-solid fa-angle-right"></i> </Link>
          </div>
        </div>
        <HoursSlide />
      
      </div>
    </>
  );
}

export default MainPage;
