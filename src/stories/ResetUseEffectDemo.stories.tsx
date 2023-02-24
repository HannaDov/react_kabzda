import React, {useEffect, useState} from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ResetUseEffect demo',

}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Example = () => {
    console.log('example')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Effect occurred:' + count)

        return () => {
            console.log('reset useEffect:' + count)
        }
    }, [count])
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <>hello,{count}
            <button onClick={increase}>+
            </button>

        </>
    )
}

export const Example2 = () => {

    const [text, setText] = useState('')
    console.log('example2' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(state => state + e.key)
            }
        ;
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }


    }, [])
    return (
        <>
            hello:{text}

        </>
    )
}
export const SetTimeoutExample = () => {

    const [text, setText] = useState('')
    console.log('example2' + text)
    useEffect(() => {
        const timeoutId = setTimeout(() => setText('3 sec passed'), 3000)

        return () => {
            clearTimeout(timeoutId)
        }


    }, [text])
    return (
        <>
            hello:{text}

        </>
    )
}