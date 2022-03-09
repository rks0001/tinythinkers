import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {Link } from  'react-scroll'
import { FaLinkedinIn,FaGithub,FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import {IoIosArrowDropupCircle} from 'react-icons/io'

const Footer = () => {
    return (
        <>
                <footer className='bigfoot'> 
            <Container >
                <Row className='mx-auto px-1 py-5'>

                    <Col></Col>
                    <Col></Col>
                    <Col >
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="Twitter"><a href="https://twitter.com/ranjitkalita5o5" target="_blank" rel="noreferrer"><FaTwitter className="skillicon" color="#fff" fontSize="30px"  /></a></Row>
                        
                    </Col>
                    <Col>
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="LinkedIn"><a href="https://www.linkedin.com/in/ranjitkalita/" target="_blank" rel="noreferrer"><FaLinkedinIn className="skillicon" color="#fff" fontSize="30px"  /></a></Row>
                    </Col>
                    
                    <Col >
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="LeetCode"><a href="https://github.com/rks0001" target="_blank" rel="noreferrer"><SiLeetcode className="skillicon" color="#fff" fontSize="30px"  /></a></Row>
                    </Col>

                    <Col>
                      <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="GitHub"><a href="https://github.com/rks0001" target="_blank" rel="noreferrer"><FaGithub className="skillicon" color="#fff" fontSize="30px"  /></a></Row>
                    </Col>

                    <Col></Col>

                    <Col> 
                    <Row className="footerlinks" ><Link  to="home" spy={true} smooth={false}> <div><IoIosArrowDropupCircle className="skillicon" color="#fff" fontSize="30px"  /></div> </Link></Row>
                    </Col>

                </Row>
            </Container>
        
        </footer>

        {/* small screens */}
        <footer className='smallfoot'>
            <Container >
                <Row className='mx-auto px-1 py-5'>

                    
                    <Col >
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="Twitter"><a href="https://twitter.com/ranjitkalita5o5" target="_blank" rel="noreferrer"><FaTwitter className="skillicon" color="#fff" fontSize="24px"  /></a></Row>
                        
                    </Col>
                    <Col>
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="LinkedIn"><a href="https://www.linkedin.com/in/ranjitkalita/" target="_blank" rel="noreferrer"><FaLinkedinIn className="skillicon" color="#fff" fontSize="24px"  /></a></Row>
                    </Col>
                    
                    <Col >
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="LeetCode"><a href="https://github.com/rks0001" target="_blank" rel="noreferrer"><SiLeetcode className="skillicon" color="#fff" fontSize="24px"  /></a></Row>
                    </Col>

                    <Col>
                      <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="GitHub"><a href="https://github.com/rks0001" target="_blank" rel="noreferrer"><FaGithub className="skillicon" color="#fff" fontSize="24px"  /></a></Row>
                    </Col>

                

                    <Col> 
                    <Row className="footerlinks" ><Link  to="home" spy={true} smooth={false}> <div><IoIosArrowDropupCircle className="skillicon" color="#fff" fontSize="24px"  /></div> </Link></Row>
                    </Col>

                </Row>
            </Container>
        
        </footer>
        </>
        
    )
}

export default Footer
 