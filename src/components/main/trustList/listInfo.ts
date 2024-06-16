import flask from '/public/img/main/trustList/flask.svg'
import doctor from '/public/img/main/trustList/doctor.svg'
import face from '/public/img/main/trustList/face.svg'

const recomendationList = [{
    img: flask,
    alt: 'Our Science',
    imgTitle: 'Our Science',
    title: 'Created by Scientists',
    text: [`Formulated in our laboratories and driven by 20 years of 
            stem cell research, now available for at-home treatments`],
    btn: 'Our Science',
        }, {
    img: doctor,
    alt: 'Hear from doctors',
    imgTitle: 'Hear from doctors',
    
    title: 'Trusted by Doctors',
    text: [`Used in hundreds of clinics around the world to support patient results and recovery`],
    btn: 'Hear from doctors',    
}, {
    img: face,
    alt: 'Hair results',
    imgTitle: 'Hair results',

    title: 'Validated by Results',
    text: [`Robust clinical data by medical professionals make up the core of our brand. 
                This is why we know CALECIM® works`],
    btn: 'Hair results',    
},
];

export default recomendationList;