import React from 'react';
import FooterSection from '../FooterSection/FooterSection';
import './Footer.css';
import arrow from './Union.png';

import bottomImage from './bottomImage.png';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
    return (
        <div id="footer__section">
            <div id="grains"></div>

            <div id="footer__bottom__section">
                <img id="bottom__image" className="img-fluid w-100" src={bottomImage} />

                <div id="top__box">
                    <h2>
                        Not <span style={{ color: 'white' }}>just another </span>
                        <br></br> design conference.
                    </h2>
                    <button id="grab__spot__button">Registrations Closed</button>
                </div>
                <FooterSection />
            </div>
        </div>
    );
};

export default Footer;
