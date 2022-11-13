import React from 'react';

import './App.css';
import {Rating} from "./Components/Rating/Rating";

import {Accordion} from "./Components/Accordion/Accordion";


function App() {
    console.log('App rendering')

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP Component'}/>
            <Rating value={3}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Friends'} collapsed={true}/>
            <Rating value={4}/>
        </div>

    );
}

export default App;

export type PageTitleProps={
    title:string
}
export const PageTitle = (props:PageTitleProps) => {
    return <h1>{props.title}</h1>
}

