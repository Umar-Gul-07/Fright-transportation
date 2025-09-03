import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContactInfo } from '../Utils/Data'

function About() {
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
                            <h1>About Jabbi International</h1>
                            <ul className="list-unstyled mb-0 ps-0">
                                <li className="d-inline-block position-relative">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="d-inline-block position-relative">About Us</li>
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

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="d-block sub-title position-relative">
                                            About Us
                                        </span>
                                        <h2>Your Trusted Partner in Global Logistics</h2>
                                    </div>
                                    <p className="mb-4">
                                        Jabbi International is a trusted name in customs clearance and freight forwarding, proudly serving clients for over two decades.
                                    </p>
                                    <p className="mb-4">
                                        With deep industry expertise and strong relationships with port and customs authorities, we provide fast, reliable, and compliant solutions for both imports and exports.
                                    </p>
                                    <p className="mb-4">
                                        Our services cover sea, air, and land freight forwarding, warehousing, and complete documentation assistance, ensuring a smooth end-to-end process for our clients. Over the years, we have built a reputation for professionalism, transparency, and timely delivery, becoming the logistics partner of choice for businesses across multiple industries.
                                    </p>
                                    <div className="about-btn">
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-inline-block">
                                                <Link className="default-btn style-1" to="/services">
                                                    Our Services
                                                    <i className="ph-bold ph-arrow-right" />
                                                </Link>
                                            </li>
                                            <li className="d-inline-block">
                                                <Link className="default-btn style-2" to="/contact">
                                                    Get Quote
                                                    <i className="ph-bold ph-arrow-right" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-sm-8">
                                            <div className="image position-relative z-1">
                                                <img src="assets/images/about/about2.jpg" alt="Karachi Port Operations" />
                                                <a
                                                    href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                                                    className="play-btn popup-youtube"
                                                    target="_blank" rel="noreferrer"
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

            <div className="why-choose-area pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="d-block sub-title position-relative">
                                        Why Choose Us
                                    </span>
                                    <h2>What Makes Jabbi International Different</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-why-choose text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-shield-check" />
                                    </div>
                                    <h3>Trusted & Reliable</h3>
                                    <p>Two decades of proven excellence in customs clearance and freight forwarding, building lasting relationships with clients and authorities.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-why-choose text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-clock" />
                                    </div>
                                    <h3>Fast & Efficient</h3>
                                    <p>Strong relationships with port and customs authorities ensure quick clearance and timely delivery of your shipments.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-why-choose text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-globe" />
                                    </div>
                                    <h3>Global Network</h3>
                                    <p>Comprehensive coverage across sea, air, and land freight with warehousing and documentation support worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mission-vision-area pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mission-card">
                                    <div className="icon">
                                        <i className="ph-bold ph-target" />
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>To provide seamless, compliant, and cost-effective logistics solutions that empower businesses to expand their global reach while maintaining the highest standards of professionalism and transparency.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vision-card">
                                    <div className="icon">
                                        <i className="ph-bold ph-eye" />
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>To be the leading logistics partner in the region, known for innovation, reliability, and exceptional customer service, driving the success of our clients' international trade operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          

            <div className="stats-area pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-stat text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-trophy" />
                                    </div>
                                    <h2 className="counter">20</h2>
                                    <p>Years of Excellence</p>
                                    <div className="progress-bar">
                                        <div className="progress" style={{width: '100%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-stat text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-users" />
                                    </div>
                                    <h2 className="counter">100</h2>
                                    <p>Happy Clients</p>
                                    <div className="progress-bar">
                                        <div className="progress" style={{width: '100%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-stat text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-package" />
                                    </div>
                                    <h2 className="counter">5500</h2>
                                    <p>Shipments Completed</p>
                                    <div className="progress-bar">
                                        <div className="progress" style={{width: '100%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-stat text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-globe" />
                                    </div>
                                    <h2 className="counter">50</h2>
                                    <p>Countries Served</p>
                                    <div className="progress-bar">
                                        <div className="progress" style={{width: '100%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="process-area pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="d-block sub-title position-relative">
                                        Our Process
                                    </span>
                                    <h2>How We Deliver Excellence</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="process-item text-center">
                                    <div className="step-number">01</div>
                                    <div className="icon">
                                        <i className="ph-bold ph-chat-circle" />
                                    </div>
                                    <h4>Consultation</h4>
                                    <p>We understand your requirements and provide customized solutions</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="process-item text-center">
                                    <div className="step-number">02</div>
                                    <div className="icon">
                                        <i className="ph-bold ph-file-text" />
                                    </div>
                                    <h4>Documentation</h4>
                                    <p>Complete paperwork and compliance documentation handled</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="process-item text-center">
                                    <div className="step-number">03</div>
                                    <div className="icon">
                                        <i className="ph-bold ph-shipping-container" />
                                    </div>
                                    <h4>Execution</h4>
                                    <p>Professional handling and transportation of your cargo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="process-item text-center">
                                    <div className="step-number">04</div>
                                    <div className="icon">
                                        <i className="ph-bold ph-check-circle" />
                                    </div>
                                    <h4>Delivery</h4>
                                    <p>Timely delivery with complete tracking and support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-area pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="d-block sub-title position-relative">
                                        Client Testimonials
                                    </span>
                                    <h2>What Our Clients Say</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="testimonial-item">
                                    <div className="quote">
                                        <i className="ph-bold ph-quotes" />
                                    </div>
                                    <p>"Jabbi International has been our trusted logistics partner for over 5 years. Their professionalism and reliability are unmatched."</p>
                                    <div className="client-info">
                                        <div className="client-image">
                                            <img src="assets/images/testimonial/testimonial1.jpg" alt="Client" />
                                        </div>
                                        <div className="client-details">
                                            <h5>Ahmed Khan</h5>
                                            <span>CEO, Global Trading Co.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="testimonial-item">
                                    <div className="quote">
                                        <i className="ph-bold ph-quotes" />
                                    </div>
                                    <p>"Fast customs clearance and excellent documentation support. Jabbi International makes international trade hassle-free."</p>
                                    <div className="client-info">
                                        <div className="client-image">
                                            <img src="assets/images/testimonial/testimonial2.html" alt="Client" />
                                        </div>
                                        <div className="client-details">
                                            <h5>Sarah Ahmed</h5>
                                            <span>Operations Manager, Export Solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="testimonial-item">
                                    <div className="quote">
                                        <i className="ph-bold ph-quotes" />
                                    </div>
                                    <p>"Outstanding service quality and competitive pricing. They've helped us expand our business globally with confidence."</p>
                                    <div className="client-info">
                                        <div className="client-image">
                                            <img src="assets/images/testimonial/testimonial3.html" alt="Client" />
                                        </div>
                                        <div className="client-details">
                                            <h5>Muhammad Ali</h5>
                                            <span>Director, International Imports</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="certifications-area pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="d-block sub-title position-relative">
                                        Certifications & Awards
                                    </span>
                                    <h2>Recognized Excellence</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="certification-item text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-certificate" />
                                    </div>
                                    <h4>ISO 9001:2015</h4>
                                    <p>Quality Management System Certified</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="certification-item text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-shield-check" />
                                    </div>
                                    <h4>Customs Licensed</h4>
                                    <p>Authorized Customs Clearing Agent</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="certification-item text-center">
                                    <div className="icon">
                                        <i className="ph-bold ph-star" />
                                    </div>
                                    <h4>Industry Award</h4>
                                    <p>Best Logistics Provider 2023</p>
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
                                            Our Team
                                        </span>
                                        <h2>Meet Our Leadership Team</h2>
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
                                        <img
                                            src="assets/images/team/team1.jpg"
                                            alt="Waheed Khan - CEO & Founder"
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="text">
                                            <h3>
                                                <Link to="/about">Waheed Khan</Link>
                                            </h3>
                                            <p>CEO & Founder</p>
                                        </div>
                                        <div className="icon">
                                            <ul>
                                                <li>
                                                    <a href="#" target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-linkedin-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-envelope" />
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

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="faq-content">
                                    <div className="section-title">
                                        <span className="d-block sub-title position-relative">
                                            FAQ
                                        </span>
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                    <p>Common questions about our services and processes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About