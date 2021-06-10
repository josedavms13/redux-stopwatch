

const INITIAL_STATE = {
    mode: 0
}


const modeReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type){

        case 'count_up':
            return{
                ...state.mode = 1
            }

        case 'count_down':
            return {
                ...state.mode = 2
            }

        default:
            return state

    }



}
export default modeReducer