import React from 'react';

import '../../assets/css/styles.css';

import ExtHeader from '../ExtHeader';
import ExtMain from '../ExtMain';
import ExtDays from '../ExtDays';

function ExtendedPage() {
  return (
    <>
        
      <div className="main-body" id="extendedPage">
          
        
        <ExtHeader />
        <ExtMain />
        <ExtDays />

      </div>
    </>
  );
}

export default ExtendedPage;
