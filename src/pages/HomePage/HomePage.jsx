import React from 'react';
import './HomePage.scss';
import {
     Carousal,
     IconWithText,
     ImageWithText,
     ProductCard,
     VerticalNavBar,
} from '../../components';
import Basic from '../../layouts/Basic/Basic';
const HomePage = () => {
     return (
          <>
               <h1>HomePage</h1>
               <Basic>
                    <Carousal />
                    <VerticalNavBar />
                    <ProductCard />
                    <IconWithText />
                    <ImageWithText />
               </Basic>
          </>
     );
};

export default HomePage;
