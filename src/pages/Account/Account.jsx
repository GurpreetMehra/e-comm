import React from 'react';
import './Account.scss';
import Basic from '../../layouts/Basic/Basic';
import { BreadCrumbs } from '../../components';
import AccountNavBar from './components/AccountNavBar/AccountNavBar';
import AccountProfileForm from './components/AccountProfileForm/AccountProfileForm';

const Account = () => {
     return (
          <>
               <Basic>
                    <BreadCrumbs />
                    <AccountNavBar />
                    <AccountProfileForm />
               </Basic>
          </>
     );
};

export default Account;
