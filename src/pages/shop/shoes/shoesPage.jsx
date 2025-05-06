import React, {useState, useEffect} from 'react'
import CollectionItemComponent from '../../../components/collection-item/collection-item.component';
import ShopPage from '../shop.component';
import { Spinner } from '../clothes/clothesPages';



const ShoesPage = () => {
    const [items, setItems] = useState([]); // Fix: start with an empty array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('https://freeshoesapi-production.up.railway.app/api/v1/shoes?limit=30');
  
          if (!response.ok) {
            throw new Error('No data found');
          }
  
          const data = await response.json();
          setItems(data.data);
          console.log(data.data);
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
            <div className='relative flex mt-8 w-full'>
                {isLoading ? <Spinner/> : 
                    <div className='relative w-full md:grid md:grid-flow-row md:grid-cols-2 lg:grid lg:grid-flow-row lg:grid-cols-3  xl:grid-cols-4  space-y-7 place-items-center flex flex-wrap gap-3'>
                    {items.map((item) => (
                        <CollectionItemComponent key={item.id} item={item} />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}

export default ShoesPage;