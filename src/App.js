import React from 'react';
import wallpaper from '../src/assets/images/sunny-wp.png';
import '../src/assets/css/styles.css';

import Header from './components/Header';
import Main from './components/Main';
import Details from './components/Details';
import HoursSlide from './components/HoursSlide';

function App() {
  return (
    <>
      <div className="main-body">
        <div className="wallpaper">
          <img src={wallpaper} alt="backgorund"></img>
        </div>
        
        <Header />
        <Main />
        <Details />
        <div className="extendedDiv" >
          <div>
            Hoy
          </div>
          <div>
            7 días <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <HoursSlide />
      
      </div>
    </>
  );
}

export default App;
