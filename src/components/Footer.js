import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link } from  'react-scroll'
const Footer = () => {
    return (
        <footer>
            <Container >
                <Row className='justify-content-center px-4'>
                    <Col lg={true} className="mt-5">
                        <Row className='py-1 h2 logo'>Ranjit Kalita</Row>
                        <Row className='py-1 h6'> Front end Developer</Row>
                        <Row className='py-1 btnn'> <Button href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ranjitkalita5o5@gmail.com" target="_blank" variant="dark" size="sm">Contact Me</Button> </Row>
                    </Col>
                    <Col>
                    </Col>
                    <Col lg={true} className="mt-5">
                        <Row className='py-1 h6'> <a href="#">SOCIAL MEDIA</a></Row>
                        <Row className='py-1 h6'> <a href="https://www.youtube.com/channel/UC6oVsxjGoMSN1kOSlbZfTew" target="_blank " >YouTube</a></Row>
                        <Row className='py-1 h6 '><a href="https://twitter.com/ranjitkalita5o5" target="_blank "  >Twitter</a></Row>
                        <Row className='py-1 h6'><a href="https://www.linkedin.com/in/ranjit-kalita-a5316b167/" target="_blank "  >LinkedIn</a></Row>
                        <Row className='py-1 h6'><a href="https://github.com/rks0001" target="_blank "  >Github</a></Row>
                    </Col>
                    <Col lg={true} className="mt-5">
                        <Row className='py-1 h6'> <a href="#">EXPLORE</a></Row>
                        <Row className='py-1 h6' ><Link to="home" spy={true} smooth={false}>Home</Link></Row>
                        <Row className='py-1 h6'><Link  to="skills" spy={true} smooth={false}>Skills</Link></Row>
                        <Row className='py-1 h6'><Link  to="projects" spy={true} smooth={false}>Projects</Link></Row>
                        <Row className='py-1 h6'><Link  to="about" spy={true} smooth={false}>About Me</Link></Row>
                    </Col>

                    <Col lg={true} className="mt-5">
                        <Row className='py-1 h6'> <a href="#">USEFUL LINKS</a></Row>
                        <Row className='py-1 h6'><a href="https://drive.google.com/file/d/1r5nKbQiYIyMk98lKlZaMc5vVCSzvyF77/view?usp=sharing" target="_blank " >Resume </a></Row>
                        
                    </Col>

                </Row>
            </Container>
        
        </footer>
    )
}

export default Footer
 