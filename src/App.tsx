
import Greet from "./component/Greet"
import {Person} from "./component/Person"
import {PersonList} from "./component/PersonList"
import {Status} from "./component/Status"
import {Heading} from "./component/Heading"
import {Allan} from "./component/Allan"
import {Allan2} from "./component/Allan2"

function App() {
  const userName='allan';
  const count=50;
  const login=true;
  const personName={
    first:"Allannnnn",
    last:'Yen'
  }
  const personList = [{
    first:"Bllannnnn",
    last:'Ben'
  },{
    first:"Cllannnnn",
    last:'Cen'
  },{
    first:"Dllannnnn",
    last:'Den'
  }]
  return (
    <>
      <Greet name={userName} MessageCount={count} isLoggedIn={login}/>
      <Person name={personName}/>
      <PersonList names={personList}/>
      <Status status='loading' />
      <Heading>Placeholder - 123</Heading>
      <Allan>
        <Heading>Allan go to another company!!!</Heading>
        <i className="fas fa-shopping-cart"></i>
      </Allan>
      <Allan2 company='HHTPE'>
        <Heading>Allan go to another company!!!</Heading>
        <i className="fas fa-shopping-cart"></i>
      </Allan2>
    </>
  )
}

export default App
