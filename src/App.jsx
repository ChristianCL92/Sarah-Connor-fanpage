import { useState } from 'react'
import './App.css'
import T2Intro from './components/T2Intro'
import FanLinks from './components/FanLinks'
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
        <T2Intro />
        <SarahConnor />
        <SaraQuiz />
        <FanLinks />
        <Footer />
      </div>
    </>
  );
}

export default App
