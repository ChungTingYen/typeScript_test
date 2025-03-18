type ContainerProps = {
    styles:React.CSSProperties
}
export const Container =(props:ContainerProps)=>{
    const {styles}=props;
    return (
        // <div style={{border:'1px solid black',padding:'1rem'}}>
        <div style={styles}>
            Text content goes here.
        </div>
    )
}