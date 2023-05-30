import React from 'react';
import Proptypes from 'prop-types';
import { TopBar, Header, Footer } from '../../components';

const Basic = ({ children }) => {
     return (
          <>
               <TopBar />
               <Header />
               {children}
               <Footer />
          </>
     );
};

Basic.propTypes = {
     children: Proptypes.any,
};

export default Basic;
