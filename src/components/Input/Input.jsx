import Proptypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
     return (
          <>
               <div className="input-container">
                    <input
                         type=""
                         onChange={props.onChange}
                         placeholder={props.Placeholder}
                         value={props.value}
                    />
               </div>
          </>
     );
};
Input.propTypes = {
     Placeholder: Proptypes.string,
     onChange: Proptypes.function,
     value: Proptypes.state,
};
export default Input;
