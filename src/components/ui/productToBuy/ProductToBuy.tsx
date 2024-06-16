import React from "react";
import styles from './ProductToBuy.module.scss'

interface ProductCard {
    src: string;
    alt: string;
    title: string;
    count: number;
    productTitle: string;
    price: number;
}

const ProductToBuy = ({src, alt, title,count, productTitle, price}: ProductCard) => {
    return(
        <div className={styles.card}>
            <div className={styles.ImgTextBlock}>
                <div className={styles.imgBox}>
                    <img src={src} alt={alt} title={title}/>
                    <span>{count}</span>
                </div>
                <div className={styles.description}>
                    <p>{productTitle}</p>
                </div>
            </div>
            <div className={styles.productPrice}>
                <span>${price}.00</span>
            </div>
        </div>
    )
}

export default ProductToBuy;