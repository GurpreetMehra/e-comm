import { useEffect, useState } from 'react';
import SideImg from '../../assets/icons/sideimg.png';
import SideImgTwo from '../../assets/icons/sideimgtwo.png';


import './Carousal.scss';
const Carousal = () => {
     const [selectedImg , setSelectedImg] = useState(0)
     const [allImg , setAllImg] = useState([SideImg , SideImgTwo])

     // useEffect(() => {
     //      setInterval (() => {
     //           setSelectedImg(selectedImg => selectedImg < 2 ? selectedImg + 1 : 0)
     //      },3000)
     // },[])

     return(<>
     <div className='carousal'>
<img src={allImg[selectedImg]}/>
     </div>;
     <button onClick={()=>{

if (selectedImg>0) {
     setSelectedImg(selectedImg-1)
}
}}>prev</button>
     <button onClick={()=>{

          if (selectedImg<allImg.length-1) {
               setSelectedImg(selectedImg+1)
          }
     }}>next</button>
     
     </>)
};

export default Carousal;
