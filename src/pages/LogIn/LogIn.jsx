import React from 'react';
import './LogIn.scss';
import { ProductContainer, LogInForm } from '../../components';
import Basic from '../../layouts/Basic/Basic';
const LogIn = () => {
     return (
          <>
               <h1>Login Page</h1>
               <Basic>
                    <ProductContainer />
                    <LogInForm />
               </Basic>
          </>
     );
};

export default LogIn;
