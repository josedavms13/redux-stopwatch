import './App.css';
import {useSelector, useDispatch} from "react-redux";
import WatchScreen from "./components/WatchScreen";
import ButtonStripe from "./components/ButtonStripe";
import {setModeUp, setModeDown} from "./actions/modeActions";
import {useEffect, useState} from "react";

import {
    decreaseHours, decreaseMinutes,
    decreaseSeconds,
    increaseHours,
    increaseMinutes,
    increaseSeconds, resetHours, resetMinutes, resetSeconds
} from "./actions/stopwatchActions";


function App() {

    const currentMode = useSelector(state => state.modeReducer.mode);
    const time = useSelector(state => state.stopwatchReducer.watch)

    useEffect(()=>{
        console.log('currentMode' , currentMode);
    },[currentMode])




    const dispatch = useDispatch();



    function changeMode (){

        console.log('state changed')

        if(currentMode === 0 || currentMode === 1){
            dispatch(setModeUp());
        }
        if(currentMode === 2){
            dispatch(setModeDown())
        }
    }

    const [screenTime , SetScreenTime]= useState(time);

    function trimButtons(info){

        SetScreenTime(time)

        if(info[0] === 'h'){
            if(info[1]=== 1){
                console.log('hour increase')

                dispatch(increaseHours());

            }
            if(info[1]=== 2){
                console.log('hour decreased')
                dispatch(decreaseHours());
            }
            if(info[1]=== 3){
                console.log('hour reset')
                dispatch(resetHours());
            }
        }
        if(info[0] === 'm'){
            if(info[1]=== 1){
                console.log('minutes increase')
                dispatch(increaseMinutes());
            }
            if(info[1]=== 2){
                console.log('minutes decreased')
                dispatch(decreaseMinutes());
            }
            if(info[1]=== 3){
                console.log('minutes reset')
                dispatch(resetMinutes());
            }
        }
        if(info[0] === 's'){
            if(info[1]=== 1){
                console.log('second increase')

                dispatch(increaseSeconds());
            }
            if(info[1]=== 2){
                console.log('second decreased')
                dispatch(decreaseSeconds());
            }
            if(info[1]=== 3){
                console.log('second reset')
                dispatch(resetSeconds());
            }
        }
    }

    return (
        <div className="App">
            <WatchScreen trimButtons={(info)=>trimButtons(info)}/>
            <ButtonStripe modeSelect={()=>changeMode()} currentMode={currentMode}/>
        </div>
    );
}

export default App;
