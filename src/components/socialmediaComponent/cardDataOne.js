import faceBookImage from '../../assets/icon-facebook.svg';
import instaImage from '../../assets/icon-instagram.svg';
import twitterImage from '../../assets/icon-twitter.svg';
import youtubeImage from '../../assets/icon-youtube.svg';
import upArrow from '../../assets/icon-up.svg';
import downArrow from '../../assets/icon-down.svg';
import '../socialmediaComponent/socialmedia.css';

export const topCardData = [
    {
        topIcon: faceBookImage,
        user: '@nathanf',
        followers: '1987',
        UpOrDown: '12 today',
        arrow: upArrow,
        arrowColor: 'upArrowTxtColor',
        border: 'topSocialBoxeFacebook',
    },
    {
        topIcon: twitterImage,
        user: '@nathanf',
        followers: '1044',
        UpOrDown: '99 today',
        arrow: upArrow,
        arrowColor: 'upArrowTxtColor',
        border: 'topSocialBoxeTwitter'
    },
    {
        topIcon: instaImage,
        user: '@realnathanf',
        followers: '11k',
        UpOrDown: '1099 today',
        arrow: upArrow,
        arrowColor: 'upArrowTxtColor',
        border: 'topSocialBoxeInsta'
    },
    {
        topIcon: youtubeImage,
        user: 'Nathan F.',
        followers: '8239',
        UpOrDown: '144 today',
        arrow: downArrow,
        arrowColor: 'downArrowTxtColor',
        border: 'topSocialBoxeYoutube'
    }
];

export const bottomCardData = [
    {
        id: 1,
        title: 'Page views',
        icon: faceBookImage,
        displayedNumber: '87',
        arrow: upArrow,
        percent: '3%',
        percentColor: 'upArrowTxtColor',
        marginBetweenTop: 100,
        marginRightBottom: 160
    },
    {
        id: 2,
        title: 'Likes',
        icon: faceBookImage,
        displayedNumber: '52',
        arrow: downArrow,
        percent: '2%',
        percentColor: 'downArrowTxtColor',
        marginBetweenTop: 160,
        marginRightBottom: 160
    },
    {
        id: 3,
        title: 'Likes',
        icon: instaImage,
        displayedNumber: '5462',
        arrow: upArrow,
        percent: '2257%',
        percentColor: 'upArrowTxtColor',
        marginBetweenTop: 160,
        marginRightBottom: 80
    },
    {
        id: 4,
        title: 'Page views',
        icon: instaImage,
        displayedNumber: '52k',
        arrow: upArrow,
        percent: '1357%',
        percentColor: 'upArrowTxtColor',
        marginBetweenTop: 100,
        marginRightBottom: 100
    },
    {
        id: 5,
        title: 'Retweets',
        icon: twitterImage,
        displayedNumber: '117',
        arrow: upArrow,
        percent: '303%',
        percentColor: 'upArrowTxtColor',
        marginBetweenTop: 120,
        marginRightBottom: 120
    },
    {
        id: 6,
        title: 'Likes',
        icon: twitterImage,
        displayedNumber: '507',
        arrow: upArrow,
        percent: '553%',
        percentColor: 'upArrowTxtColor',
        marginBetweenTop: 160,
        marginRightBottom: 110
    },
    {
        id: 7,
        title: 'Likes',
        icon: youtubeImage,
        displayedNumber: '107',
        arrow: downArrow,
        percent: '19%',
        percentColor: 'downArrowTxtColor',
        marginBetweenTop: 160,
        marginRightBottom: 130
    },
    {
        id: 8,
        title: 'Total Views',
        icon: youtubeImage,
        displayedNumber: '1407',
        arrow:downArrow,
        percent: '12%',
        percentColor: 'downArrowTxtColor',
        marginBetweenTop: 105,
        marginRightBottom: 110
    },
]