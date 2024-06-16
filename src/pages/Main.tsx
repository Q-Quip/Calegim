import React from 'react'
import Slider from '../components/main/slider/Slider';
import Carousel from '../components/main/infiniteCarousel/Carousel';
import ProductsLine from '../components/main/productsLine/ProductsLine';
import ProductDescription from '../components/main/productDescription/ProductDescription';
import ShopPreview from '../components/main/shopPreview/ShopPreview';
import BenefitsProduct from '../components/main/benefitsProduct/BenefitsProduct';
import TrustList from '../components/main/trustList/TrustList';
import SubDirection from '../components/main/subDirection/SubDirection';
import JoinDirection from '../components/main/joinDirection/JoinDirection';



const Main = () => {
    return(
        <main>
            <Slider/>
            <Carousel/>
            <ProductsLine/>
            <ProductDescription/>
            <ShopPreview />
            <BenefitsProduct/>
            <TrustList />
            <SubDirection />
            <JoinDirection />
           
        </main>
    )
}
export default Main;