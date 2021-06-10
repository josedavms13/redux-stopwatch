import './App.css';
import {useSelector, useDispatch} from "react-redux";
import WatchScreen from "./components/WatchScreen";
import ButtonStripe from "./components/ButtonStripe";
import {setModeUp, setModeDown} from "./actions/modeActions";
import {useEffect} from "react";

function App() {

    const currentMode = useSelector(state => state.modeReducer.mode);

    useEffect(()=>{
        console.log(currentMode);
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

    function trimButtons(info){
        if(info[0] === 'h'){
            if(info[1]=== 1){
                console.log('hour increase')
            }
            if(info[1]=== 2){
                console.log('hour decreased')
            }
        }
        if(info[0] === 'm'){
            if(info[1]=== 1){
                console.log('minutes increase')
            }
            if(info[1]=== 2){
                console.log('minutes decreased')
            }
        }
        if(info[0] === 's'){
            if(info[1]=== 1){
                console.log('minutes increase')
            }
            if(info[1]=== 2){
                console.log('minutes decreased')
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
