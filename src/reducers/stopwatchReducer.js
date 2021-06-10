
import {type} from "../actions/stopwatchActions";

const INITIAL_STATE = {
    watch : {
        hour : 0,
        minute : 0,
        second : 0,
    }
}

const stopwatchReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type){
        case type.increaseSeconds :
            return {
                ...state,
                watch: state.watch.second +1
            }

        case type.decreaseSeconds :
            return {
                ...state,
                watch: state.watch.second -1
            }

        case type.increaseMinutes :
            return {
                ...state,
                watch: state.watch.minute +1
            }

        case type.decreaseMinutes :
            return {
                ...state,
                watch: state.watch.minute -1
            }

        case type.increaseHours :
            return {
                ...state,
                watch: state.watch.hour +1
            }

        case type.decreaseHours:
            return {
                ...state,
                watch: state.watch.hour +1

            }

        case type.resetSeconds :
            return {
                ...state,
                watch: state.watch.second = 0

            }

        case type.resetMinutes :
            return {
                ...state,
                watch: state.watch.minute = 0

            }

        case type.resetHours :
            return {
                ...state,
                watch: state.watch.hour = 0

            }
        default:
            return state
    }

}
export default stopwatchReducer