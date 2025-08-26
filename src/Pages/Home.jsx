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
              <div className="col-lg-6">
                <div className="banner-content">
                  <div className="title">
                    <span className="sub-title position-relative d-block">
                      InsoTrans Logistic &amp; Transport
                    </span>
                    <h1>Global Logistics Expertise.</h1>
                    <p>
                      Transportation is a vital aspect of modern life, shaping the way
                      people and goods move from one place to another. Whether by
                      road, rail, air, or sea, the efficiency and reliability of
                      transport systems.
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
              <div className="col-lg-6">
                <div className="banner-form">
                  <div className="title">
                    <h3>Get a Quick Quote</h3>
                    <p>For Detailed quote use extended version</p>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">From</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select Destination..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">To</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select Destination..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Truckload</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Commodity</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select..."
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="filter-info position-relative">
                    <h6>Dist. (Miles)</h6>
                    <div className="range-slider">
                      <input
                        className="range-slider-range"
                        type="range"
                        defaultValue="$250"
                        min={0}
                        max={500}
                      />
                      <span className="range-slider-value">$250</span>
                    </div>
                  </div>
                  <div className="refrigerated d-flex align-items-center">
                    <h3>Refrigerated</h3>
                    <input type="checkbox" id="switch" />
                    <label htmlFor="switch">Toggle</label>
                  </div>
                  <button
                    type="submit"
                    className="submit-button border-0 box-shadow-0"
                  >
                    Submit
                  </button>
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
                          href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          className="play-btn popup-youtube"
                          target="_blank" rel="noreferrer"
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
                            <span className="counter">50</span>+
                          </h2>
                          <p>International Airports</p>
                        </div>
                        <div className="content-info">
                          <h2>
                            <span className="counter">750</span>+
                          </h2>
                          <p>Branches The World</p>
                        </div>
                        <div className="content-info">
                          <h2>
                            <span className="counter">96</span>K+
                          </h2>
                          <p>Deliveries Per Day</p>
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
                <div className="col-lg-8 col-sm-8">
                  <div className="section-title">
                    <span className="d-block sub-title position-relative">
                      Services
                    </span>
                    <h2>Provide us with reliable Service</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <a className="default-btn style-1" href="services.html">
                    See All
                    <i className="ph-bold ph-arrow-right" />
                  </a>
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
                      alt="services-image"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="services-details.html">Real-Time Tracking</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="services-details.html">Real-Time Tracking</a>
                    </h3>
                    <a href="services-details.html" className="read-more">
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
                      alt="services-image"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="services-details.html">Real-Time Tracking</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="services-details.html">Real-Time Tracking</a>
                    </h3>
                    <a href="services-details.html" className="read-more">
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
                      alt="services-image"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="services-details.html">Security for Cargo</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="services-details.html">Security for Cargo</a>
                    </h3>
                    <a href="services-details.html" className="read-more">
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
                      alt="services-image"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="services-details.html">End To End Solutions</a>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <a href="services-details.html">End To End Solutions</a>
                    </h3>
                    <a href="services-details.html" className="read-more">
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




      <div className="portfolio-area pb-75">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div className="portfolio-section-title">
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
                <div className="col-lg-6 col-sm-6">
                  <div className="section-title">
                    <span className="sub-title d-block position-relative">
                      Our Latest Portfolio
                    </span>
                    <h2>Recent Projects</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <Link className="default-btn style-1" to="/portfolio">
                    View All Projects
                    <i className="ph-bold ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="portfolio-content">
              <div
                className="projects-box-info"
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
                <ul className="main-box">
                  <li className="box" style={{ width: "25%" }}>
                    <div className="show-content">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>Air freight solution</h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="detail active">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>
                            <Link to="/portfolio">Air freight solution</Link>
                          </h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="box bg-1 active" style={{ width: "25%" }}>
                    <div className="show-content">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>Air freight solution</h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="detail">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>
                            <Link to="/portfolio">Air freight solution</Link>
                          </h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="box bg-2" style={{ width: "25%" }}>
                    <div className="show-content">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>Air freight solution</h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="detail">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>
                            <Link to="/portfolio">Air freight solution</Link>
                          </h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="box bg-3" style={{ width: "25%" }}>
                    <div className="show-content">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>Air freight solution</h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="detail">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>
                            <Link to="/portfolio">Air freight solution</Link>
                          </h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="box bg-4" style={{ width: "25%" }}>
                    <div className="show-content">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>Air freight solution</h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="detail">
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="text">
                          <p>Transport Logistic</p>
                          <h3>
                            <Link to="/portfolio">Air freight solution</Link>
                          </h3>
                        </div>
                        <div className="icon">
                          <Link to="/portfolio">
                            <i className="ph-bold ph-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="pricing-area pb-75">
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
              <div className="col-lg-4 col-md-12">
                <div className="pricing-content">
                  <div className="slideToggle">
                    <label className="form-switch">
                      <span className="beforeinput text-success">Monthly</span>
                      <input type="checkbox" id="js-contcheckbox" />
                      <i />
                      <span className="afterinput">Yearly</span>
                    </label>
                  </div>
                  <ul className="list-unstyled ps-0 mb-0 list">
                    <li className="position-relative d-block">
                      Express Shipping Solutions
                      <i className="ph-bold ph-check" />
                    </li>
                    <li className="position-relative d-block active">
                      Strategic Transport Salutation
                      <i className="ph-bold ph-check" />
                    </li>
                    <li className="position-relative d-block">
                      Efficient Transportation Services
                      <i className="ph-bold ph-check" />
                    </li>
                    <li className="position-relative d-block">
                      Secure Warehouse Solutions
                      <i className="ph-bold ph-check" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="pricing-card">
                  <div className="single-pricing-card d-flex justify-content-between">
                    <div className="content">
                      <h3 className="d-flex align-items-center">
                        Standard Plan
                        <span>Save 25%</span>
                      </h3>
                      <h1 className="js-montlypricing">
                        20 <sub>/ Per Monthly</sub>
                      </h1>
                      <h1 className="js-yearlypricing">
                        70 <sub>/ Per Yearly</sub>
                      </h1>
                    </div>
                    <div className="list">
                      <ul className="list-unstyled ps-0 mb-0">
                        <li className="position-relative">
                          1 warehouse
                          <i className="ph-bold ph-plus" />
                        </li>
                        <li className="position-relative">
                          3650 Kg load
                          <i className="ph-bold ph-plus" />
                        </li>
                        <li className="position-relative">
                          Careful handling of goods
                          <i className="ph-bold ph-plus" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-card">
                  <div className="single-pricing-card d-flex justify-content-between">
                    <div className="content">
                      <h3 className="d-flex align-items-center">
                        Enterprise Plan
                        <span>Save 30%</span>
                      </h3>
                      <h1 className="js-montlypricing">
                        20 <sub>/ Per Monthly</sub>
                      </h1>
                      <h1 className="js-yearlypricing">
                        60 <sub>/ Per Yearly</sub>
                      </h1>
                      <a className="default-btn" href="pricing.html">
                        Get Start
                      </a>
                    </div>
                    <div className="list">
                      <ul className="list-unstyled ps-0 mb-0">
                        <li className="position-relative">
                          1 warehouse
                          <i className="ph-bold ph-plus" />
                        </li>
                        <li className="position-relative">
                          3650 Kg load
                          <i className="ph-bold ph-plus" />
                        </li>
                        <li className="position-relative">
                          Careful handling of goods
                          <i className="ph-bold ph-plus" />
                        </li>
                        <li className="position-relative">
                          24/7 support
                          <i className="ph-bold ph-plus" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="team-area pb-75">
        <div className="container">
          <div className="main-max-width mx-auto">
            <div className="team-section-title">
              <div
                className="row align-items-end"
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
                      Our Team
                    </span>
                    <h2>Meet Your Team Membar</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <a className="default-btn style-1" href="team.html">
                    See All
                    <i className="ph-bold ph-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
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
                <div className="single-team-info position-relative z-1">
                  <div className="image">
                    <img src="assets/images/team/team1.jpg" alt="team-image" />
                  </div>
                  <div className="content d-flex align-items-end justify-content-between">
                    <div className="text">
                      <h3>
                        <a href="team.html">Brooklyn Simmons</a>
                      </h3>
                      <p>Designer</p>
                    </div>
                    <div className="icon">
                      <ul className="list-unstyled ps-0 mb-0">
                        <li>
                          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <i className="ph-bold ph-instagram-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <i className="ph-fill ph-twitter-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <i className="ph-fill ph-youtube-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <i className="ph-bold ph-facebook-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="team.html" className="active">
                            <i className="ph-bold ph-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                <div className="single-team-info position-relative z-1">
                  <div className="image">
                    <img src="assets/images/team/team2.jpg" alt="team-image" />
                  </div>
                  <div className="content d-flex align-items-end justify-content-between">
                    <div className="text">
                      <h3>
                        <a href="team.html">Brooklyn Simmons</a>
                      </h3>
                      <p>Designer</p>
                    </div>
                    <div className="icon">
                      <ul className="list-unstyled ps-0 mb-0">
                        <li>
                          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <i className="ph-bold ph-instagram-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <i className="ph-fill ph-twitter-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <i className="ph-fill ph-youtube-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <i className="ph-bold ph-facebook-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="team.html" className="active">
                            <i className="ph-bold ph-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                <div className="single-team-info position-relative z-1">
                  <div className="image">
                    <img src="assets/images/team/team3.jpg" alt="team-image" />
                  </div>
                  <div className="content d-flex align-items-end justify-content-between">
                    <div className="text">
                      <h3>
                        <a href="team.html">Brooklyn Simmons</a>
                      </h3>
                      <p>Designer</p>
                    </div>
                    <div className="icon">
                      <ul className="list-unstyled ps-0 mb-0">
                        <li>
                          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <i className="ph-bold ph-instagram-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <i className="ph-fill ph-twitter-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <i className="ph-fill ph-youtube-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <i className="ph-bold ph-facebook-logo" />
                          </a>
                        </li>
                        <li>
                          <a href="team.html" className="active">
                            <i className="ph-bold ph-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
                  <span className="d-block sub-title position-relative">Faq</span>
                  <h2>Get Every Able Answer</h2>
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
                      What are the main modes of transportation?
                    </button>
                    <div
                      id="accordionCollapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Technology has revolutionized transportation with
                          innovations like GPS navigation, real-time tracking,
                          autonomous vehicles,
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
                      How does technology impact transportation?
                    </button>
                    <div
                      id="accordionCollapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Technology has revolutionized transportation with
                          innovations like GPS navigation, real-time tracking,
                          autonomous vehicles,
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
                      How do logistics and transportation intersect?
                    </button>
                    <div
                      id="accordionCollapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Technology has revolutionized transportation with
                          innovations like GPS navigation, real-time tracking,
                          autonomous vehicles,
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
                      Our Blog
                    </span>
                    <h2>Latest News &amp; Articles</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <a className="default-btn style-1" href="blog.html">
                    See All
                    <i className="ph-bold ph-arrow-right" />
                  </a>
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
                    <a href="blog.html" className="d-block">
                      <img src="assets/images/blog/blog1.jpg" alt="blog-image" />
                    </a>
                  </div>
                  <div className="content d-flex justify-content-between">
                    <div className="text position-relative">
                      <ul className="list-unstyled ps-0">
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-user-circle" />
                          <a href="author.html">Admin</a>
                        </li>
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-chat-teardrop-dots" />
                          (02) Comment
                        </li>
                      </ul>
                      <h3>
                        <a href="blog.html">
                          Express delivery is going to slow down in 2023
                        </a>
                      </h3>
                      <p>The surge in e-commerce and online shopping has led.</p>
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
                    <a href="blog.html">
                      <img src="assets/images/blog/blog2.jpg" alt="blog-image" />
                    </a>
                  </div>
                  <div className="content d-flex justify-content-between">
                    <div className="text position-relative">
                      <ul className="list-unstyled ps-0">
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-user-circle" />
                          <a href="author.html">Admin</a>
                        </li>
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-chat-teardrop-dots" />
                          (02) Comment
                        </li>
                      </ul>
                      <h3>
                        <a href="blog.html">
                          Express delivery is going to slow down in 2023
                        </a>
                      </h3>
                      <p>The surge in e-commerce and online shopping has led.</p>
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
                    <a href="blog.html">
                      <img src="assets/images/blog/blog3.jpg" alt="blog-image" />
                    </a>
                  </div>
                  <div className="content d-flex justify-content-between">
                    <div className="text position-relative">
                      <ul className="list-unstyled ps-0">
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-user-circle" />
                          <a href="author.html">Admin</a>
                        </li>
                        <li className="d-inline-block position-relative">
                          <i className="ph ph-chat-teardrop-dots" />
                          (02) Comment
                        </li>
                      </ul>
                      <h3>
                        <a href="blog.html">
                          Express delivery is going to slow down in 2023
                        </a>
                      </h3>
                      <p>The surge in e-commerce and online shopping has led.</p>
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
                Happy Client
              </span>
              <h2>Trusted By Our 250.000 Clients</h2>
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
