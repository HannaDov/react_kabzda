import React, {useEffect, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/useEffect demo',

}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Example = () => {
    console.log('example')
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)
useEffect(()=>{
    console.log('useEffect every render')})
    useEffect(()=>{
    console.log('useEffect only first render')},[])
    useEffect(()=>{
        console.log('useEffect only first render and every counter change')},[count])


    return (
        <>hello,{count}  {fake}
            <button onClick={() => {
                setCount(count+1)
            }}>+
            </button>
            <button onClick={() => {
                setFake(fake+1)
            }}>+
            </button>
        </>
    )
}


