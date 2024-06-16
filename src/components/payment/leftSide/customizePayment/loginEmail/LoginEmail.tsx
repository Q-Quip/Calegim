import React from "react";
import styles from './LoginEmail.module.scss'
import { InputLine } from "../../../../ui/inputCardData/InputLine";
import { InputCheckbox } from "../../../../ui/inputCheckbox/InputCheckbox";

const LoginEmail = () => {
    return(
        <>
            <div className={styles.logOut}>
                <h2>Contact</h2>
                <p>Have an account? <span>Log in</span></p>
            </div>
            <InputLine type="email" label="Email" htmlFor="userEmail"/>
            <InputCheckbox text="Email me with news and offers" name="Email news" />
        </>
    )
}

export default LoginEmail;