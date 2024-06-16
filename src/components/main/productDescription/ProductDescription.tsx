import React from 'react';
import styles from './ProductDescription.module.scss'
import imgBgLeft from '/public/img/main/productDescription/whatis-ptt6-1370x1540.webp'
import imgBgRight from '/public/img/main/productDescription/04Homepage-_Doctors_Quote-desktop-1370x1540.webp'
import BtnLearnAbout from '../../ui/btnLearnAbout/BtnLearnAbout';
import PreviewTitle from '../../ui/previewTitle/PreviewTitle';

const ProductDescription = () => {
    return(
        <section>
            <div className={styles.Block}>
                <img className={styles.bg} src={imgBgLeft} alt={'molecula'} title={'molecula'}/>
                <div className={styles.container}
                style={{backgroundColor: '#F5F5F5'}}>
                    <div className={styles.description}>
                            <PreviewTitle 
                                        titleSize={'3rem'}
                                        weight={'900'}    
                                        title={'What is PTT-6'} 
                                        textParagraphs={[`PTT-6® harnesses the body’s natural mechanisms of regeneration.
                                                        It contains over 3,000 proteins, including growth factors,cytokines,
                                                         and exosomes that signal cells to regenerate.`]} 
                            />

                            <div className={styles.microBlocks}>
                                <div>
                                    <h4>56%</h4>
                                    <p>increase in elastin production</p>
                                </div>
                                <div>
                                    <h4>83%</h4>
                                    <p>increase in hyaluronic acid production</p>
                                </div>
                                <div>
                                    <h4>24%</h4>
                                    <p>increase in hair follicle cell production</p>
                                </div>
                                <div>
                                    <h4>30x</h4>
                                    <p>decrease in scalp inflammation</p>
                                </div>
                            </div>
                        
                        </div>
                    <BtnLearnAbout text={'Learn about PTT-6'}/>
                </div>
            </div>
            <div className={styles.Block}>
                <div className={styles.container}>
                    <div className={styles.citation}>trusted by doctors</div>
                    <div className={styles.description}>
                        <h1 style={{ fontWeight: '500', fontSize: '1.6rem' }} >
                            “CALECIM<sup>®</sup> delivers a revolutionary new approach, 
                            integrating the healing and regenerative
                            benefits of the most powerful exosomes 
                            and growth factors into a cosmeceutical line.”
                        </h1>
                        <p className={styles.name}>Dr. Mitchel Goldman</p>
                        <p className={styles.underName}>Double board-certified Dermatologist and pioneer in growth factor skincare</p>
                    </div>
                    <BtnLearnAbout text={'Find out more about our clinical research'}/>
                </div>
                <img className={styles.bg} src={imgBgRight} alt={'ideal skin'} title={'ideal skin'}/>
            </div>
        </section>
    )
}

export default ProductDescription;