import React, {useState, useEffect} from "react";
import {slidesArr, slidesText} from "./slidesArray";
import styles from './Slider.module.scss';
import './SliderLogic';
import MoreBtn from "../../ui/MoreBtn";

const Slider = () => {
    const [slide, setSlide] = useState(0);
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleDotClick = (idx: number): void => {
        setSlide(idx);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlide((index: number) => (
                (index === slidesArr.length - 1) ? 0 : index + 1
            ));
        }, 6000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.carousel}>
            <div className={styles.block}>
                {slidesArr.map((sliderEll) => (
                    <img
                        className={`${styles.slide} ${(sliderEll.id === slide) ? styles.slideActive : ''}`}
                        src={sliderEll.src} 
                        alt={sliderEll.alt}
                        key={`slide-${sliderEll.id}`}
                        style={{translate: `${-100 * sliderEll.id}%`}}
                    />
                ))}
            </div>
            <div className={styles.textContainer}>
                {slidesText.map((sliderEll) => (
                    <div
                        className={`${styles.mainBlock} ${(sliderEll.id === slide) ? styles.mainBlockActive : ''}`}
                        style={{translate: `${-100 * sliderEll.id}%`}}
                        key={`text-${sliderEll.id}`}
                    >
                        {sliderEll.logoImg && (
                            <img
                                className={styles.containerLogo}
                                src={sliderEll.logoImg.logoSrc}
                                alt={sliderEll.logoImg.alt}
                                key={`logo-${sliderEll.id}`}
                            />
                        )}
                        <h3>{sliderEll.text}</h3>
                        <MoreBtn key={`btn-${sliderEll.id}`} text={sliderEll.button} state={true} color={'Black'} />
                    </div>
                ))}
            </div>
            <div className={styles.dotsButton}>
                {slidesArr.map((sliderEll) => (
                    <button
                        key={`dot-${sliderEll.id}`}
                        className={`${styles.dot} ${(sliderEll.id === slide) ? styles.dotActive : ''}`}
                        onClick={() => handleDotClick(sliderEll.id)}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Slider;
