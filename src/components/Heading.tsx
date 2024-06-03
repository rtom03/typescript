type ChildrenProps = {
    children:string;
}

export const Heading = (props:ChildrenProps) => {
    return(
    <div>
        {props.children}
    </div>
    )
}