import Proptypes from "prop-types";
import "./Button.scss";
import Loading from "../Loding/Loding";

const Button = (props) => {
  return (
    <>
      <div className="buttons">
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          className="button"
        >
          {props.buttonName}
          {props.disabled && <Loading />}
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
