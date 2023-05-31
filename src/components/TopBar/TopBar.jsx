import './TopBar.scss';
import DropDown from '../DropDown/DropDown';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const TopBar = () => {
     return (
          <>
               <div className="top-bar-container">
                    <div></div>
                    <div className="top-bar-text">
                         Summer Sale For All Swim Suits And Free Express
                         Delivery - OFF 50%!
                         <Link href="#">
                              <b>ShopNow</b>
                         </Link>
                    </div>

                    <div className="drop-dowm">
                         <DropDown />
                         <FaAngleDown />
                    </div>
               </div>
          </>
     );
};

export default TopBar;
