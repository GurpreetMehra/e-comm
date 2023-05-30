import React from 'react';
import './SignUp.scss';
import { ProductContainer, SignUpForm } from '../../components';
import Basic from '../../layouts/Basic/Basic';
const SignUp = () => {
     return (
          <>
               <h1>Sign Up Page</h1>
               <Basic>
                    <ProductContainer />
                    <SignUpForm />
               </Basic>
          </>
     );
};

export default SignUp;
