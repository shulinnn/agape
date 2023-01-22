import PensionMap from "components/PensionMap";
import Contact from "partials/contact/Contact";
import Footer from "partials/footer/Footer";
import { useState, useEffect } from "react";

function AboutUs() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("/about-us/1", {
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
    return data.photos.map((photo, i) => {
      return (
        <div
          className="lg:basis-[30%] md:basis-[45%] border-[16px] border-white overflow-hidden cursor-pointer"
          key={i}
        >
          <a href={"http://194.182.80.246:4000/" + photo.photo_path}>
            <img
              className="hover:scale-125 transition-all duration-500 ease-in-out"
              src={"http://194.182.80.246:4000/" + photo.photo_path}
            />
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 lg:px-24 mt-16">
        <p
          className="text-center tracking-widest text-lg"
          style={{ fontFamily: "Merriweather, sans-serif" }}
        >
          Vítejte na stránkách našich penzionů. Pevně věříme, že si u nás vybere
          své ubytování opravdu každý, jelikož jsou všechny penziony situovány v
          centru Luhačovic a vše je tak nadosah. Všechny pokoje si můžete
          prohlédnout přímo na internetu, takže přesně víte, kde budete bydlet.
          Většina pokojů má své vlastní sociální zařízení a jsou nově
          zrekonstruované a zařízené nábytkem z masivu. Ve všech penzionech je
          ZDARMA možnost Wi-Fi připojení k internetru. To všechno samozřejmě za
          příznivé ceny. Na všechny další dotazy Vám rádi odpovíme na uvedených
          telefonních číslech nebo emailech. Těšíme se na Vaši návštěvu!
        </p>
        <div className="flex flex-row flex-wrap gap-4 justify-between my-8">
          {!isLoading && renderImages()}
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

export default AboutUs;

/* <div
className="lg:basis-[30%] basis-[45%] border-[16px] border-white overflow-hidden cursor-pointer"
key={i}
>
<img
  className="hover:scale-125 transition-all duration-500 ease-in-out"
  src={"http://localhost:4000/" + photo.photo_path}
/>
</div>
 */
