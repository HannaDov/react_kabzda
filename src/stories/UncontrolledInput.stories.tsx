import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledInput} from "../Components/UncontrolledInput/UncontrolledInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UnControlledInput',
  component: UncontrolledInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UncontrolledInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const UnControlInput: ComponentStory<typeof UncontrolledInput> = () =><input/>
export const ControlInputWithValue: ComponentStory<typeof UncontrolledInput> = () =><input value={'yo'}/>
export const ControlInputWithState: ComponentStory<typeof UncontrolledInput> = () =>{
  const [value, setValue]=useState('')
  const callback=(e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value)
  }
  return (<>
        <input onChange={callback}/> :{value}
  </>

  )}
export const ControlInputWithButton: ComponentStory<typeof UncontrolledInput> = () =>{
  const [value, setValue]=useState('')
  const refValue=useRef<HTMLInputElement>(null)
  const callback=()=>{
    const el=refValue.current as HTMLInputElement
    setValue(el.value)
  }
  return (<>
        <input ref={refValue}/> <button onClick={callback}>save</button>:{value}
      </>

  )}
export const ControlInput: ComponentStory<typeof UncontrolledInput> = () =>{
  const [parentValue, setParentValue]=useState('')
  const callback=(e:ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.value)
  }
  return (<>
        <input value={parentValue} onChange={callback}/> :{parentValue}
      </>

  )}