import Proptypes from "prop-types";
import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <div className="input-container">
        <input disabled={props.disabled} {...props} />
      </div>
    </>
  );
};
Input.propTypes = {
  placeholder: Proptypes.string,
  name: Proptypes.string,
  value: Proptypes.string,
  type: Proptypes.string,
  onChange: Proptypes.function,
  email: Proptypes.state,
};
export default Input;
