import React from "react";

import { connect } from "react-redux";

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import CartIcon from  '../cart-icon/cart-icon.component';

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CartItem item={cartItems}/>
      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
)

const mapStateToProps = ({cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);