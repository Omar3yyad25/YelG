import React from "react";
import ContactForm from "../form/ContactForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  innerPage?: boolean;
};
const ContactSection = ({ innerPage }: Props) => {
  return (
    <section
      className={`rv-2-contact ${
        innerPage ? "rv-inner-contact rv-section-spacing" : ""
      }`}
      id="contact"
    >
      <div className="container">
        {innerPage ? (
          <DivAnimateYAxis className="rv-inner-contact-info-cards">
            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-phone"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Contact Numbers
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul >
                  <li>
                    <a href="tel:0123456789">0123 456 789</a>
                  </li>
                  <li>
                    <a href="tel:9876543210">9876 543 210</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">Email Address</h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul >
                  <li>
                    <a href="mailto:info@yelg.com">info@yelg.com</a>
                  </li>
                  <li>
                    <a href="mailto:test@yelg.com">test@yelg.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-clock"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Hours of Operation
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul >
                  <li>
                    <span className="key">Monday - Friday : </span>
                    <span className="value">08:30 am - 10:00 pm</span>
                  </li>
                  <li>
                    <span className="key">Saturday - Sunday : </span>
                    <span className="value">10:30 am - 08:00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </DivAnimateYAxis>
        ) : (
          <h2 className="rv-2-section-title rv-text-anime">
            Ready to bring your ideas to life? I'm here to help.
          </h2>
        )}

        <div className="row gy-3 gy-sm-4">
          <DivAnimateXAxis position={-60} className="col-xxl-8 col-lg-7">
            <div
              className={`rv-2-contact__txt ${
                innerPage ? "rv-inner-contact__txt" : ""
              }`}
            >
              <h3 className="rv-2-contact-form-title">Let's Connect.</h3>

              <ContactForm innerPage={innerPage ? true : false} />
            </div>
          </DivAnimateXAxis>

          <DivAnimateXAxis className="col-xxl-4 col-lg-5" position={60}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37451031098!2d31.258464350000004!3d30.059488450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1728929663911!5m2!1sen!2seg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
