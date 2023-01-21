import PensionMap from "components/PensionMap";
import Contact from "partials/contact/Contact";
import Footer from "partials/footer/Footer";
import Room from "components/Room";
import { useEffect, useState } from "react";

function OurRooms() {
  const [data, setData] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://localhost:4000/rooms/1", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setData(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const renderRooms = data.map((data, i) => <Room data={data} key={i} />);

  return (
    <>
      <div className="container mx-auto lg:px-24 mt-16 mb-16">
        <div className="flex flex-col gap-y-8 px-2">{renderRooms}</div>
      </div>

      <div className="contact-map">
        <PensionMap />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default OurRooms;
