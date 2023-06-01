import FooterList from '../FooterList/FooterList';
import './Footer.scss';
const Footer = () => {
     const QuickLink = [
          {
               listName: 'Privacy Policy',
               link: '#',
          },

          {
               listName: 'Terms Of Use',
               link: '#',
          },
          {
               listName: 'FAQ',
               link: '#',
          },
          {
               listName: 'Contact',
               link: '#',
          },
     ];
     const Account = [
          {
               listName: 'My Account',
               link: '#',
          },

          {
               listName: 'Login / Register',
               link: '#',
          },
          {
               listName: 'Cart',
               link: '#',
          },
          {
               listName: 'Wishlist',
               link: '#',
          },
          {
               listName: 'Shop',
               link: '#',
          },
     ];
     const supportList = [
          {
               listName: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
               link: '/asda',
          },

          {
               listName: 'exclusive@gmail.com',
               link: '123123',
          },
          {
               listName: '+88015-88888-9999',
               link: '#',
          },
     ];

     return (
          <>
               <div className="footer-container">
                    <FooterList items={supportList} heading={'Support'} />
                    <FooterList items={Account} heading={'Account'} />
                    <FooterList items={QuickLink} heading={'Quick Link'} />
               </div>
          </>
     );
};

export default Footer;
