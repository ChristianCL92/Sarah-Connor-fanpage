import { useState } from 'react'
import './App.css'
import T2Intro from './components/T2Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <T2Intro />
    </>
  )
}

export default App
