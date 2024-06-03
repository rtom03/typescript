type StatusProps = {
    status:'loading' | 'successful' | 'error';
    styles:React.CSSProperties;
}
export const Status = (props:StatusProps) =>{
    let message = props.status;
    let styles = props.styles;
    if(message === "loading") return 'Loading...'
    else if(message === "successful") return "Login successfully"
    else if(message === "error") return "error logging in"
    return(
        <div>
            {message}
        </div>
    )
}