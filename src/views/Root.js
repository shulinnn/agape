import Navbar from "../partials/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Root.css";
import { ChevronDown } from "react-feather";

function Root() {
  return (
    <>
      <Navbar />
      <div className="header">
        <img src={require("../assets/tt.jpeg")} alt="penzion agape" />
      </div>
      <div className="header-reservation">
        <div className="wrapper">
          <div className="item">
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

          <div className="item">
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

          <div className="item">
            <span>POKOJ</span>
            <div className="content">
              <span className="day">12</span>
              <span className="divider">/</span>
              <span className="month">dvoj</span>
              <div className="arrow">
                <ChevronDown color="black" size={24} strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="button">ZJISTIT DOSTUPNOST</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
