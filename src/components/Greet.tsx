
interface GreetProps {
    name:string;
    messageCount:number;
    isLoggedIn:boolean;
}
export const Greet = ( props:GreetProps ) => {

  return (
    <div >
        <h1 style={{color:'blue',textAlign:'center'}}>
        {props.isLoggedIn?`welcome ${props.name} You Have ${props.messageCount} messsages`:"welcome Guest"}
        </h1>
    </div>
  )
}

