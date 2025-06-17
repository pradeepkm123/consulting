// src/Components/ClientSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'

const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="client-slider-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center">
              <h4>OUR CLIENTS</h4>
              <h1>Our Valued Clients</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <div className="client-slide">
                <div className="client-image">
                  <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/brand_3.png" alt="Client 1" />
                </div>
              </div>
              <div className="client-slide">
                <div className="client-image">
                  <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/brand_4.png" alt="Client 2" />
                </div>
              </div>
              <div className="client-slide">
                <div className="client-image">
                  <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/brand_5.png" alt="Client 3" />
                </div>
              </div>
              <div className="client-slide">
                <div className="client-image">
                  <img src="https://html.tf.dreamitsolution.net/consalt/assets/images/home_one/brand_1.png" alt="Client 4" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
