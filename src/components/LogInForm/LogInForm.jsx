import './LogInForm.scss';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import axios from 'axios';

const LogInForm = () => {
     const [formData, setFormData] = useState({
          email: '',
          password: '',
     });
     const onChange = (event) => {
          formData[event.target.name] = event.target.value;
          setFormData(structuredClone(formData));
     };
     const handleOnClick = async () => {
          await axios.post('http://localhost:4000/users/login', formData);
     };

     return (
          <>
               <div className="login-form-container">
                    <div className="heading">
                         <h1>Log in to Exclusive</h1>
                         <h3>Enter your details below</h3>
                    </div>
                    <Input
                         name={'email'}
                         placeholder={'Email'}
                         value={formData.email}
                         type={'email'}
                         onChange={onChange}
                    />
                    <Input
                         name={'password'}
                         type={'password'}
                         placeholder={'Password'}
                         value={formData.password}
                         onChange={onChange}
                    />
                    <Button buttonName={'Log In'} onClick={handleOnClick} />
                    <div className="link">
                         <Link to="#">Forget Password?</Link>
                    </div>
               </div>
          </>
     );
};

export default LogInForm;
