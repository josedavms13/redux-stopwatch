import React, {useEffect, useState} from 'react';
const ButtonStripe = ({modeSelect, currentMode, startButton}) => {

    const [modeButtonText, SetModeButtonText] = useState('Count up')

    useEffect(()=>{

        if(currentMode === 1){
            SetModeButtonText('Count Down')
        }
        if(currentMode === 2){
            SetModeButtonText('Count up')
        }

    },[currentMode])

    return (
        <div>
    <div className="mode-selection">

        <h5>Mode Selector</h5>

        <button onClick={()=>modeSelect()}>{modeButtonText} </button>

    </div>

            <button onClick={()=>{startButton()}}>start</button>
        </div>
    )
}

export default ButtonStripe;