import "./StarRating.scss";
import React, { Component, useState } from "react";
import BeautyStars from "beauty-stars";

const StarRating = () => {
  const [star, setStar] = useState({ value: 0 });
  return (
    <>
      <div>
        <BeautyStars
          value={star.value}
          onChange={(value) => setStar({ value })}
        />
      </div>
    </>
  );
};

export default StarRating;
