import React from 'react';
import styles from './BtnLearnAbout.module.scss'
import arrowMore from '/public/img/main/productDescription/btnMore.svg'

type Props = {
    text: string;
};

const BtnLearnAbout = (props:Props) => {
    return(
        <div className={styles.learnAbout}>
            <button>
                <a>{props.text}  
                    <img src={arrowMore} alt={'learn more about product'} title={'arrow learn more about product'}/>
                </a>
            </button>
        </div>
    )
}

export default BtnLearnAbout;