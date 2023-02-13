import React, {useState} from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactMemo demo',

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

 const Counter = (props: { count: number }) => {
    console.log('counter')
    return <div>{props.count}</div>

}

 const SecretUsers = (props: { users: Array<string> }) => {
     console.log('users')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>

}

const Users = React.memo(SecretUsers)

export const Example = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Olya', 'Teya', 'Tim'])
    const addUserHandler=()=>{
        const usersCopy=[...users, 'Maryna'+new Date().getTime()]

        setUsers(usersCopy)
    }
    return (<>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            <button onClick={addUserHandler}>add
            </button>
            <Counter count={count}/>
            <Users users={users}/>

        </>
    )
}