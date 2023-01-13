import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LandingLeftImage from './Assets/Eye.gif';
import './LandingSection.css';
import logo from './Assets/Logo.svg';
import arrow from './Assets/Union.png';
import BackImage from './Rectangle.png';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NavbarComponent from '../../Components/Navbar/NavbarComponent';
import { useMediaQuery } from 'react-responsive';

const LandingSection = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 707 });
    const isMobile = useMediaQuery({ maxWidth: 707 });

    return (
        <>
            <div id="home__page">
                {/* <div id="background__img" style={{ zIndex: '9999', pointerEvents: 'none' }}>
                <img  id="background__img" src={BackImage} />
            </div> */}

                <Container id="left__right__group">
                    <div id="left__section">
                        <img className="img-fluid" src={LandingLeftImage} />
                    </div>
                    <div id="right__Section">
                        {isMobile && (
                            <div id="right__Section__text">
                                <div style={{ display: 'flex' }}>
                                    <h1>
                                        Not<span>&nbsp;</span>
                                    </h1>
                                    <h1 className="text-light">just another</h1>
                                </div>
                                <h1>design event.</h1>
                            </div>
                        )}
                        {isDesktopOrLaptop && (
                            <div id="right__Section__text" className="desktop">
                                <h1>Not</h1>
                                <h1 className="text-light">just</h1>
                                <h1 className="text-light">another</h1>
                                <h1>design</h1>
                                <h1>event.</h1>
                            </div>
                        )}
                        <button className="kev" id="grab__spot__btn">
                            Registrations Closed
                        </button>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default LandingSection;
