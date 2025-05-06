import React from 'react';
import { Route, Routes, redirect, Navigate } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import ShopPage from './pages/shopPage/shopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import ShoesPage from './pages/shop/shoes/shoesPage';
import ClothePage from './pages/shop/clothes/clothesPages';
import MiscancellousPage from './pages/shop/miscellaneous/miscellaneous';

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
      <div className='relative h-[100%]'>
        <Header/>
        <div className='relative '>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/shop_page' element={<ShopPage/>} />
            <Route path='/shop' element={<Shop />} >
              <Route path="shoes" element={<ShoesPage />} />
              <Route path="clothes" element={<ClothePage />} />
              <Route path="miscellaneous" element={<MiscancellousPage />} />
            </Route>
            <Route exact path='/signin' element= {
              currentUser ? (
              <Navigate to='/' />
              ) : (
                <SignInAndSignUpPage />)} 
            />
          </Routes>
        </div>
        <footer className="relative top-32 bg-gray-800 text-white py-6">
            <div class="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-0">
              <div>
                <p class="text-sm">&copy; 2025 Nidavtech. All rights reserved.</p>
              </div>
            
              <div>
                <ul class="flex space-x-6">
                  <li><a href="https://www.linkedin.com/in/owoyemi-niyi-b22878263" target="_blank" class="hover:text-orange-400">LinkedIn</a></li>
                  <li><a href="https://github.com/Niyi0904" target="_blank" class="hover:text-orange-400">GitHub</a></li>
                  <li><a href="mailto:owoyeminiyi2@gmail.com" class="hover:text-orange-400">Email</a></li>
                </ul>
              </div>
            </div>
        </footer>

      </div>
    )};

const mapSateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapSateToProps, mapDispatchToProps )(App);
