import React from "react";


export  type OnOffPropsType={
    onOffValue:boolean
    onChange:(onOffValue:boolean)=>void
}

export const OnOff=(props:OnOffPropsType)=>{

    const OnStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'5px',
        backgroundColor: props.onOffValue ? "green" : "white"
    }

    const OffStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'5px',
        marginLeft:'2px',
        backgroundColor:props.onOffValue ? "white" : "red"
    }
    const IndicatorStyle={
        height: '10px',
        width:'10px',
        borderRadius:'5px',
        backgroundColor:props.onOffValue?"green":"red",
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'5px'
    }

    return (
        <div >
            <div style={OnStyle} onClick={()=> {
            props.onChange(true)}} >On</div>
            <div style={OffStyle} onClick={()=> {props.onChange(false)}
            }>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}