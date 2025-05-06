import React, { useEffect, useState } from 'react';
import CollectionItemComponent from '../../../components/collection-item/collection-item.component';


export function Spinner() {
    return (
      <div className="relative flex w-full justify-center items-center h-screen bg-white">
        <div className="relative w-16 h-16">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 border-4 border-t-transparent border-gray-500 rounded-full animate-spin" />
  
          {/* Inner glowing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-500 rounded-full animate-pulse shadow-lg shadow-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

const ClothePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);
  

  const fetchASOSProducts = async () => {
    const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=6993&limit=50&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '74143f85bamshe7117fbfe1013c0p1c222fjsn02882f1c7fe0',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
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
        <div className='relative flex mt-8 w-full'>
            {isLoading ? <Spinner/> : 
            <div className='relative w-full md:grid md:grid-flow-row md:grid-cols-2 lg:grid lg:grid-flow-row lg:grid-cols-3  xl:grid-cols-4  space-y-7 place-items-center flex flex-wrap gap-3'>
            {products.map((product) => {
                const items = {
                    name: product.name,
                    image: `https://${product.imageUrl}`,
                    price: product.price.current.value,
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

export default ClothePage;
