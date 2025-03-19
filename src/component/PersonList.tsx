import { Name } from "./Person.types";

type PersonProps = {
    names:Name[]
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
