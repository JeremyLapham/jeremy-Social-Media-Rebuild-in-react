import React from 'react';

export default function BottomCards(props) {
    return (
        <div className={`col-lg-3 col-sm-12 littleCardpadding cardsPageView cardColor${props.dayNight}`}>
            <div>
                <h5 style={{ marginRight: `${props.card.marginBetweenTop}px` }} className={`smallCardPad pageView d-inline text${props.dayNight}`}>{props.card.title}</h5>
                <img className='' src={props.card.icon} />
            </div>
            <div className='topSpaceNumbers'>
                <h3 style={{ marginRight: `${props.card.marginRightBottom}px` }} className={`d-inline smallCardPad littleCardFontWeight textTwo${props.dayNight}`}>{props.card.displayedNumber}</h3>
                <img src={props.card.arrow} alt='Display card down arrow for increase of followers' />
                <h6 className={`${props.card.percentColor} d-inline`}>{props.card.percent}</h6>
            </div>
        </div>
    );
}