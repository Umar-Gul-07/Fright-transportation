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
              <div className="col-lg-8">
                <div className="banner-content">
                  <div className="title">
                    <span className="sub-title position-relative d-block">
                      Jabbi International
                    </span>
                    <h1>Your Trusted Partner in Customs Clearance & Freight Forwarding</h1>
                    <p>
                      Fast, reliable, and hassle-free solutions for your import and export needs. 
                      With over two decades of experience, we ensure your cargo reaches its destination 
                      safely and on time.
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
              <div className="col-lg-4">
                <div className="banner-image text-center">
                  <div className="banner-visual-element">
                    <div className="icon-container">
                      <i className="ph-bold ph-ship" style={{ fontSize: '4rem', color: '#3498db' }}></i>
                    </div>
                    <div className="stats-preview">
                      <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">Clients Served</span>
                      </div>
                    </div>
                  </div>
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
                    <h2>20+</h2>
                    <div className="arrow-btn d-flex align-items-center justify-content-between">
                      <h3>Years of Experience</h3>
                    </div>
                  </div>
                  <div className="hover-content">
                    <h2>20+</h2>
                    <h3>Years of Experience</h3>
                    <p>
                      Over two decades of expertise in customs clearance and freight forwarding, 
                      serving clients with reliable and efficient logistics solutions.
                    </p>
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
                    <h2>100+</h2>
                    <div className="arrow-btn d-flex align-items-center justify-content-between">
                      <h3>Clients Served</h3>
                    </div>
                  </div>
                  <div className="hover-content">
                    <h2>100+</h2>
                    <h3>Clients Served</h3>
                    <p>
                      Trusted by over 100 businesses across multiple industries for their 
                      import/export and logistics requirements.
                    </p>
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
                    <h2>5,500+</h2>
                    <div className="arrow-btn d-flex align-items-center justify-content-between">
                      <h3>Shipments Completed</h3>
                    </div>
                  </div>
                  <div className="hover-content">
                    <h2>5,500+</h2>
                    <h3>Shipments Completed</h3>
                    <p>
                      Successfully completed over 5,500 shipments worldwide with a proven 
                      track record of on-time delivery and customer satisfaction.
                    </p>
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
                    <h2>Jabbi International</h2>
                  </div>
                  <p>
                    Jabbi International is a trusted name in customs clearance and freight forwarding, 
                    proudly serving clients for over two decades. With deep industry expertise and 
                    strong relationships with port and customs authorities, we provide fast, reliable, 
                    and compliant solutions for both imports and exports.
                  </p>
                  <h6 className="growth">
                    Our services cover sea, air, and land freight forwarding, warehousing, and complete 
                    documentation assistance, ensuring a smooth end-to-end process for our clients. 
                    Over the years, we have built a reputation for professionalism, transparency, and 
                    timely delivery, becoming the logistics partner of choice for businesses across 
                    multiple industries.
                  </h6>
                  <ul className="list-unstyled ps-0 mb-0 about-btn">
                    <li className="d-inline-block">
                      <Link className="default-btn style-1" to="/about">
                        Learn More
                        <i className="ph-bold ph-arrow-right" />
                      </Link>
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
                        <span className="experience">20+ Years Experience</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="content">
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
                        <div className="content-info">
                          <h2>
                            <span className="counter">20</span>+
                          </h2>
                          <p>Years Experience</p>
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
                      Our Services
                    </span>
                    <h2>Complete Range of Logistics & Trade Facilitation Services</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <Link className="default-btn style-1" to="/services">
                    See All
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
                      <Link to="/services">Customs Clearance</Link>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/services">Customs Clearance</Link>
                    </h3>
                    <p>Fast and efficient clearance for imports and exports, ensuring compliance with all regulations and minimizing delays at ports and borders.</p>
                    <Link to="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </Link>
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
                      <Link to="/services">Freight Consultancy</Link>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/services">Freight Consultancy</Link>
                    </h3>
                    <p>Expert advice on the most cost-effective and time-efficient transport modes, routes, and strategies for your shipments.</p>
                    <Link to="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </Link>
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
                      <Link to="/services">Documentation Assistance</Link>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/services">Documentation Assistance</Link>
                    </h3>
                    <p>Complete support for all shipping and trade documents, including bills of lading, commercial invoices, packing lists, and customs forms.</p>
                    <Link to="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </Link>
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
                      <Link to="/services">In-Country Transport</Link>
                    </h3>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/services">In-Country Transport</Link>
                    </h3>
                    <p>Secure and timely domestic transportation from ports to warehouses, factories, or final delivery points.</p>
                    <Link to="/services" className="read-more">
                      Read More
                      <i className="ph-bold ph-arrow-right" />
                    </Link>
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
    </>
  )
}

export default Home
