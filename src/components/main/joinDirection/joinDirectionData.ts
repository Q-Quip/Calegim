import Bg from '/public/img/main/subAndJoin/memberbenefits-1200x1200.webp' 

import cream from '/public/img/main/subAndJoin/join/cream.svg'
import discount from '/public/img/main/subAndJoin/join/discount.svg'
import events from '/public/img/main/subAndJoin/join/events.svg'
import flacon from '/public/img/main/subAndJoin/join/flacon.svg'
import friend from '/public/img/main/subAndJoin/join/friend.svg'
import products from '/public/img/main/subAndJoin/join/products.svg'

const joinBlockInfo = {
    title: 'member benefits',
    text: [`Join MyCALECIM® Rewards Club now and 
            treat yourself to full-size products, 
            generous discounts, exclusive launch promos and more`]};

const imgBlock = [{
    src: cream,
    alt: 'Full-size products',
    title: 'Full-size products',
    text: `Full-size products available for free`},
    {
        src: products,
        alt: 'range products',
        title: 'range products',
        text: `Try the full range of products on us`},
        {
            src: events,
            alt: 'online events',
            title: 'online events',
            text: `Join exclusive online events`}, 
            {
                src: discount,
                alt: 'discount vouchers',
                title: 'discount vouchers',
                text: `Enjoy generous discount vouchers`},
                {
                    src: flacon,
                    alt: 'Product sampling',
                    title: 'Product sampling',
                    text: `Product sampling programmes`},
                    {
                        src: friend,
                        alt: 'referring a friend',
                        title: 'referring a friend',
                        text: `Be rewarded for referring a friend`},

];

const extraBtnInfo = {
    color: 'White' as const,
    state: false,
    text: 'Join now',
};

export {Bg, joinBlockInfo, imgBlock, extraBtnInfo};