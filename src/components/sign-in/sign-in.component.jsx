import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    const { value, name} = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className='sign-in relative top-24 lg:top-0'>
        <h2 className='text-4xl font-bold'>I already have an account</h2>
        <span className='text-2xl'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
           name="email" 
           type="email" 
           handleChange={this.handleChange}
           value={this.state.email} 
           label="Email"
           required 
          />

          <FormInput
           name="password" 
           type="password" 
           handleChange={this.handleChange}
           value={this.state.password} 
           label="Password"
           required 
          />

          <div className='buttons'>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoggleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;