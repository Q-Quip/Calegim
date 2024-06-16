import React, {createContext, useState, } from "react";
import styles from './CustomizePayment.module.scss'
import LoginEmail from "./loginEmail/LoginEmail";
import PersonalData from "./personalData/PersonalData";
import { LoginPhone } from "./loginPhone/LoginPhone";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const SubmitContext = createContext({});

const CustomizePayment = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void  => {
        e.preventDefault();
        if (e.target instanceof HTMLFormElement) {
            const form = e.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
        }
    }
    const [isSubmit, setIsSubmit] = useState(false);
    const handlSubmit = () => {
        setIsSubmit(true);
    } 
    return(
        <SubmitContext.Provider value={isSubmit}>
        <form 
            method="post"
            className={styles.userForm}
            onSubmit={handleSubmit}>
            <LoginEmail/>
            <div className={styles.mainContainer}>
                <PersonalData/>
                <LoginPhone />
            </div>
            <div className={styles.sendCardData}>
                <Link to='/'>
                    <span className={styles.returnHome}> 
                        <IoIosArrowBack />
                        Return to cart
                    </span> 
                </Link>
                <button 
                    className={styles.shipping}  
                    type="submit"
                    onClick={handlSubmit}>
                    <span>
                        Continue to shipping
                    </span>
                </button>
            </div>
        </form>
        </SubmitContext.Provider>
    )
}

export default CustomizePayment;
