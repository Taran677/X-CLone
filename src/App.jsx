import { useState } from 'react'
import '../src/Components/Styles.css'
import Login from './Components/Login'
function App() {
const [login, setLogin] = useState(true)
  return (
   <>
{login === true && <Login></Login>}
   </>
  )
}

export default App
