import React from 'react'
import styles from './SignUpHead.module.scss'

const SignUpHead = () => {
    return(
        <div className={styles.container}>
             <ul className={styles.infoLine}>
                <li className={styles.leftBar}>10% off your first purchase. <a>Sign up</a> for a discount</li>
                <li className={styles.rightBar}>
                    <div><a>Account</a></div>
                    <div><a>Find a clinic</a></div>
                </li>
             </ul>
        </div>
    )
}

export default SignUpHead;