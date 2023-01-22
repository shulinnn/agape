import OurRoom from "components/OurRoom";
import GalleryBullet from "components/GalleryBullet";
import "./OurRooms.css";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function OurRooms() {
  /// actual index starts at 0 at each re-render => whenever we get new data from api or whatever happens our component will re-render
  const [actualIndex, setActualIndex] = useState(0);
  const [actualImageIndex, setActualImageIndex] = useState(0);
  const [inProp, setInProp] = useState(false);
  const [data, setData] = useState([]);
  const nodeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("api/landing/1/rooms", {
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
    setActualImageIndex(bulletIndex);
    setInProp(true);
  }

  function handleRoomClick(roomIndex) {
    setActualIndex(roomIndex);
    setActualImageIndex(0);
    setInProp(true);
  }

  const renderRooms = () => {
    if (!isLoading) {
      let tempArr2 = [];
      for (let i = 0; i < data.length; i++) {
        tempArr2.push(
          <OurRoom data={data[i]} key={i} onClick={() => handleRoomClick(i)} />
        );
      }
      return tempArr2;
    }
  };

  const renderActualImage = () => {
    if (!isLoading) {
      return (
        <img
          alt=""
          src={
            "http://194.182.80.246:4000/" +
            data[actualIndex].Photo[actualImageIndex].photo_path
          }
        />
      );
    }
  };

  const renderBullet = () => {
    if (!isLoading) {
      let tempArr = [];
      for (let index = 0; index < data[actualIndex].Photo.length; index++) {
        tempArr.push(
          <GalleryBullet
            key={index}
            isActive={actualImageIndex === index && true}
            onClick={() => handleBulletClick(index)}
          />
        );
      }
      return tempArr;
    }
  };

  return (
    <div className="our-rooms-container">
      <div className="rooms-container">
        <div className="wrapper">
          <span>OBJEVTE NAŠE POKOJE</span>
          <h1>NAŠE POKOJE</h1>
          <div className="rooms_container">{renderRooms()}</div>
        </div>
      </div>
      <div className="photos-container">
        <CSSTransition
          onEntered={() => setInProp(false)}
          nodeRef={nodeRef}
          in={inProp}
          timeout={500}
          classNames="my-rooms"
        >
          <div className="wrapper" ref={nodeRef}>
            {renderActualImage()}
            <div className="bullets-container">{renderBullet()}</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default OurRooms;

/* <div className="photos-container">
<CSSTransition
  onEntered={() => setInProp(false)}
  nodeRef={nodeRef}
  in={inProp}
  timeout={500}
  classNames="my-rooms"
>
  <div className="wrapper" ref={nodeRef}>
    <img
      alt=""
      src={require(`assets/${data.rooms[actualIndex].photos[actualImageIndex].photoPath}.jpg`)}
    />
    <div className="bullets-container">{renderBullet()}</div>
  </div>
</CSSTransition>
</div> */
