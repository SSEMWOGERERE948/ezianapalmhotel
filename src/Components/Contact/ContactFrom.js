import React, { useState } from "react";
import "./Contact.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactFrom = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = {
      fname,
      lname,
      phone,
      email,
      message,
      contacted: false,
    };

    // Store the form data in the Firestore database
    addDoc(collection(db, "contacts"), newValue)
      .then(() => {
        console.log("Form data added to Firestore");
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error adding form data to Firestore: ", error);
      });

    // Reset form fields
    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back to you soon.</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="e.g. 123-456-7890"
                  />
                </div>
                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="input inputlast">
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="primary-btn">Submit Now</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Visit our location</h3>
            <p>
              Eziana Palm Hotel is located in the scenic North Western region of Uganda, specifically in Kiryandongo District, Bweyale. Our
              address is EM Road, P.O Box 123, Kiryandongo, Uganda.
            </p>

            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong> +256 200 903 920, +256 757 251 514
            </p>
            <p>
              <strong>Email:</strong> ezianapalmhotel@gmail.com
            </p>

            <div className="icon">
              <h3>Follow Us</h3>

              <div className="flex_space">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isSubmitted && (
        <div className="notification-popup">
          <h1>Your Message has been sent Successfully!</h1>
          <p>Thank you for contacting Eziana Palm Hotel. We will get back to you soon.</p>
          <button onClick={handleDismiss}>OK</button>
        </div>
      )}
    </>
  );
};

export default ContactFrom;
