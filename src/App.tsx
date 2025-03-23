
import Greet from "./component/Greet"
import {Person} from "./component/Person"
import {PersonList} from "./component/PersonList"
import {Status} from "./component/Status"
import {Heading} from "./component/Heading"
import {Allan} from "./component/Allan"
import {Allan2} from "./component/Allan2"
import Button from "./component/Button"
import {Input} from "./component/Input"
import {Container} from "./component/Container"
import {User} from "./component/state/User"
import {ThemeContextProvider} from './component/context/ThemeContext'
import { Box } from "./component/context/Box"
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
      <hr />
      <Button handleClick={(event,id)=>console.log('Button clicked',event,id)}/>
      <Input value='' handleChange={(e)=>console.log('event:',e)}/>
      <Container styles={{border:'10px solid red',padding:'1rem',
        display:'inline-block', width: '200px', height: '100px', backgroundColor: 'lightblue'}} />
    
        <hr />
        <User></User>
    <hr />
        <ThemeContextProvider>
          <Box/>
        </ThemeContextProvider>
    </>
  )
}

export default App
