import "./GalleryBullet.css";

function GalleryBullet(props) {
  return <div onClick={props.onClick} className="bullet"></div>;
}

export default GalleryBullet;
