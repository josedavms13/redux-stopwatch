import React, {useEffect, useState} from 'react';
const ButtonStripe = ({modeSelect, currentMode}) => {

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

            <h5>Mode Selector</h5>

            <button onClick={()=>modeSelect()}>{modeButtonText} </button>

        </div>
    )
}

export default ButtonStripe;