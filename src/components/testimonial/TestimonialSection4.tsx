"use client";
import React, { useState } from "react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection4 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section className="rv-6-testimonial rv-section-spacing">
      <DivAnimateYAxis className="container">
        <div className="rv-6-testimonial__inner">
          <div className="rv-6-testimonial__img-slider-container">
            <Swiper
              className="rv-6-testimonial__img-slider"
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              slidesPerView={1}
              effect="fade"
              spaceBetween={50}
              loop={true}
              allowTouchMove={false}
              modules={[EffectFade]}
            >
              <SwiperSlide className=" rv-6-testimonial__img-slide">
                <img
                  src="assets/img/rv-6-reviewer-1.jpg"
                  alt="Reviewer Image"
                />
              </SwiperSlide>
              <SwiperSlide className=" rv-6-testimonial__img-slide">
                <img
                  src="assets/img/rv-6-reviewer-2.jpg"
                  alt="Reviewer Image"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <Swiper
            className="rv-6-testimonial__txt-slider"
            autoplay={true}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            pagination={{
              el: "#rv-6-testimonial__slider-pagination",
              type: "fraction",

              renderFraction: function (currentClass, totalClass) {
                return (
                  '0<span class="' +
                  currentClass +
                  '"></span>' +
                  " / " +
                  '0<span class="' +
                  totalClass +
                  '"></span>'
                );
              },
            }}
            navigation={{
              nextEl: ".rv-6-testimonial-slider-nav .next",
              prevEl: ".rv-6-testimonial-slider-nav .prev",
            }}
            modules={[Autoplay, Thumbs, Pagination, Navigation]}
          >
            <SwiperSlide className="rv-6-testimony-txt-slide ">
              <div className="rv-5-testimony__stars">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
              </div>

              <p className="rv-6-testimony__txt">
                "YelG Advisory transformed our financial operations. Their expertise in investment strategy helped us increase profitability while minimizing risks. We highly recommend their services to any business seeking financial growth and stability."
              </p>

              <div className="rv-5-testimony-reviewer">
                <h5 className="rv-6-testimony-reviewer__name">Omar Ayyad</h5>
                <span className="rv-5-testimony-reviewer__infos">
                  <span className="service">Investment Advisory</span> -{" "}
                  <span className="date">10.02.2023</span>
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="rv-6-testimony-txt-slide ">
              <div className="rv-5-testimony__stars">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
              </div>

              <p className="rv-6-testimony__txt">
                "Thanks to YelG Advisory’s meticulous accounting services, we’ve been able to streamline our processes and focus on scaling our business. Their team is always there to offer expert advice and solutions."
              </p>

              <div className="rv-5-testimony-reviewer">
                <h5 className="rv-6-testimony-reviewer__name">Muhammed Hijazi</h5>
                <span className="rv-5-testimony-reviewer__infos">
                  <span className="service">Accounting Services</span> -{" "}
                  <span className="date">18.05.2023</span>
                </span>
              </div>
            </SwiperSlide>

            <div className="rv-6-testimonial-slider-controls">
              <div className="rv-6-testimonial-slider-nav">
                <button className="prev">
                  <img src="assets/img/rv-6-slider-icon-1.png" alt="nav icon" />
                </button>
                <button className="next">
                  <img src="assets/img/rv-6-slider-icon-2.png" alt="nav icon" />
                </button>
              </div>

              <div
                className="rv-6-testimonial__slider-pagination"
                id="rv-6-testimonial__slider-pagination"
              ></div>
            </div>
          </Swiper>
        </div>
      </DivAnimateYAxis>

      <div className="rv-6-testimonial__right-img">
        <img src="assets/img/rv-6-right-img-1.png" alt="Image" />
        <img src="assets/img/rv-6-right-img-2.png" alt="Image" />
        <img src="assets/img/rv-6-right-img-3.png" alt="Image" />
        <img src="assets/img/rv-6-right-img-4.png" alt="Image" />
      </div>
    </section>
  );
};

export default TestimonialSection4;
