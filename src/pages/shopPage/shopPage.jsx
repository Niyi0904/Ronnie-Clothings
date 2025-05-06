import React from 'react';
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Products from '../../components/products/products';
const ShopPage = () => {
  return (
    <div className='relative top-24'>
      <Directory/>
      <Products/>
    </div>
  )
}

export default ShopPage;