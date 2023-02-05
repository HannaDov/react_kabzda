import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledRating} from "../Components/UnControlledRating/UnControlledRating";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UnControlledRating',
  component: UnControlledRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UnControlledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const callback = action('rating changed inside component')
export const EmptyRating: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={0} onChange={callback} />
export const Rating1: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={1} onChange={callback} />;
export const Rating2: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={2} onChange={callback} />;
export const Rating3: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={3} onChange={callback} />;
export const Rating4: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={4} onChange={callback} />;
export const Rating5: ComponentStory<typeof UnControlledRating> = () => <UnControlledRating defaultValue={5} onChange={callback} />;

