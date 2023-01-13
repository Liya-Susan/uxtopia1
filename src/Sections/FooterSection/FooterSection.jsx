import React from 'react';
import './FooterSection.css';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaDiscord, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import { useMediaQuery } from 'react-responsive';
import { Row, Col, Container } from 'react-bootstrap';

const FooterSection = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1023 });
    const isTablet = useMediaQuery({ minWidth: 435, maxWidth: 1022 });
    const isMobile = useMediaQuery({ maxWidth: 434 });

    return (
        <footer>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            {/*DESKTOP VIEW*/}
                            {isDesktopOrLaptop && (
                                <>
                                    <div className="col-xl-6 col-lg-6 mb-50">
                                        <div className="footer-widget mt-5">
                                            <div className="footer-logo">
                                                <h5 style={{ color: 'white', fontWeight: 'bold' }} className="ml-3 mr-4">
                                                    Google Developer Student Clubs, MBCET
                                                </h5>
                                            </div>
                                            <div className="footer-text ml-3 mr-3">
                                                <p style={{ color: 'white' }}>
                                                    Google Developer Student Clubs are university based community groups for students
                                                    interested in Google developer technologies. Students from all undergraduate or graduate
                                                    programs with an interest in growing as a developer are welcome.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 mb-30">
                                        <div className="footer-widget mt-5">
                                            <div className="footer-widget-heading ml-3 mr-3">
                                                <h3 classname=" mb-3 ">Quick Links</h3>
                                            </div>
                                            <ul className="ml-3 mr-3">
                                                <li>
                                                    <a href="#">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#main__container">Speakers</a>
                                                </li>
                                                <li>
                                                    <a href="#outer__container">Schedule</a>
                                                </li>
                                                <li>
                                                    <a href="#">Register</a>
                                                </li>

                                                <li>
                                                    <a href="https://gdscmbcet.com">Website</a>
                                                </li>
                                                <li>
                                                    <a href="https://rebrand.ly/gdscdiary">The Journey</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" col-xl-3 col-lg-3 col-md-3 mb-50">
                                        <div className="footer-widget mt-5">
                                            <div className="footer-widget-heading ml-3 mr-3">
                                                <h3>Find Us</h3>
                                                <div>
                                                    <a href="https://www.instagram.com/gdscmbcet/">
                                                        <FaInstagram color="white" style={{ marginRight: '10px' }} size={25} />
                                                    </a>
                                                    <a href="mailto:dscmbcet@gmail.com">
                                                        <FaEnvelope color="white" style={{ marginRight: '10px' }} size={25} />
                                                    </a>
                                                    <a href="https://twitter.com/gdscmbcet">
                                                        <FaTwitter color="white" style={{ marginRight: '10px' }} size={25} />
                                                    </a>
                                                    <a href="https://www.linkedin.com/company/dsc-mbcet/">
                                                        <FaLinkedin color="white" style={{ marginRight: '10px' }} size={25} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {/*TABLET VIEW*/}
                            {isTablet && (
                                <Container>
                                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                        <Col className="col-6">
                                            <div className="footer-widget mt-5">
                                                <div className="footer-logo">
                                                    <h5 style={{ color: 'white', fontWeight: 'bold' }} className="ml-3 mr-3">
                                                        Google Developer Student Clubs, MBCET
                                                    </h5>
                                                </div>
                                                <div className="footer-text ml-3 mr-3">
                                                    <p style={{ color: 'white' }}>
                                                        Google Developer Student Clubs are university based community groups for students
                                                        interested in Google developer technologies. Students from all undergraduate or
                                                        graduate programs with an interest in growing as a developer are welcome.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col className="col-6">
                                            <div className="footer-widget" style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div className="footer-widget-heading ml-3 mr-3">
                                                    <h3 style={{ color: 'white', fontWeight: 'bold' }} classname=" mb-3 ">
                                                        Quick Links
                                                    </h3>
                                                </div>
                                                <ul className="ml-3 mr-3">
                                                    <li>
                                                        <a href="#">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="#main__container">Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#outer__container">Schedule</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Register</a>
                                                    </li>

                                                    <li>
                                                        <a href="https://gdscmbcet.com">Website</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://online.fliphtml5.com/mnqav/kolo/">The Journey</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className="ml-3 mt-2">
                                                <a href="https://www.instagram.com/gdscmbcet/">
                                                    <FaInstagram color="white" style={{ marginRight: '10px' }} size={25} />
                                                </a>
                                                <a href="mailto:dscmbcet@gmail.com">
                                                    <FaEnvelope color="white" style={{ marginRight: '10px' }} size={25} />
                                                </a>
                                                <a href="https://twitter.com/gdscmbcet">
                                                    <FaTwitter color="white" style={{ marginRight: '10px' }} size={25} />
                                                </a>
                                                <a href="https://www.linkedin.com/company/dsc-mbcet/">
                                                    <FaLinkedin color="white" style={{ marginRight: '10px' }} size={25} />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            )}
                            {/*MOBILE VIEW*/}
                            {isMobile && (
                                <>
                                    <div className="col-xl-4 col-lg-4 mb-50 ml-3 mr-3">
                                        <div className="footer-widget mt-5">
                                            <div className="footer-logo">
                                                <h5 style={{ color: 'white', fontWeight: 'bold' }} className="ml-3 mr-3">
                                                    Google Developer Student Clubs, MBCET
                                                </h5>
                                            </div>
                                            <div className="footer-text ml-3 mr-3">
                                                <p style={{ color: 'white' }}>
                                                    Google Developer Student Clubs are university based community groups for students
                                                    interested in Google developer technologies. Students from all undergraduate or graduate
                                                    programs with an interest in growing as a developer are welcome.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 mb-50 ml-3 mr-3">
                                        <div className="footer-widget mt-5">
                                            <div className="footer-logo">
                                                <h5 style={{ color: 'white', fontWeight: 'bold' }} className="ml-3 mr-3">
                                                    Quick Links
                                                </h5>
                                            </div>
                                            <div className="footer-text ml-2 mr-2">
                                                <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                    <Row>
                                                        <Col className="col-4">
                                                            <div
                                                                id="quick__links__Section"
                                                                style={{ display: 'flex', flexDirection: 'column' }}
                                                                className=""
                                                            >
                                                                <li>
                                                                    <a href="#">Home</a>
                                                                </li>
                                                                <li className="mt-4">
                                                                    <a href="#main__container">Speakers</a>
                                                                </li>
                                                            </div>
                                                        </Col>

                                                        <Col className="col-4">
                                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <li>
                                                                    <a href="#outer__container">Schedule</a>
                                                                </li>
                                                                <li className="mt-4">
                                                                    <a href="#">Register</a>
                                                                </li>
                                                            </div>
                                                        </Col>
                                                        <Col className="col-4">
                                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <li>
                                                                    <a href="https://gdscmbcet.com">Website</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://online.fliphtml5.com/mnqav/kolo/">The Journey</a>
                                                                </li>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="mobile__social__media__icons"
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        className="mt-5"
                                    >
                                        <a href="https://www.instagram.com/gdscmbcet/">
                                            <FaInstagram color="white" style={{ marginRight: '10px' }} size={25} />
                                        </a>
                                        <a href="mailto:dscmbcet@gmail.com">
                                            <FaEnvelope color="white" style={{ marginRight: '10px' }} size={25} />
                                        </a>
                                        <a href="https://twitter.com/gdscmbcet">
                                            <FaTwitter color="white" style={{ marginRight: '10px' }} size={25} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/dsc-mbcet/">
                                            <FaLinkedin color="white" style={{ marginRight: '10px' }} size={25} />
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    );
};

export default FooterSection;
