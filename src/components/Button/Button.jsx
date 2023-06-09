import Proptypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
     return (
          <>
               <div className="buttons">
                    <button onClick={props.onClick} className="button">
                         {props.buttonName}
                    </button>
               </div>
          </>
     );
};
Button.propTypes = {
     buttonName: Proptypes.string,
     onClick: Proptypes.function,
};

export default Button;
