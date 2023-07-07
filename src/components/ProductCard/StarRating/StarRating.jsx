import "./StarRating.scss";
import React, { Component, useState } from "react";
import BeautyStars from "beauty-stars";

const StarRating = (props) => {
  const [star, setStar] = useState({ value: props.rating });
  return (
    <>
      <div className="stars">
        <BeautyStars
          value={star.value}
          gap="2px"
          editable={false}
          size="10px"
        />
      </div>
    </>
  );
};

export default StarRating;
