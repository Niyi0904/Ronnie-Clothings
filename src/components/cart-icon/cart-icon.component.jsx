import React from 'react';
import { connect } from 'react-redux';
import { BsCart } from "react-icons/bs";

import {toggleCartHidden} from '../../redux/cart/cart.action';

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon} from '../../assets/crown.svg';

const CartIcon = ({ toggleCartHiddens }) => (
  <div className="cart-icon" onClick={toggleCartHiddens}>
    <BsCart className='text-3xl'/>
    <span className="absolute text-md top-2.5">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHiddens: () => dispatch(toggleCartHidden())
}); 

export default connect(null, mapDispatchToProps)(CartIcon);