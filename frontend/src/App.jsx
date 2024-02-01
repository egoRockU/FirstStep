import { useState } from 'react'
import Landing from './Pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing/>
    </>
  )
}

export default App
