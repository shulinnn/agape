import EmailIcon from "components/EmailIcon";
import LocationIcon from "components/LocationIcon";
import PhoneIcon from "components/PhoneIcon";
import "./Contact.css";

function Contact() {
  /// Fake API
  const contactData = {
    pensionAdress: "Masarykova 232, 76326 Luhačovice",
    pensionPhone: "+420 607 606 219",
    pensionEmail: "penzion@test.cz",
  };

  return (
    <div className="contact-container">
      <span>INFORMACE</span>
      <h1>Kontaktujte nás</h1>
      <div className="item">
        <LocationIcon />
        <span>{contactData.pensionAdress}</span>
      </div>
      <div className="item">
        <EmailIcon />
        <span>{contactData.pensionEmail}</span>
      </div>
      <div className="item">
        <PhoneIcon />

        <span>{contactData.pensionPhone}</span>
      </div>
    </div>
  );
}

export default Contact;
