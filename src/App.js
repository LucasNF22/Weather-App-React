import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import '../src/assets/css/styles.css';
import wallpaper from '../src/assets/images/sunny-wp.png';
import MainPage from './components/pages/MainPage';
import ExtendedPage from './components/pages/ExtendedPage';
import Locations from './components/Locations';


function App() {
  return (
    <>
      <BrowserRouter>
        <img src={wallpaper} alt="background" id="background"></img>

        <div className="wrapper" >

          <Locations/>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/ext" element={<ExtendedPage />} />
          </Routes>




        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
