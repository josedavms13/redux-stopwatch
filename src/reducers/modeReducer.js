
import {type} from '../actions/modeActions'

const INITIAL_STATE = {
    mode: 1
}


const modeReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type){

        case type.setCountUp:
            return{
                ...state,
                mode : 1
            }

        case type.setCountDown:
            return {
                ...state,
                mode: 2
            }

        default:
            return state

    }



}
export default modeReducer