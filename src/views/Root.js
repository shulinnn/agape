import Navbar from "../partials/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Root.scss";
import { ChevronDown } from "react-feather";

function Root() {
  return (
    <>
      <Navbar />
      <div className="header">
        <img src={require("../assets/tt.jpeg")} alt="penzion agape" />
      </div>
      <div className="header-reservation lg:relative lg:bottom-24">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:px-24 lg:mx-auto lg:grow lg:w-full lg:container">
          <div className="header-reservation-item">
            <span>PŘÍJEZD</span>
            <div className="content">
              <span className="day">30</span>
              <span className="divider">/</span>
              <span className="month">říj</span>
              <div className="arrow">
                <ChevronDown color="black" size={24} strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="header-reservation-item">
            <span>ODJEZD</span>
            <div className="content">
              <span className="day">31</span>
              <span className="divider">/</span>
              <span className="month">říj</span>
              <div className="arrow">
                <ChevronDown color="black" size={24} strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="header-reservation-item">
            <span>POKOJ</span>
            <div className="content">
              <span className="day">12-1</span>
              <span className="divider">/</span>
              <span className="month">dvoj</span>
              <div className="arrow">
                <ChevronDown color="black" size={24} strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="header-reservation-item">
            <div className="header-reservation-item-button">
              ZJISTIT DOSTUPNOST
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
