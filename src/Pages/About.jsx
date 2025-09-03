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
                                            <div className="user-block">
                                                <div className="user-image">
                                                    <img src="assets/images/team/team1.jpg" alt="CEO & Founder" />
                                                </div>
                                                <div className="user-info">
                                                    <h4>CEO & Founder</h4>
                                                    <p>Jabbi International</p>
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
        </>
    )
}

export default About