type PersonProps = {
    name:{
        first:string,
        last:string
    }
 
}
export  function Person(props:PersonProps){
    const {name}=props;
    return (
        <h2>{name.first} {name.last}</h2>
    )
}
