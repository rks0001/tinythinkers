import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {Link } from  'react-scroll'
import { FaLinkedinIn,FaGithub,FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import {IoIosArrowDropupCircle} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <Container >
                <Row className='mx-auto px-1 py-5'>

                    <Col></Col>
                    <Col></Col>
                    <Col >
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="Twitter"><div><FaTwitter className="skillicon" color="#fff" fontSize="30px"  /></div></Row>
                        
                    </Col>
                    <Col>
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="LinkedIn"><div><FaLinkedinIn className="skillicon" color="#fff" fontSize="30px"  /></div></Row>
                    </Col>
                    
                    <Col >
                        <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="LeetCode"><div><SiLeetcode className="skillicon" color="#fff" fontSize="30px"  /></div></Row>
                    </Col>

                    <Col>
                      <Row className="footerlinks" data-tooltip="top" role="tooltip" aria-label="GitHub"><div><FaGithub className="skillicon" color="#fff" fontSize="30px"  /></div></Row>
                    </Col>

                    <Col></Col>

                    <Col> 
                    <Row className="footerlinks" ><Link  to="home" spy={true} smooth={false}> <div><IoIosArrowDropupCircle className="skillicon" color="#fff" fontSize="30px"  /></div> </Link></Row>
                    </Col>

                </Row>
            </Container>
        
        </footer>
    )
}

export default Footer
 