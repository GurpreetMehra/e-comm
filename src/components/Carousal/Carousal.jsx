import { useEffect, useRef, useState } from "react";
import SideImg from "../../assets/icons/sideimg.png";
import SideImgTwo from "../../assets/icons/sideimgtwo.png";

import "./Carousal.scss";

// let scrollFunc;

// setInterval(() => {
//   console.log("ASds");
//   if (scrollFunc) scrollFunc();
// }, 1000);
const Carousal = () => {
  const carousalRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  //   console.log(scroll);

  //   useEffect(() => {
  //     scrollFunc = () => setScroll(scroll + 10);
  //   }, []);

  useEffect(() => {
    carousalRef.current.scrollLeft = scroll;
  }, [scroll]);

  return (
    <>
      <div ref={carousalRef} className="carousal-container">
        <div className="carousal-bar">
          <div className="carousal-1">
            <img src={SideImg} />
          </div>
          <div className="carousal-2">
            <img src={SideImgTwo} />
          </div>
          <div className="carousal-3">
            <img src={SideImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
