import RoomTag from "./RoomTag";
import "./OurRoom.css";

function OurRoom(props) {
  const renderTags = props.data.Tag.map((tag, i) => {
    return <RoomTag key={i} tagName={tag.tag_name} />;
  });

  return (
    <div className="our-room-container" onClick={props.onClick}>
      <div className="wrapper">
        <img
          alt=""
          className="h-[10rem] w-full object-cover"
          src={"http://194.182.80.246:4000/" + props.data.Photo[0].photo_path}
        />
        <div className="room">
          <h1>Pokoj č. {props.data.room_number}</h1>
          <span>Od {props.data.Price[0].price} Kč / noc</span>
          <div className="tags">{renderTags}</div>
        </div>
      </div>
    </div>
  );
}

export default OurRoom;
