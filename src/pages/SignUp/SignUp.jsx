import './SignUp.scss';
import { SignUpForm } from '../../components';
import ImgWithform from '../../layouts/ImgWithform/ImgWithform';

import Basic from '../../layouts/Basic/Basic';
const SignUp = () => {
     return (
          <>
               <Basic>
                    <ImgWithform>
                         <SignUpForm />
                    </ImgWithform>
               </Basic>
          </>
     );
};

export default SignUp;
