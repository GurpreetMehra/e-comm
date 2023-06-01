/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './FooterList.scss';

// import Send from '../../assets/icons/send.png';

const FooterList = (props) => {
     return (
          <>
               <div className="footer-list">
                    <h1>{props.heading}</h1>
                    {props.items.map((list) => {
                         return (
                              <Link key={list.name} to={list.link}>
                                   {list.title}
                              </Link>
                         );
                    })}
               </div>
          </>
     );
};

export default FooterList;
