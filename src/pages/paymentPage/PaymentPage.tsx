import React from 'react';
import styles from './PaymentPage.module.scss'
import LeftSidePay from '../../components/payment/leftSide/LeftSidePay';
import RightSidePay from '../../components/payment/rightSide/RightSidePay';

const PaymentPage = () => {
    return(
        <main className={styles.pageDivision}>
            <LeftSidePay/>
            <RightSidePay/>
        </main>
    ) 
}

export default PaymentPage;