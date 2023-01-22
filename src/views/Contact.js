import { useState } from "react";
import "./Contact.css";
import PensionMap from "components/PensionMap";
import ContactX from "partials/contact/Contact";
import Footer from "partials/footer/Footer";
function Contact() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleMailChange(event) {
    setMail(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mail: mail,
        name: name,
        phone: phone,
        message: message,
      }),
    };

    const response = await fetch("api/contact", requestOptions);
    console.log("sent !");
  }

  return (
    <>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Váš e-mail</label>
            <input
              type="email"
              value={mail}
              onChange={handleMailChange}
              placeholder="vas@email.cz"
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Vaše jméno</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Vaše jméno"
            />
          </div>
          <div className="input-wrapper">
            <label>Vaše telefonní číslo</label>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Vaše telefonní číslo"
            />
          </div>
          <div className="input-wrapper">
            <label>Zpráva</label>
            <textarea
              placeholder="vaše zpráva"
              value={message}
              onChange={handleMessageChange}
              rows="12"
            />
          </div>
          <div className="input-wrapper">
            <button className="button">Odeslat</button>
          </div>
        </form>
      </div>

      <div className="contact-map">
        <PensionMap />
        <ContactX />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
