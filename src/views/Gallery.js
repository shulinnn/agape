import PensionMap from "components/PensionMap";
import Contact from "partials/contact/Contact";
import Footer from "partials/footer/Footer";
import { useEffect, useState } from "react";

function Gallery() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("/gallery", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((response) => response.json());

    // update the state
    setData(response);
    setIsLoading(false);
  };

  const renderImages = () => {
    return data.map((photo, i) => {
      return (
        <div
          className="lg:basis-[30%] md:basis-[45%] border-[16px] border-white overflow-hidden cursor-pointer"
          key={i}
        >
          <a href={"http://194.182.80.246:4000/" + photo.photo_path}>
            <img
              className="hover:scale-125 transition-all object-cover duration-500 ease-in-out"
              src={"http://194.182.80.246:4000/" + photo.photo_path}
            />
          </a>
        </div>
      );
    });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 mb-8 lg:px-24 mt-16">
        <div className="flex flex-row gap-y-8 flex-wrap justify-between">
          {renderImages()}
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

export default Gallery;
