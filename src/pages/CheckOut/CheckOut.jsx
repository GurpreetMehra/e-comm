import React from 'react';
import './CheckOut.scss';
import Basic from '../../layouts/Basic/Basic';
import { BreadCrumbs } from '../../components';
import CheckOutFrom from './components/CheckOutFrom';
import CheckOutCardDetail from './components/CheckOutCardDetail';

const CheckOut = () => {
     return (
          <>
               <h1>CheckOut</h1>
               <Basic>
                    <BreadCrumbs />
                    <CheckOutFrom />
                    <CheckOutCardDetail />
               </Basic>
          </>
     );
};

export default CheckOut;
