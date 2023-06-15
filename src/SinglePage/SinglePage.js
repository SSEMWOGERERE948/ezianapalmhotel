import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../Components/Destinations/Sdata"
import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../Common/HeadTitle/HeadTitle"
import "./singlepage.css"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <p>{item.desc}</p>
                {/* <p>{item.desc}</p> */}

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  {/* <p>{item.sidepara}</p> */}
                </div>
                <h1>Eziana  {item.title} </h1>
                <p>Discover the epitome of luxury at Eziana Palm Hotel, a prestigious four-star establishment renowned for its impeccable service and refined elegance. Set against a backdrop of lush gardens, our hotel exudes a captivating charm that enchants guests from the moment they arrive.

Step into our opulent lobby, where the warm ambiance and attentive staff immediately make you feel at home. The tastefully appointed rooms and suites provide a sanctuary of comfort, featuring plush bedding, modern amenities, and breathtaking views of the meticulously manicured gardens.</p>

                <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
                </div>
                {/* <p>{item.desc}</p> */}
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>Whether you need assistance with room reservations, information about our facilities and amenities, recommendations for local attractions, or any other inquiries, we are ready to provide you with prompt and personalized assistance.</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>

                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
