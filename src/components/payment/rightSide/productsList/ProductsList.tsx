import React from "react";
import {useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { ProductInfo, ImgOfProduct } from "../../../../store/productCardsBuy/productsLogic";
import ProductToBuy from "../../../ui/productToBuy/ProductToBuy";

const ProductsList = () => {
    const productsImg: ImgOfProduct[] = useSelector((state:RootState) => state.productToBuy.cardImg);
    const productsText: ProductInfo[] = useSelector((state:RootState) => state.productToBuy.cardInfo); 
    return(
        <ul style={{borderBottom: "1px solid #9C9699"}}>
            {
                productsImg.map((card, idx) => (
                    <li>
                        <ProductToBuy src={card.src} 
                        alt={card.alt}
                        title={card.title}
                        count={productsText[idx].count}
                        productTitle={productsText[idx].productTitle}
                        price={productsText[idx].price}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default ProductsList;