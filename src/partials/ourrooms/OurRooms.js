import OurRoom from "components/OurRoom";
import GalleryBullet from "components/GalleryBullet";
import "./OurRooms.css";
import { useState } from "react";

function OurRooms() {
  const data = require("api/test.json");

  /// actual index starts at 0 at each re-render => whenever we get new data from api or whatever happens our component will re-render
  const [actualIndex, setActualIndex] = useState(0);
  const [actualImageIndex, setActualImageIndex] = useState(0);

  /// Handler for bullet clicking
  function handleBulletClick(bulletIndex) {
    setActualImageIndex(bulletIndex);
  }

  function handleRoomClick(roomIndex) {
    setActualIndex(roomIndex);
  }

  const renderRooms = () => {
    let tempArr2 = [];
    for (let i = 0; i < data.rooms.length; i++) {
      tempArr2.push(<OurRoom key={i} onClick={() => handleRoomClick(i)} />);
    }
    return tempArr2;
  };

  const renderBullet = () => {
    let tempArr = [];
    for (
      let index = 0;
      index < data.rooms[actualIndex].photos.length;
      index++
    ) {
      tempArr.push(
        <GalleryBullet key={index} onClick={() => handleBulletClick(index)} />
      );
    }
    return tempArr;
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
        <div className="wrapper">
          <img
            alt=""
            src={require(`assets/${data.rooms[actualIndex].photos[actualImageIndex].photoPath}.jpg`)}
          />
          <div className="bullets-container">{renderBullet()}</div>
        </div>
      </div>
    </div>
  );
}

export default OurRooms;
