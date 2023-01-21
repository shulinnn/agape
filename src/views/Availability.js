import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Avaiability() {
  const data = useParams();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <iframe
        className="container mx-auto px-4 lg:px-24 mt-16"
        src={
          "https://booking.previo.cz/?hotId=10036&showRoomType=" +
          data.room_number +
          "&arrival=" +
          data.arrival +
          "&departure=" +
          data.depart
        }
        scrolling="yes"
        frameBorder="0"
        width="100%"
        height="2000"
        name="previo-booking-iframe"
        id="previo-booking-iframe"
        allowtransparency="true"
      ></iframe>
    </>
  );
}

export default Avaiability;

/* Záložka Rezervace pro objednání konkrétního pokoje:
Jako src iframu používejte http://booking.previo.cz/?hotId=123456 s těmito parametry:

showRoomType=123 – ID druhu pokoje (povinný)
arrival=DD.MM.YYYY – datum nájezdu (volitelný, defaultně dnešek)
departure=DD.MM.YYYY – datum odjezdu (volitelný, defaultně o den později, něž datum nájezdu) */
