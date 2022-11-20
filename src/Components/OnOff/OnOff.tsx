import React, {useState} from "react";




export const OnOff=()=>{
    let [on, setOn]=useState(false)
    const OnStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'5px',
        backgroundColor: on ? "green" : "white"
    }

    const OffStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'5px',
        marginLeft:'2px',
        backgroundColor:on ? "white" : "red"
    }
    const IndicatorStyle={
        height: '10px',
        width:'10px',
        borderRadius:'5px',
        backgroundColor:on?"green":"red",
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'5px'
    }

    return (
        <div >
            <div style={OnStyle} onClick={()=> {
            setOn(true)}} >On</div>
            <div style={OffStyle} onClick={()=> {setOn(false)}
            }>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}