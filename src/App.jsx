import { useState } from 'react'
import SaraQuiz from './components/SaraQuiz'
import  { Header } from './components/HeaderMine'
import './App.css'
import { SarahConnor } from './components/SarahConnor'


function App() {

  return (
    <>

    <div className="App">
      <Header />
      <SarahConnor/>
      <SaraQuiz />
    </div>
    </>
  )
}

export default App
