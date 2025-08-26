import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="navbar-area">
        {/* Mobile Responsive Navigation */}
        <div className="nofa-responsive-nav">
          <div className="container">
            <div className="nofa-responsive-menu">
              <div className="logo">
                <Link to="/" className="d-inline-block">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nofa-nav">
          <div className="container">
            <div className="main-max-width mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light position-relative z-1">
                <Link className="navbar-brand" to="/">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
                
                {/* Desktop Menu Container */}
                <div className="navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link ${isActive('/')}`}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" className={`nav-link ${isActive('/services')}`}>
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Desktop Menu Options */}
                <div className="others-option position-relative d-none d-lg-flex align-items-center">
                  <div className="option-item">
                    <form>
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <button type="submit" className="border-0 bg-transparent p-0">
                          <i className="ph ph-magnifying-glass" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="option-item">
                    <Link className="default-btn" to="/contact">
                      Track Parcel
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="navbar-bg-shape">
          <img src="assets/images/top-header-bg.png" alt="shape" />
        </div>
      </div>

      {/* Mobile Menu Container - Outside navbar-area */}
      <div className={`mean-menu ${isMenuOpen ? 'mean-container' : ''}`}>
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
          <button 
            className="mobile-menu-close" 
            onClick={toggleMenu}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '30px',
              color: 'var(--mainColor)',
              cursor: 'pointer',
              zIndex: 1000,
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none'
            }}
          >
            ×
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${isActive('/services')}`}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Options */}
          <div className="others-option d-lg-none">
            <div className="option-item">
              <div className="icon position-relative">
                <Link to="/contact">
                  <i className="ph-bold ph-user-plus" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
      )}
    </>
  )
}

export default Header