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

        // Testimonial slider initialization
        if (window.jQuery && window.jQuery.fn.owlCarousel) {
            const $testimonialSlider = window.jQuery('.testimonial-slider');
            if ($testimonialSlider.length) {
                $testimonialSlider.owlCarousel({
                    items: 1,
                    loop: true,
                    nav: true,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="ph-bold ph-arrow-left"></i>',
                        '<i class="ph-bold ph-arrow-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        }
                    }
                });
            }
        }

        return () => {
            // Cleanup
            counters.forEach(counter => counterObserver.unobserve(counter));
            popupButtons.forEach(button => {
                button.removeEventListener('click', () => {});
            });
            
            // Destroy testimonial slider on unmount
            if (window.jQuery && window.jQuery.fn.owlCarousel) {
                const $testimonialSlider = window.jQuery('.testimonial-slider');
                if ($testimonialSlider.length) {
                    $testimonialSlider.trigger('destroy.owl.carousel');
                }
            }
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

            <div className="about-area pt-100 pb-75">
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
                                            About Jabbi International
                                        </span>
                                        <h2>Your Trusted Partner in Global Freight Transportation</h2>
                                    </div>
                                    <p>
                                        Founded with a vision to provide reliable and efficient freight transportation 
                                        services, Jabbi International has established itself as a leading logistics 
                                        company specializing in import/export operations from Karachi Port.
                                    </p>
                                    <h6 className="growth">
                                        With years of experience in international shipping, customs clearance, and 
                                        supply chain management, we ensure your cargo reaches its destination safely 
                                        and on schedule.
                                    </h6>
                                    <ul className="list-unstyled ps-0 mb-0 about-btn">
                                        <li className="d-inline-block">
                                            <Link className="default-btn style-1" to="/services">
                                                Our Services
                                                <i className="ph-bold ph-arrow-right" />
                                            </Link>
                                        </li>
                                        <li className="d-inline-block">
                                            <div className="user d-flex align-items-center">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/about/about1.jpg"
                                                        alt="CEO"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h3>Ahmed Jabbi</h3>
                                                    <p>CEO & Founder</p>
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
                                                <img src="assets/images/about/about2.jpg" alt="Karachi Port Operations" />
                                                <a
                                                    href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                                                    className="play-btn popup-youtube"
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    <i className="ph-fill ph-play" />
                                                </a>
                                                <span className="experience">15+ Years Experience</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="content">
                                                <div className="content-info">
                                                    <h2>
                                                        <span className="counter">50</span>+
                                                    </h2>
                                                    <p>Countries Served</p>
                                                </div>
                                                <div className="content-info">
                                                    <h2>
                                                        <span className="counter">1000</span>+
                                                    </h2>
                                                    <p>Successful Shipments</p>
                                                </div>
                                                <div className="content-info">
                                                    <h2>
                                                        <span className="counter">24</span>/7
                                                    </h2>
                                                    <p>Customer Support</p>
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
                                        <h2>Meet Our Expert Team</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <Link className="default-btn style-1" to="/contact">
                                        Contact Us
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
                                        <img src="assets/images/team/team1.jpg" alt="CEO" />
                                    </div>
                                    <div className="content d-flex align-items-end justify-content-between">
                                        <div className="text">
                                            <h3>
                                                <Link to="/contact">Ahmed Jabbi</Link>
                                            </h3>
                                            <p>CEO & Founder</p>
                                        </div>
                                        <div className="icon">
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li>
                                                    <a href={ContactInfo.linkedin} target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-linkedin-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ContactInfo.twitter} target="_blank" rel="noreferrer">
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ContactInfo.facebook} target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-facebook-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/contact" className="active">
                                                        <i className="ph-bold ph-plus" />
                                                    </Link>
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
                                        <img src="assets/images/team/team2.jpg" alt="Operations Manager" />
                                    </div>
                                    <div className="content d-flex align-items-end justify-content-between">
                                        <div className="text">
                                            <h3>
                                                <Link to="/contact">Muhammad Ali</Link>
                                            </h3>
                                            <p>Operations Manager</p>
                                        </div>
                                        <div className="icon">
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li>
                                                    <a href={ContactInfo.linkedin} target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-linkedin-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ContactInfo.twitter} target="_blank" rel="noreferrer">
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ContactInfo.facebook} target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-facebook-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/contact" className="active">
                                                        <i className="ph-bold ph-plus" />
                                                    </Link>
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
                                        <img src="assets/images/team/team3.jpg" alt="Customer Relations" />
                                    </div>
                                    <div className="content d-flex align-items-end justify-content-between">
                                        <div className="text">
                                            <h3>
                                                <Link to="/contact">Fatima Khan</Link>
                                            </h3>
                                            <p>Customer Relations</p>
                                        </div>
                                        <div className="icon">
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li>
                                                    <a href={ContactInfo.linkedin} target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-linkedin-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ContactInfo.twitter} target="_blank" rel="noreferrer">
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ContactInfo.facebook} target="_blank" rel="noreferrer">
                                                        <i className="ph-bold ph-facebook-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/contact" className="active">
                                                        <i className="ph-bold ph-plus" />
                                                    </Link>
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
                                            Client Testimonials
                                        </span>
                                        <h2>What Our Clients Say</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="testimonial-card">
                                    <div className="testimonial-slider owl-carousel">
                                        <div className="single-testimonial-card">
                                            <h6 className="d-flex align-items-center">
                                                5.0
                                                <i className="ph-fill ph-star" />
                                            </h6>
                                            <p>
                                                "Jabbi International has been our trusted partner for over 5 years. 
                                                Their expertise in customs clearance and timely delivery has helped 
                                                us maintain our supply chain efficiently. Highly recommended!"
                                            </p>
                                            <div className="user d-flex align-items-center">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/testimonial/testimonial1.jpg"
                                                        alt="Abdul Rahman"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h3>Abdul Rahman</h3>
                                                    <p>Import Manager, Textile Industries Ltd</p>
                                                </div>
                                            </div>
                                            <div className="quote-icon">
                                                <img
                                                    src="assets/images/quotes-icon.svg"
                                                    alt="quote-icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="single-testimonial-card">
                                            <h6 className="d-flex align-items-center">
                                                5.0
                                                <i className="ph-fill ph-star" />
                                            </h6>
                                            <p>
                                                "Excellent service! They handle our electronics exports with utmost 
                                                care and provide real-time tracking. Professional team with deep 
                                                knowledge of international shipping regulations."
                                            </p>
                                            <div className="user d-flex align-items-center">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/testimonial/testimonial1.jpg"
                                                        alt="Sarah Ahmed"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h3>Sarah Ahmed</h3>
                                                    <p>Export Coordinator, Electronics Corp</p>
                                                </div>
                                            </div>
                                            <div className="quote-icon">
                                                <img
                                                    src="assets/images/quotes-icon.svg"
                                                    alt="quote-icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="single-testimonial-card">
                                            <h6 className="d-flex align-items-center">
                                                5.0
                                                <i className="ph-fill ph-star" />
                                            </h6>
                                            <p>
                                                "Professional team with deep knowledge of international shipping 
                                                regulations. They've consistently delivered our automotive parts 
                                                on time without any damage. Great communication throughout."
                                            </p>
                                            <div className="user d-flex align-items-center">
                                                <div className="image">
                                                    <img
                                                        src="assets/images/testimonial/testimonial1.jpg"
                                                        alt="Muhammad Hassan"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <h3>Muhammad Hassan</h3>
                                                    <p>Logistics Director, Automotive Parts Ltd</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About