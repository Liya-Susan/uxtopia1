import React, { useState, useEffect } from 'react';
import './ScheduleSection.css';
import ArrowLeft from './images/Arrows.png';
import ArrowRight from './images/Arrows_Right.png';
import IslandImg1 from './images/IslandMain1.png';
import IslandImg2 from './images/IslandMain2.png';
import IslandImg3 from './images/IslandMain3.png';
import IslandImg4 from './images/IslandMain4.png';
import IslandImg5 from './images/IslandMain5.png';
import IslandLockedImg1 from './images/IslandLocked1.png';
import IslandLockedImg2 from './images/IslandLocked2.png';
import IslandLockedImg3 from './images/IslandLocked3.png';
import IslandLockedImg4 from './images/IslandLocked4.png';
import IslandLockedImg5 from './images/IslandLocked5.png';

function ScheduleSection() {
    let [dates, setEnd1] = useState([
        new Date('2021-11-15'),
        new Date('2021-11-16'),
        new Date('2021-11-17'),
        new Date('2021-11-18'),
        new Date('2021-11-19'),
    ]);

    const schedules = [
        {
            //Day 1
            date: dates[0],
            schedule: [
                { time: '6:30 PM', title: 'Kick-off' },
                { time: '6:45 PM', title: 'Designing with Ketchup' },
                { time: '8:15 PM', title: 'Task #1 Briefing' },
            ],
        },
        {
            //Day 2
            date: dates[1],
            schedule: [
                { time: '6:30 PM', title: 'The Science of Illustrations' },
                { time: '7:30 PM', title: 'Explore Key Features of Figma' },
                { time: '9:00 PM', title: 'Task Time' },
                { time: '10:00 PM', title: 'Fireside Chat with Rahul Janardhan' },
            ],
        },
        {
            //Day 3
            date: dates[2],
            schedule: [
                { time: '6:30 PM', title: 'Getting a bit technical !' },
                { time: '7:05 PM', title: 'Exploring Brands' },
                { time: '7:50 PM', title: 'Standing out from the crowd' },
                { time: '8:30 PM', title: 'Task #2 Briefing' },
            ],
        },
        {
            //Day 4
            date: dates[3],
            schedule: [
                { time: '6:30 PM', title: 'Working Efficiently with UX Research & Common Mistakes in the Process' },
                { time: '7:00 PM', title: 'Q&A on UX' },
                { time: '7.15 PM', title: 'UI/UX Review Time' },
                { time: '8:00 PM', title: 'Task #3 Briefing ' },
            ],
        },
        {
            //Day 5
            date: dates[4],
            schedule: [
                { time: '6:30 PM', title: 'Power of Attributions' },
                { time: '6:50 PM', title: 'Communication through UX Writing ' },
                { time: '7:40 PM', title: 'Keystones in Product Design ' },
                { time: '8:10 PM', title: 'Expanding your Fronteirs in Design' },
                { time: '8:30 PM', title: 'Design Sprint Briefing' },
            ],
        },
    ];

    const tempDate = new Date();
    tempDate.setHours(5);
    tempDate.setMinutes(30);
    tempDate.setSeconds(0);
    tempDate.setMilliseconds(0);
    const [currentDate, setcurrentDate] = useState(tempDate);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        document.getElementById('p1').style.display = 'block';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        setSelectedDate(dates[0]);
    }, [dates[0]]);

    function shiftLeft() {
        const boxes = document.querySelectorAll('.box');
        const tmpNode = boxes[0];
        boxes[0].className = 'box move-out-from-left';

        setTimeout(function () {
            if (boxes.length > 5) {
                tmpNode.classList.add('box--hide');
                boxes[5].className = 'box move-to-position5-from-left';
            }
            boxes[1].className = 'box move-to-position1-from-left';
            boxes[2].className = 'box move-to-position2-from-left';
            boxes[3].className = 'box move-to-position3-from-left';
            boxes[4].className = 'box move-to-position4-from-left';
            boxes[0].remove();

            document.querySelector('.cards__container').appendChild(tmpNode);
        }, 500);
        setTimeout(shiftTextRight, 500);
    }

    function shiftRight() {
        const boxes = document.querySelectorAll('.box');
        boxes[4].className = 'box move-out-from-right';
        setTimeout(function () {
            const noOfCards = boxes.length;
            if (noOfCards > 4) {
                boxes[4].className = 'box box--hide';
            }

            const tmpNode = boxes[noOfCards - 1];
            tmpNode.classList.remove('box--hide');
            boxes[noOfCards - 1].remove();
            let parentObj = document.querySelector('.cards__container');
            parentObj.insertBefore(tmpNode, parentObj.firstChild);
            tmpNode.className = 'box move-to-position1-from-right';
            boxes[0].className = 'box move-to-position2-from-right';
            boxes[1].className = 'box move-to-position3-from-right';
            boxes[2].className = 'box move-to-position4-from-right';
            boxes[3].className = 'box move-to-position5-from-right';
        }, 500);
        setTimeout(shiftTextLeft, 500);
    }

    function shiftTextRight() {
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';

        let tempDate;
        if (dates[0] === selectedDate) {
            document.getElementById('p2').style.display = 'block';
            tempDate = dates[1];
        }
        if (dates[1] === selectedDate) {
            document.getElementById('p3').style.display = 'block';
            tempDate = dates[2];
        }
        if (dates[2] === selectedDate) {
            document.getElementById('p4').style.display = 'block';
            tempDate = dates[3];
        }
        if (dates[3] === selectedDate) {
            document.getElementById('p5').style.display = 'block';
            tempDate = dates[4];
        }
        if (dates[4] === selectedDate) {
            document.getElementById('p1').style.display = 'block';
            tempDate = dates[0];
        }

        setSelectedDate(tempDate);
    }

    function shiftTextLeft() {
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';

        let tempDate;
        if (dates[0] === selectedDate) {
            document.getElementById('p5').style.display = 'block';
            tempDate = dates[4];
        }
        if (dates[1] === selectedDate) {
            document.getElementById('p1').style.display = 'block';
            tempDate = dates[0];
        }
        if (dates[2] === selectedDate) {
            document.getElementById('p2').style.display = 'block';
            tempDate = dates[1];
        }
        if (dates[3] === selectedDate) {
            document.getElementById('p3').style.display = 'block';
            tempDate = dates[2];
        }
        if (dates[4] === selectedDate) {
            document.getElementById('p4').style.display = 'block';
            tempDate = dates[3];
        }

        setSelectedDate(tempDate);
    }

    return (
        <>
            <div id="outer__container">
                <div className="schedule__container">
                    <div className="cards-wrapper">
                        <div className="button-container">
                            <div className="button_ele" onClick={shiftRight}>
                                <img src={ArrowLeft} alt="" />
                            </div>
                            <div className="button_ele" onClick={shiftLeft}>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>

                        <ul className="cards__container">
                            <li className="box">
                                <div
                                    id="box4"
                                    style={{
                                        backgroundImage:
                                            schedules[3].date - currentDate <= 0 ? `url(${IslandImg4})` : `url(${IslandLockedImg4})`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </li>
                            <li className="box">
                                <div
                                    id="box5"
                                    style={{
                                        backgroundImage:
                                            schedules[4].date - currentDate <= 0 ? `url(${IslandImg5})` : `url(${IslandLockedImg5})`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </li>
                            <li className="box">
                                <div
                                    id="box1"
                                    style={{
                                        backgroundImage:
                                            schedules[0].date - currentDate <= 0 ? `url(${IslandImg1})` : `url(${IslandLockedImg1})`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </li>
                            <li className="box">
                                <div
                                    id="box2"
                                    style={{
                                        backgroundImage:
                                            schedules[1].date - currentDate <= 0 ? `url(${IslandImg2})` : `url(${IslandLockedImg2})`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </li>
                            <li className="box">
                                <div
                                    id="box3"
                                    style={{
                                        backgroundImage:
                                            schedules[2].date - currentDate <= 0 ? `url(${IslandImg3})` : `url(${IslandLockedImg3})`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </li>
                        </ul>

                        <div className="txt-container">
                            <ul>
                                {schedules.map((e, index) => (
                                    <p id={`p${index + 1}`}>
                                        {e.date - currentDate <= 0
                                            ? e.schedule.map((_e) => (
                                                  <div style={{ display: 'flex', wordWrap: 'break-word', paddingBottom: '1rem' }}>
                                                      <div style={{ fontWeight: 'bolder' }}>{_e.time}</div>
                                                      <div style={{ paddingLeft: '1.2rem' }}>{_e.title}</div>
                                                  </div>
                                              ))
                                            : ``}
                                    </p>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScheduleSection;
