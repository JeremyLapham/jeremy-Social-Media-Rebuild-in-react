import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './socialmedia.css';
import Switch from '../switchComponent/switch'
import Cards from '../cardComponent/cardComponent';
import BottomCards from '../bottomCardComponent/bottomCard';

import { bottomCardData } from '../socialmediaComponent/cardDataOne';
import { topCardData } from './cardDataOne';

export default function SocialMedia() {
    const [mode, setMode] = useState('dark');
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    const toggleMode = () => {
        setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'topBoxdark' : 'topBoxlight'}`}>
            <div className='container'>
                <Row className='topTxt'>
                    <Col lg={6} sm={12}>
                        <div>
                            <h3 className={`textTwo${mode}`}>Social Media Dashboard</h3>
                            <h6 className={`text${mode}`}>Total Followers: 23,004</h6>
                        </div>
                    </Col>
                <div className={`hr${mode}`}></div>
                    <Col lg={6} sm={12} className='d-flex justify-content-end'>
                        <Switch handleClick={toggleMode} dayNight={mode}/>
                    </Col>
                </Row>
                <br />
                <Row className='cardSpace'>
                    <Cards dayNight={mode} card={topCardData[0]}/>
                    <Cards dayNight={mode} card={topCardData[1]}/>
                    <Cards dayNight={mode} card={topCardData[2]}/>
                    <Cards dayNight={mode} card={topCardData[3]}/>
                </Row>
                <Row className='topTxt'>
                    <div className='col-12'>
                        <h4 className={`textTwo${mode}`}>Overview - Today</h4>
                    </div>
                </Row>

                <Row className='cardSpace'>
                    <BottomCards dayNight={mode} card={bottomCardData[0]} />
                    <BottomCards dayNight={mode} card={bottomCardData[1]} />
                    <BottomCards dayNight={mode} card={bottomCardData[2]} />
                    <BottomCards dayNight={mode} card={bottomCardData[3]} />
                </Row>
                
                <Row className='cardSpace bottomMargin'>
                    <BottomCards dayNight={mode} card={bottomCardData[4]} />
                    <BottomCards dayNight={mode} card={bottomCardData[5]} />
                    <BottomCards dayNight={mode} card={bottomCardData[6]} />
                    <BottomCards dayNight={mode} card={bottomCardData[7]} />
                </Row>
            </div>
        </div>
    );
}