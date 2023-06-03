import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import OutlineButton from '../OutlineButton/OutlineButton';

import './SignUpForm.scss';
const SignUpForm = () => {
     return (
          <>
               <div className="signin-form-container">
                    <div className="heading">
                         <h1>Create an account</h1>
                         <h3>Enter your details below</h3>
                    </div>
                    <Input Placeholder={'Name'} />
                    <Input Placeholder={'Email or Phone Number'} />
                    <Input Placeholder={'Password'} />
                    <Button buttonName={'Create Account'} />
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
