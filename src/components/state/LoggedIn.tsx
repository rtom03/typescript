import { useState } from "react"

export const LoggedIn = () => {

    const [LoggedIn, setLoggedIn] = useState(false);
    const handleLoggedIn = () =>{
         setLoggedIn(true)
    }
    const handleLoggedOut = () =>{
         setLoggedIn(false)
    }
    return(
        <div>
            <div>
                <button onClick={handleLoggedIn}></button>
                <button onClick={handleLoggedOut}></button>
            </div>
           <h1> User is{LoggedIn ? 'Log in successfully' : 'Logged Out'}</h1>
        </div>
    )
}