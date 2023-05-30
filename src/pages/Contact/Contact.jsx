import React from 'react';

import Basic from '../../layouts/Basic/Basic';
import { BreadCrumbs } from '../../components';
import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';

const Contact = () => {
     return (
          <>
               <h1>Contact page</h1>
               <Basic>
                    <BreadCrumbs />
                    <ContactForm />
                    <ContactInfo />
               </Basic>
          </>
     );
};

export default Contact;
