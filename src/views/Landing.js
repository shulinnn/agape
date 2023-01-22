import PensionItem from "components/PensionItem";
import OurRooms from "partials/ourrooms/OurRooms";
import Reviews from "partials/reviews/Reviews";
import "./Landing.css";
import PensionMap from "components/PensionMap";
import Contact from "partials/contact/Contact";
import Footer from "partials/footer/Footer";
import { useState, useEffect } from "react";

function Landing() {
  const [data, setData] = useState([]);
  const [moreData, setMoreData] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://localhost:4000/landing/1", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setData(response);
  };

  const getMoreApiData = async () => {
    const response = await fetch("http://localhost:4000/pensions", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setMoreData(response);
  };

  const renderPen = moreData.map((data, i) => (
    <PensionItem
      key={i}
      image={"http://localhost:4000/" + data.pension_photo}
      pensionName={data.pension_name}
    />
  ));

  useEffect(() => {
    getApiData();
    getMoreApiData();
  }, []);

  return (
    <>
      <div className="about-us">
        <div className="wrapper">
          <img alt="" src={"http://localhost:4000/" + data.pension_photo} />
          <div className="content">
            <div className="divider"></div>
            <h1>Penziony v centru lázní</h1>
            <p>{data.pension_description}</p>
          </div>
        </div>
      </div>

      <div className="pensions">
        <div className="wrapper">{renderPen}</div>
      </div>

      <OurRooms />

      <Reviews />

      <div className="contact-map">
        <PensionMap />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Landing;
