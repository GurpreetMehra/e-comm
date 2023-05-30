import React from 'react';
import './Cart.scss';
import Basic from '../../layouts/Basic/Basic';
import { BreadCrumbs, ProductContainer } from '../../components';
import CartTotal from './components/CartTotal';

const Cart = () => {
     return (
          <>
               <h1>Cart Page</h1>
               <Basic>
                    <BreadCrumbs />
                    <ProductContainer />
                    <CartTotal />
               </Basic>
          </>
     );
};

export default Cart;
