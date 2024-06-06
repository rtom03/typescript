import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn:boolean;
    components:React.ComponentType<ProfileProps>;
}

export const Private = ({ isLoggedIn,components:Components}:PrivateProps) => {
    if(isLoggedIn) {
        return <Components name='garland'/>
    }
    else{
        return <Login />
    }
    return(
        <div>

        </div>
    )
}