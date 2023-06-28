import React from "react";
import "./HomePage.scss";
import {
  Carousal,
  IconWithText,
  ImageWithText,
  ProductCard,
  ProductContainer,
  VerticalNavBar,
} from "../../components";
import Basic from "../../layouts/Basic/Basic";
const HomePage = () => {
  return (
    <>
      <Basic>
        <div className="navBar-carusal">
          <VerticalNavBar />
          <Carousal />
        </div>
        <ProductContainer />
        <IconWithText />
        <ImageWithText />
      </Basic>
    </>
  );
};

export default HomePage;
