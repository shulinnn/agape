import EmailIcon from "components/EmailIcon";
import LocationIcon from "components/LocationIcon";
import PhoneIcon from "components/PhoneIcon";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <span>INFORMACE</span>
      <h1>Kontaktujte nás</h1>
      <div className="item">
        <LocationIcon />
        <span>Masarykova 232, 76326 Luhačovice</span>
      </div>
      <div className="item">
        <EmailIcon />
        <span>agape@penzionyluhacovice.cz</span>
      </div>
      <div className="item">
        <PhoneIcon />

        <span>+420 607606219</span>
      </div>
    </div>
  );
}

export default Contact;
