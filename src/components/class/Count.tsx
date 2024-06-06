import React from "react";

interface CountMessageProps {
    message:string;
}
 
interface CountState {
    count:number;
}
 
class Count extends React.Component<CountMessageProps, CountState> {
    state = { count:0 }


    handleClickIncrement = () => {
       this.setState((prevState) => ({ count:prevState.count +1}))
    }
    handleClickDecrement = () => {
        this.setState((prevState) => ({count:prevState.count -1}))
    }
    handleClickReset = () => {
        this.setState((prevState) => ({count:prevState.count }))
    }


    render() { 
        return ( 
            <div>
                <button onClick={this.handleClickIncrement}>Increment</button>
                <button onClick={this.handleClickDecrement}>Decrement</button>
                <button onClick={this.handleClickReset}>Reset</button>
                {this.props.message}{this.state.count}
            </div>
         );
    }
}
 
export default Count;