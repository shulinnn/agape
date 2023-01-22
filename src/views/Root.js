import Navbar from "../partials/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Root.css";
import { ChevronDown } from "react-feather";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import cs from "date-fns/locale/cs";
registerLocale("cs-CS", cs);

function Root() {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [isRoomPickerOpen, setIsRoomPickerOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({
    ///Default state
    room_number: 1,
    Room_type: "dvoj",
  });
  const [roomData, setRoomData] = useState([]);
  const [isRoomDataLoading, SetIsRoomDataLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("api/landing/1", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setData(response);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join(".");
  }

  const renderButton = () => {
    return (
      <div className="item">
        <Link
          to={
            "/dostupnost/" +
            formatDate(new Date(arrivalDate)) +
            "/" +
            formatDate(new Date(departDate))
          }
          className="button cursor-pointer"
        >
          ZJISTIT DOSTUPNOST
        </Link>
      </div>
    );
  };

  // Function to collect data
  const getRoomData = async () => {
    const response = await fetch("api/roomData/1", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setRoomData(response);
    SetIsRoomDataLoading(false);
  };

  useEffect(() => {
    getApiData();
    getRoomData();
  }, []);

  const renderArrivalDate = () => {
    return (
      <>
        <span className="day">{new Date(arrivalDate).getDate()}</span>
        <span className="divider">/</span>
        <span className="month">
          {new Intl.DateTimeFormat("cs-CS", { month: "short" }).format(
            arrivalDate
          )}
        </span>
      </>
    );
  };

  const reformatRoomType = (room_type) => {
    if (room_type === "SINGLE") return "Jednolůžkový";
    if (room_type === "DOUBLE") return "Dvoulůžkový";
    if (room_type === "TRIPLE") return "Třílůžkový";
    if (room_type === "QUAD") return "Čtyřlůžkový";
  };

  const sendReformatedData = (room_type) => {
    if (room_type === "SINGLE") return "jedno";
    if (room_type === "DOUBLE") return "dvoj";
    if (room_type === "TRIPLE") return "tří";
    if (room_type === "QUAD") return "čtyř";
  };

  const renderRooms = roomData.map((data, i) => (
    <li
      className="w-full hover:bg-gray-400 px-8 py-8 cursor-pointer"
      key={i}
      onClick={() =>
        selectedRoomFunc(data.room_number, sendReformatedData(data.Room_type))
      }
    >
      Pokoj č.{data.room_number} - {reformatRoomType(data.Room_type)}
    </li>
  ));
  /*   <li
  className="w-full hover:bg-gray-400 px-8 py-8 cursor-pointer"
  onClick={() => selectedRoomFunc("1", "dvoj")}
>
  Pokoj č.1 - Dvoulůžkový
</li>
 */
  const selectedRoomFunc = (room_number, Room_type) => {
    /// hide the dropdown
    setIsRoomPickerOpen(false);
    setSelectedRoom({ room_number, Room_type });
  };

  const renderDepartDate = () => {
    return (
      <>
        <span className="day">{new Date(departDate).getDate()}</span>
        <span className="divider">/</span>
        <span className="month">
          {new Intl.DateTimeFormat("cs-CS", { month: "short" }).format(
            departDate
          )}
        </span>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="header">
        <img
          src={"http://194.182.80.246:4000/" + data.pension_photo}
          alt={data.pension_name}
        />
      </div>
      <div className="header-reservation">
        <div className="wrapper">
          <div className="item">
            <span>PŘÍJEZD</span>
            <div className="content">
              {renderArrivalDate()}
              <div className="arrow relative">
                <ChevronDown color="black" size={24} strokeWidth={1} />
                <DatePicker
                  locale="cs-CS"
                  className="absolute w-4 h-4 outline-none bottom-5 cursor-pointer bg-transparent"
                  onChange={(date) => setArrivalDate(date)}
                />
              </div>
            </div>
          </div>

          <div className="item">
            <span>ODJEZD</span>
            <div className="content">
              {renderDepartDate()}
              <div className="arrow relative">
                <ChevronDown color="black" size={24} strokeWidth={1} />
                <DatePicker
                  locale="cs-CS"
                  className="absolute w-4 h-4 outline-none bottom-5 cursor-pointer bg-transparent"
                  onChange={(date) => setDepartDate(date)}
                />
              </div>
            </div>
          </div>

          {renderButton()}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
