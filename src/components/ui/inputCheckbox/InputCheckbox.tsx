import React, {useState} from "react";
import styles from './InputCheckbox.module.scss'

interface Checkbox {
    text: string;
    name: string;
};

export const InputCheckbox = ({name, text}:Checkbox) => {
    const [isChecked,setIsChecked] = useState(false);
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(e.target.checked)
    }
    return(
        <label className={styles.checkboxContainer}>
            <input type="checkbox"  
                    name={name}
                    checked={isChecked}
                    onChange={handlerChange}/> 
            {text}
        </label>
    ) 
}