import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sdata from "../Components/Destinations/Sdata";
import EmptyFile from "../Common/Empty/EmptyFile";
import { useParams } from "react-router-dom";
import HeadTitle from "../Common/HeadTitle/HeadTitle";
import "./singlepage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/destinations" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            <article className="content">
              <div className="main-content">
                <img src={item.image} alt="" />
                <h1>Eziana {item.title}</h1>
                <p>{item.desc}</p>

                <div className="para">
                  <p>{item.sidepara}</p>
                </div>

                <div className="image grid1">
                  <img src={item.paraImage_one} alt="" />
                  <img src={item.paraImage_two} alt="" />
                </div>
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>How can we help you?</h2>
                  <p>
                    Whether you need assistance with room reservations,
                    information about our facilities and amenities,
                    recommendations for local attractions, or any other
                    inquiries, we are ready to provide you with prompt and
                    personalized assistance.
                  </p>
                  <Link to="/contact" className="secondary-btn">
                    Contact us{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>

                <div className="box">
                  <p>{item.sidepara}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default SinglePage;
