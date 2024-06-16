import React from 'react' 
import PresetBlock from '../../ui/presetBlock/PresetBlock';
import {Bg, subBlockInfo, imgBlock, extraBtnInfo} from './subDirectionData'

const SubDirection = () => {
    return(
       <>
            <PresetBlock
                bg={Bg} 
                description={subBlockInfo} 
                extraData={imgBlock}
                extraBtn={extraBtnInfo}
                right={true}
            />
       </>
    )
}

export default SubDirection;