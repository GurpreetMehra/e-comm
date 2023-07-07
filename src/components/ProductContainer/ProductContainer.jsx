import leftArrow from "../../assets/icons/Left Arrow.png";
import rightArrow from "../../assets/icons/Right Arrow.png";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductContainer.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((data) => {
      setProducts(data.data.productData);
    });
  }, []);

  // const product = async () => {
  //   console.log(product);
  // };

  const renderTimeComponent = () => {
    return (
      <>
        <div className="main-time">
          <div>
            <div className="time-text">Days</div>
            <div className="time-number">03 : </div>
          </div>
          <div>
            <div className="time-text"> Hours</div>
            <div className="time-number"> 23 : </div>
          </div>
          <div>
            <div className="time-text">Minutes</div>
            <div className="time-number"> 19 : </div>
          </div>
          <div>
            <div className="time-text"> Second</div>
            <div className="time-number"> 56 </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="main-productContainer">
        <div className="top">
          <div className="red-triangle"></div>
          <div className="text">Today's</div>
        </div>
        <div className="mid">
          <div>
            <b>Flash Sales</b>
          </div>
          {renderTimeComponent()}
          <div className="arrow-icon">
            <img src={leftArrow} />
            <img src={rightArrow} />
          </div>
        </div>
        <div className="cards">
          {products.map((data) => {
            return <ProductCard data={data} />;
          })}
        </div>
        <div className="product-button">
          <button>View All Product</button>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
