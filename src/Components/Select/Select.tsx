import React, {useEffect, useState, KeyboardEvent} from "react";
import s from './Select.module.css'

export type ItemsType = {
    value: any
    title: string
}
export type SelectPropsType = {
    onChange: (value: any) => void
    value?: any
    items: ItemsType[]
}


export const Select = (props: SelectPropsType) => {


    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    const selectItem = props.items.find(el => el.value === props.value)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement= e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        setHoveredElementValue(pretendentElement.value)
                        return
                    }
                }
            } if (!selectItem ){
                props.onChange(props.items[0].value)}

        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
                {
                    active && <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }} key={i.value}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : "")}
                            onClick={() => {
                                onItemClick(i.value)
                            }}>
                            {i.title}
                        </div>)}
                    </div>}


            </div>
        </>)


}

