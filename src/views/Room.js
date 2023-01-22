import { useEffect, useState } from "react";
import PensionMap from "components/PensionMap";
import Contact from "partials/contact/Contact";
import Footer from "partials/footer/Footer";

function Room() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://localhost:4000/gallery", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const renderImages = () => {
    return data.map((photo, i) => {
      return (
        <div className="flex lg:basis-[30%] md:basis-[45%]" key={i}>
          <a href={"http://localhost:4000/" + photo.photo_path}>
            <img
              alt="img-alt"
              className="object-fit border-8 border-white w-[20rem] h-[20rem]"
              src={"http://localhost:4000/" + photo.photo_path}
            />
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 mb-8 lg:px-24 mt-16">
        <div className="flex flex-col py-12 px-12">
          <h1 className="text-3xl mb-8">Pokoj č.1</h1>
          <iframe
            className="container mx-auto px-4 lg:px-24 mt-16"
            src="http://booking.previo.cz/?hotId=10036&showRoomType=878155"
            scrolling="yes"
            frameBorder="0"
            width="100%"
            height="900"
            name="previo-booking-iframe"
            id="previo-booking-iframe"
            allowtransparency="true"
          ></iframe>

          <div className="flex flex-row gap-y-8 flex-wrap justify-between">
            {renderImages()}
          </div>
        </div>
      </div>

      <div className="contact-map">
        <PensionMap />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Room;
