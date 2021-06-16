import React from 'react'
import {Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
const App = () => {
  return (
    <>
      
      <main>
          <Container>
            <div id="home" >
            <Header/><Section1/>
            </div>

            <div id="skills">
              <Section2/>
            </div>

            <div id="projects" >
              <Section3/>
            </div>


            <div id="about" >
              <Section4/>
            </div>
          </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App

