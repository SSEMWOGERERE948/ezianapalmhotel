import React, { useState } from "react";
import "./bookings.css";

const Bookings = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
  };

  return (
    // <section className="slide-form">
      <div className="container">
        <h2>Enjoy Your Holiday @Eziana Palm Hotel</h2>
        <span style={{ textAlign: "center" }}>Book with us</span>

        <form onSubmit={handleFormSubmit} className="form">
          <div className="flex_space">
            <input type="text" placeholder="Your Name" name="yourName" required />
            <input type="text" placeholder="Phone Number" name="phoneNumber" required />
          </div>
          <div className="flex_space">
            <input type="text" placeholder="Email" name="email" required />
          </div>
          <div className="flex_space">
            <input type="date" placeholder="Check In" name="checkIn" required />
            <input type="date" placeholder="Check Out" name="checkOut" required />
          </div>
          <div className="flex_space">
            <input type="number" placeholder="Adult(s)(18+)" name="adult" required />
            <input type="number" placeholder="Children(0-17)" name="children" required />
          </div>
          <input type="text" placeholder="Roomtype e.g Executive,deluxe or twin beds" name="rooms" required />
          <input type="submit" value="Submit" className="submit" />
        </form>
        {isSubmitted && (
          <div className="notification-popup">
            <h1>Your Booking has been received Successfully!</h1>
            <p>Thank you for booking Eziana Palm Hotel. Have a wonderful stay.</p>
            <button onClick={handleDismiss}>OK</button>
          </div>
        )}
      </div>
    // </section>
  );
};

export default Bookings;
