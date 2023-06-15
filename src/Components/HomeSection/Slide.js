import React, { useState } from "react";
import { app, db } from "./firebaseConfig";
import Data from "./Data";

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const checkInInput = document.querySelector('input[name="checkIn"]');
    const checkOutInput = document.querySelector('input[name="checkOut"]');
    const adultInput = document.querySelector('input[name="adult"]');
    const childrenInput = document.querySelector('input[name="children"]');
    const roomsInput = document.querySelector('input[name="rooms"]');

    // Get the selected values from the input fields
    const checkInDate = checkInInput.value;
    const checkOutDate = checkOutInput.value;
    const adultCount = adultInput.value;
    const childrenCount = childrenInput.value;
    const roomsCount = roomsInput.value;

    // Create a new document in Firestore
    db.collection("bookings").add({
      checkInDate,
      checkOutDate,
      adultCount,
      childrenCount,
      roomsCount,
    })
      .then(() => {
        alert("Booking submitted successfully!");
        // Reset the form
        checkInInput.value = "";
        checkOutInput.value = "";
        adultInput.value = "";
        childrenInput.value = "";
        roomsInput.value = "";
      })
      .catch((error) => {
        console.error("Error submitting booking:", error);
        alert("An error occurred while submitting the booking. Please try again later.");
      });
  };

  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt="Home Image" />}
            </div>
          );
        })}
      </section>

      <section className="slide-form">
        <div className="container">
          <h2>Enjoy Your Holiday @Eziana palm Hotel</h2>
          <span style={{ textAlign: "center" }}>Book with us</span>

          <form onSubmit={handleFormSubmit}>
            <div className="flex_space">
              <input type="date" placeholder="Check In" name="checkIn" required />
              <input type="date" placeholder="Check Out" name="checkOut" required />
            </div>
            <div className="flex_space">
              <input type="number" placeholder="Adult(s)(18+)" name="adult" required />
              <input type="number" placeholder="Children(0- 17)" name="children" required />
            </div>
            <input type="number" placeholder="Rooms" name="rooms" required />
            <input type="submit" value="Submit" className="submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
