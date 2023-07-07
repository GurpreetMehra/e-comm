import "./CheckPoint.scss";

import delivery from "../../../assets/icons/delivery.png";
import iconReturn from "../../../assets/icons/return.png";

const CheckPoint = () => {
  return (
    <>
      <div className="checkPoint-container">
        <div className="freeDelivery">
          <div className="free-icon">
            <img className="delivery" src={delivery} />
          </div>
          <div>
            <div>
              <b>Free Delivery</b>
            </div>
            <div className="text">
              Enter Your Postal Code For Delivery Availabilty
            </div>
          </div>
        </div>
        <div className="retuneDelivery">
          <div className="free-icon">
            <img className="delivery" src={iconReturn} />
          </div>
          <div>
            <div>
              <b>Retune Delivery</b>
            </div>
            <div className="text">Free 30 Days Delivery Returns. Details</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckPoint;
