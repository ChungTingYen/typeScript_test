import { useState } from "react"
type AuthProps={
    name:string,
    email:string
}
export const User:React.FC=()=>{
    const [user,setUser]=useState<AuthProps>({} as AuthProps);
    const handleLogin = (_event:React.MouseEvent<HTMLButtonElement>)=>{
        // setIsLoggedIn(true);
        setUser({
            name:'allan',
            email:'iamallan@eee.ccc'
        })
    }
    const handleLogOut = (_event:React.MouseEvent<HTMLButtonElement>)=>{
        // setIsLoggedIn(false);
        // setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email}</div>
        </div>
    )
}
