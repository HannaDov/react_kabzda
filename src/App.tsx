import React, {useState} from 'react';

import './App.css';
import {Rating} from "./Components/Rating/Rating";

import {Accordion} from "./Components/Accordion/Accordion";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./Components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";
import {OnOff} from "./Components/OnOff/OnOff";

export type RatingValueType = 1 | 2 | 3 | 4 | 5

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffValue, setOnOffValue] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP Component'}/>
            <UncontrolledOnOff onChange={setOnOffValue}/> {onOffValue.toString()}
            <OnOff onOffValue={onOffValue} onChange={setOnOffValue}/>

            <UnControlledAccordion title={'Menu'}/>
            <Accordion title={'Friends'} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


        </div>

    );
}

export default App;

export type PageTitleProps = {
    title: string
}
export const PageTitle = (props: PageTitleProps) => {
    return <h1>{props.title}</h1>
}

