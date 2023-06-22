import "./SnackBar.scss";
import RemoveIcon from "../../assets/icons/remove.png";
import { useContext } from "react";
import RootContext from "../../context/root/RootContext";

const SnackBar = () => {
  const { useError } = useContext(RootContext);
  const [error, setError] = useError;
  const deleted = () => {
    setError(null);
  };
  setTimeout(() => {
    setError(null);
  }, 3000);

  if (!error) return null;
  return (
    <>
      <div className="main-snackBar">
        <div className="snackBar">
          <img className="icon" onClick={deleted} src={RemoveIcon} />
          <b>{error}</b>
        </div>
      </div>
    </>
  );
};

export default SnackBar;
