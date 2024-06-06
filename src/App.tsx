
import './App.css'

import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { Status } from './components/Status'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'

import Count from './components/class/Count'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext'
import { UserInfo } from './components/context/UserInfo'
import { List } from './components/generics/List'
import { Button } from './components/html/Button'
import { Restriction } from './components/restriction/Restriction'
import { Counter } from './components/state/Counter'
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
     {/* <UserContextProvider> */}
     {/* <Greet name="Tom" messageCount={10} isLoggedIn={true}/>
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
     <Counter />
     <ThemeContextProvider>
      <Box />
     </ThemeContextProvider>
    <UserInfo />
    <Count message='Increment Count'/>
     */}
     {/* </UserContextProvider> */}
     <Private isLoggedIn={true} components={Profile}/>
     <List items={['cups','spoon','plate','tray']} onClick={() =>console.log()}/>
     <List items={[1,2,3,4]} onClick={() =>console.log()}/>
     <Restriction  value={10} isPositive />
     <Button  variant='primary'>
      Primary button
     </Button>
     
    </div>
  )
}

export default App
