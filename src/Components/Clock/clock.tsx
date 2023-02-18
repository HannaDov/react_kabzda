import React, {useEffect, useState} from 'react'

type PropsType={

}
export const Clock: React.FC<PropsType>=(props)=>{
    const [date, setDate]=useState(new Date())
    const det2digitalString=(num:number)=>num.toString().length < 2 ?'0' +num:num
 /*   let hour = det2digitalString(date.getHours());
    let min = det2digitalString(date.getMinutes())
    let sec = det2digitalString(date.getSeconds())*/
    useEffect(()=>{

        const intervalID=setInterval(()=>
        {console.log('PARARAM')
            setDate(new Date())
        }, 1000);
        return ()=>{
           clearInterval(intervalID)
        }
    },[])
return (
    <>
        <span>{det2digitalString(date.getHours())}</span>:<span>{det2digitalString(date.getMinutes())}</span>:<span>{det2digitalString(date.getSeconds())}</span>
    </>
)
}