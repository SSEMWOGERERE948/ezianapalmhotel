import React, { useState } from "react";
import "./Contact.css";
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");

    // const contactsRef = firebase.firestore().collection('contacts');

    contactsRef
      .add({
        fname,
        lname,
        phone,
        email,
        subject,
        company,
        message,
      })
      .then(() => {
        console.log('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>Subject</span>
                  <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Your Company</span>
                  <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn' type='submit'>Submit Now</button>
            </form>
          </div>

          <div className='side-content'>
            <h3>Visit our location</h3>
            <p>Eziana Palm Hotel is located in the scenic North Western region of Uganda, specifically in Kiryandongo District, Bweyale. Our address is EM Road, P.O. Box 166. Nestled amidst the captivating natural beauty of this area, our hotel offers a serene and picturesque setting for a truly memorable stay.</p>
            <br />

            <h3>Message us</h3>
            <span>ezianapalmhotel@gmail.com</span>
            <br />
            <span>+256 200 903 920</span><br />
            <span>+256 757 251 514</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } = cureentValue;
          return (
            <div className='sign-box'>
              <h1>Send Successfully</h1>
              <h3>
                First Name : <p>{fname}</p>
              </h3>
              <h3>
                Last Name : <p>{lname}</p>
              </h3>
              <h3>
                Contact Number : <p>{phone}</p>
              </h3>
              <h3>
                Email : <p>{email}</p>
              </h3>
              <h3>
                Subject : <p>{subject}</p>
              </h3>
              <h3>
                Company Name: <p>{company}</p>
              </h3>
              <h3>
                Your Message : <p>{message}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactForm;
