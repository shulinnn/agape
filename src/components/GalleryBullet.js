import "./GalleryBullet.css";

function GalleryBullet(props) {
  return (
    <div
      onClick={props.onClick}
      className={`bullet ${props.isActive === true && "active"}`}
    ></div>
  );
}

export default GalleryBullet;
