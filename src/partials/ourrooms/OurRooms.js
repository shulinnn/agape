import OurRoom from "components/OurRoom";
import GalleryBullet from "components/GalleryBullet";
import "./OurRooms.css";

function OurRooms() {
  return (
    <div className="our-rooms-container">
      <div className="rooms-container">
        <div className="wrapper">
          <span>OBJEVTE NAŠE POKOJE</span>
          <h1>NAŠE POKOJE</h1>
          <div className="rooms_container">
            <OurRoom />
            <OurRoom />
            <OurRoom />
            <OurRoom />
            <OurRoom />
            <OurRoom />
          </div>
        </div>
      </div>
      <div className="photos-container">
        <div className="wrapper">
          <img alt="" src={require("../../assets/ll.jpg")} />
          <div className="bullets-container">
            <GalleryBullet />
            <GalleryBullet />
            <GalleryBullet />
            <GalleryBullet />
            <GalleryBullet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurRooms;
