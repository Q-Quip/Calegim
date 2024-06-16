import React, {useRef, useState, ChangeEvent, useContext} from "react";
import styles from './InputLine.module.scss'
import { SubmitContext } from "../../payment/leftSide/customizePayment/CustomizePayment";

interface InputProps {
    label: string;
    htmlFor: string;
    type: string;
};

export const InputLine = ({label, htmlFor, type}:InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState('');

    const handlerInput = (e: ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value);
    }

    const isSubmit = useContext(SubmitContext);
    return(
        <div style={{marginBottom:'10px'}}>
            <label htmlFor={htmlFor} className={`${styles.inputContainer} ${inputValue? styles.active: ''}`}> 
                <span>{label}</span>
                <input 
                    id={htmlFor}
                    name={htmlFor}
                    onChange={handlerInput}
                    value={inputValue}
                    type={type}
                    ref={inputRef}
                    placeholder={label}
                    required={true}
                    className={`${(isSubmit && inputValue == '')?styles.errorInput:''}`}
                />
            </label>
            {(isSubmit && inputValue == '') && <p className={styles.errorLine}>Enter a valid {label}</p>}
        </div>
    )
}