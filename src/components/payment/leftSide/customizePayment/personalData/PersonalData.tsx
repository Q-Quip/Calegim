import React from "react";
import styles from './PersonalData.module.scss'
import { InputLine } from "../../../../ui/inputCardData/InputLine";
import { InputSelect } from "../../../../ui/inputSelect/InputSelect";
import { country, states } from "./SelectOptions";

const PersonalData = () => {
    return(
        <>
            <h2 className={styles.title}>Shipping address</h2>
            <InputSelect label="Country" options={country}/>
            <div className={styles.twoInputs}>
                <InputLine type="text" label="First name" htmlFor="userFirstName"/>
                <InputLine type="text" label="Last name" htmlFor="userLastName"/>
            </div>
            <InputLine type="text" label="Address" htmlFor="userAddress"/>
            <InputLine type="text" label="Aparthment, suite, etc. (optional)" htmlFor="userApartment"/>
            <div className={styles.threeInputs}>
                <InputLine type="text" label="City" htmlFor="userCity"/>
                <InputSelect label="State" options={states}/> 
                <InputLine type="text" label="ZIP code" htmlFor="userZIPCode"/>
            </div>
        </>
    )
}

export default PersonalData;