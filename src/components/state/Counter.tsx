import { useReducer } from "react"

const initialState = { count:0 }
type StateProps ={
    state:string;
}
type ActionProps = {
    action:string;
    type:string;
}
 
function reducer(state:StateProps, action:ActionProps) {
    switch (action.type) {
        case 'increment':
          return { count:state.count + action.payload }
          case 'decrement':
            return { count:state.count - action.payload }
          default:
            return state  
    }
}

export const Counter = () => {
const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
          Count: {state.count}
          <button onClick={()=> dispatch({ type:'increment',payload:10})}>
            Increment 10</button>
          <button onClick={()=> dispatch({ type:'increment',payload:10})}>
            Increment 10</button>
        </>
    )
}