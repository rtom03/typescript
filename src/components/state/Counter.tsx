import { useReducer } from "react"

const initialState = { count:0 }
type StateProps ={
    count:number;
}
type ActionProps = {
    type:'increment' | 'decrement';
    payload:number;
}

type ResetProps = {
  type: 'reset'
}

function reducer(state:StateProps, action:ActionProps | ResetProps) {
    switch (action.type) {
        case 'increment':
          return { count:state.count + action.payload }
          case 'decrement':
            return { count:state.count - action.payload }
            case 'reset' :
            return initialState;
            
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
          <button onClick={()=> dispatch({ type:'decrement',payload:10})}>
            decrement 10</button>
          <button onClick={() =>dispatch({type:'reset'})}>reset</button>  
        </>
    )
}