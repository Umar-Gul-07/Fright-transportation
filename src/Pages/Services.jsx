import React from 'react'
import { Link } from 'react-router-dom'

function Services() {

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
                            <h1>Our Services</h1>
                            <ul className="list-unstyled mb-0 ps-0">
                                <li className="d-inline-block position-relative">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="d-inline-block position-relative">Services</li>
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

            <div className="services-area pt-100 pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="services-section-title">
                            <div className="section-title">
                                <span className="d-block sub-title position-relative">Our Services</span>
                                <h2>Comprehensive Freight Transportation Solutions</h2>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services1.jpg"
                                            alt="Sea Freight Services"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Sea Freight Services</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Sea Freight Services</Link>
                                        </h3>
                                        <p>Comprehensive ocean freight solutions from Karachi Port to worldwide destinations. FCL and LCL services with competitive rates.</p>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services2.jpg"
                                            alt="Air Freight Services"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Air Freight Services</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Air Freight Services</Link>
                                        </h3>
                                        <p>Express air freight for time-sensitive shipments with global reach. Fast and reliable delivery for urgent cargo.</p>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services3.jpg"
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
                                        <p>Expert customs documentation and clearance services ensuring smooth import/export operations with compliance.</p>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services4.jpg"
                                            alt="Warehousing & Storage"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Warehousing & Storage</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Warehousing & Storage</Link>
                                        </h3>
                                        <p>Secure warehousing facilities with temperature-controlled options for various types of cargo storage needs.</p>
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
                                    animationDelay: "0ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both"
                                }}
                            >
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services1.jpg"
                                            alt="Door-to-Door Delivery"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Door-to-Door Delivery</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Door-to-Door Delivery</Link>
                                        </h3>
                                        <p>Complete logistics solutions from origin to final destination with end-to-end tracking and management.</p>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services2.jpg"
                                            alt="Project Cargo"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Project Cargo</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Project Cargo</Link>
                                        </h3>
                                        <p>Specialized handling for oversized and heavy equipment shipments with custom solutions for complex projects.</p>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services3.jpg"
                                            alt="Container Services"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Container Services</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Container Services</Link>
                                        </h3>
                                        <p>FCL and LCL container services with flexible scheduling and competitive rates for various cargo types.</p>
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
                                <div className="single-services-info services-style position-relative z-1">
                                    <div className="image">
                                        <img
                                            src="assets/images/services/services4.jpg"
                                            alt="Supply Chain Solutions"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <Link to="/services">Supply Chain Solutions</Link>
                                        </h3>
                                    </div>
                                    <div className="hover-content">
                                        <h3>
                                            <Link to="/services">Supply Chain Solutions</Link>
                                        </h3>
                                        <p>End-to-end supply chain management and optimization for efficient logistics operations worldwide.</p>
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

            {/* Additional Services Section */}
            <div className="features-area pb-75 position-relative z-1">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="section-title text-center mb-5">
                            <span className="d-block sub-title position-relative">Why Choose Us</span>
                            <h2>Key Features of Our Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="feature-card text-center p-4">
                                    <div className="icon mb-3">
                                        <i className="ph-bold ph-clock" style={{ fontSize: '3rem', color: '#007bff' }}></i>
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p>Round-the-clock customer support to handle your queries and concerns anytime.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="feature-card text-center p-4">
                                    <div className="icon mb-3">
                                        <i className="ph-bold ph-shield-check" style={{ fontSize: '3rem', color: '#28a745' }}></i>
                                    </div>
                                    <h4>Secure Handling</h4>
                                    <p>Your cargo is handled with utmost care and security throughout the journey.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="feature-card text-center p-4">
                                    <div className="icon mb-3">
                                        <i className="ph-bold ph-trend-up" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                    </div>
                                    <h4>Real-time Tracking</h4>
                                    <p>Track your shipments in real-time with our advanced tracking system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
