
import {combineReducers} from "redux";

import stopwatchReducer from "./stopwatchReducer";
import modeReducer from "./modeReducer";




export default combineReducers({

    stopwatchReducer : stopwatchReducer,
    modeReducer : modeReducer

})






