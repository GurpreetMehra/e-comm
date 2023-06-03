import Proptypes from 'prop-types';

import './ImgWithform.scss';
import SideImg from '../../assets/icons/side Image.png';

const ImgWithform = ({ children }) => {
     return (
          <>
               <div className="container">
                    <div className="img-bar">
                         <img className="img-container" src={SideImg} />
                    </div>
                    <div className="form-container">
                         <div className="form">{children}</div>
                    </div>
               </div>
          </>
     );
};
ImgWithform.propTypes = {
     children: Proptypes.any,
};
export default ImgWithform;
