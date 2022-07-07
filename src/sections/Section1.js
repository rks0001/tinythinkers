import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'
import {Link } from 'react-scroll'
import {HiDocumentDownload} from 'react-icons/hi'
import './sectionone.css'

const Section1 = () => {
    return (
        <>


             {/* ------------BIG SCREENS------------ */}
            <section className="sctn_one">

            <Container>
                <Row>
                    <Col>
                    <div className="introcontainer">
                    <h4 className="intro1">Hello, I'm</h4>
                    <h1 className="nameintro"> Ranjit Kalita</h1>
                    <h5 className="intro2">Front end Developer and UI/UX Designer</h5>
                   
                    <Button className="contactbutton" variant="outline-dark" size="sm"  href="https://drive.google.com/file/d/1GV1JO8U8a1-yeBDuxcXIEmmHaoP3OBEb/view?usp=sharing" target="_blank ">Resume<HiDocumentDownload className="mx-2"/></Button>
                    </div>
                    </Col>
                    <Col>
                    <img className="introimage" src="images/program1.svg" alt="programming" width="500" height="500"/>
                </Col>
            

            

                </Row>
            </Container>
            </section>

            {/* ------------SMALL SCREENS------------ */}

            <section className="sctn_one_small">

<Container>
    <Row>
        <Col>
        <div className="introcontainer">
        <h4 className="intro1">Hello, I'm</h4>
        <h1 className="nameintro"> Ranjit Kalita</h1>
        <h5 className="intro2">Front end Developer and UI/UX Designer</h5>
       
        <Button className="contactbutton" variant="outline-dark" size="sm"  href="https://drive.google.com/file/d/1GV1JO8U8a1-yeBDuxcXIEmmHaoP3OBEb/view?usp=sharing" target="_blank "><HiDocumentDownload className="mx-2"/>Resume</Button>
        </div>
        </Col>
        




    </Row>
</Container>
</section>
        </>
        
    )
}

export default Section1
