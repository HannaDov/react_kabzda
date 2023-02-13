import React, {useMemo, useState} from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useMemo demo',

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example1 = () => {
    const [a, setA] = useState<number>(6)
    const [b, setB] = useState<number>(6)
    let valueA = 1
    let valueB = 1
    valueA=useMemo(()=>{
        let tempResultA=1
        for (let i = 1; i <= a; i++) {
            let fake=0;
            while(fake<10000000){
                fake++;
                let fakeValue=Math.random()
            }
            tempResultA = i * tempResultA
        }
        return tempResultA},[a])


    for (let i = 1; i <= b; i++) {
        valueB = i * valueB
    }
    return (
        <>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
            <hr/>
            <div>result for a:{valueA}</div>
            <div>result for b:{valueB}</div>
        </>
    )
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>

}

const Users = React.memo(SecretUsers)

export const Example = () => {
    console.log('helps')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Olya', 'Teya', 'Tim'])
    const addUserHandler = () => {
        const usersCopy = [...users, 'Maryna' + new Date().getTime()]

        setUsers(usersCopy)
    }
    let newArray=useMemo(()=>{return users.filter(el=>el.toLowerCase().indexOf('a')>-1)},[users])
    return (<>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            {count}
            <button onClick={addUserHandler}>add
            </button>
            <Users users={newArray}/>

        </>
    )
}