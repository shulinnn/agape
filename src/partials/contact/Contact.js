import EmailIcon from "components/EmailIcon";
import LocationIcon from "components/LocationIcon";
import PhoneIcon from "components/PhoneIcon";
import { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /// Fake API
  const contactData = {
    pensionAdress: "Masarykova 232, 76326 Luhačovice",
    pensionPhone: "+420 607 606 219",
    pensionEmail: "penzion@test.cz",
  };

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("api/landing/1", {
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

  return (
    <div className="contact-containerX">
      <span>INFORMACE</span>
      <h1>Kontaktujte nás</h1>
      <div className="item">
        <LocationIcon />
        <span>{!isLoading && data.pension_adress}</span>
      </div>
      <div className="item">
        <EmailIcon />
        <span>{!isLoading && data.pension_mail}</span>
      </div>
      <div className="item">
        <PhoneIcon />
        <span>{!isLoading && data.pension_phone}</span>
      </div>
    </div>
  );
}

export default Contact;
