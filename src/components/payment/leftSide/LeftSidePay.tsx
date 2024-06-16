import React from "react";
import styles from './LeftSidePay.module.scss'
import Navigation from "./navigation/Navigation";
import ExpressPayment from "./ExpressPayment/ExpressPayment";
import CustomizePayment from "./customizePayment/CustomizePayment"; 

const LeftSidePay = () => {
    return(
        <section className={styles.container}>
            <Navigation />
            <ExpressPayment/>
            <CustomizePayment/>
            <footer>
                <ul className={styles.footNavigation}>
                    <li>Refund policy</li>
                    <li>Shipping policy</li>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                    <li>Subscription policy</li>
                </ul>
            </footer>
        </section> 
    )
}

export default LeftSidePay;