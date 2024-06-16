import React from "react";
import styles from './ExpressPayment.module.scss'
import { FakeBtnPayment } from "../../../ui/fakePaymentBtn/FakeBtnPayment";
import Glogo from '/public/img/Payment/bigGLogo.svg'
import PayPalLogo from '/public/img/Payment/paypal-logo.svg'

const ExpressPayment = () => {
    return(
        <>
            <div className={styles.express}>Express checkout</div>
                <div className={styles.btnPadding}>
                    <FakeBtnPayment logo={Glogo} text={'Pay'}/>
                    <FakeBtnPayment logo={PayPalLogo} color="#ffc439"/>
                </div>
            <div className={styles.or}>or</div>
        </>
    )
}

export default ExpressPayment;