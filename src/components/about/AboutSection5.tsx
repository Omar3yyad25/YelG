import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AboutSection5 = () => {
  return (
    <section className="rv-6-about pt-60 pb-60">
      <DivAnimateYAxis className="container">
        <div className="row gy-4 gy-sm-5 align-items-center">
          <div className="col-lg-6">
          <div className="rv-6-about__txt">
            <div className="rv-6-section__heading">
              <h2 className="rv-6-section__title rv-text-anime">
                About YelG Advisory: Your Trusted Financial Partner
              </h2>
            </div>
            <p className="rv-6-about__descr">
              Founded in 2017, YelG Advisory is committed to providing comprehensive financial outsourcing services to businesses of all sizes. With over 60 years of combined experience in finance, accounting, and investment, our dedicated team leverages cutting-edge technology and industry best practices to deliver tailored solutions that drive growth and enhance financial performance. We pride ourselves on building long-lasting relationships with our clients, ensuring that their financial needs are met with precision and integrity.
            </p>

            <ul className="rv-5-about__features rv-6-about__features">
              <li className="rv-5-about__feature">Financial Advisory and Reporting</li>
              <li className="rv-5-about__feature">Tax Consultation</li>
              <li className="rv-5-about__feature">Audit and Risk Management</li>
              <li className="rv-5-about__feature">Investment Advisory</li>
              <li className="rv-5-about__feature">Accounting System and Bookkeeping</li>

            </ul>

            <div className="rv-5-about__btns rv-6-about__btns">
              
              <div className="rv-5-about__call rv-6-about__call">
                <span className="rv-5-about__call-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div className="rv-5-about__call-txt">
                  <a href="tel:123654564388" className="">
                    (+20) 109 876 2004
                  </a>
                </div>
              </div>
            </div>
          </div>

          </div>

          <div className="col-lg-6">
            <div className="rv-6-about__img">
              <img src="assets/img/rv-6-about-img-1.jpg" alt="Image" />
              <img src="assets/img/rv-6-about-img-2.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default AboutSection5;
