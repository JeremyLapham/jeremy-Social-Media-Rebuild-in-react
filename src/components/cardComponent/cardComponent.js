import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../socialmediaComponent/socialmedia.css';

export default function Cards(props) {
    return (
        <div className={`col-lg-3 col-sm-12 ${props.card.border} cardColor${props.dayNight} text-center`}>
            <div className='userpadd'>
                <img src={props.card.topIcon} alt='Display card facebook logo' />
                <h6 className={`text${props.dayNight} users d-inline`}>{props.card.user}</h6>
            </div>
            <h1 className={`topBox followerCount textTwo${props.dayNight}`}>{props.card.followers}</h1>
            <h4 className={`wordFollow text${props.dayNight} `}>Followers</h4>
            <div className='upInFollowers'>
                <img src={props.card.arrow} alt='Display card up arrow for increase of followers' />
                <h6 className={`${props.card.arrowColor} d-inline`}>{props.card.UpOrDown}</h6>
            </div>
        </div>
    );
}