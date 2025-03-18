type AllanProps={
    children:React.ReactNode
}

export function Allan (props:AllanProps){
    const {children} = props
    return (
        <div>{children}</div>
    )
}