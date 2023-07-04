import React, { useState } from "react";
import { db } from "../firebase";
import Data from "./Data";
import { collection, addDoc } from "firebase/firestore";

const Home = ({ slides }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    const nameInput = document.querySelector('input[name="yourName"]');
    const phoneInput = document.querySelector('input[name="phoneNumber"]');
    const emailInput = document.querySelector('input[name="email"]');
    const checkInInput = document.querySelector('input[name="checkIn"]');
    const checkOutInput = document.querySelector('input[name="checkOut"]');
    const adultInput = document.querySelector('input[name="adult"]');
    const childrenInput = document.querySelector('input[name="children"]');
    const roomsInput = document.querySelector('input[name="rooms"]');

    // Get the selected values from the input fields
    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const checkInDate = checkInInput.value;
    const checkOutDate = checkOutInput.value;
    const adultCount = adultInput.value;
    const childrenCount = childrenInput.value;
    const roomsCount = roomsInput.value;

    const newValue = {
      name,
      phone,
      email,
      checkInDate,
      checkOutDate,
      adultCount,
      childrenCount,
      roomsCount,
      bookingGranted: false, // Set the initial value of bookingGranted to false
    };

    // Create a new document in Firestore
    addDoc(collection(db, "bookings"), newValue)
      .then(() => {
        console.log("Form data added to Firestore");
        setIsSubmitted(true);
        // Reset the form
        nameInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
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

  const handleDismiss = () => {
    setIsSubmitted(false);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt="Home" />}
            </div>
          );
        })}
      </section>

      <form onSubmit={handleFormSubmit}>
        {/* Form fields and submit button */}
      </form>

      {isSubmitted && (
        <div className="submission-message">
          <p>Thank you for your submission!</p>
          <button onClick={handleDismiss}>Dismiss</button>
        </div>
      )}
    </>
  );
};

export default Home;
