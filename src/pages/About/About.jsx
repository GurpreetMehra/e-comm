import React from 'react';
import './About.scss';

import Basic from '../../layouts/Basic/Basic';
import {
     BreadCrumbs,
     IconWithText,
     ProductContainer,
     ProfileCard,
} from '../../components';

const About = () => {
     return (
          <>
               <h1>About Page</h1>
               <Basic>
                    <BreadCrumbs />
                    <ProductContainer />
                    <IconWithText />
                    <ProfileCard />
               </Basic>
          </>
     );
};

export default About;
