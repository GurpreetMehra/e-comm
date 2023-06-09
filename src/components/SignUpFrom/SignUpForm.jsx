import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import OutlineButton from '../OutlineButton/OutlineButton';
import { useState } from 'react';
import axios from 'axios';

import './SignUpForm.scss';
const SignUpForm = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
     });
     const onChange = (event) => {
          formData[event.target.name] = event.target.value;
          setFormData(structuredClone(formData));
     };
     const handleOnClick = async () => {
          await axios.post('http://localhost:4000/users/signup', formData);
     };
     return (
          <>
               <div className="signin-form-container">
                    <div className="heading">
                         <h1>Create an account</h1>
                         <h3>Enter your details below</h3>
                    </div>
                    <Input
                         name={'name'}
                         value={formData.name}
                         type={'text'}
                         placeholder={'Name'}
                         onChange={onChange}
                    />
                    <Input
                         name={'email'}
                         value={formData.email}
                         type={'email'}
                         placeholder={'Email'}
                         onChange={onChange}
                    />
                    <Input
                         name={'password'}
                         value={formData.password}
                         type={'password'}
                         placeholder={'Password'}
                         onChange={onChange}
                    />
                    <Button
                         buttonName={'Create Account'}
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
