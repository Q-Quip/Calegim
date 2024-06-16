import one from '/public/img/main/slider/slideOne.webp';
import two from '/public/img/main/slider/slideTwo.webp';
import three from '/public/img/main/slider/slideThree.webp';
import four from '/public/img/main/slider/calecim-vday_homepage_banner-desktop.webp'

import './SliderLogic';

import oneText from '/public/img/main/slider/slideOneText.avif'
import twoText from '/public/img/main/slider/slideTwoText.webp'
import threeText from '/public/img/main/slider/slideTreeText.avif'

const slidesArr:ImagesArray = [
    { id: 0, src: four, alt: 'v-day',},
    { id: 1,src: one, alt: 'woman laughs',},  
    { id: 2,src: two, alt: 'flacon',},
    { id: 3, src: three, alt: 'swag woomen',},
];

const slidesText:TextArray = [{ 
                        id: 0,
                        text: `"\when you combine any
                                of our skincare save - $50 off the bundle\"`, 
                        button: 'Buy now'},
                    {
                        id: 1,
                        logoImg:{logoSrc: oneText, alt: 'text'}, 
                        text: '\"Helped to revive our tester\'s hair, even in the face of COVID-related thinning.\"', 
                        button: 'Finde out more'},
                    {
                        id: 2,
                        logoImg:{logoSrc: twoText, alt: 'text'}, 
                        text: '\"We are seeing a drop of 10-11 years in skin aging.\"', 
                        button: 'Finde out more'},
                    {
                        id: 3,
                        logoImg:{logoSrc: threeText, alt: 'text'}, 
                        text: '\"Are Stem Cell Exosomes the Secret to a Snatched Jawline?\"', 
                        button: 'Read full story'},
                    ];

export  {slidesArr, slidesText};