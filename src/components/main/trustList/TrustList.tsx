import React from 'react'
import styles from './TrustList.module.scss'
import recomendationList from './listInfo'
import PreviewTitle from '../../ui/previewTitle/PreviewTitle'

const TrustList = () => {
    return(
        <section className={styles.container}>
            <ul className={styles.list}>
                {recomendationList.map((block, idx) => (
                    <li key={idx}>
                        <img className={styles.print} src={block.img} alt={block.alt} title={block.imgTitle}/>
                        <PreviewTitle
                            titleSize={'1rem'}
                            weight={'600'}
                            title={block.title}
                            textParagraphs={block.text} 
                            btnUnderline={block.btn}
                            />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TrustList;