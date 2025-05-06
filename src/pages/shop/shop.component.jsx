import React from 'react';
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Products from '../../components/products/products';
const Shop = () => {
  return (
    <div className='shop-page'>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Shop;