import Review from "components/Review";
import GalleryBullet from "components/GalleryBullet";
import "./Reviews.css";
import React, { useState } from "react";
import { queryAllByAltText } from "@testing-library/react";

function Reviews() {
  /// Fake Data from API will change later
  const data = {
    reviews: [
      {
        id: 0,
        reviewerName: "Petr Jahoda",
        reviewStars: 3,
        reviewContent:
          "Příjemné ubytování v blízkosti autobusového nádraží. Všude čisto, útulný pokoj. Určitě všem doporučuji!",
        reviewFrom: "Google.com",
      },
      {
        id: 1,
        reviewerName: "Petr Rychlý",
        reviewStars: 5,
        reviewContent:
          "Příjemné ubytování v blízkosti autobusového nádraží. Všude čisto, útulný pokoj. Určitě všem doporučuji!",
        reviewFrom: "Google.com",
      },
      {
        id: 2,
        reviewerName: "Michal Němec",
        reviewStars: 3,
        reviewContent:
          "Penzion kde cena odpovídá kvalitě. Nutno vyzvednout dobrou lokalitu. Michal Němec",
        reviewFrom: "Google.com",
      },
      {
        id: 3,
        reviewerName: "Michaela Přibylová",
        reviewStars: 5,
        reviewContent:
          "Krásný apartmán, čisto, pěkný objekt, parkování přímo za penzionem, velice příjemná a vstřícná paní, doporučuji 😀",
        reviewFrom: "Google.com",
      },
    ],
  };

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
