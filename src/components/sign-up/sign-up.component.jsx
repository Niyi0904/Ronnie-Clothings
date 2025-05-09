import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state= {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event =>{
    event.preventDefault();

    const { displayName, email, password, confirmPassword}= this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    } 

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name} = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword}= this.state;
    return(
      <div className='relative sign-up mt-10 lg:mt-0 top-24 lg:top-0'>
        <h2 className='text-4xl font-bold'>I do not have a account</h2>
        <span className='text-2xl'>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name= 'displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name= 'email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name= 'password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name= 'confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'> SIGN UP </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;