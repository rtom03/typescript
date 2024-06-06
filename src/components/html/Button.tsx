
type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const Button = ({ variant,children,...rest }:ButtonProps) => {
    return(
        <div>
            <button className={`class-with${variant}`} {...rest}>{children}</button>

        </div>
    )
}