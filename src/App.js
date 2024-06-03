import React from 'react';
import { Route, Routes, redirect, Navigate } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { useEffect } from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const App = ({currentUser, setCurrentUser}) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

        console.log('user have signed in')
      } else {
        console.log('user is out')
      }
      
        setCurrentUser(userAuth);
    });     

    return unsubscribeFromAuth;
  }, []);

    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/shop' Component={ShopPage} />
          <Route exact path='/signin' element= {
            currentUser ? (
            <Navigate to='/' />
            ) : (
              <SignInAndSignUpPage />)} 
          />
        </Routes>
      </div>
    )};

const mapSateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapSateToProps, mapDispatchToProps )(App);
