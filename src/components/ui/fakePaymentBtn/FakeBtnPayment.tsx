import React from "react";
import styles from './FakeBtnStyle.module.scss'

interface FakeBtnProps {
    logo:string;
    text?: string;
    color?: string;
}

const FakeBtnPayment = ({logo,text, color}:FakeBtnProps) => {
    return(
        <div className={styles.containerBtn} style={{ backgroundColor: color }}>
            <img src={logo} alt="googleLogo"/>
            <span>{text}</span>
        </div>
    )
}

export {FakeBtnPayment};