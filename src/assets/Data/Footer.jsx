import NewsLatter from '../../components/NewsLetter/NewsLetter';
import SocialLink from '../../components/SocialLink/SocialLink';

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
          link: '#',
          title: 'newsletter',
          component: <NewsLatter />,
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
          title: 'socia -links',
          component: <SocialLink />,
          link: '#',
     },
];
export {
     downloadAppList,
     supportList,
     accountList,
     exclusiveList,
     quickLinkList,
};
