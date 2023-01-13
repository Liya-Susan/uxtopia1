import React from 'react';
import './VideoSection.css';
import promoVideo from './Assets/promofinal.mp4';
import CrossTop from './Assets/crossTop.png';
import CrossBottom from './Assets/crossBottom.png';

const VideoSection = () => {
    return (
        <>
            <container id="video__section">
                <div id="video__text__Section">
                    <h1 className="text-light" id="video__Section__heading">
                        Sneak Peek
                    </h1>
                </div>

                <div>
                    <img style={{ pointerEvents: 'none' }} id="cross__top" src={CrossTop}></img>

                    <div>
                        <video controls width="300" height="558">
                            <source src={promoVideo}></source>
                        </video>
                    </div>

                    <img style={{ pointerEvents: 'none' }} id="cross__bottom" src={CrossBottom}></img>
                </div>
            </container>
        </>
    );
};

export default VideoSection;
