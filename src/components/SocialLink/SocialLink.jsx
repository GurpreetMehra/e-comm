import './SocialLink.scss';
import InstaIcon from '../../assets/icons/insta.png';
import FbIcon from '../../assets/icons/fb.png';
import QrIcon from '../../assets/icons/qr.png';
import PlaystoreIcon from '../../assets/icons/playstore.png';
import AppstoreIcon from '../../assets/icons/appstore.png';
import TweeterIcon from '../../assets/icons/tweeter.png';
import LinktingIcon from '../../assets/icons/linkting.png';
const SocialLink = () => {
     return (
          <>
               <div className="social-link-container">
                    Save $3 with App New User Only
                    <div className="app-store-icon">
                         <img className="qr" src={QrIcon} />
                         <div className="store">
                              <img className="playstore" src={PlaystoreIcon} />
                              <img className="appstore" src={AppstoreIcon} />
                         </div>
                    </div>
                    <div className="social-link-icon">
                         <img src={FbIcon} />
                         <img src={TweeterIcon} />
                         <img src={InstaIcon} />
                         <img src={LinktingIcon} />
                    </div>
               </div>
          </>
     );
};

export default SocialLink;
