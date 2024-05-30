
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'

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
    </div>
  )
}

export default App
