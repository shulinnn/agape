import StarIcon from "./StarIcon";
import "./Review.css";
import React, { useEffect, useState } from "react";

function Review(props) {
  useEffect(() => {
    console.log("Updated");
  });

  const fakeStars = props.reviewStars;

  /// we should build array like this [1,1,1,0,0];
  const testArray = [];

  for (let index = 0; index < 5; index++) {
    if (index <= fakeStars - 1) {
      testArray.push(1);
    } else {
      testArray.push(0);
    }
  }

  return (
    <div className="review-item">
      <span>INFORMACE</span>
      <h1>Co o nás říkají</h1>
      <p>{props.reviewContent}</p>
      <div className="rating">
        {testArray.map((e, i) => {
          return <StarIcon key={i} isFilled={e} />;
        })}
      </div>
      <div className="reviewer">
        <span>{props.reviewerName} -</span>
        <span>recenze z</span>
        <span>{props.reviewFrom}</span>
      </div>
    </div>
  );
}

export default Review;
