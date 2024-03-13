import { useState } from 'react'
import './App.css'
import T2Intro from './components/T2Intro'
import FanLinks from './components/FanLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <T2Intro />
 <FanLinks/>
    </>
  )
}

export default App
