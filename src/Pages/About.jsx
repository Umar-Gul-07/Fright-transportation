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
                            <h1>About Us</h1>
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
                                    <Link className="default-btn style-1" to="/team">
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
                                                <Link to="/team">Brooklyn Simmons</Link>
                                            </h3>
                                            <p>Designer</p>
                                        </div>
                                        <div className="icon">
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-bold ph-instagram-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-fill ph-youtube-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-bold ph-facebook-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/team" className="active">
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
                                        <img src="assets/images/team/team2.jpg" alt="team-image" />
                                    </div>
                                    <div className="content d-flex align-items-end justify-content-between">
                                        <div className="text">
                                            <h3>
                                                <Link to="/team">Brooklyn Simmons</Link>
                                            </h3>
                                            <p>Designer</p>
                                        </div>
                                        <div className="icon">
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-bold ph-instagram-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-fill ph-youtube-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-bold ph-facebook-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/team" className="active">
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
                                        <img src="assets/images/team/team3.jpg" alt="team-image" />
                                    </div>
                                    <div className="content d-flex align-items-end justify-content-between">
                                        <div className="text">
                                            <h3>
                                                <Link to="/team">Brooklyn Simmons</Link>
                                            </h3>
                                            <p>Designer</p>
                                        </div>
                                        <div className="icon">
                                            <ul className="list-unstyled ps-0 mb-0">
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-bold ph-instagram-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-fill ph-youtube-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" rel="noopener noreferrer">
                                                        <i className="ph-bold ph-facebook-logo" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/team" className="active">
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
                                            Our Testimonial
                                        </span>
                                        <h2>Our Client's Feedback</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="testimonial-card">
                                    <div className="testimonial-slider owl-carousel">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About