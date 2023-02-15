import React, {useCallback, useMemo, useState} from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useCallback demo',

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


const SecretBooks = (props: { books: Array<string>, callback: () => void }) => {
    console.log('books')
    return <div>
        <button onClick={props.callback}>add
        </button>
        {props.books.map((el, i) => <div key={i}>{el}</div>)}</div>

}

const Books = React.memo(SecretBooks)

export const Example = () => {
    console.log('helps')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState<Array<string>>(['Css', 'JS', 'React'])
    /*const addBookHandler = () => {
        const booksCopy = [...books, 'Angular' + new Date().getTime()]

        setBooks(booksCopy)
    }*/
    const memoziedBooks=useCallback(() => {
        const booksCopy = [...books, 'Angular' + new Date().getTime()]
        setBooks(booksCopy)
    },[books])
    let newArray = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [books])
    return (<>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            {count}

            <Books books={newArray} callback={memoziedBooks}/>

        </>
    )
}