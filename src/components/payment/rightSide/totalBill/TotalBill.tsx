import React from "react";
import styles from './TotalBill.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { ProductInfo } from "../../../../store/productCardsBuy/productsLogic";

const TotalBill = () => {
    const productsText: ProductInfo[] = useSelector((state:RootState) => state.productToBuy.cardInfo); 
    const bill:number = productsText.reduce((summa, current) => {
        return summa + (current.price * current.count);
    }, 0);
    return(
        <>
            <div className={styles.SubShip}>
                <div className={styles.bold}>
                    <span>Subtotal</span>
                    <span>${bill}.00</span>
                </div>
                <div>
                    <span className={styles.bold}>Shipping</span>
                    <span>Calculated at next step</span>
                </div>
            </div>
            <div className={styles.total}>
                <span className={styles.bold}>Total</span>
                <div>
                    <p>usd </p>
                    <span className={styles.bold} style={{fontSize: '25px'}}>${bill}.00</span>
                </div>
            </div>
        </>
    )
}

export default TotalBill;