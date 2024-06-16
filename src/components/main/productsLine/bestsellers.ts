import one from '/public/img/main/productsLine/ICz-7O9p.webp'
import two from '/public/img/main/productsLine/KgRjXRe0.webp'
import three from '/public/img/main/productsLine/mVp5XdN.webp'
import four from '/public/img/main/productsLine/ROexP5TT.webp'
import five from '/public/img/main/productsLine/vb23Eawj.webp'
import six from '/public/img/main/productsLine/xcWOkDNK_812c220d-c162-4405-82c2-ab5e87b4edf6.webp'

import './productsLogic'


const bestsellerProducts:Bestseller = [[
    {src: one, 
        alt:'cosmetic bottle', 
        ImgTitle: 'cosmetics bottle'},
    {
        title: 'Professional Serum 5ml',
        price: 120.00,
        text: 'Contains the highest concentration of PTT-6',
    },
    {
        title: 'Professional Serum 5ml',
        targets: 'Thin, sensitized, aging skin; post-procedure skin',
        application: 'Used at-home, or after skin procedures',
        
    },
],[
    {src: two, 
        alt:'cosmetic bottle', 
        ImgTitle: 'cosmetics bottle'},
    {
        title: 'Advanced Hair System',
        price: 360.00,
        text: 'The 6-week hair loss treatment with clinically validated results',
    },{
        title: 'Advanced Hair System',
        targets: 'Hair loss, hair losing volume, thickness and quality',
        application: 'Apply with supplied derma stamp twice a week ',
        
    },
],[
    {src: three, 
        alt:'cosmetic bottle', 
        ImgTitle: 'cosmetics bottle'},
    {
        title: 'Multi-Action Cream',
        price: 85.00,
        text: 'Helps boost collagen and elastin production',
    },
    {
        title: 'Multi-Action Cream',
        targets: 'Skin losing volume and elasticity',
        application: 'AM and PM ',
        
    },
],[
    {src: four, 
        alt:'cosmetic bottle', 
        ImgTitle: 'cosmetics bottle'},
    {
        title: 'Restorative Hydration Cream',
        price: 85.00,
        text: 'Deeply hydrates and replenishes dry, dull skin',
    },
    {
        title: 'Restorative Hydration Cream',
        targets: 'Dry, dull skin, lacking lustre',
        application: 'AM and PM ',
        
    },
],[
    {src: five, 
        alt:'cosmetic bottle', 
        ImgTitle: 'cosmetics bottle'},
    {
        title: 'Professional Pigment Solution',
        price: 87.00,
        text: 'Superior treatment for uneven skin tone and hyperpigmentation',
    },
    {
        title: 'Professional Pigment Solution',
        targets: 'Uneven skin tone; hyperpigmentation; sun-damaged skin',
        application: 'Suitable for daily use as part of your skincare routine',
       
    },
],[
    {src: six, 
        alt:'cosmetic bottle', 
        ImgTitle: 'cosmetics bottle'},
    {
        title: 'Recovery Night Complex',
        price: 240.00,
        text: 'Use overnight to hydrate, brighten, and repair skin with stem cell proteins',
    }, {
        title: 'Recovery Night Complex',
        targets: 'Dehydrated skin',
        application: 'Ideal for nightly use as part of your skincare',
        
    },
    
]];





export default bestsellerProducts;