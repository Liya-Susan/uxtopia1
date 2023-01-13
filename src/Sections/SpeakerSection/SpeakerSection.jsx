import './SpeakerSection.css';
import * as speakerFunction from './speakersData.js';
import React, { useEffect, useState } from 'react';
// import promoVideo from './Assets/promovideo.mp4';
// import CrossTop from './Assets/crossTop.png';
// import CrossBottom from './Assets/crossBottom.png';

const SpeakerSection = () => {
    useEffect(() => {
        speakerFunction.addSpeakers();
    }, []);

    return (
        <>
            <container id="main__container" className="speaker" onLoad="addSpeakers()">
                <div className="title">
                    <h1>Our Stellar Speakers</h1>
                </div>
                <div className="speakercontainer flex-wrap-anim" id="speakersection">
                    {/* <div>
                        <div className="content">
                            <div className="speakertile" style={{ backgroundImage: `url(require("./images/UXTopia Speaker Tile @abid.png"))` }}>

                            </div>
                        </div>
                    </div> */}
                </div>
            </container>
        </>
    );
};

export default SpeakerSection;
