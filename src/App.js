import React from "react"
import Header from './components/Header/Header'
import { BrowserRouter, Switch as Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Contact2 from "./components/Contact/Contact2"
import Certifcations from './sections/Certifications/Certifications'



function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/certifications" element={<Certifcations />}>
      
        </Route>
      </Routes>
    </BrowserRouter>
      
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