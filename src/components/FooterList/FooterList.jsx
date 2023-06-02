/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './FooterList.scss';

const FooterList = ({ heading, items }) => {
     return (
          <>
               <div className="footer-list">
                    <h1>{heading}</h1>
                    {items.map(({ title, link, component }) => {
                         if (component) {
                              return <div key={title}>{component}</div>;
                         }
                         return (
                              <Link key={title} to={link}>
                                   {title}
                              </Link>
                         );
                    })}
               </div>
          </>
     );
};

export default FooterList;
