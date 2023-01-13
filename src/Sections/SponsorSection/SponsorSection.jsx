import './SponsorSection.css';
import React from 'react';
import img1 from './Sponsors/1.svg';
import img2 from './Sponsors/2.svg';
import img3 from './Sponsors/3.svg';
import img4 from './Sponsors/4.svg';

const SponsorSection = () => {
    function pauseSponsor() {
        var ele = document.getElementsByClassName('slide-track')[0];
        ele.style.animationPlayState = 'paused';
    }
    function playSponsor() {
        var ele = document.getElementsByClassName('slide-track')[0];
        ele.style.animationPlayState = 'running';
    }

    const links = [
        { link: 'https://mobbin.design', image: img1 },
        { link: 'http://figma.com', image: img2 },
        { link: 'https://icons8.com', image: img3 },
        { link: 'https://streamyard.com', image: img4 },
    ];

    const duplicate = 4;
    for (let index = 0; index < duplicate / 2; index++) {
        links.forEach((e) => links.push(e));
    }

    return (
        <>
            <container id="sponsors_container">
                <div className="title">
                    <h1>Our Sponsors</h1>
                </div>
                <div className="outer-container">
                    <div className="slider">
                        <div className="slide-track" onMouseOver={pauseSponsor} onMouseOut={playSponsor}>
                            {links.map((e) => (
                                <div className="slide">
                                    <a href={e.link}>
                                        <img src={e.image} height="100" width="250" alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </container>
        </>
    );
};

export default SponsorSection;
