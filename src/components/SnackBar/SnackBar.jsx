import "./SnackBar.scss";
import RemoveIcon from "../../assets/icons/remove.png";

const SnackBar = () => {
  return (
    <>
      <div className="main-snackBar">
        <div className="snackBar">
          <img className="icon" src={RemoveIcon} />
          <b>This is a error</b>
        </div>
      </div>
    </>
  );
};

export default SnackBar;
