import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>At Eziana Palm Hotel, we pride ourselves on offering a range of exceptional features and services to enhance your stay. Discover the following features that make Eziana a truly remarkable destination:</p>
            <ul>
            <li>
            <p>Luxurious Accommodations: Experience unparalleled comfort in our meticulously designed rooms and suites, featuring elegant furnishings, modern amenities, and breathtaking views.</p>
            </li>

            <li>
            <p>Exquisite Dining: Indulge in a culinary journey at our renowned restaurant, where our talented chefs create delectable dishes inspired by both local and international flavors. Immerse yourself in a world of gastronomic delights.</p>
            </li>
           
            <li>
            <p>Serene Gardens: Explore our meticulously landscaped gardens, a verdant oasis that invites you to unwind, stroll, and connect with nature. Lose yourself in the tranquility of our lush surroundings.</p>
            </li>
           
            <li>
            <p>State-of-the-Art Facilities: Enjoy access to our state-of-the-art facilities, including a well-equipped fitness center, rejuvenating spa, and refreshing swimming pool. Experience ultimate relaxation and rejuvenation.</p>
            </li>
            </ul>
           
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
