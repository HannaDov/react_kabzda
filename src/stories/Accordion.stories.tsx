import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Accordion} from "../Components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Accordion>;
const callback=action('accordion mode change event fired')
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const CollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion title={"Menu"} onChange={callback} collapsed={true}/>
export const UnCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion title={"Friends"} onChange={callback} collapsed={false}/>


export const AccordionChanged: ComponentStory<typeof Accordion> = () => {
  const [value, setValue]=useState<boolean>(true)
 return <Accordion title={"Friends"} collapsed={value} onChange={()=>setValue(!value)} />;
}