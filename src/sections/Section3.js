import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import {FaHtml5 ,FaCss3Alt, FaBootstrap ,FaReact ,FaNode ,FaPython} from 'react-icons/fa'
import {SiJavascript ,SiRedux ,SiMongodb ,SiCplusplus, SiAdobexd} from 'react-icons/si'


import {DiGit} from 'react-icons/di'
import './sectionthree.css'

const Section3 = () => {
    return (
        <>
            <section className="sctn_three">
            <Container>
                <Row>
                    <Col>
                    <div className="skillcontainer">
                        <h4 className="skill1">What we teach?</h4>
                        <h4 className="skill2">Tiny Thinkers combines entertainment and education seamlessly,<br/> ensuring children are motivated and engaged throughout their<br/>learning journey. With intuitive navigation and <br/>age-appropriate content, our app provides a <br/>safe and child-friendly environment.</h4>
                    </div>
                    </Col>
                    <Col className="skillrightcol">
                        <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="HTML"> <FaCss3Alt className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="CSS"> <FaCss3Alt className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Javascript"> <SiJavascript className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            
                            
                        </Row>

                        <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="React"> <FaReact className="skillicon"  color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Redux"> <SiRedux className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Nodejs"> <FaNode className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="MongoDB"> <SiMongodb className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                        </Row>
                        <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Git"> <DiGit className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="C++"> <SiCplusplus className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Python"> <FaPython className="skillicon" color="#0054A6" fontSize="50px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="AdobeXd"> <SiAdobexd className="skillicon"  color="#0054A6" fontSize="50px" /></div></Col>
                        </Row>
                                        
                    </Col>
                        

                        

            </Row>
            </Container>
        </section>


{/* --------------------SMALL SCREENS-------------- */}
        <section className="sctn_three_small">
            <Container>
                <Row>
                
                    <div className="skillcontainer">
                        <h4 className="skill1">Skills</h4>
                        <h4 className="skill2">These are my skills and this contains all the technologies and programming languages that I have learnt until now.I am constantly learning, therefore I may update this section more often.</h4>
                    </div>
                    
                </Row>
                <div className='skillconicon'>
                <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="HTML"> <FaHtml5 className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="CSS"> <FaCss3Alt className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            
                            
                </Row>

                <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Javascript"> <SiJavascript className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Bootstrap"> <FaBootstrap className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            
                            

                </Row>

                <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="React"> <FaReact className="skillicon"  color="#0054A6" fontSize="40px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Redux"> <SiRedux className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                           
                            

                </Row>

                <Row>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Nodejs"> <FaNode className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="MongoDB"> <SiMongodb className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            

                </Row>
                <Row>
                <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Git"> <DiGit className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="C++"> <SiCplusplus className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            
                </Row>
                
                <Row>
                <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="Python"> <FaPython className="skillicon" color="#0054A6" fontSize="40px" /></div></Col>
                            <Col> <div className="skillcol" data-tooltip="top" role="tooltip" aria-label="AdobeXd"> <SiAdobexd className="skillicon"  color="#0054A6" fontSize="40px" /></div></Col>
                </Row>
                </div>
                
                    
                        

                        

        
            </Container>
        </section>
        </>
        
    )
}

export default Section3

