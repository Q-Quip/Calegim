import React from 'react'
import styles from './Buttons.module.scss'
import btnNextRight from '/public/img/main/slider/buttonArrowBlack.svg'
import btnNextLeft from '/public/img/main/slider/buttonArrowLeftBlack.svg'

interface BtnProps {
    turnOn: boolean;
    onClick: () => void
}

const BtnRight: React.FC<BtnProps> = ({ turnOn, onClick }) => {
    return(
        turnOn && (
            <button className={styles.btnRight} onClick={() => {onClick()}}>
              <img src={btnNextRight} alt={'slide Next right'} title={'button slide next'} />
            </button>
    ))
}

const BtnLeft: React.FC<BtnProps> = ({ turnOn, onClick}) => {  
    return(
        turnOn && (
            <button className={styles.btnLeft} onClick={() => {onClick()}}>
                <img src={btnNextLeft} alt={'slide Next left'} title={'button slide next'}/>
            </button>
        )
    )
}

export {BtnRight,BtnLeft};