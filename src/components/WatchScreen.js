import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import stringifyTime from "../utilities/stringifyTime";

function WatchScreen({trimButtons}) {

    const time = useSelector(state => state.stopwatchReducer.watch)

    const [seconds, SetSeconds] = useState('00')
    const [minutes, SetMinutes] = useState('00')
    const [hours, SetHours] = useState('00')

    const [dots, SetDots] = useState(':')
    const [dotsState, SetDotsState] = useState(true)



    useEffect(() => {

        SetSeconds(stringifyTime(time.second))
        SetMinutes(stringifyTime(time.minute))
        SetHours(stringifyTime(time.hour))

        console.log(time);
    }, [time])


    useEffect(() => {

        console.log(dotsState);
        if (dotsState) {
            SetDots(' : ');
        } else {
            SetDots('   ')
        }

    }, [dotsState])


    /*
    * Button trim:
    *   [ _time part_ (hour, minute, second) , _increase or decrease_ (1 : increase or 2:decrease)
    * */


    return (
        <div>
            <div className="top-screen">
                <h5>10/06/2021</h5>
            </div>

            <div className="time-watch">
                <h5>{hours}:{minutes}:{seconds}</h5>

                <div className="hours-trim">
                    <button onClick={()=>trimButtons(['h', 1])}>+</button>
                    <button onClick={()=>trimButtons(['h', 2])}>-</button>
                </div>
                <div className="minutes-trim">
                    <button onClick={()=>trimButtons(['m', 1])}>+</button>
                    <button onClick={()=>trimButtons(['m', 2])}>-</button>
                </div>

                <div className="seconds-trim">
                    <button onClick={()=>trimButtons(['s', 1])}>+</button>
                    <button onClick={()=>trimButtons(['s', 2])}>-</button>
                </div>
            </div>
        </div>
    );
}

export default WatchScreen;