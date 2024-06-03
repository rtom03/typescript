type InputProps = {
    value:string;
    handleChange: (event:React.ChangeEvent) => void
}

export const Input = (props:InputProps) => {
    return(
        <input type={props.value} onChange={props.handleChange} />
    )
}