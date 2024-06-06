import { createContext, useState } from "react"


type UserContextProps = {
    children:React.ReactNode;
}
type AuthUser = {
    name:string;
    email:string;
}
type UserType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}
export const UserContext = createContext<UserType | null>(null);

export const UserContextProvider = ({children}:UserContextProps) => {
    const [ user, setUser ] = useState<AuthUser | null>(null)
     return(
        <div>
            <UserContext.Provider value={{ user,setUser }}>{children}</UserContext.Provider>
        </div>
     )
}

