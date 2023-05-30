import React from 'react';
import './LogIn.scss';
import { ProductContainer, LogInForm } from '../../components';
import Basic from '../../layouts/Basic/Basic';
const LogIn = () => {
     return (
          <>
               <Basic>
                    <ProductContainer />
                    <LogInForm />
               </Basic>
          </>
     );
};

export default LogIn;
