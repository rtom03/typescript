type ListProps <T>= {
    items:T [];
    onClick: (value: T) => void;
}

export const List =<T extends number | string | {} >({ items,onClick }:ListProps<T>) => {


    return(
        <div>
            <h1>List Of Items</h1>
            {items.map((item,index) => (
                <div key={index} onClick={()=> (item)}>
                   
                </div>
            ))}
            {/* <button onClick={onClick}>track item</button> */}
        </div>
    )
}