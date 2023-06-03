import './LogInForm.scss';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

const LogInForm = () => {
     const [value, setValue] = useState('');
     const onChange = (event) => {
          setValue(event.target.value);
     };
     const [password, setPassword] = useState('');
     const onChangePassword = (event) => {
          setPassword(event.target.value);
     };
     const [save, setSave] = useState('');
     const [save2, setSave2] = useState('');

     const Click = () => {
          setSave(value);
          setSave2(password);
     };

     return (
          <>
               <div className="login-form-container">
                    <div className="heading">
                         <h1>Log in to Exclusive</h1>
                         <h3>Enter your details below</h3>
                    </div>
                    <Input
                         id="inputName"
                         Placeholder={'Email or Phone Number'}
                         value={value}
                         onChange={onChange}
                         Click={Click}
                    />
                    <Input
                         id="inputPassword"
                         Placeholder={'Password'}
                         password={password}
                         onChange={onChangePassword}
                         Click={Click}
                    />
                    <Button
                         buttonName={'Log In'}
                         Click={Click}
                         value={value}
                         setValue={setValue}
                         password={password}
                         setPassword={setPassword}
                    />
                    <div className="link">
                         <Link to="#">Forget Password?</Link>
                    </div>
                    <h1>{save}</h1>
                    <h1>{save2}</h1>
               </div>
          </>
     );
};

export default LogInForm;
