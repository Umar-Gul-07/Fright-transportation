import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactInfo } from '../Utils/Data'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceType: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create email content
        const subject = encodeURIComponent(`Freight Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`
Dear Jabbi International Team,

I would like to inquire about your freight transportation services.

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not specified'}

SERVICE REQUESTED:
Service Type: ${formData.serviceType}

MESSAGE:
${formData.message}

Please contact me at your earliest convenience to discuss my requirements.

Best regards,
${formData.name}
        `);

        // Open email client
        const mailtoLink = `mailto:${ContactInfo.contact_email}?subject=${subject}&body=${body}`;
        
        // Try to open email client
        try {
            window.open(mailtoLink, '_blank');
            
            // Show success message
            showNotification('Email client opened successfully! Please send the email to complete your inquiry.', 'success');
            
            // Clear form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
                serviceType: ''
            });
        } catch (error) {
            showNotification('Please copy the email content and send it manually to ' + ContactInfo.contact_email, 'error');
        }
        
        setIsSubmitting(false);
    };

    const showNotification = (message, type) => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 8000);
    };

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
                        <h1>Contact Us</h1>
                        <ul className="list-unstyled mb-0 ps-0">
                            <li className="d-inline-block position-relative">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="d-inline-block position-relative">Contact</li>
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

          <div className="contact-area pt-100 pb-75">
            <div className="container">
                <div className="main-max-width mx-auto">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="single-contact-form">
                                <div className="section-title">
                                    <span className="d-block sub-title position-relative">
                                        Get In Touch
                                    </span>
                                    <h2>Request a Freight Quote</h2>
                                    <p className="mt-3 text-muted">
                                        Fill out the form below and we'll open your email client with a pre-filled message to send to Jabbi International.
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Your Phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Company Name"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    name="serviceType"
                                                    value={formData.serviceType}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select Service Type</option>
                                                    <option value="Sea Freight">Sea Freight</option>
                                                    <option value="Air Freight">Air Freight</option>
                                                    <option value="Customs Clearance">Customs Clearance</option>
                                                    <option value="Warehousing">Warehousing</option>
                                                    <option value="Door-to-Door Delivery">Door-to-Door Delivery</option>
                                                    <option value="Project Cargo">Project Cargo</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control textarea"
                                            rows={4}
                                            placeholder="Please describe your shipment requirements..."
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="default-btn border-0 text-center w-100"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Opening Email Client...
                                            </>
                                        ) : (
                                            <>
                                                <i className="ph-bold ph-envelope me-2"></i>
                                                Send Inquiry via Email
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-contact-image">
                                <img
                                   src="assets/images/about/about1.jpg"
                                   alt="Contact Us"
                                   style={{
                                     width: '100%',
                                     height: 'auto',
                                     borderRadius: '10px',
                                     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                                   }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="contact-area pb-75">
            <div className="container">
                <div className="main-max-width mx-auto">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="single-contact-info">
                                <h1>Contact Info</h1>
                                <div className="contact-info d-flex">
                                    <div className="icon">
                                        <i className="ph-fill ph-phone" />
                                    </div>
                                    <ul className="list-unstyled ps-0 mb-0 list">
                                        <li>Phone</li>
                                        <li>
                                            <a href={`tel:${ContactInfo.contact_phone}`}>{ContactInfo.contact_phone}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-info d-flex">
                                    <div className="icon">
                                        <i className="ph-fill ph-envelope" />
                                    </div>
                                    <ul className="list-unstyled ps-0 mb-0 list">
                                        <li>Email</li>
                                        <li>
                                            <a href={`mailto:${ContactInfo.contact_email}`}>{ContactInfo.contact_email}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-info d-flex">
                                    <div className="icon">
                                        <i className="ph-bold ph-whatsapp-logo" />
                                    </div>
                                    <ul className="list-unstyled ps-0 mb-0 list">
                                        <li>WhatsApp</li>
                                        <li>
                                            <a href={`https://wa.me/${ContactInfo.whatsapp.replace(/\D/g, '')}?text=Hello! I'm interested in your freight services.`} target="_blank" rel="noreferrer">
                                                {ContactInfo.whatsapp}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-info d-flex">
                                    <div className="icon">
                                        <i className="ph-bold ph-map-pin" />
                                    </div>
                                    <ul className="list-unstyled ps-0 mb-0 list">
                                        <li>Location</li>
                                        <li>
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="contact-map-info">
                                <div 
                                    className="map-container"
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1234567890123!2d67.0599219!3d24.8593045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9c7ac77bb7%3A0x825356c82a1f6a16!2sDelhi%20Sweets!5e0!3m2!1sen!2spk!4v1234567890123"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Jabbi International Office Location"
                                    ></iframe>
                                </div>
                                <div style={{ 
                                    textAlign: 'center', 
                                    marginTop: '15px',
                                    padding: '15px',
                                    background: 'rgba(52, 152, 219, 0.05)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(52, 152, 219, 0.1)'
                                }}>
                                    <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>📍 Office Location</h4>
                                    <p style={{ margin: '0', color: '#5a6c7d' }}>
                                        {ContactInfo.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="business-hours-area pb-75">
            <div className="container">
                <div className="main-max-width mx-auto">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="business-hours-card p-4">
                                <h3>Business Hours</h3>
                                <div className="hours-list">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Monday - Friday:</span>
                                        <span>8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Saturday:</span>
                                        <span>9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Sunday:</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emergency-contact-card p-4">
                                <h3>Emergency Contact</h3>
                                <p>For urgent shipments and after-hours support:</p>
                                <div className="emergency-info">
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="ph-bold ph-phone me-2" style={{ color: '#dc3545' }}></i>
                                        <span>{ContactInfo.contact_phone}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ph-bold ph-whatsapp-logo me-2" style={{ color: '#25d366' }}></i>
                                        <span>{ContactInfo.whatsapp}</span>
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

export default Contact