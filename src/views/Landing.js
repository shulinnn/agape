import PensionItem from "../components/PensionItem";
import OurRooms from "../partials/ourrooms/OurRooms";
import "./Landing.scss";

function Landing() {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-container_wrapper">
          <img alt="" src={require("../assets/tt.jpeg")} />
          <div className="about-us-container_wrapper_about-us">
            <div className="about-us-container_wrapper_about-us_divider"></div>
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

      <div className="pensions-container">
        <div className="pensions-container-wrapper">
          <PensionItem image="tt" pensionName="Penzion Ječmínek I" />
          <PensionItem image="tt" pensionName="Penzion Ječmínek II" />
          <PensionItem image="tt" pensionName="Penzion Agape" />
        </div>
      </div>

      <OurRooms />
    </>
  );
}

export default Landing;
