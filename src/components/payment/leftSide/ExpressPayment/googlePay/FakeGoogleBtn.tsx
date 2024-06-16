import React from "react";
import styles from './GoolePay.module.scss'
import GLogo from '/public/img/Payment/bigGLogo.svg'

const FakeGoogleBtn = () => {
    return(
        <div className={styles.containerBtn}>
            <img src={GLogo} alt="googleLogo"/>
            <span>Pay</span>
        </div>
    )
}

export {FakeGoogleBtn};