type GreetProps = {
    name:string,
    MessageCount?:number,
    isLoggedIn:boolean
}
const Greet = (props:GreetProps)=>{
    const {
        name,
        MessageCount=0,
        isLoggedIn=false
    }= props
    return (<>
    {
        isLoggedIn
        ?<h2>Welcome {name} ! You have {MessageCount} unread messages.</h2>
        :<h2>Hi Guest!</h2>
    }
        
    </>)
}
export default Greet;