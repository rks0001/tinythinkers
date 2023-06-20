import React from "react"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom"
import Colors from "./pages/Colors"
import Maths from "./pages/Maths"
import Home from "./pages/Home"
import English from "./pages/English"
import Calculator from "./pages/Calculator"
import Colortwo from "./pages/Colortwo"
import WordGame from "./pages/Wordgame"



function App() {
  return (

    <>
 <Header/>
 <Routes>
  
 <Route path="/" element={ <Home/>} />
        <Route path="colors" element={ <Colors/>} />
        <Route path="numbers" element={ <Maths/> } />
        <Route path="english" element={ <English/> } />
        <Route path="calc" element={ <Calculator/> } />
        <Route path="colors/colortwo" element={ <Colortwo/> } />
        <Route path="english/englishtwo" element={ <WordGame/> } />
      </Routes>

            
    
      <Footer/>
      
      
    </>
    
  );
}

export default App;