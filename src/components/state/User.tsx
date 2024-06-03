import { useState } from "react";

type UserProps = {
    name:string;
    email:string;
}

export const User = () => {

    const [user, setUser] = useState<UserProps | null>(null);
    const handleLogIn = () => {
      setUser({
        name:'Garland',
        email:'garland@iCloud.com'
      })
    }
    const handleLogOut = () => {
         setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>Logout</button>
            <h1>User Name is {user?.name}</h1>
            <h1>User Email is {user?.email}</h1>
        </div>
    )
}