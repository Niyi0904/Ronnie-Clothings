import React, {useState, useEffect} from 'react'
import CollectionItem from '../collection-item/collection-item.component';
import { Spinner } from '../../pages/shop/clothes/clothesPages';

const Products = () => {
    const [items, setItems] = useState([]); // Fix: start with an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
  
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
  
    if (error) return <div className='text-xl font-sans'>Error: {error.message}</div>;
  
    return (
   <div className='w-full px-12 flex flex-col justify-center mt-12'>
     <h1 className="text-4xl font-bold text-center px-4">Products</h1>
     <div className='relative flex mt-8 w-full'>
      {isLoading ? <Spinner/> : 
        <div className='relative w-full md:grid md:grid-flow-row md:grid-cols-2 lg:grid lg:grid-flow-row lg:grid-cols-3  xl:grid-cols-4  space-y-7 place-items-center flex flex-wrap gap-3'>
        {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      }
     </div>
   </div>
    );
}

export default Products;