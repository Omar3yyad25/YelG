"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection7 = () => {
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const textsToAnimate = currentSlide.querySelectorAll(".rv-text-anime");
        textsToAnimate.forEach((textToAnimate: HTMLElement) => {
          const animate = new SplitType(textToAnimate, {
            types: "words,chars",
          });
          gsap.from(animate.chars, {
            opacity: 0,
            x: 100,
            duration: 1.1,
            stagger: { amount: 0.9 },
          });
        });
      });
    }
  }, [swiper]);
  return (
    <section className="rv-6-banner">
      <div className="container">
        <Swiper
          className="rv-6-banner__slider"
          slidesPerView={1}
          loop={true}
          effect="fade"
          navigation={{
            prevEl: "#rv-6-banner__slider-nav .prev",
            nextEl: "#rv-6-banner__slider-nav .next",
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[EffectFade, Navigation]}
        >
          <SwiperSlide className="rv-6-banner__slide">
            <div className="row gy-sm-5 gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="rv-6-banner__txt">
                  
                  <h1 className="rv-6-banner__title rv-text-anime">
                  Hi Your Financial Future with Precision and Trust.
                  </h1>
                  <p className="rv-6-banner__descr rv-text-anime">
                  Committed to delivering high-quality services that drive sustainable growth.
                  </p>
                  <a href="#" className="rv-6-def-btn">
                    Contact us
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rv-6-banner__img">
                  <img src="assets/img/rv-6-banner-1.png" alt="Banner Vector" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="rv-6-banner__slide">
            <div className="row gy-sm-5 gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="rv-6-banner__txt">
                  
                  <h1 className="rv-6-banner__title rv-text-anime">
                    Your Trusted Partner for Financial Excellence and Strategic Growth.
                  </h1>
                  <p className="rv-6-banner__descr rv-text-anime">
                  We provide tailored financial solutions to help your business thrive.
                  </p>
                  <a href="#" className="rv-6-def-btn">
                    Contact us
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rv-6-banner__img">
                  <img src="assets/img/rv-6-banner-2.png" alt="Banner Vector" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="rv-1-socials rv-3-banner__socials">
          <h6>Follow us</h6>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="rv-1-slider-nav" id="rv-6-banner__slider-nav">
          <button className="prev">
            <i className="fa-regular fa-arrow-left"></i>
          </button>
          <button className="next">
            <i className="fa-regular fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection7;
