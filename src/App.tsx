
import './App.css'
import { Button } from './components/Button'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { Status } from './components/Status'
import { User } from './components/state/User'


function App() {

  const person = {
    firstName:"Bruce",
    lastName:"Lewis"
  }
  const nameList = [
    {
      firstName:"Bruce",
      lastName:"Lewis"
    },
    {
      firstName:"Bruce",
      lastName:"Lewis"
    },
    {
      firstName:"Bruce",
      lastName:"Lewis"
    },
  ]
  return (
    <div>
     <Greet name="Tom" messageCount={10} isLoggedIn={true}/>
     <Person name={person} nameRole={nameList}/>
     <Status status='loading' styles={{color:'green'}}/>
     <Heading> placeholder Text</Heading>
     <Oscar>
      <Heading>
        The Oscar Goes To Leonardo Di carprio
      </Heading>
     </Oscar>
     <Button handleClick={(event,id) => {
      console.log("button clicked",event,id)
     }}/>
     <Input value={'Garland'} handleChange={(event) =>
      console.log('yeah')
     }/>
     <User />
    </div>
  )
}

export default App
