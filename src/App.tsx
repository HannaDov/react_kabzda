import React from 'react';

import './App.css';
import {Rating} from "./Components/Rating/Rating";

import {Accordion} from "./Components/Accordion/Accordion";
import {OnOff} from "./Components/OnOff/OnOff";
import {UnControlledAccordion} from "./Components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";


function App() {
    console.log('App rendering')

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP Component'}/>
            <OnOff/>
            {/*<Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Friends'} collapsed={true}/>*/}
            <UnControlledAccordion title={'Menu'}/>
            <Accordion title={'Friends'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <UnControlledRating/>
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

