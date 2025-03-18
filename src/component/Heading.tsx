type HeadingProps={
    children:string
}
export function Heading(props:HeadingProps){
    const {children}=props
    return (
    <h2>{children}</h2>    
    )
}