import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ContactInfo } from '../Utils/Data'

const Home = () => {

  // Function to replace hardcoded social media links
  const replaceSocialLinks = () => {
    const socialLinks = document.querySelectorAll('a[href*="instagram.com"], a[href*="twitter.com"], a[href*="facebook.com"], a[href*="youtube.com"]');
    socialLinks.forEach(link => {
      if (link.href.includes('instagram.com')) {
        link.href = ContactInfo.instagram;
      } else if (link.href.includes('twitter.com')) {
        link.href = ContactInfo.twitter;
      } else if (link.href.includes('facebook.com')) {
        link.href = ContactInfo.facebook;
      } else if (link.href.includes('youtube.com')) {
        link.href = ContactInfo.youtube;
      }
    });
  };

  useEffect(() => {
    // Replace social media links
    replaceSocialLinks();

    // Counter animation functionality
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.textContent);
          let current = 0;
          const increment = target / 100;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.floor(current) + (counter.textContent.includes('K') ? 'K' : '') + (counter.textContent.includes('+') ? '+' : '');
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + (counter.textContent.includes('K') ? 'K' : '') + (counter.textContent.includes('+') ? '+' : '');
            }
          };
          
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, observerOptions);

    // Observe all counter elements
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => counterObserver.observe(counter));

    // YouTube popup functionality
    const popupButtons = document.querySelectorAll('.popup-youtube');
    popupButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const url = button.getAttribute('href');
        const videoId = url.split('v=')[1];
        const popup = window.open(`https://www.youtube.com/embed/${videoId}?autoplay=1`, 'youtube-popup', 'width=800,height=600');
        if (popup) {
          popup.focus();
        }
      });
    });

    // Portfolio hover effects
    const portfolioBoxes = document.querySelectorAll('.box');
    portfolioBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.classList.add('active');
        portfolioBoxes.forEach(otherBox => {
          if (otherBox !== box) {
            otherBox.classList.remove('active');
          }
        });
      });
    });

    return () => {
      // Cleanup
      counters.forEach(counter => counterObserver.unobserve(counter));
      popupButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="banner-area position-relative z-1">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div
              className="row align-items-center"
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
              <div className="col-lg-12">
                <div className="banner-content text-center">
                  <div className="title">
                    <span className="sub-title position-relative d-block">
                      Jabbi International
                    </span>
                    <h1>Your Trusted Partner in Customs Clearance & Freight Forwarding</h1>
                    <p>
                      Fast, reliable, and hassle-free solutions for your import and export needs.
                    </p>
                  </div>
                  <ul className="list-unstyled ps-0 mb-0 banner-button">
                    <li className="d-inline-block">
                      <Link className="default-btn style-1" to="/about">
                        Learn More
                        <i className="ph-bold ph-arrow-right" />
                      </Link>
                    </li>
                    <li className="d-inline-block">
                      <Link className="default-btn style-1" to="/contact">
                        Contact Us
                        <i className="ph-bold ph-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="features-area pb-75 position-relative z-1">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div
              className="row justify-content-center"
              data-cues="fadeIn"
              data-disabled="true"
            >
              <div
                className="col-lg-4 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-features-info position-relative z-1">
                  <div className="content">
                    <h2>01</h2>
                    <div className="arrow-btn d-flex align-items-center justify-content-between">
                      <h3>
                        <Link to="/services">Air Freight Services</Link>
                      </h3>
                      <Link className="icon" to="/services">
                        <i className="ph ph-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="hover-content">
                    <h2>01</h2>
                    <h3>
                      <Link to="services">Air Freight Services</Link>
                    </h3>
                    <p>
                      Transportation is a vital aspect of modern life, shaping the way
                      people and goods move from one place to another.
                    </p>
                    <Link className="icon" to="services">
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "180ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-features-info position-relative z-1">
                  <div className="content">
                    <h2>02</h2>
                    <div className="arrow-btn d-flex align-items-center justify-content-between">
                      <h3>
                        <Link to="services">Logistic Services</Link>
                      </h3>
                      <Link className="icon" href="services">
                        <i className="ph ph-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="hover-content">
                    <h2>02</h2>
                    <h3>
                      <Link to="services">Logistic Services</Link>
                    </h3>
                    <p>
                      Transportation is a vital aspect of modern life, shaping the way
                      people and goods move from one place to another.
                    </p>
                    <Link className="icon" to="services">
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "360ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-features-info position-relative z-1">
                  <div className="content">
                    <h2>03</h2>
                    <div className="arrow-btn d-flex align-items-center justify-content-between">
                      <h3>
                        <Link href="services">Road Transport</Link>
                      </h3>
                      <Link className="icon" href="services">
                        <i className="ph ph-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="hover-content">
                    <h2>03</h2>
                    <h3>
                      <Link to="services">Road Transport</Link>
                    </h3>
                    <p>
                      Transportation is a vital aspect of modern life, shaping the way
                      people and goods move from one place to another.
                    </p>
                    <Link className="icon" to="services">
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="about-area pb-75">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div
              className="row align-items-center"
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
              <div className="col-lg-5">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-title position-relative d-block">
                      About Us
                    </span>
                    <h2>Welcome to our Transport Company.</h2>
                  </div>
                  <p>
                    The efficiency and reliability of transport systems play a crucial
                    role in connecting communities, driving economic growth, and
                    fostering global interactions. With advancements in technology,
                  </p>
                  <h6 className="growth">
                    Competently Implement efficient e - Commerce without cross-unit
                    growth strategies.
                  </h6>
                  <ul className="list-unstyled ps-0 mb-0 about-btn">
                    <li className="d-inline-block">
                      <Link className="default-btn style-1" to="/about">
                        Learn More
                        <i className="ph-bold ph-arrow-right" />
                      </Link>
                    </li>
                    <li className="d-inline-block">
                      <div className="user d-flex align-items-center">
                        <div className="image">
                          <img
                            src="assets/images/about/about1.jpg"
                            alt="about-image"
                          />
                        </div>
                        <div className="content">
                          <h3>Nosaki Car</h3>
                          <p>Product Designer</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-image">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-sm-8">
                      <div className="image position-relative z-1">
                        <img src="assets/images/about/about2.jpg" alt="about-image" />
                        <a
                          href="https://www.youtube.com/watch?v=9No-FiEInLA"
                          className="play-btn popup-youtube"
                          target="_blank" 
                          rel="noreferrer"
                        >
                          <i className="ph-fill ph-play" />
                        </a>
                        <span className="experience">28+ Years Experience</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="content">
                        <div className="content-info">
                          <h2>
                            <span className="counter">20</span>+
                          </h2>
                          <p>Years of Experience</p>
                        </div>
                        <div className="content-info">
                          <h2>
                            <span className="counter">100</span>+
                          </h2>
                          <p>Clients Served</p>
                        </div>
                        <div className="content-info">
                          <h2>
                            <span className="counter">5500</span>+
                          </h2>
                          <p>Shipments Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="services-area pb-75">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div className="services-section-title">
              <div
                className="row align-items-center"
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
                <div className="col-lg-12 col-sm-12">
                  <div className="section-title text-center">
                    <span className="d-block sub-title position-relative">
                      Our Services
                    </span>
                    <h2>Complete Range of Logistics & Trade Facilitation Services</h2>
                    <p className="mt-3">
                      At Jabbi International, we provide a complete range of logistics and trade facilitation services designed to make your import and export operations smooth and stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center"
              data-cues="fadeIn"
              data-disabled="true"
            >
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-services-info position-relative z-1">
                  <div className="image">
                    <img
                      src="assets/images/services/services1.jpg"
                      alt="Customs Clearance"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="/services">Customs Clearance</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="/services">Customs Clearance</a>
                    </h3>
                    <p>Fast and efficient clearance for imports and exports, ensuring compliance with all regulations and minimizing delays at ports and borders.</p>
                    <a href="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "180ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-services-info position-relative z-1">
                  <div className="image">
                    <img
                      src="assets/images/services/services2.jpg"
                      alt="Freight Consultancy"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="/services">Freight Consultancy</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="/services">Freight Consultancy</a>
                    </h3>
                    <p>Expert advice on the most cost-effective and time-efficient transport modes, routes, and strategies for your shipments.</p>
                    <a href="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "360ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-services-info position-relative z-1">
                  <div className="image">
                    <img
                      src="assets/images/services/services3.jpg"
                      alt="Documentation Assistance"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="/services">Documentation Assistance</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="/services">Documentation Assistance</a>
                    </h3>
                    <p>Complete support for all shipping and trade documents, including bills of lading, commercial invoices, packing lists, and customs forms.</p>
                    <a href="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "540ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-services-info position-relative z-1">
                  <div className="image">
                    <img
                      src="assets/images/services/services4.jpg"
                      alt="In-Country Transport"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="/services">In-Country Transport</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="/services">In-Country Transport</a>
                    </h3>
                    <p>Secure and timely domestic transportation from ports to warehouses, factories, or final delivery points.</p>
                    <a href="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

















      <div className="testimonial-area">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div
              className="row"
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
              <div className="col-lg-5">
                <div className="testimonial-content">
                  <div className="section-title">
                    <span className="d-block sub-title position-relative">
                      Our Testimonial
                    </span>
                    <h2>Our Client's Feedback</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-card">
                  <div className="testimonial-slider owl-carousel owl-nav owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(-1395px, 0px, 0px)",
                          transition: "0.25s",
                          width: 4883
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "672.5px", marginRight: 25 }}
                        >
                          <div className="single-testimonial-card">
                            <h6 className="d-flex align-items-center">
                              4.5
                              <i className="ph-fill ph-star" />
                            </h6>
                            <p>
                              Identifying and mitigating risks associated with global
                              logistics, such as geopolitical issues, natural
                              disasters, and supply chain disruptions. Knowledge of
                              various shipping methods,including air, sea, and land
                              transport. Familiarity with freight forwarding, customs
                              regulations, and documentation required for
                              international shipments.
                            </p>
                            <div className="user d-flex align-items-center">
                              <div className="image">
                                <img
                                  src="assets/images/testimonial/testimonial1.jpg"
                                  alt="testimonial-image"
                                />
                              </div>
                              <div className="content">
                                <h3>Cary Marathi</h3>
                                <p>Designer</p>
                              </div>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/images/quotes-icon.svg"
                                alt="quote-icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <button type="button" role="presentation" className="owl-prev">
                        <i className="ph-bold ph-arrow-left" />
                      </button>
                      <button type="button" role="presentation" className="owl-next">
                        <i className="ph-bold ph-arrow-right" />
                      </button>
                    </div>
                    <div className="owl-dots disabled" />
                    <div className="owl-thumbs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-area ptb-100">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div
              className="faq-info"
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
              <div className="faq-content">
                <div className="section-title">
                  <span className="d-block sub-title position-relative">FAQ</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-accordion accordion" id="faqAccordion">
                  <div
                    className="accordion-item"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionCollapseTwo"
                      aria-expanded="false"
                      aria-controls="accordionCollapseTwo"
                    >
                      What services does Jabbi International provide?
                    </button>
                    <div
                      id="accordionCollapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          We provide comprehensive freight transportation services including sea freight, 
                          air freight, customs clearance, warehousing, door-to-door delivery, and 
                          project cargo handling from Karachi Port to worldwide destinations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
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
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionCollapseOne"
                      aria-expanded="true"
                      aria-controls="accordionCollapseOne"
                    >
                      How long does shipping take from Karachi Port?
                    </button>
                    <div
                      id="accordionCollapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Shipping times vary depending on destination and service type. Sea freight 
                          typically takes 15-45 days, while air freight takes 3-7 days. We provide 
                          real-time tracking for all shipments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionCollapseThree"
                      aria-expanded="false"
                      aria-controls="accordionCollapseThree"
                    >
                      Do you handle customs clearance?
                    </button>
                    <div
                      id="accordionCollapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we provide complete customs clearance services including documentation, 
                          duty calculation, and compliance with all import/export regulations to ensure 
                          smooth clearance of your cargo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div className="blog-section-title">
              <div
                className="row align-items-center"
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
                <div className="col-lg-8 col-sm-8">
                  <div className="section-title">
                    <span className="d-block sub-title position-relative">
                      Latest News
                    </span>
                    <h2>Industry Updates & Insights</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <Link className="default-btn style-1" to="/blog">
                    View All News
                    <i className="ph-bold ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center"
              data-cues="fadeIn"
              data-disabled="true"
            >
              <div
                className="col-lg-4 col-md-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-blog-card">
                  <div className="image">
                    <Link to="/blog" className="d-block">
                      <img src="assets/images/blog/blog1.jpg" alt="blog-image" />
                    </Link>
                  </div>
                  <div className="content d-flex justify-content-between">
                    <div className="text position-relative">
                      <ul className="list-unstyled ps-0">
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-user-circle" />
                          <Link to="/blog">Admin</Link>
                        </li>
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-chat-teardrop-dots" />
                          (02) Comment
                        </li>
                      </ul>
                      <h3>
                        <Link to="/blog">
                          New Shipping Routes from Karachi Port
                        </Link>
                      </h3>
                      <p>Expanding our global reach with new direct routes to major markets.</p>
                    </div>
                    <div className="date">
                      <h3>25</h3>
                      <p>Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "180ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-blog-card">
                  <div className="image">
                    <Link to="/blog">
                      <img src="assets/images/blog/blog2.jpg" alt="blog-image" />
                    </Link>
                  </div>
                  <div className="content d-flex justify-content-between">
                    <div className="text position-relative">
                      <ul className="list-unstyled ps-0">
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-user-circle" />
                          <Link to="/blog">Admin</Link>
                        </li>
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-chat-teardrop-dots" />
                          (02) Comment
                        </li>
                      </ul>
                      <h3>
                        <Link to="/blog">
                          Customs Regulations Update 2024
                        </Link>
                      </h3>
                      <p>Latest updates on import/export regulations and compliance requirements.</p>
                    </div>
                    <div className="date">
                      <h3>26</h3>
                      <p>Nov</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "360ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-blog-card">
                  <div className="image">
                    <Link to="/blog">
                      <img src="assets/images/blog/blog3.jpg" alt="blog-image" />
                    </Link>
                  </div>
                  <div className="content d-flex justify-content-between">
                    <div className="text position-relative">
                      <ul className="list-unstyled ps-0">
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-user-circle" />
                          <Link to="/blog">Admin</Link>
                        </li>
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-chat-teardrop-dots" />
                          (02) Comment
                        </li>
                      </ul>
                      <h3>
                        <Link to="/blog">
                          Sustainable Logistics Solutions
                        </Link>
                      </h3>
                      <p>Implementing eco-friendly practices in our freight operations.</p>
                    </div>
                    <div className="date">
                      <h3>28</h3>
                      <p>Nov</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner-area pb-100">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div
              className="section-title text-center"
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
              <span className="d-inline-block sub-title position-relative">
                Trusted Partners
              </span>
              <h2>Our Global Network</h2>
            </div>
            <div className="row gx-0" data-cues="fadeIn" data-disabled="true">
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-partner-info position-relative">
                  <div className="image">
                    <img
                      src="assets/images/partner/partner-logo1.png"
                      alt="partner-logo"
                    />
                  </div>
                  <div className="hover-image">
                    <img
                      src="assets/images/partner/partner-logo5.png"
                      alt="partner-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "180ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-partner-info position-relative active">
                  <img
                    src="assets/images/partner/partner-logo8.png"
                    alt="partner-logo"
                  />
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "360ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-partner-info position-relative">
                  <div className="image">
                    <img
                      src="assets/images/partner/partner-logo3.png"
                      alt="partner-logo"
                    />
                  </div>
                  <div className="hover-image">
                    <img
                      src="assets/images/partner/partner-logo6.png"
                      alt="partner-logo"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-cue="fadeIn"
                data-show="true"
                style={{
                  animationName: "fadeIn",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "540ms",
                  animationDirection: "normal",
                  animationFillMode: "both"
                }}
              >
                <div className="single-partner-info position-relative">
                  <div className="image">
                    <img
                      src="assets/images/partner/partner-logo4.png"
                      alt="partner-logo"
                    />
                  </div>
                  <div className="hover-image">
                    <img
                      src="assets/images/partner/partner-logo7.png"
                      alt="partner-logo"
                    />
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

export default Home
