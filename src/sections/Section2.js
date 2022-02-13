import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'
import {HiDocumentDownload} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'
import './sectiontwo.css'

const Section2 = () => {
    return (
        <>
        {/* -------BIG SCREENS------- */}

        <section className="sctn_two">
            <Container>
                <Row>
                    <Col>
                        <img className="aboutimage" src="images/dev.svg" alt="programming" width="400" height="400"/>
                    </Col>
                    <Col>
                    <div className="aboutcontainer">
                        <h4 className="about1">About Me</h4>
                        <h4 className="about2">My name is Ranjit Kalita, I'm 20 years old, I am a CSE Undergrad <br/>in Tezpur University. I like to use various technologies to build <br/>exciting projects.</h4>
                        <h4 className="about3">I've started Web Development in 2020 and since then I've learned <br/>a lot of new things and acquired a decent amount of skills and <br/>I am still learning.</h4>
                        <h4 className="about3">Currently I am trying to learn how to use Docker.</h4>
                        <Button className="githubbutton" variant="outline-dark" size="sm"  href="https://github.com/rks0001" target="_blank "><FaGithub className="mx-2" />GitHub</Button>
                        <Button className="resumebutton" variant="outline-dark" size="sm"  href="https://drive.google.com/file/d/1r5nKbQiYIyMk98lKlZaMc5vVCSzvyF77/view?usp=sharing" target="_blank "><HiDocumentDownload className="mx-2"/>Resume</Button>

                    </div>
                    </Col>
                    
            </Row>
            </Container>
        </section>


        {/* -------SMALL SCREENS------- */}

        <section className="sctn_two_small">
            <Container>
                <Row>
        
                    <Col>
                    <div className="aboutcontainer">
                        <h4 className="about1">About Me</h4>
                        <h4 className="about2">My name is Ranjit Kalita, I'm 20 years old, I am a CSE Undergrad <br/>in Tezpur University. I like to use various technologies to build <br/>exciting projects.</h4>
                        <h4 className="about3">I've started Web Development in 2020 and since then I've learned <br/>a lot of new things and acquired a decent amount of skills and <br/>I am still learning.</h4>
                        <h4 className="about3">Currently I am trying to learn how to use Docker.</h4>
                        
                        

                    </div>
                    </Col>
                    
            </Row>

            <Row>
                <Col>
                <div className="btncon">

                <Button className="githubbutton" variant="outline-dark" size="sm"  href="https://github.com/rks0001" target="_blank "><FaGithub className="mx-2" />GitHub</Button>
                <Button className="resumebutton" variant="outline-dark" size="sm"  href="https://drive.google.com/file/d/1r5nKbQiYIyMk98lKlZaMc5vVCSzvyF77/view?usp=sharing" target="_blank "><HiDocumentDownload className="mx-2"/>Resume</Button>
                </div>
               
                
                </Col>
                
            </Row>
            </Container>
        </section>
        
        </>
        
    )
}

export default Section2
