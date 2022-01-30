import React from "react"
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Contact2 from "./components/Contact/Contact2"




function App() {
  return (

    <>
  
      
      <main>
            
          <div id="home">
              <Header/>
            </div>

            <Section1/>

            <div id="about">
              <Section2/>
            </div>

            <div id="skills" >
              <Section3/>
            </div>


            <div id="projects" >
              <Section4/>
            </div>

            <div id="contact" >
              <Contact2/>
            </div>
          
      </main>
      <Footer/>
    </>
  );
}

export default App;