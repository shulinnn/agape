function Reservation() {
  return (
    <>
      <iframe
        className="container mx-auto px-4 lg:px-24 mt-16"
        src="http://booking.previo.cz/?hotId=10036"
        scrolling="yes"
        frameBorder="0"
        width="100%"
        height="900"
        name="previo-booking-iframe"
        id="previo-booking-iframe"
        allowtransparency="true"
      ></iframe>
    </>
  );
}

export default Reservation;
