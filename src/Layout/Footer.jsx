// import React from 'react'
import { Link } from 'react-router-dom'
import appstore from '../assets/images/appstore.webp'
import playstore from '../assets/images/googleplay.webp'
// import logo from '../assets/images/videocalllogo.png'
// import logo from '../assets/images/newjivcamlogo.png'
import logo from '../assets/images/logo.jpg'
import Popup from '../Component/Popup'
import { useState } from 'react'

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupOpen = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };
    const currentYear = new Date().getFullYear();
    return (
        <>
            {showPopup && <Popup onClose={handlePopupClose} />}
            <section className="py-5 bg-black footer px-3">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-md-4">
                            <div className="w-100">
                                <a href="/">

                                    <img src={logo} alt="image" className="img-fluid logo" style={{ borderRadius: "50%" }}
                                    />
                                </a>

                                <p className="mt-2">
                                    Connect with people worldwide through live video chat and meaningful conversations.
                                </p>
                                <div className="d-flex gap-3  my-3">
                                    <i className="fa-brands fa-facebook-f socialicons"></i>
                                    <a href="https://x.com/CamJive" target='_blank'>
                                        <i className="fa-brands fa-twitter socialicons"></i>
                                    </a>
                                    <a href="https://www.instagram.com/jivecam/" target='_blank'>
                                        <i className="fa-brands fa-instagram socialicons"></i>
                                    </a>


                                    <a href="https://www.youtube.com/@JiveCam" target='_blank'>
                                        <i className="fa-brands fa-youtube socialicons"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100">
                                <h3 className="mb-3">
                                    Quick Links
                                </h3>
                                <div>
                                    <ul className='p-0'>
                                        <li className="d-block mb-2">
                                            <Link
                                                to="/"
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            >
                                                Home
                                            </Link>
                                        </li>


                                        <li className="d-block mb-2">
                                            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
                                        </li>


                                        <li className="d-block mb-2">
                                            <Link to="/terms-condition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li className="d-block mb-2">
                                            <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className="d-block mb-2">
                                            <Link to="/delete-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                                Delete Account
                                            </Link>
                                        </li>
                                        <li className="d-block mb-2">
                                            <Link to="/eula" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                                EULA
                                            </Link>
                                        </li>
                                        <li className="d-block mb-2">
                                            <Link to="/plans" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                                Plans
                                            </Link>
                                        </li>
                                        <li className="d-block mb-2">
                                            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="w-100">
                                <h3 className="mb-3">
                                    Download App
                                </h3>
                                <div className="pt-3 pb-5">
                                    <Link to={'/'} className="btnlinkfooter">
                                        <img src={appstore} className="img-fluid" alt="" onClick={handlePopupOpen} />
                                    </Link>
                                </div>
                                <Link to={'/'} className="btnlinkfooter ">
                                    <img src={playstore} className="img-fluid" alt="" onClick={handlePopupOpen} />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="row  pt-3 bottomfooter  ">
                        <div className="col-12 innerbottomfooter">
                            <p>© {currentYear} NSAH SWAYANTRANA TECHNOLOGIES LLP. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
