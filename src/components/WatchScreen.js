import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import stringifyTime from "../utilities/stringifyTime";

function WatchScreen() {

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




    return (
        <div>
            <div className="top-screen">
                <h5>10/06/2021</h5>
            </div>

            <div className="time-watch">
                <h5>{hours}:{minutes}:{seconds}</h5>
            </div>
        </div>
    );
}

export default WatchScreen;