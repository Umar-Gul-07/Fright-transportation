import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'
import { WhatsAppButton } from '../Utils/Data'

function Base({ children }) {

    return (
        <>
            <div className="preloader-area position-fixed start-0 top-0 end-0 bottom-0 text-center deactivate">
                <div className="preloader">
                    <img src="assets/images/favicon.png" alt="preloader" />
                    <div className="waviy fw-bold">
                        <span className="position-relative d-inline-block">I</span>
                        <span className="position-relative d-inline-block">N</span>
                        <span className="position-relative d-inline-block">S</span>
                        <span className="position-relative d-inline-block">O</span>
                        <span className="position-relative d-inline-block">T</span>
                        <span className="position-relative d-inline-block">R</span>
                        <span className="position-relative d-inline-block">A</span>
                        <span className="position-relative d-inline-block">N</span>
                        <span className="position-relative d-inline-block">S</span>
                    </div>
                </div>
            </div>

            <Header />
            {children}

            <Footer />
            <WhatsAppButton />
            

        </>
    )
}

export default Base