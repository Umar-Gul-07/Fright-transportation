import React, { useState } from 'react'
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

  return (
    <>
      <div className="navbar-area">
        <div className="nofa-responsive-nav">
          <div className="container">
            <div className="nofa-responsive-menu">
              <div className="logo">
                <Link to="/" className="d-inline-block">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="navbar-toggler" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="nofa-nav">
          <div className="container">
            <div className="main-max-width mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light position-relative z-1">
                <Link className="navbar-brand" to="/">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
                <div
                  className={`navbar-collapse mean-menu ${isMenuOpen ? 'show' : ''}`}
                  style={{ display: isMenuOpen ? "block" : "" }}
                >
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
                  <div className="others-option">
                    <div className="option-item">
                      <div className="icon position-relative">
                        <Link to="/contact">
                          <i className="ph-bold ph-user-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="others-option position-relative d-flex align-items-center">
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
    </>
  )
}

export default Header