import "./ProductDetail.scss";
import product from "../../assets/icons/product.png";
import heart from "../../assets/icons/heart.png";
import productONE from "../../assets/icons/image 58.png";
import productTwo from "../../assets/icons/image 57.png";
import productThree from "../../assets/icons/image 59.png";
import StarRating from "../ProductCard/StarRating/StarRating";
import { useState } from "react";
import axios from "axios";
import CheckPoint from "./CheckPoint/CheckPoint";

const ProductDetail = () => {
  const renderDetailComponent = () => {
    return (
      <div className="heading">
        <div>
          <b>Havic HV G-92 Gamepad</b>
        </div>
        <div className="rating">
          <StarRating />
          (150 rating)
        </div>
        <div className="price">$192.00</div>
        <div className="description">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </div>
      </div>
    );
  };

  const renderColorsComponent = () => {
    return <div className="colors-bar">Colors:</div>;
  };

  const renderSizeComponent = () => {
    const [sizes, setSize] = useState(["S", "M", "L", "XL", "XXL"]);
    const [selectedSize, setSelectedSize] = useState(null);
    const selectedSizeCss = {
      backgroundColor: " #db4444",
      color: " white",
      border: " 1px solid #db4444",
    };
    return (
      <div className="size-bar">
        <div className="text">Size:</div>

        {sizes.map((sizes) => {
          return (
            <div
              onClick={() => setSelectedSize(sizes)}
              style={selectedSize === sizes ? selectedSizeCss : {}}
              className="size-text"
            >
              {sizes}
            </div>
          );
        })}
      </div>
    );
  };

  const renderBuyComponent = () => {
    const [num, setNum] = useState(0);
    const handleOnClick = () => {
      const data = axios.post("http://localhost:4000/products/wishList");
      console.log(data);
    };
    return (
      <div className="buy-bar">
        <div className="equity">
          <div onClick={() => setNum(num - 1)} className="minus">
            -
          </div>
          <div className="numbers">{num}</div>
          <div onClick={() => setNum(num + 1)} className="plus">
            +
          </div>
        </div>
        <button>
          <b>Buy One</b>
        </button>
        <div onClick={handleOnClick} className="heart-icon">
          <img src={heart} />
        </div>
      </div>
    );
  };

  const [moveImg, setMoveImg] = useState([
    product,
    productONE,
    productTwo,
    productThree,
  ]);

  const ChangeImg = (value) => {
    if (value === moveImg[1]) {
      setMoveImg([moveImg[1], moveImg[0], moveImg[2], moveImg[3]]);
    }
    if (value === moveImg[2]) {
      setMoveImg([moveImg[2], moveImg[1], moveImg[0], moveImg[3]]);
    }
    if (value === moveImg[3]) {
      setMoveImg([moveImg[3], moveImg[1], moveImg[2], moveImg[0]]);
    }
  };

  return (
    <>
      <div className="main">
        <div className="main-productDetail">
          <div className="product-details-imgs">
            <div className="img" onClick={() => ChangeImg(moveImg[1])}>
              <img src={moveImg[1]} />
            </div>
            <div className="img" onClick={() => ChangeImg(moveImg[2])}>
              <img src={moveImg[2]} />
            </div>
            <div className="img" onClick={() => ChangeImg(moveImg[3])}>
              <img src={moveImg[3]} />
            </div>
          </div>
          <div className="product-img">
            <div className="productImg">
              <img src={moveImg[0]} />
            </div>
          </div>
          <div className="product-details">
            {renderDetailComponent()}
            <div className="order">
              {renderColorsComponent()}
              {renderSizeComponent()}
              {renderBuyComponent()}
              <div className="checkPoint">
                <CheckPoint />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
