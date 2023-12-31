import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'

import './sectionone.css'
import {Link} from 'react-scroll'

const Section1 = () => {
    return (
        <>


             {/* ------------BIG SCREENS------------ */}
            <section className="sctn_one">

            <Container>
                <Row>
                    <Col>
                    <div className="introcontainer">
                    <h4 className="intro1">Welcome to</h4>
                    <h1 className="nameintro"> Tiny Thinkers Study App</h1>
                    <h5 className="intro2">Unlocking the Power of Young Minds</h5>
                   
                    <Button className="contactbutton" variant="outline-dark" size="sm" ><Link  to="about" spy={true} smooth={false}><span className="navlnk">Start Learning</span></Link></Button>
                    </div>
                    </Col>
                    <Col>
                    <img className="introimage" src="images/book.svg" alt="programming" width="500" height="500"/>
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
        <h4 className="intro1">Welcome to</h4>
                    <h1 className="nameintro"> Tiny Thinkers Study App</h1>
                    <h5 className="intro2">Unlocking the Power of Young Minds</h5>
       
                    <Button className="contactbutton" variant="outline-dark" size="sm" ><Link  to="about" spy={true} smooth={false}><span className="navlnk">Start Learning</span></Link></Button>
        </div>
        </Col>
        




    </Row>
</Container>
</section>
        </>
        
    )
}

export default Section1
