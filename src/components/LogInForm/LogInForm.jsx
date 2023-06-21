import "./LogInForm.scss";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import react, { useContext, useState } from "react";
import axios from "axios";
import RootContext from "../../context/root/RootContext";

const LogInForm = () => {
  const { userState } = useContext(RootContext);
  const [user, setUser] = userState;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData(structuredClone(formData));
  };

  const [loading, setLoading] = useState(false);

  const handleOnClick = async () => {
    setLoading(true);
    const data = await axios.post(
      "http://localhost:4000/users/login",
      formData
    );
    const userData = data.data.user;
    setUser(userData);
    setLoading(false);
  };

  return (
    <>
      <div className="login-form-container">
        <div className="heading">
          <h1>Log in to Exclusive</h1>
          <h3>Enter your details below</h3>
        </div>
        <Input
          name={"email"}
          placeholder={"Email"}
          value={formData.email}
          type={"email"}
          onChange={onChange}
          disabled={loading}
        />
        <Input
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          value={formData.password}
          onChange={onChange}
          disabled={loading}
        />
        <Button
          buttonName={"Log In"}
          disabled={loading}
          onClick={handleOnClick}
        />
        <div className="link">
          <Link to="#">Forget Password?</Link>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
