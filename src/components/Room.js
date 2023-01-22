import RoomTag from "components/RoomTag";
import UserIcon from "components/UserIcon";
import { Link } from "react-router-dom";
import GalleryBullet from "./GalleryBullet";
import { useState } from "react";

function Room(props) {
  const [actualImageIndex, setActualImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(0);

  const renderTags = props.data.Tag.map((data, i) => (
    <RoomTag tagName={data.tag_name} key={i} />
  ));

  const renderIc = (n) =>
    Array.from({ length: n }, (index, i) => <UserIcon key={i} />);

  const renderPrices = () => {
    //we need to detect min and max price
    return props.data.Price.map((data, i) => (
      <div className="flex flex-row gap-x-4 justify-between" key={data.id}>
        <div className="flex flex-row gap-x-4">{renderIc(i + 1)}</div>
        <span className="font-base">{data.price} Kč</span>
      </div>
    ));
  };

  function handleBulletClick(bulletIndex) {
    setActualImageIndex(bulletIndex);
  }

  const renderBullet = () => {
    if (!isLoading) {
      let tempArr = [];
      for (let index = 0; index < props.data.Photo.length; index++) {
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

  const renderImage = (
    <img
      className="w-full h-[24rem] object-cover"
      src={
        "http://194.182.80.246:4000/" +
        props.data.Photo[actualImageIndex].photo_path
      }
    />
  );

  const computeRoomType = (roomType) => {
    if (roomType == "SINGLE") return "Jednolůžkový";
    if (roomType == "DOUBLE") return "Dvoulůžkový";
    if (roomType == "TRIPLE") return "Třílůžkový";
    if (roomType == "QUAD") return "Čtyřlůžkový";
  };

  /*   const renderBullet = props.data.Photo((data, i) => (
    <GalleryBullet key={i} isActive={actualImageIndex === i && true} />
  )); */

  return (
    <div
      className="bg-white flex flex-col lg:flex-row shadow-lg"
      style={{ fontFamily: "Merriweather, sans-serif" }}
    >
      <div className="flex w-full lg:w-1/2 flex-col gap-y-4 p-8 justify-between">
        <h1 className="text-2xl">
          Pokoj č.{props.data.room_number} -{" "}
          {computeRoomType(props.data.Room_type)}
        </h1>
        <div className="flex flex-row flex-wrap gap-4">{renderTags}</div>
        <div className="flex flex-col">{renderPrices()}</div>
        <Link
          to={"/pokoj/" + props.data.room_number}
          className="w-full text-center text-white font-semibold cursor-pointer bg-[#839f18] py-8"
        >
          VÍCE INFO
        </Link>
      </div>
      <div className="flex w-full lg:w-1/2 relative p-6">
        <div className="absolute bottom-10 flex flex-row justify-center w-full gap-x-4">
          {renderBullet()}
        </div>
        {renderImage}
      </div>
    </div>
  );
}
export default Room;
