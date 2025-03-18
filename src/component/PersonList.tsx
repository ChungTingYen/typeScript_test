type PersonProps = {
    names:{
        first:string,
        last:string
    }[]
}
export  function PersonList(props:PersonProps){
    const {names}=props;
    return (
        <>
        {
            names.map((person)=>  <div key={person.last}>{person.first} {person.last}</div>)
        }
        </>
    )
}
