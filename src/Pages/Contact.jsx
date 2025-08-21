import React from 'react'
import { Link } from 'react-router-dom'
 

function Contact () {

    return (
        <>
          <div className="page-title-area position-relative z-1">
  <div className="container">
    <div className="main-max-width mx-auto">
      <div
        className="page-title-content"
        data-cue="slideInUp"
        data-show="true"
        style={{
          animationName: "slideInUp",
          animationDuration: "600ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <h1>Contact</h1>
        <ul className="list-unstyled mb-0 ps-0">
          <li className="d-inline-block position-relative">
            <Link to="/">Home</Link>
          </li>
          <li className="d-inline-block position-relative">Contact</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="shapes">
    <div className="shape2">
      <img src="assets/images/shapes/shape2.png" alt="shape" />
    </div>
    <div className="shape4">
      <img src="assets/images/shapes/shape4.png" alt="shape" />
    </div>
  </div>
</div>

<div className="contact-area pt-100 pb-75">
  <div className="container">
    <div className="main-max-width mx-auto">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="single-contact-form">
            <div className="section-title">
              <span className="d-block sub-title position-relative">
                Contact Us
              </span>
              <h2>Get In Touch</h2>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="default-btn border-0 text-center"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-contact-image">
            <img
              src="assets/images/single-contact-image.html"
              alt="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="contact-area pb-75">
  <div className="container">
    <div className="main-max-width mx-auto">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="single-contact-info">
            <h1>Contact Info</h1>
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="ph-fill ph-phone" />
              </div>
              <ul className="list-unstyled ps-0 mb-0 list">
                <li>Phone</li>
                <li>
                  <a href="tel:4065550120">(406) 555-0120</a>
                </li>
                <li>
                  <a href="tel:6845550102">(684) 555-0102</a>
                </li>
              </ul>
            </div>
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="ph-fill ph-envelope" />
              </div>
              <ul className="list-unstyled ps-0 mb-0 list">
                <li>Email</li>
                <li>
                  <a href="mailto:insotrans@gmail.com">insotrans@gmail.com</a>
                </li>
                <li>
                  <a href="mailto:insotrans@gmail.com">insotrans@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="ph-bold ph-map-pin" />
              </div>
              <ul className="list-unstyled ps-0 mb-0 list">
                <li>Location</li>
                <li>
                  <span>2118 Thornridge Cir. Syracuse,</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="contact-map-info">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52466279.074015416!2d-161.47077103593702!3d36.61946473137947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1716374957751!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Contact