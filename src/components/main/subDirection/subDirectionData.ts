import Bg from '/public/img/main/subAndJoin/08Homepage-Subscription01-desktop-1200x1200.webp' 
import box from '/public/img/main/subAndJoin/sub/box.svg'
import calendar from '/public/img/main/subAndJoin/sub/calendar.svg'
import discount from '/public/img/main/subAndJoin/sub/discount.svg'
import star from '/public/img/main/subAndJoin/sub/star.svg'

const subBlockInfo = {
    title: 'NEVER RUN OUT',
    text: [`Auto-Replenish, watch your favorite products show up
    at your door automatically and save up to 20%.
    Customize your experience - receive what you need,
   when you need it, no more or no less.`]};

const imgBlock = [{
    src: box,
    alt: 'Free delivery',
    title: 'Free express delivery',
    text: `Free express delivery`},
    {
        src: calendar,
        alt: 'adjust your plan',
        title: 'adjust your',
        text: `Cancel or adjust your plan anytime`},
        {
            src: discount,
            alt: 'discount',
            title: 'discount',
            text: `20% off our products`}, 
            {
                src: star,
                alt: 'earn coins',
                title: 'earn coins',
                text: `Earn CALECIM  Coins on orders`},

];

const extraBtnInfo = {
    color: 'White' as const,
    state: false,
    text: 'Subscribe now',
};

export {Bg, subBlockInfo, imgBlock, extraBtnInfo};