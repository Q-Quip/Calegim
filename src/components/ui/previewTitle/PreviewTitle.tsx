import React from 'react'
import styles from './PreviewTitle.module.scss'
import arrowMore from '/public/img/main/productDescription/btnMore.svg'

interface TitleProps {
    title: string;
    textParagraphs: string[];
    btnUnderline?: string;
    weight: React.CSSProperties['fontWeight'];
    titleSize: React.CSSProperties['fontSize'];
    textSize?: React.CSSProperties['fontSize'];
};

const PreviewTitle = (props:TitleProps) => {
    return(
        <>
            <h1 className={styles.titleSize} style={{ fontWeight: props.weight, fontSize: props.titleSize}}>{props.title}</h1>
            {props.textParagraphs.map((paragraph, idx) => (
                <p style={{fontSize: props.textSize}} 
                    key={idx}
                    className={styles.textMargin}>{paragraph}</p>
            ))}
            {props.btnUnderline && (
                <button className={styles.btnLine}>
                    <a>
                        <span>
                            {props.btnUnderline}
                        </span>
                        <img src={arrowMore} alt={'arrow learn more about product'} title={'arrow learn more about product'}/>
                    </a>
                </button>
            )}
        </>
    )
}

export default PreviewTitle;