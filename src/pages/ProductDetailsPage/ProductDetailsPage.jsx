import React from "react";
import "./ProductDetailsPage.scss";

import Basic from "../../layouts/Basic/Basic";
import { BreadCrumbs, ProductCard, ProductDetail } from "../../components";

const ProductDetailsPage = () => {
  return (
    <>
      <h1>Product Details Page</h1>
      <Basic>
        <BreadCrumbs />
        <ProductDetail />
      </Basic>
    </>
  );
};

export default ProductDetailsPage;
