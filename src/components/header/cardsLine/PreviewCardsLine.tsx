import React from 'react'
import { ImgOfProduct,ProductInfo } from '../../../store/productCardsBuy/productsLogic';
import CardShopBar from '../../ui/headerShopBar/CardShopBar';

interface PropsOfProducts {
    ImgData: ImgOfProduct[];
    TextData: ProductInfo[];
};
const PreviewCardsLine:React.FC<PropsOfProducts> = ({ImgData,TextData }) => {
    return(
        <>
           {ImgData.map((img, idx)=> (
               <CardShopBar
                src={img.src}
                alt={img.alt}
                title={img.title}
                productTitle={TextData[idx].productTitle}
                price={TextData[idx].price}
                count={TextData[idx].count}
               /> 
           ))} 
        </>
    )
}

export default PreviewCardsLine;