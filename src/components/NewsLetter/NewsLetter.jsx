import './NewsLetter.scss';
import SendIcon from '../../assets/icons/send.png';

const NewsLetter = () => {
     return (
          <>
               <div className="footer-input-container">
                    <input type="text" placeholder="Enter your email" />
                    <img src={SendIcon} />
               </div>
          </>
     );
};

export default NewsLetter;
