import React from 'react';
import {Clock} from "../Components/Clock/clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Clock',
component:Clock
}as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const BaseAnalogClockExample:ComponentStory<typeof Clock> = () => {
    console.log("BaseAnalogClockExample")

    return <Clock mode={'analog'}/>
}
export const BaseDigitalClockExample:ComponentStory<typeof Clock> = () => {
    console.log("BaseDigitalClockExample")

    return <Clock mode={'digital'}/>

}
/*

    console.log('example')
    const clock = () => {
        let time = new Date()
        let hour = time.getHours().toString()
        let min = time.getMinutes().toString()
        let sec = time.getSeconds().toString()
        if (hour.length < 2) {
            hour = '0' + hour
        }
        if (min.length<2) {
            min = '0' + min
        }
        if (sec.length<2) {
            sec = '0' + sec
        }
        return hour +":"+min+":"+sec
    }
clock()

    console.log(clock())
    return (
        <Clock/>
    )
}
*/


