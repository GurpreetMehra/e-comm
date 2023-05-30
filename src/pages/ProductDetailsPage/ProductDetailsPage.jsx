import React from 'react';
import './ProductDetailsPage.scss';

import Basic from '../../layouts/Basic/Basic';
import { BreadCrumbs, ProductCard } from '../../components';
import ProductDetails from './comonents/ProductDetails/ProductDetails';
import ProductImgCarousal from './comonents/ProductImgCarousal/ProductImgCarousal';

const ProductDetailsPage = () => {
     return (
          <>
               <h1>Product Details Page</h1>
               <Basic>
                    <BreadCrumbs />
                    <ProductImgCarousal />
                    <ProductDetails />
                    <ProductCard />
               </Basic>
          </>
     );
};

export default ProductDetailsPage;
