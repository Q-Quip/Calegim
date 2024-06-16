import React from 'react'
import styles from './PresetBlock.module.scss'
import PreviewTitle from '../../ui/previewTitle/PreviewTitle'
import MoreBtn from '../../ui/MoreBtn'
import './presetLogic'

const PresetBlock = ({bg,description, extraData, extraBtn, right}:PresetData ) => {
    return(
        <section className={styles.container} >
            <img className={right? styles.bgImgRight:styles.bgImgLeft} src={bg} alt={'image of product'} title={'image of product'}/>
            <div className={styles.textBlock}>
                <PreviewTitle
                    titleSize={'3rem'}
                    weight={'900'}
                    title={description.title}
                    textParagraphs={description.text}
                    btnUnderline={description.btnUnderline} 
                />
                { extraData && (<div>
                    <ul className={styles.imgBlock}>
                        {
                            extraData.map((block, idx) => (
                                <li key={idx}>
                                    <img src={block?.src} alt={block?.alt} title={block?.title}/>
                                    <p>{block.text}</p>
                                </li>
                        ))
                        }
                    </ul>
                    {
                        extraBtn && <MoreBtn color={extraBtn.color} state={extraBtn.state} text={extraBtn.text}/>
                    }
                </div>)}

            </div>
        </section>
    )
}
export default PresetBlock;