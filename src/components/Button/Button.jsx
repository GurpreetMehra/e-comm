import Proptypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
     return (
          <>
               <div className="buttons">
                    <button onClick={props.Click} className="button">
                         {props.buttonName}
                    </button>
               </div>
          </>
     );
};
Button.propTypes = {
     buttonName: Proptypes.string,
     Click: Proptypes.function,
};

export default Button;
