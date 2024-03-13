import { useState } from 'react'
import SaraQuiz from './components/SaraQuiz'
import  { Header } from './components/HeaderMine'
import './App.css'
import { SarahConnor } from './components/SarahConnor'
import { Footer } from './components/Footer'


function App() {

  return (
    <>

    <div className="App">
      <Header />
      <SarahConnor/>
      <SaraQuiz />

      <Footer/>
    </div>
    </>
  )
}

export default App
