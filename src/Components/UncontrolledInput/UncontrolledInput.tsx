import React from "react";

export type UncontrolledInputPropsType = {
    value?: string
    onChange?: () => void
}


export function UncontrolledInput(props: UncontrolledInputPropsType) {
    console.log('Accordion rendering')

    return <div>
        <input/>
    </div>


}
