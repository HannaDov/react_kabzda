import React, {useState} from "react";


export type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?:boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    let [on, setOn] = useState(props.defaultOn?props.defaultOn:false)
    const OnStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? "green" : "white"
    }

    const OffStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '2px',
        backgroundColor: on ? "white" : "red"
    }
    const IndicatorStyle = {
        height: '10px',
        width: '10px',
        borderRadius: '5px',
        backgroundColor: on ? "green" : "red",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px'
    }
    const OnClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const OffClicked =() => {
        setOn(false)
        props.onChange(false)
    }
        return     (
            <div>
            <div style={OnStyle} onClick={OnClicked}>On</div>
            <div style={OffStyle} onClick={OffClicked}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}