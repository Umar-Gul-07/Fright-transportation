import React from 'react'
import { Link } from 'react-router-dom'
import { ContactInfo } from '../Utils/Data'
 

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
               src="assets/images/about/about1.jpg"
               alt="Contact Us"
               style={{
                 width: '100%',
                 height: 'auto',
                 borderRadius: '10px',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}
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
                  <a href="contact_phone">{ContactInfo.contact_phone}</a>
                </li>
                <li>
                  <a href="contact_phone">{ContactInfo.contact_phone}</a>
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
                  <a href="mailto:contact_email">{ContactInfo.contact_email}</a>
                </li>
                <li>
                  <a href="mailto:contact_email_yahoo">{ContactInfo.contact_email_yahoo}</a>
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
                                     <a 
                     href={ContactInfo.googleMapsDirectUrl} 
                     target="_blank" 
                     rel="noreferrer"
                     style={{ color: 'inherit', textDecoration: 'none' }}
                     title="Click to open in Google Maps"
                   >
                    {ContactInfo.address}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="contact-map-info">
             <div 
               className="map-placeholder"
               style={{
                 width: '100%',
                 height: '400px',
                 background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
                 borderRadius: '10px',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 cursor: 'pointer',
                 position: 'relative',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}
               onClick={() => window.open(ContactInfo.googleMapsDirectUrl, '_blank')}
               title="Click to open Google Maps"
             >
               <div style={{ fontSize: '48px', marginBottom: '20px' }}>🗺️</div>
               <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Delhi Sweets Location</h3>
               <p style={{ margin: '0 0 20px 0', color: '#666', textAlign: 'center' }}>
                 {ContactInfo.address}
               </p>
               <button 
                 style={{
                   padding: '12px 24px',
                   backgroundColor: '#25d366',
                   color: 'white',
                   border: 'none',
                   borderRadius: '6px',
                   cursor: 'pointer',
                   fontSize: '16px',
                   fontWeight: '500',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.backgroundColor = '#128c7e'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = '#25d366'}
               >
                 Open in Google Maps
               </button>
             </div>
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