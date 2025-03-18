import {FC} from 'react'

type AllanProps={
    children:React.ReactNode
    company:string
}

export const Allan2:FC<AllanProps> = (props)=>{
    const {children,company} = props
    return (
        <section>
            <div>{children}</div>
            <div>{company}</div>
        </section>

    )
}