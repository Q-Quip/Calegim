import React from 'react'
import styles from './CardShopBar.module.scss'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import {useDispatch } from 'react-redux';
import { actionsBuy } from '../../../store/productCardsBuy/productCardsBuy';
import { actionsCount } from '../../../store/productCounter/productCounterSlice';

interface CardProps {
    src: string;
    alt: string;
    title: string;
    productTitle: string;
    price: number;
    count: number;
};

const CardShopBar:React.FC<CardProps> = ({src, alt, title, productTitle,price, count}) => {
    const dispatch = useDispatch();
    const handleDeleteCard = () => {
        dispatch(actionsBuy.deleteCard({src,productTitle}));
        dispatch(actionsCount.deleteByAmount(count));
    }
    const handleAmountDelete = () => {
        dispatch(actionsBuy.deleteAmoutCard({src,productTitle}));
        dispatch(actionsCount.decrement());
    }
    const handleAmountPlus = () => {
        dispatch(actionsBuy.plusAmoutCard(productTitle));
        dispatch(actionsCount.increment());
    }

    return(
        <div className={styles.container}>
                <img className={styles.cardImg} src={src} alt={alt} title={title}/>
                <div className={styles.textContainer}>
                    <h3>{productTitle}</h3>
                    <p>${price}.00 usd</p>
                    <div className={styles.bottom}>
                        <div className={styles.btnContainer}>
                            <button onClick={handleAmountPlus}>
                                <AiOutlinePlus />
                            </button>
                                <span>{count}</span>
                            <button onClick={handleAmountDelete}>
                                <AiOutlineMinus />
                            </button>
                        </div>
                        <button onClick={handleDeleteCard}>
                            <CiTrash style={{fontSize: '22px'}} />
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default CardShopBar;