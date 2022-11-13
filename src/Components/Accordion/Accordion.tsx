import React from "react";

export type AccordionPropsType={
    title:string,
    collapsed:boolean
}


export function Accordion(props:AccordionPropsType) {
    console.log('Accordion rendering')

 if(props.collapsed === true){
        return <div>
            <AccordionTitle titleValue={props.title} />

        </div>
    } else {
        return <div>
            <AccordionTitle titleValue={props.title} />
            <AccordionBody/>

        </div>
    }

}
export type AccordionTitlePropsType={
    titleValue:string
}
export const AccordionTitle=(props:AccordionTitlePropsType)=>{
    console.log('AccordionTitle rendering')
    return( <h3>{props.titleValue}</h3>

    )
}
export const AccordionBody=()=>{
    console.log('AccordionBody rendering')
    return(<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}