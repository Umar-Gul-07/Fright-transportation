import { Link } from "react-router-dom"
import { ContactInfo, SocialMediaLinks } from "../../Utils/Data"
function Footer() {

    return (
        <>
            <div className="footer-area pt-100 pb-75">
                <div className="container">
                    <div className="main-max-width mx-auto">
                        <div className="row" data-cues="fadeIn" data-disabled="true">
                            <div
                                className="col-lg-4 col-sm-8"
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
                                <div className="single-footer-widget subscribe-info">
                                    <div className="logo">
                                        <Link to="/">
                                            <div className="jabbi-logo-white">
                                                <div className="logo-main-white">Jabbi</div>
                                                <div className="logo-sub-white">International</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <p>
                                        Your trusted partner in customs clearance and freight forwarding, 
                                        providing fast, reliable, and hassle-free solutions for your 
                                        import and export needs.
                                    </p>
                                    <SocialMediaLinks />
                                </div>
                            </div>
                            <div
                                className="col-lg-2 col-sm-4"
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
                                <div className="single-footer-widget useful-link">
                                    <h3>Useful link</h3>
                                    <ul className="list-unstyled ps-0 mb-0">
                                        <li>
                                            <Link className="text-decoration-none" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to="/about" >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-decoration-none" to="/services">
                                                Services
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-decoration-none" to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
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
                                <div className="single-footer-widget office-info">
                                    <h3>Office Info</h3>
                                    <ul className="list-unstyled ps-0 contact-list">
                                        <li className="position-relative">
                                            <i className="ph-fill ph-phone" />
                                            <a href={`tel:${ContactInfo.contact_phone}`}>{ContactInfo.contact_phone}</a>
                                        </li>
                                        <li className="position-relative">
                                            <i className="ph-fill ph-envelope" />
                                            <a href={`mailto:${ContactInfo.contact_email}`}>{ContactInfo.contact_email}</a>
                                        </li>
                                        <li className="position-relative">
                                            <i className="ph-bold ph-whatsapp-logo" />
                                            <a href={`https://wa.me/${ContactInfo.whatsapp.replace(/\D/g, '')}?text=Hello! I'm interested in your services.`} target="_blank" rel="noreferrer">
                                                WhatsApp: {ContactInfo.whatsapp}
                                            </a>
                                        </li>
                                        <li className="position-relative">
                                            <i className="ph-bold ph-map-pin" />
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
                                    <div className="times">
                                        <h6>Open Hours :</h6>
                                        <p>Mon - Fri: 8 am - 6 pm</p>
                                        <p>Saturday: 9 am - 4 pm</p>
                                        <span>
                                            Sunday: <strong>Closed</strong>
                                        </span>
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
                                <div className="single-footer-widget services-info">
                                    <h3>Our Services</h3>
                                    <ul className="list-unstyled ps-0 mb-0">
                                        <li>
                                            <Link to="/services">Customs Clearance</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">Freight Consultancy</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">Documentation Assistance</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">In-Country Transport</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
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
                            <div className="col-lg-6 col-md-7">
                                <div className="copyright-content">
                                    <p>© 2025 Jabbi International, a freight transportation services company. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="copyright-list text-end">
                                    <ul className="list-unstyled ps-0 mb-0">
                                        <li className="d-inline-block position-relative">
                                            <a href="terms-conditions.html">Terms &amp; Condition</a>
                                        </li>
                                        <li className="d-inline-block position-relative">
                                            <a href="privacy-policy.html">Privacy &amp; Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer