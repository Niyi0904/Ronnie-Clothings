import React from 'react';

import Directory from '../../components/directory/directory.component';
import BackgroundVideoSlider from '../../components/videoSlider';
import Products from '../../components/products/products';


const HomePage = () => (
  <div className='relative top-24 flex flex-col h-[100%] items-center px-[2%]'>
    <BackgroundVideoSlider/>
    <Directory/>
    <Products/>
  </div>
);

export default HomePage;