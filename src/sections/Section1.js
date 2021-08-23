import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'
import {Link } from 'react-scroll'

const Section1 = () => {
    return (
        <section className="sctn_one">
            <Container>
                <Row>
                    <Col>
                    <div className="introcontainer">
                        <h4 className="intro1">Hello, I'm</h4>
                        <h1 className="nameintro"> Ranjit Kalita</h1>
                        <h5 className="intro2">Front end Developer and UI/UX Designer</h5>
                        <Button className="contactbutton" variant="outline-dark" size="sm"  href="#" target="_blank "> <Link  to="contact" spy={true} smooth={false}> Contact Me</Link></Button>
                        
                    </div>
                    </Col>
                    <Col>
                    <img className="introimage" src="images/program1.svg" alt="programming" width="500" height="500"/>
                    </Col>
                        

                        

            </Row>
            </Container>
        </section>
    )
}

export default Section1
