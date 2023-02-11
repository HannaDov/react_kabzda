

export type ActionType={
    type:string
}
export type StateType={
    collapsed:boolean
}
export const reducer=(state:StateType, action:ActionType):StateType=>{
    switch (action.type){
        case "TOGGLE-COLLAPSED":
            const copyState={...state};
            copyState.collapsed=!state.collapsed
            return copyState


        default :throw new Error("Bad action type")
}

}