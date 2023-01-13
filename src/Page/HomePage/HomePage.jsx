import React from 'react';
import './HomePage.css';
import LandingSection from '../../Sections/LandingSection/LandingSection';
import VideoSection from '../../Sections/VideoSection/VideoSection';
import BackImage from './Rectangle.png';
import SpeakerSection from '../../Sections/SpeakerSection/SpeakerSection';
import Footer from '../../Sections/Footer/Footer';
import ScheduleSection from '../../Sections/ScheduleSection/ScheduleSection';
import SponsorSection from '../../Sections/SponsorSection/SponsorSection';

const HomePage = () => {
    return (
        <>
            <div id="background__img" style={{ zIndex: '9999', pointerEvents: 'none', display: 'none' }}>
                <img className="img-fluid" id="background__img" src={BackImage} />
            </div>
            <LandingSection />
            <VideoSection />
            <SponsorSection />
            <SpeakerSection />
            <ScheduleSection />
            <Footer />
        </>
    );
};

export default HomePage;
