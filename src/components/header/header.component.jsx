import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className='header fixed top-0 left-0 w-full bg-white shadow z-50 w-full font-bold'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to="/shop_page">
      <span>
        SHOP
      </span>
      </Link>
      <Link className='option' to="/">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown/>}
  </div>
)     

const mapStateToProps = ({user: {currentUser}, cart: { hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)
(Header);