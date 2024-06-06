
type RestrictionType = {
    value: number;
    isPositive?: boolean;
    isNegative?: boolean;
    isZero?: boolean;
}
type PositiveNumber =  RestrictionType & {
   isPositive:boolean;
   isNegative?:never;
   isZero?:never;
}
type NegativeNumber =  RestrictionType  & {
    isNegative:boolean;
    isPositive?:never;
    isZero?:never;
 }

 type Zero = RestrictionType  & {
    isZero:boolean;
    isPositive?:never;
    isNegative?:never;
 }

 type RetrictionTypeProps = PositiveNumber | NegativeNumber | Zero



export const Restriction = ({ value,isPositive,isNegative,isZero}:RetrictionTypeProps) => {

    return(
        <div>
            {value} {isPositive && 'positive'}  {isNegative && 'negative'}  {isZero && 'null'}

        </div>
    )
}