import React, {useState} from 'react'
import styles from './MoreBtn.module.scss'
import buttonNextWhite from '/public/img/main/slider/buttonArrowWhite.svg'
import buttonNextBlack from '/public/img/main/slider/buttonArrowBlack.svg'

interface Content {
    text: string;
    state: boolean;
    color: 'White'|'Black'|'Inherit';
  }

const MoreBtn: React.FC<Content> = ({text, state, color}) => {
    const [isHovered, setHovered] = useState(state);
    
    const validColor:string = ['White', 'Black', 'Inherit'].includes(color)? color :'Black';
    
    return(
        <button className={`${styles[`btn${validColor}`]}`}
            onMouseEnter={() => setHovered(!state)}
            onMouseLeave={() => setHovered(state)}>
                <a>
                    {text}
                    <img src={isHovered ? buttonNextWhite :buttonNextBlack  } alt='view more'/>
                </a>
        </button>
    )
}

export default MoreBtn;