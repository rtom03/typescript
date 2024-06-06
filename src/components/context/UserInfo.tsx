import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserInfo = () => {
    const user = useContext(UserContext);
    const handleLogIn = () => {
       if(user)
        user.setUser({
            name:'garland',
            email:'garland@gmail.com'
    })
    }
    const handleLogOut = () => {
        if(user){
            user.setUser(null)
        }
    }
    return(
        <div>
           <button onClick={handleLogIn}>Log In</button>
           <button onClick={handleLogOut}>Log Out</button>

           <h1>User Logged In Info: {user?.user?.name}</h1>
           <h1>User Logged In Email {user?.user?.email}</h1>
        </div>
    )
}