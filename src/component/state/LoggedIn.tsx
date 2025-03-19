import { useState } from "react"

export const LoggedIn:React.FC=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);
    const handleLogin = (_event:React.MouseEvent<HTMLButtonElement>)=>{
        setIsLoggedIn(true);
    }
    const handleLogOut = (_event:React.MouseEvent<HTMLButtonElement>)=>{
        setIsLoggedIn(false);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}
