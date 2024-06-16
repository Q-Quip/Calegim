import React from "react";
import styles from './Navigation.module.scss'
import logoHead from '/public/img/header/logoHead.webp'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
    const navigation = ['Cart', 'Information', 'Shipping', 'Payment'];
    return(
        <>
            <Link to='/'>
                <img className={styles.mainLogo} src={logoHead} alt='main logo of the store' title='Calegim logo'/>
            </Link>
            <ul className={styles.navigationList}>
                {navigation.map(navText => (
                        <li key={`${navText}+id`}>
                            <span>{navText}</span>
                            <IoIosArrowForward className={styles.arrowIcon}/>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navigation;