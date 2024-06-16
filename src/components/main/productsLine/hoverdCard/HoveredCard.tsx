import React from 'react'
import styles from './HoveredCard.module.scss'
import '../productsLogic'
import { GoArrowUpRight } from "react-icons/go";
import {useDispatch } from 'react-redux';
import { actionsCount } from '../../../../store/productCounter/productCounterSlice';
import { actionsBuy } from '../../../../store/productCardsBuy/productCardsBuy';



const HoveredCard: React.FC<HoveredProps> = ({title, targets, application, price, ImgTitle, alt, src}) => {
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(actionsCount.increment());
        dispatch(actionsBuy.pushImgCard({ src: src, alt: alt, title: ImgTitle}));
        dispatch(actionsBuy.pushTextCard({ productTitle: title, price: price }));
    }

    return(
        <div className={styles.hoveredBlock}>
            <div>
                <div className={styles.hoveredTitle}>
                    <a>
                        <h1>{title}</h1>
                        <GoArrowUpRight size={30} />
                    </a>
                </div>
                <div className={styles.targetsRow}>
                   <a>
                        <h3>targets</h3>
                        <p>{targets}</p>
                   </a>
                </div>
                <div className={styles.applicationRow}>
                    <a>
                        <h3>application</h3>
                        <p>{application}</p>
                    </a>
                </div>
            </div>
            <div className={styles.buyBtn}>
                <button onClick={handleAddProduct}>
                    <span>add to cart - ${price}.00 usd</span>
                </button>
            </div>
        </div>
       )
}

export default HoveredCard;