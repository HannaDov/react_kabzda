import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {Rating} from "../Components/Rating/Rating";
import {RatingValueType} from "../App";
import {Select} from "../Components/Select/Select";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Rating>;
const callback=action('select mode change event fired')
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const SelectWithValue: ComponentStory<typeof Select> = () => {
    const [value, setValue]=useState('2')
    return (<Select items={[{value:'1', title:'Minsk'}, {value:'2', title:'Warszawa'},
    {value:'3', title:'Vilnus'}]} onChange={setValue} value={value}/>)}

export const EmptySelect: ComponentStory<typeof Select> = () =>{
    const [value, setValue]=useState(null)

    return (<Select items={[{value:'1', title:'Minsk'}, {value:'2', title:'Warszawa'},
    {value:'3', title:'Vilnus'}]} onChange={setValue} value={value}/>)}
