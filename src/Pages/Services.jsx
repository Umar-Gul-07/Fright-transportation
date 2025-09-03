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
                                <h2>Complete Range of Logistics & Trade Facilitation Services</h2>
                                <p className="mt-3">
                                    At Jabbi International, we provide a complete range of logistics and trade facilitation 
                                    services designed to make your import and export operations smooth and stress-free.
                                </p>
                            </div>
                        </div>
                        <div
                            className="row justify-content-center"
                            data-cues="fadeIn"
                            data-disabled="true"
                        >
                            <div
                                className="col-lg-6 col-sm-6"
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
                                className="col-lg-6 col-sm-6"
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
                                className="col-lg-6 col-sm-6"
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
                                className="col-lg-6 col-sm-6"
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
