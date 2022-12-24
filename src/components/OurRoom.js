import RoomTag from "./RoomTag";
import "./OurRoom.css";

function OurRoom(props) {
  return (
    <div className="our-room-container" onClick={props.onClick}>
      <div className="wrapper">
        <img alt="" src={require("../assets/ll.jpg")} />
        <div className="room">
          <h1>Pokoj č.1</h1>
          <span>Od 2000 Kč / noc</span>
          <div className="tags">
            <RoomTag tagName="tv" />
            <RoomTag tagName="koupelna" />
            <RoomTag tagName="lednice" />
            <RoomTag tagName="radio" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurRoom;
