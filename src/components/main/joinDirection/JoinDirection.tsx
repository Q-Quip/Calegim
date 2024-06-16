import React from 'react'
import PresetBlock from '../../ui/presetBlock/PresetBlock'
import {Bg, joinBlockInfo, imgBlock, extraBtnInfo} from './joinDirectionData'

const JoinDirection = () => {
    return(
        <>
            <PresetBlock
                bg={Bg}
                description={joinBlockInfo} 
                extraData={imgBlock}
                extraBtn={extraBtnInfo}
            />
        </>
    )
}

export default JoinDirection;