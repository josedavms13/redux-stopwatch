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


    let ISRUNNING = false;

    const currentMode = useSelector(state => state.modeReducer);
    const time = useSelector(state => state.stopwatchReducer.watch)


    const dispatch = useDispatch();


    function changeMode() {

        console.log('state changed')
        console.log(currentMode)
        if (currentMode.mode === 1) {
            console.log('mode is 1')
            console.log('state change');
            dispatch(setModeDown());
            setChangeMode();

        }
        if (currentMode.mode === 2) {
            console.log('mode is 2')
            console.log('state change');
            dispatch(setModeUp());
            setChangeMode();


        }
    }


    function trimButtons(info) {

        if (info[0] === 'h') {
            if (info[1] === 1) {
                console.log('hour increase')

                dispatch(increaseHours());

            }
            if (info[1] === 2) {
                console.log('hour decreased')
                dispatch(decreaseHours());
            }
            if (info[1] === 3) {
                console.log('hour reset')
                dispatch(resetHours());
            }
        }
        if (info[0] === 'm') {
            if (info[1] === 1) {
                console.log('minutes increase')
                dispatch(increaseMinutes());
            }
            if (info[1] === 2) {
                console.log('minutes decreased')
                dispatch(decreaseMinutes());
            }
            if (info[1] === 3) {
                console.log('minutes reset')
                dispatch(resetMinutes());
            }
        }
        if (info[0] === 's') {
            if (info[1] === 1) {
                console.log('second increase')

                dispatch(increaseSeconds());
            }
            if (info[1] === 2) {
                console.log('second decreased')
                dispatch(decreaseSeconds());
            }
            if (info[1] === 3) {
                console.log('second reset')
                dispatch(resetSeconds());
            }
        }
    }


    //region Watch Logic

    let secondsTimeout;

    function startStop() {

        switch (ISRUNNING){

            case false :
                console.log('start');
                watchEngine();
            break

            case true :
                console.log('stop');
                pauseCounter()
                break

            default:
                pauseCounter()
                break
        }
    }

    function pauseCounter(){
        console.log('counter paused');
        clearTimeout(secondsTimeout);
        ISRUNNING = false;
    }

    function watchEngine() {

        ISRUNNING = true;

        secondsTimeout = setTimeout(() => {
            console.log('start')

            console.log(currentMode.mode);

            if(currentMode.mode === 1){
                dispatch(increaseSeconds())
            }
            if(currentMode.mode === 2){
                dispatch(decreaseSeconds())
            }

            return watchEngine()

        }, 1000)


    }


    function setChangeMode(){

        if(ISRUNNING){

            console.log('mode change while running')
            pauseCounter();
            console.log('currentMode.mode',currentMode.mode);
            watchEngine();
        }
    }



    //endregion Watch Logic


    return (
        <div className="App">
            <WatchScreen trimButtons={(info) => trimButtons(info)}/>
            <ButtonStripe modeSelect={() => changeMode()} currentMode={currentMode.mode} startButton={() => {
                startStop()
            }}/>
        </div>
    );
}

export default App;
