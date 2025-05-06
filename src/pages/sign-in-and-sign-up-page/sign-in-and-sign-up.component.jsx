import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className='relative w-full flex justify-center'>
    <div className='relative flex flex-col lg:flex-row items-center w-[85%] justify-between flex  mx-4'>
      <SignIn />
      <SignUp />
    </div>
  </div>
)

export default SignInAndSignUpPage;