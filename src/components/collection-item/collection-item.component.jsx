import React from 'react';

// import all redux related bindings to implement
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

// importing styles
import './collection-item.styles.scss';

//  importing all needed components
import CustomButton from '../custom-button/custom-button.component';

// collection item function is the individual items which contains image, price, name, buttons
const CollectionItem = ({item, addItem}) => {
  const {id, title, name, price, image} = item;
  return (
   <div className='flex flex-col xs:w-[87%] space-y-2'>
    <div className='space-y-2 border rounded-2xl border-gray-400 pb-2'>
      <img
        src={image ? image : 'https://i.ibb.co/ypkgK0X/blue-beanie.png'}
        className='h-80 w-[100%] rounded-t-2xl'
      />
      <div className='flex font-semibold font-sans text-base justify-between mx-6 lg:mx-0'>
        <span>{title ? title.split(" ").slice(0, 3).join(" ") : name.split(" ").slice(0, 3).join(" ")}</span>
        <span>${price}</span>
      </div>
    </div>
    <div className='flex justify-center'>
      <button className='relative bg-black font-sans rounded-md text-white w-[40%] h-[5vh]' onClick={() => addItem(item)} > Add to cart</button>
    </div>
   </div>
)};

// Dispatching our action to redux store 
const mapDispatchToProps = dispatch => ({
  // assigning our dispatch action function to a variable function called addItem, in order for us to use it in our component anytime we call the addItem function
  addItem: item => dispatch(addItem(item))
})

// Connecting our dispatch to our store to go through the redux flow 
export default connect(null, mapDispatchToProps) (CollectionItem);