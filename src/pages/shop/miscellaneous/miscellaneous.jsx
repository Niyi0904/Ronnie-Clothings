import React, { useEffect, useState } from 'react';
import CollectionItemComponent from '../../../components/collection-item/collection-item.component';
import { Spinner } from '../clothes/clothesPages';

const MiscancellousPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);
  

  const fetchASOSProducts = async () => {
    const url = 'https://dummyjson.com/products';

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchASOSProducts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className='w-full px-12 flex flex-col justify-center mt-12'>
        <div>jdcbjcbjcb</div>
        <div className='relative flex mt-8 w-full'>
            {isLoading ? <Spinner/> : 
            <div className='relative w-full md:grid md:grid-flow-row md:grid-cols-2 lg:grid lg:grid-flow-row lg:grid-cols-3  xl:grid-cols-4  space-y-7 place-items-center flex flex-wrap gap-3'>
            {products.map((product) => {
                const items = {
                    name: product.title,
                    image: product.images[0],
                    price: product.price,
                    id: product.id
                }

                return (<CollectionItemComponent key={items.id} item={items}/>)
            })}
            </div>
            }
        </div>
    </div>

  );
};

export default MiscancellousPage;
