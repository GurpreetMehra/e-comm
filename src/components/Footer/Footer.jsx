import FooterList from '../FooterList/FooterList';
import GroupIcon from '../../assets/icons/Group.png';
import './Footer.scss';
import {
     accountList,
     downloadAppList,
     exclusiveList,
     quickLinkList,
     supportList,
} from '../../assets/Data/Footer';

const Footer = () => {
     const footerList = [
          {
               list: exclusiveList,
               heading: 'Exclusive',
          },
          {
               list: supportList,
               heading: 'Support',
          },
          {
               list: accountList,
               heading: 'Account',
          },
          {
               list: quickLinkList,
               heading: 'Quick Link',
          },
          {
               list: downloadAppList,
               heading: 'Download App',
          },
     ];
     return (
          <>
               <div className="footer-container">
                    <div className="footer-list-container">
                         {footerList.map((item) => {
                              return (
                                   <FooterList
                                        key={item.heading}
                                        items={item.list}
                                        heading={item.heading}
                                   />
                              );
                         })}
                    </div>
                    <div className="copyright">
                         <img src={GroupIcon} />
                         <div className="copyright-text">
                              Copyright Rimel 2022. All right reserved
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Footer;
