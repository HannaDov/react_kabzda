import React, {useState} from 'react';





// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/useState demo',

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

}


function generateData (){
    console.log('generateData')
    return 1
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Example = () => {
    console.log('example')
    const [count, setCount] = useState(generateData)

    return (
        <>
            <button onClick={() => {
                setCount(state=>state+1)
            }}>+
            </button>{count}
        </>
    )
}


