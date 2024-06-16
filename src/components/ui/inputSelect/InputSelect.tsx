import React, {useState} from "react";
import styles from './InputSelect.module.scss'

interface Option {
    value: string;
    label: string;
};
interface SelectProps {
    options: Option[];
    label: string;
};

export const InputSelect:React.FC<SelectProps> = ({options, label}) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const handlerOption = (e: React.ChangeEvent<HTMLSelectElement>): void  => {
        setSelectedOption(e.target.value);
    }
    return(
        <label className={styles.inputContainer}>
                <span>{label}</span>
                <select 
                    value={selectedOption}
                    onChange={handlerOption}>
                    {options.map(option => (
                            <option 
                                key={option.value} 
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))
                    }
                </select>
        </label>
    )
}