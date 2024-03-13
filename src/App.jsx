import { useState } from 'react'
import SaraQuiz from './components/SaraQuiz'
import  { Header } from './components/HeaderMine'
import './App.css'
import { Footer } from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Header />   
      <SaraQuiz />

      <Footer/>
    </div>
    </>
  )
}

export default App
