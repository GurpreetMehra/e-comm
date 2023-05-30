import React from 'react';
import './TopBar.scss';
import DropDown from '../DropDown/DropDown';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
const TopBar = () => {
     return (
          <>
               <div className="topBar-container">
                    <div className="empty"></div>
                    <div className="topBar-text">
                         Summer Sale For All Swim Suits And Free Express
                         Delivery - OFF 50%!
                         <Link href="#" className="link">
                              <b>ShopNow</b>
                         </Link>
                    </div>

                    <div className="drop-dowm">
                         <DropDown />
                         <FaAngleDown className="icon" />
                    </div>
               </div>
          </>
     );
};

export default TopBar;
