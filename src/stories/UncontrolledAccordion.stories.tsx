import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledAccordion} from "../Components/UnControlledAccordion/UnControlledAccordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UnControlledAccordion',
  component: UnControlledAccordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UnControlledAccordion>;


export const UnControlledAccordionChanged: ComponentStory<typeof UnControlledAccordion> = () => {

 return <UnControlledAccordion title={"Friends"} />;
}