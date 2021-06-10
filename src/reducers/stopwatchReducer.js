
import {type} from "../actions/stopwatchActions";

const INITIAL_STATE = {
    watch : {
        hour : 0,
        minute : 0,
        second : 0,
    }
}
let currentState ={};
const stopwatchReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type){
        case type.increaseSeconds :
            currentState = {...state}
            currentState.watch.second += 1;
            return (
                currentState
            )

        case type.decreaseSeconds :
            currentState = {...state}
            if(currentState.watch.second > 0) {
                currentState.watch.second -= 1;
            }
            return (
                currentState
            )

        case type.increaseMinutes :
            currentState = {...state}
            currentState.watch.minute += 1;
            return (
                currentState
            )

        case type.decreaseMinutes :
            currentState = {...state}
            if(currentState.watch.minute > 0) {
                currentState.watch.minute -= 1;
            }
            return (
                currentState
            )

        case type.increaseHours :
            currentState = {...state}
            currentState.watch.hour += 1;
            return (
                currentState
            )

        case type.decreaseHours:
            currentState = {...state}
            if(currentState.watch.hour > 0) {
                currentState.watch.hour -= 1;
            }
            return (
                currentState
            )

        case type.resetSeconds :
            currentState = {...state}
                currentState.watch.second = 0;
            return (
                currentState
            )

        case type.resetMinutes :
            currentState = {...state}
                currentState.watch.minute = 0;
            return (
                currentState
            )

        case type.resetHours :
            currentState = {...state}
                currentState.watch.hour = 0;
            return (
                currentState
            )
        default:
            return state
    }

}
export default stopwatchReducer