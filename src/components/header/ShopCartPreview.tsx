import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from './ShopCartPreview.module.scss'
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ImgOfProduct, ProductInfo } from '../../store/productCardsBuy/productsLogic';
import PreviewCardsLine from './cardsLine/PreviewCardsLine';
import { IoLockClosedSharp } from "react-icons/io5";


interface ShopCartPreviewProps {
    openShop: boolean;
    handleOpenBar():void;
}

const ShopCartPreview: React.FC<ShopCartPreviewProps> = ({openShop,handleOpenBar} ) => {

    const productsImg:ImgOfProduct[] = useSelector((state:RootState) => state.productToBuy.cardImg);
    const productsText:ProductInfo[] = useSelector((state:RootState) => state.productToBuy.cardInfo);

    const totalAmount = productsText.reduce((summa, currentObj) => {
        return summa + (currentObj.price * currentObj.count);
    }, 0); 
    useEffect(() => {
        (openShop)? document.body.classList.add('body-no-scroll'): document.body.classList.remove('body-no-scroll');
    },[openShop]);

    const handleCheckout = () => {
        handleOpenBar(); 
        document.body.classList.remove('body-no-scroll'); 
    };

    return(
        <section >
            <div className={`${styles.blure} ${(openShop)? '': styles.hidden}`} onClick={handleOpenBar}></div>
        
            <div className={`${styles.bar} ${(openShop)? '': styles.hidden}`}>
                    <div className={styles.title}>
                        <h2>your cart</h2>
                        <button style={{background: 'inherit'}} onClick={handleOpenBar}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className={styles.logAccount}>
                        <p><span>Register</span> to enjoy 10% off first order and</p>
                        <p><span>login</span> to start collecting loyalty points</p>
                    </div>
                    <div className={styles.cards}>
                        <PreviewCardsLine
                            ImgData={productsImg}
                            TextData={productsText}
                        />
                    </div>
                    <div className={styles.buyBtn}>
                        <div>
                            <span>Total</span>  <span>${totalAmount} usd</span>
                        </div>            
                        <Link to="/payment">
                            <button className={styles.btn} onClick={handleCheckout}>
                                <span>
                                    <IoLockClosedSharp />
                                    <span>Checkout</span>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
        </section>
    )
}

export default ShopCartPreview;
