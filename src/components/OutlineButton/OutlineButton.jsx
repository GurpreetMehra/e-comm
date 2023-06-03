import GoogleIcon from '../../assets/icons/google.png';
import './OutlineButton.scss';

const OutlineButton = () => {
     return (
          <>
               <button className="button-2">
                    <img src={GoogleIcon} />
                    Sign up with Google
               </button>
          </>
     );
};

export default OutlineButton;
