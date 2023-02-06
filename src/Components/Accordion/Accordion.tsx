import React from "react";
export type ItemsType={
    value:any
    name:string
}
export type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange:()=>void
    items:ItemsType[]
    onClick:(value:any)=>void
}


export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle titleValue={props.title} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}

    </div>


}

export type AccordionTitlePropsType = {
    titleValue: string
    onChange:()=>void

}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (<h3 onClick={()=>props.onChange()}>{props.titleValue}</h3>

    )
}
export type AccordionBody={
    items:ItemsType[]
    onClick:(value:any)=>void
}

export const AccordionBody = (props:AccordionBody) => {
    console.log('AccordionBody rendering')
    return (<ul>
            {props.items.map((i,index)=><li key={index}
            onClick={()=>props.onClick(i.value)}>{i.name}</li>)}
        </ul>

    )
}