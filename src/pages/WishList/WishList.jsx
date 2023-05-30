import React from 'react';
import './WishList.scss';
import { ProductContainer } from '../../components';
import Basic from '../../layouts/Basic/Basic';
const WishList = () => {
     return (
          <>
               <h1>WishList Page</h1>
               <Basic>
                    <ProductContainer />
               </Basic>
          </>
     );
};

export default WishList;
