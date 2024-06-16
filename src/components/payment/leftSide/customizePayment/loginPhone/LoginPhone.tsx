import React from "react";
import styles from './LoginPhone.module.scss'
import { InputLine } from "../../../../ui/inputCardData/InputLine";
import { InputCheckbox } from "../../../../ui/inputCheckbox/InputCheckbox";
import { checkBox } from "./LoginPhoneData";

export const LoginPhone = () => {
    return(
        <>
            <InputLine label="Phone" type="text" htmlFor="userPhoneNumber"/>
            {checkBox.map(box => (
                <InputCheckbox key={box.id} name={box.name} text={box.text}/>
            ))}
        </>
    )
}