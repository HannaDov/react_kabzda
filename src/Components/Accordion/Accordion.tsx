import React from "react";

export type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange:()=>void
}


export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle titleValue={props.title} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}

    </div>


}

export type AccordionTitlePropsType = {
    titleValue: string
    onChange:()=>void

}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (<h3 onClick={props.onChange}>{props.titleValue}</h3>

    )
}
export const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}