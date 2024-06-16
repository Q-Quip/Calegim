import React from 'react'
import styles from './ProductCard.module.scss'
import '../productsLogic'
import HoveredCard from '../hoverdCard/HoveredCard'
const ProductCard:React.FC<ProductCardProps> = (props) => {
    return(
        <div 
            style={{ transform: `translateX(${-100 * props.activeCard}%)` }}
            className={styles.cardBlock}>
            <div className={styles.unHovered}>
                <div className={styles.blockBg}>
                    <img className={styles.cardImg} src={props.src} alt={props.alt} title={props.ImgTitle} />
                </div>
                <div className={styles.cardText}>
                    <h3>{props.title}</h3>
                    <p className={styles.textPrice}>${props.price} usd</p>
                    <p className={styles.textDsc}>{props.text}</p>
                </div>
            </div>
            <HoveredCard 
                title={props.hoveredTitle}
                targets={props.hoveredApplication}
                application={props.hoveredTargets}
                price={props.price} 

                src={props.src}
                alt={props.alt}
                ImgTitle={props.ImgTitle}
                
            />
        </div> 
    )
}

export default ProductCard;