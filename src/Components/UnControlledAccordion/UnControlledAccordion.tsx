import React, {useState} from "react";

export type AccordionPropsType = {
    title: string,

}


export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    const [collapsed, setCollapsed]=useState(true)
    return <div>
        <AccordionTitle titleValue={props.title} callback={()=>setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}

    </div>


}

export type AccordionTitlePropsType = {
    titleValue: string,
    callback:()=>void

}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')

    return (<h3 onClick={()=>props.callback()}>{props.titleValue}</h3>

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