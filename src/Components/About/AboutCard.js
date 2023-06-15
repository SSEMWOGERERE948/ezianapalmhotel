import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
          Welcome to Eziana Palm Hotel
        </h1>
        <span><i><strong>Experience Luxury and Tranquility</strong></i></span>
        <p>
          At Eziana Palm Hotel, we believe in providing exceptional experiences
          that go beyond expectations. Discover a world of luxury and
          tranquility where every detail is meticulously crafted to ensure your
          utmost comfort and satisfaction.
        </p>
        <p>
          Immerse yourself in the captivating ambiance of our elegant
          accommodations, indulge in exquisite dining options, and rejuvenate
          your senses with our premium facilities and personalized services.
          Whether you're here for business or leisure, our dedicated team is
          committed to making your stay truly memorable.
        </p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
