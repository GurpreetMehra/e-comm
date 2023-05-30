import React from 'react';
import './Error.scss';

import Basic from '../../layouts/Basic/Basic';
import { BreadCrumbs, ProductContainer } from '../../components';

const Error = () => {
     return (
          <>
               <h1>Error Page</h1>
               <Basic>
                    <BreadCrumbs />
                    <ProductContainer />
               </Basic>
          </>
     );
};

export default Error;
