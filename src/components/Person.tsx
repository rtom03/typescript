type PersonProps = {
    name:{
        firstName:string;
        lastName:string;
    } 
    nameRole:{
        firstName:string;
        lastName:string;
    }[]
}

export const Person = (props:PersonProps) => {
   return(
    <div>
        {props.name.firstName}
        {props.name.lastName}
        {props.nameRole.map((items) => (
            <div>
                {items.firstName}
                {items.lastName}
            </div>
        ))}
    </div>
   )
}