import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from './Logo.svg';
import menuIcon from './menu.svg';
import './NavbarComponent.css';
import { NavLink } from 'react-router-dom';

const NavbarComponent = ({ comp }) => {
    const [toggle, setToggle] = useState(false);
    const [showRed, handleShowRed] = useState(false);
    const [showBlack, handleShowBlack] = useState(false);
    const [showBlue, handleShowBlue] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const transitionNavBar = () => {
        if ((100 * window.scrollY) / window.innerHeight < 100) {
            handleShowBlue(true);
        } else {
            handleShowBlue(false);
        }
        if ((100 * window.scrollY) / window.innerHeight > 100 && (100 * window.scrollY) / window.innerHeight < 175) {
            handleShowRed(true);
        } else {
            handleShowRed(false);
        }
        if ((100 * window.scrollY) / window.innerHeight > 175) {
            handleShowBlack(true);
        } else {
            handleShowBlack(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    function openNav() {
        document.getElementById('sideNavID').style.width = '100vw';
    }
    function closeNav() {
        document.getElementById('sideNavID').style.width = '0';
    }
    /*
      function addStrike(classNumber) {
       console.log(JSON.stringify(slug))
          var oldElement = document.getElementsByClassName('activeLink')[0];
          var newElement = document.getElementsByClassName('navItem')[classNumber];
          oldElement.classList.remove('activeLink');
          newElement.classList.add('activeLink');
      }
  */

    const changeToggle = () => {
        if (toggle == true) {
            setToggle(false);
        } else {
            setToggle(true);
        }
        if (toggle) {
            document.getElementById('sideNavID').style.width = '0';
        } else {
            document.getElementById('sideNavID').style.width = '100vw';
        }
    };
    function goToSpeakerSection() {
        history.push('/#main__container');
    }
    function goToScheduleSection() {
        history.push('/#outer__container');
    }
    return (
        <>
            <div className={`header ${showRed && 'nav__red'}  ${showBlack && 'nav__black'}`}>
                <div className="left ml-1" id="logo">
                    <NavLink to="/home" activeClassName="" style={{ cursor: 'pointer' }}>
                        <img src={logo} width="64rem" />
                    </NavLink>
                </div>

                <div className="right mr-1">
                    {comp === 'home' ? (
                        <>
                            <NavLink activeClassName="active" to="/home" id="nav___link">
                                <b>
                                    <i>Home</i>
                                </b>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink activeClassName="active" id="nav___link" to="/home">
                                Home
                            </NavLink>
                        </>
                    )}

                    <a href="#main__container" id="nav___link" onClick={goToSpeakerSection}>
                        Speakers
                    </a>
                    <a href="#outer__container" id="nav___link" onClick={goToScheduleSection}>
                        Schedule
                    </a>

                    {comp === 'badge' ? (
                        <>
                            <NavLink activeClassName="active" id="nav___link" to="/badge">
                                <b>
                                    <i>Badge</i>
                                </b>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink activeClassName="active" id="nav___link" to="/badge">
                                Badge
                            </NavLink>
                        </>
                    )}

                    <img src={menuIcon} onClick={changeToggle} alt="" />
                </div>
            </div>
            <div id="sideNavID" className={`sideNav ${showBlue && 'nav__blue'}  ${showRed && 'nav__red'}  ${showBlack && 'nav__black'}`}>
                <div className="sideHeader">
                    <div className="left" id="logo">
                        <img src={logo} width="64rem" />
                    </div>
                    <div className="right"></div>
                </div>
                <div className="sideContent">
                    {comp === 'home' ? (
                        <>
                            <NavLink
                                activeClassName="active navItem"
                                to="/home"
                                onClick={() => {
                                    closeNav();
                                }}
                            >
                                <b>
                                    <i>Home</i>
                                </b>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                activeClassName="active navItem"
                                to="/home"
                                onClick={() => {
                                    closeNav();
                                }}
                            >
                                Home
                            </NavLink>
                        </>
                    )}

                    <a
                        href="#main__container"
                        className="navItem"
                        onClick={() => {
                            closeNav();
                            goToSpeakerSection();
                        }}
                    >
                        Speakers
                    </a>

                    <a
                        href="#outer__container"
                        className="navItem"
                        onClick={() => {
                            closeNav();
                            goToScheduleSection();
                        }}
                    >
                        Schedule
                    </a>

                    {comp === 'badge' ? (
                        <>
                            <NavLink
                                activeClassName="active navItem"
                                to="/badge"
                                onClick={() => {
                                    closeNav();
                                }}
                            >
                                <b>
                                    <i>Badge</i>
                                </b>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                activeClassName="active navItem"
                                to="/badge"
                                onClick={() => {
                                    closeNav();
                                }}
                            >
                                Badge
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default NavbarComponent;
