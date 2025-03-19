import { PersonProps } from "./Person.types";
export  function Person(props:PersonProps){
    const {name}=props;
    return (
        <h2>{name.first} {name.last}</h2>
    )
}
