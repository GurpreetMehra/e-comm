import './LogIn.scss';
import { LogInForm } from '../../components';
import Basic from '../../layouts/Basic/Basic';
import ImgWithform from '../../layouts/ImgWithform/ImgWithform';
const LogIn = () => {
     return (
          <>
               <Basic>
                    <ImgWithform>
                         <LogInForm />
                    </ImgWithform>
               </Basic>
          </>
     );
};

export default LogIn;
