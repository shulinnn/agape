import PensionItem from "components/PensionItem";
import OurRooms from "partials/ourrooms/OurRooms";
import Reviews from "partials/reviews/Reviews";
import "./Landing.css";
import PensionMap from "components/PensionMap";
import Contact from "partials/contact/Contact";
import Footer from "partials/footer/Footer";

function Landing() {
  return (
    <>
      <div className="about-us">
        <div className="wrapper">
          <img alt="" src={require("../assets/tt.jpeg")} />
          <div className="content">
            <div className="divider"></div>
            <h1>Penziony v centru lázní</h1>
            <p>
              Vítejte na stránkách našich penzionů. Pevně věříme, že si u nás
              vybere své ubytování opravdu každý, jelikož jsou všechny penziony
              situovány v centru Luhačovic a vše je tak nadosah. Všechny pokoje
              si můžete prohlédnout přímo na internetu, takže přesně víte, kde
              budete bydlet. Většina pokojů má své vlastní sociální zařízení a
              jsou nově zrekonstruované a zařízené nábytkem z masivu. Ve všech
              penzionech je ZDARMA možnost Wi-Fi připojení k internetru. To
              všechno samozřejmě za příznivé ceny. Na všechny další dotazy Vám
              rádi odpovíme na uvedených telefonních číslech nebo emailech.
              Těšíme se na Vaši návštěvu!
            </p>
          </div>
        </div>
      </div>

      <div className="pensions">
        <div className="wrapper">
          <PensionItem image="tt" pensionName="Penzion Ječmínek I" />
          <PensionItem image="tt" pensionName="Penzion Ječmínek II" />
          <PensionItem image="tt" pensionName="Penzion Agape" />
        </div>
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
