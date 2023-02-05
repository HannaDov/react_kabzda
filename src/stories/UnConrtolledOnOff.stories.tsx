import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledOnOff} from "../Components/UncontrolledOnOff/UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UncontrolledOnOff',
  component: UncontrolledOnOff ,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UncontrolledOnOff >;
const callback=action('clicked')
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OnMode: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>


