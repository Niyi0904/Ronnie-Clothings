import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action';

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon} from '../../assets/crown.svg';

const CartIcon = ({ toggleCartHiddens }) => (
  <div className="cart-icon" onClick={toggleCartHiddens}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHiddens: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);