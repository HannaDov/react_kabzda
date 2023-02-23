import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./analogClock";

type PropsType = {
    mode: "analog" | "digital"
}
export const get2digitsString = (num: number) => num < 10 ? '0' + num : num
export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const clearIntervalId = setInterval(() => {
            console.log('setInterval')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(clearIntervalId)
        } //когда компонента умирает, то зачищает useEffect (например при переходе на др компоненту)
    }, [])


    let view
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital" :
        default:
            view = <DigitalClockView date={date}/>}
    return <div>
        {view}
    </div>
}
export  type ClockViewPropsType = {
    date: Date
}

