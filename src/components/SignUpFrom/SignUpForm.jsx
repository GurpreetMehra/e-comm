import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import OutlineButton from "../OutlineButton/OutlineButton";
import { useContext, useState } from "react";
import axios from "axios";

import "./SignUpForm.scss";
import RootContext from "../../context/root/RootContext";
const SignUpForm = () => {
  const { useError } = useContext(RootContext);
  const [error, setError] = useError;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
    try {
      const data = await axios.post(
        "http://localhost:4000/users/signup",
        formData
      );
      navigate("/login");
    } catch (error) {
      const tamError = error?.response?.data?.error || "Something went wrong";
      setError(tamError);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="signin-form-container">
        <div className="heading">
          <h1>Create an account</h1>
          <h3>Enter your details below</h3>
        </div>
        <Input
          name={"name"}
          value={formData.name}
          type={"text"}
          placeholder={"Name"}
          onChange={onChange}
          disabled={loading}
        />
        <Input
          name={"email"}
          value={formData.email}
          type={"email"}
          placeholder={"Email"}
          onChange={onChange}
          disabled={loading}
        />
        <Input
          name={"password"}
          value={formData.password}
          type={"password"}
          placeholder={"Password"}
          onChange={onChange}
          disabled={loading}
        />
        <Button
          buttonName={"Create Account"}
          disabled={loading}
          onClick={handleOnClick}
        />
        <OutlineButton />
        <div className="links">
          <Link className="first-link" to="#">
            Already have account?
          </Link>
          <Link to="#" className="second-link">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
