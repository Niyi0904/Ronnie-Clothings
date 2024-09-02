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
  const {id, name, price, imageUrl} = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          // setting the background to the item image 
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'> {name} </span>
        <span className='price'> {price} </span>
      </div>
      {/* Calling our addItem function onclick of our custom button */}
      <CustomButton onClick={() => addItem(item)} > Add to cart</CustomButton>
  </div>
)};

// Dispatching our action to redux store 
const mapDispatchToProps = dispatch => ({
  // assigning our dispatch action function to a variable function called addItem, in order for us to use it in our component anytime we call the addItem function
  addItem: item => dispatch(addItem(item))
})

// Connecting our dispatch to our store to go through the redux flow 
export default connect(null, mapDispatchToProps) (CollectionItem);