import React from 'react'
import styles from './ShopPreview.module.scss'
import bg from '/public/img/main/shopPreview/05Homepage-Featured_Banner-desktop-2740x1200.webp'
import PreviewTitle from '../../ui/previewTitle/PreviewTitle'
import MoreBtn from '../../ui/MoreBtn'


const ShopPreview = () => {
    return(
        <section className={styles.containHorizontal}>
            <img className={styles.fullScreenImg} src={bg} alt={'calegim cream'} title={'calegim cream'}/>
            <div className={styles.container}>
                <div className={styles.containerText}>
                    <div className={styles.likeBtn}>Exclusive Savings</div>
                    <PreviewTitle 
                    titleSize={'4rem'}
                    textSize={'1.6rem'}
                    weight={'900'}
                    title={'Create your own Power Bundle'}
                    textParagraphs={[`Design your everyday skincare routine with our online exclusive`]}
                    />
                </div>
                <MoreBtn text={'Shop now'} state={false} color={'Inherit'}/>
            </div> 
        </section>
    )
}

export default ShopPreview;