

const INITIAL_STATE = {
    watch : {
        hour : 0,
        minute : 0,
        second : 0,
    }
}

const stopwatchReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type){
        case 'increase_second' :
            return {
                ...state.watch.second += 1
            }

        case 'increase_minute' :
            return {
                ...state.watch.minute += 1
            }

        case 'increase_hour':
            return {
                ...state.watch.hour += 1

            }
        case 'reset_second' :
            return {
                ...state.watch.second = 0
            }

        case 'reset_minute' :
            return {
                ...state.watch.minute = 0
            }

        case 'reset_hour':
            return {
                ...state.watch.hour = 0

            }

        case 'decrease_second' :
            return {
                ...state.watch.second -= 1
            }

        case 'decrease_minute' :
            return {
                ...state.watch.minute -= 1
            }

        case 'decrease_hour':
            return {
                ...state.watch.hour -= 1

            }

        default:
            return state
    }

}
export default stopwatchReducer