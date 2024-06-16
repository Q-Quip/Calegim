import React from 'react'
import styles from './Carousel.module.scss'
import logosCarousel from './imgsCarousel'
import './carouselLogic'

const Carousel = () => {
    return(
        <section className={styles.logos}>
            <ul className={styles.logosSlide}>
                    { logosCarousel.map((logo) => (
                            <li key={logo.id}>
                                <img 
                                    className={styles.print}
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    title={logo.title} 
                                />
                            </li>
                        ))
                    }
                </ul>
                <ul className={styles.logosSlide}>
                    { logosCarousel.map((logo) => (
                            <li key={logo.id}>
                                <img 
                                    className={styles.print}
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    title={logo.title} 
                                />
                            </li>
                        ))
                    }
                </ul>
        </section>
    )
}

export default Carousel;