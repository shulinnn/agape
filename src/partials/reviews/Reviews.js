import Review from "components/Review";
import GalleryBullet from "components/GalleryBullet";
import "./Reviews.css";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { CSSTransition } from "react-transition-group";
function Reviews() {
  /// Fake Data from API will change later
  const [actualIndex, setActualIndex] = useState(1);
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("/reviews", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  function handleBulletClick(bulletIndex) {
    if (!isLoading) {
      setActualIndex(bulletIndex);
      setInProp(true);
    }
  }

  function handleSwiperLeft() {
    if (!isLoading) {
      if (actualIndex === 1) setActualIndex(data.length);
      else setActualIndex(actualIndex - 1);
      setInProp(true);
    }
  }

  function handleSwipeRight() {
    if (!isLoading) {
      if (actualIndex === data.length) setActualIndex(1);
      else setActualIndex(actualIndex + 1);
      setInProp(true);
    }
  }

  return (
    <>
      <div className="reviews-container">
        <div className="review relative">
          <ChevronLeft
            color="black"
            className="w-auto absolute md:bottom-[45%] bottom-2 left-8"
            onClick={handleSwiperLeft}
            size={64}
            strokeWidth={1}
          />
          <ChevronRight
            color="black"
            className="w-auto absolute md:bottom-[45%] bottom-2 right-8"
            size={64}
            onClick={handleSwipeRight}
            strokeWidth={1}
          />
          <CSSTransition
            onEntered={() => setInProp(false)}
            nodeRef={nodeRef}
            in={inProp}
            timeout={1000}
            classNames="my-node"
          >
            <div ref={nodeRef}>
              {!isLoading && (
                <Review
                  reviewContent={data[actualIndex - 1].message}
                  reviewerName={data[actualIndex - 1].sent_by}
                  reviewStars={data[actualIndex - 1].star_rating}
                  reviewFrom={data[actualIndex - 1].review_from}
                />
              )}
            </div>
          </CSSTransition>
          <div className="flex flex-row pb-8 justify-center w-full gap-x-4">
            {data.map((index) => {
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

/* <Review
reviewContent={data[actualIndex].message}
reviewerName={data[actualIndex].sent_by}
reviewStars={data[actualIndex].star_rating}
reviewFrom={data[actualIndex].sent_from}
/>
 */
