import React, { useEffect, useState } from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { Spinner } from '../../pages/shop/clothes/clothesPages';

const Directory = () => {
  const [items, setItems] = useState([]); // Fix: start with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');

        if (!response.ok) {
          throw new Error('No data found');
        }

        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };


    fetchCategories();
  }, []); 

  const filteredItem = items.filter(item => {
    return item.id === 1 | item.id === 4 | item.id === 5
  })

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='relative flex flex-col justify-center mt-12 w-full'>
      <div className="text-4xl font-bold text-center px-4">Shop</div>
      {isLoading ? <Spinner/> : 
        <div className='relative flex flex-col sm:flex-row mt-7 w-full'>
          {filteredItem.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      }
    </div>
  );
};

export default Directory;
