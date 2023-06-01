import FooterList from '../FooterList/FooterList';
import GroupIcon from '../../assets/icons/Group.png';
import './Footer.scss';
import NewsLetter from '../NewsLetter/NewsLetter';
import SocialLink from '../SocialLink/SocialLink';
const Footer = () => {
     const exclusiveList = [
          {
               title: 'Subscribe',
               link: '#',
          },

          {
               title: 'Get 10% off your first order',
               link: '#',
          },
          {
               title: <NewsLetter />,
               link: '#',
          },
     ];
     const quickLinkList = [
          {
               title: 'Privacy Policy',
               link: '#',
          },

          {
               title: 'Terms Of Use',
               link: '#',
          },
          {
               title: 'FAQ',
               link: '#',
          },
          {
               title: 'Contact',
               link: '#',
          },
     ];
     const accountList = [
          {
               title: 'My Account',
               link: '#',
          },

          {
               title: 'Login / Register',
               link: '#',
          },
          {
               title: 'Cart',
               link: '#',
          },
          {
               title: 'Wishlist',
               link: '#',
          },
          {
               title: 'Shop',
               link: '#',
          },
     ];
     const supportList = [
          {
               title: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
               link: '#',
          },

          {
               title: 'exclusive@gmail.com',
               link: '#',
          },
          {
               title: '+88015-88888-9999',
               link: '#',
          },
     ];
     const downloadAppList = [
          {
               title: <SocialLink />,
               link: '#',
          },
     ];

     return (
          <>
               <div className="footer-container">
                    <div className="footer-list-container">
                         <FooterList
                              items={exclusiveList}
                              heading={'Exclusive'}
                         />
                         <FooterList items={supportList} heading={'Support'} />
                         <FooterList items={accountList} heading={'Account'} />
                         <FooterList
                              items={quickLinkList}
                              heading={'Quick Link'}
                         />
                         <FooterList
                              items={downloadAppList}
                              heading={'Download App'}
                         />
                    </div>
                    <p>
                         <img src={GroupIcon} />
                         <div>Copyright Rimel 2022. All right reserved</div>
                    </p>
               </div>
          </>
     );
};

export default Footer;
