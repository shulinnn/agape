import Review from "components/Review";
import GalleryBullet from "components/GalleryBullet";
import "./Reviews.css";
import React, { useState } from "react";

function Reviews() {
  /// Fake Data from API will change later
  const data = require("api/test.json");

  const [actualIndex, setActualIndex] = useState(0);

  function handleBulletClick(bulletIndex) {
    document.querySelector(".review-item").classList.add("test");
    setTimeout(() => {
      document.querySelector(".review-item").classList.remove("test");
    }, 1000);
    setActualIndex(bulletIndex);
  }

  return (
    <>
      <div className="reviews-container">
        <div className="review">
          <Review
            reviewContent={data.reviews[actualIndex].reviewContent}
            reviewerName={data.reviews[actualIndex].reviewerName}
            reviewStars={data.reviews[actualIndex].reviewStars}
            reviewFrom={data.reviews[actualIndex].reviewFrom}
          />
          <div className="flex flex-row pb-8 justify-center w-full gap-x-4">
            {data.reviews.map((index) => {
              return (
                <GalleryBullet
                  onClick={() => handleBulletClick(index.id)}
                  isActive={actualIndex === index.id && true}
                  key={index.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
