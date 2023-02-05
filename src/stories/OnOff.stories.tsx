import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnOff} from "../Components/OnOff/OnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/OnOff',
  component: OnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OnMode: ComponentStory<typeof OnOff> = () => <OnOff onChange={x=>x} onOffValue={true}/>
export const OffMode: ComponentStory<typeof OnOff> = () => <OnOff onChange={x=>x} onOffValue={false}/>


export const OnOffChanged: ComponentStory<typeof OnOff> = () => {
  const [onOffValue, setonOffValue]=useState<boolean>(true)
 return <OnOff onOffValue={onOffValue} onChange={setonOffValue} />;
}