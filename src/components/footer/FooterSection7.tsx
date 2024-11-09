import Link from "next/link";
import React from "react";

const FooterSection7 = () => {
  return (
    <footer className="rv-1-footer rv-6-footer">
      <div className="container">
        <div className="rv-1-footer-top rv-6-footer-top">
          <div className="row gy-4 gy-sm-5 rv-6-footer-top__row">
            <div className="col-xl-3 col-md-8">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    src="assets/img/rv-6-logo-light-1.png"
                    alt="YelG Advisory Logo"
                    className="logo"
                  />
                </Link>
                <p className="rv-1-footer__about-txt">
                  YelG Advisory offers expert financial services that empower businesses to grow, optimize operations, and achieve long-term stability.
                </p>
                <div className="rv-1-socials">
                  <a href="https://twitter.com/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://facebook.com/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://linkedin.com/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://pinterest.com/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-md-8 col-12">
              <div className="row gy-4">
                <div className="col-6 col-xxs-12 has-anim">
                  <div className="rv-1-footer-widget rv-6-footer-widget">
                    <span className="to-animate"></span>
                    <span className="to-animate reverse"></span>
                    <h5 className="rv-1-footer-widget__title">Services</h5>
                    <ul className="rv-6-footer-widget__links">
                      <li>
                        <a href="#">Accounting & Bookkeeping</a>
                      </li>
                      <li>
                        <a href="#">Financial Advisory</a>
                      </li>
                      <li>
                        <a href="#">Tax Consultation</a>
                      </li>
                      <li>
                        <a href="#">Investment Advisory</a>
                      </li>
                      <li>
                        <a href="#">Audit & Risk Management</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-xxs-12 has-anim">
                  <div className="rv-1-footer-widget rv-6-footer-widget">
                    <span className="to-animate"></span>
                    <h5 className="rv-1-footer-widget__title">Quick Links</h5>
                    <ul className="rv-6-footer-widget__links">
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/services">Our Services</a>
                      </li>
                      <li>
                        <a href="/projects">Case Studies</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="/contact">FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-8">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <form action="#" className="rv-6-footer-nwsltr__form">
                  <div className="nwsltr-top">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email..."
                    />
                    <button>
                      <i className="fa-light fa-paper-plane"></i>
                      <span className="txt">Subscribe</span>
                    </button>
                  </div>
                  <div className="rv-6-footer-nwsltr__checkbox">
                    <input
                      type="checkbox"
                      id="nwsltr-checkbox"
                      name="checkbox"
                      value="1"
                    />
                    <label htmlFor="nwsltr-checkbox">
                      I agree to the <a href="#">Privacy Policy</a>.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="rv-2-footer rv-6-footer-bottom">
          <div className="row gy-4 align-items-center">
            <div className="col-md-7">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} YelG Advisory. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-5">
              <div className="rv-2-footer__nav">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection7;