import React, {useState} from 'react'
import styles from './ProductsLine.module.scss'
import './productsLogic'
import MoreBtn from '../../ui/MoreBtn'
import ProductCard from './card/ProductCard'
import bestsellerProducts from './bestsellers'
import { BtnRight,BtnLeft} from '../../ui/btnLeftRight/BtnLeftRight'



const ProductsLine = () => {
    const [isHovered, setHovered] = useState(false);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleLeftButtonClick = () => {
        setActiveCardIndex(index => index > 0? 
                                    index - 1: index )
    };
    
    const handleRightButtonClick = () => {
        setActiveCardIndex(index => index < bestsellerProducts.length - 4? 
                                    index + 1: index)
    };
    
      return(
       <section className={styles.containerV}> 
            <div className={styles.containerH}>
                <div className={styles.title}>
                    <h1>bestsellers</h1>
                    <MoreBtn text={'Shop all'} state={false} color={'White'}/>
                </div>
                <div className={styles.products}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                        {
                        bestsellerProducts.map((card, idx) => (
                            <ProductCard 
                            src={card[0].src} 
                            alt={card[0].alt} 
                            ImgTitle={card[0].ImgTitle} 
                            key={idx}

                            title={card[1].title}
                            price={card[1].price}
                            text={card[1].text}
                               
                            hoveredTitle={card[2].title}
                            hoveredApplication={card[2].application}
                            hoveredTargets={card[2].targets}
                            
                            activeCard={activeCardIndex}
                            />
                        ))}
                    <BtnLeft turnOn={isHovered} onClick={handleLeftButtonClick}/>     
                    <BtnRight turnOn={isHovered} onClick={handleRightButtonClick}/>
                </div>
                <div className={styles.lineProcent}>
                    <span className={styles.scroll}
                        style={{width: `${33.3 * (activeCardIndex + 1)}%`}}>
                    </span>
                </div>
            </div>
       </section>
    )
}

export default ProductsLine;