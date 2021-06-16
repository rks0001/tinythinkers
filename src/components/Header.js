import React from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <header>
            <Navbar className= "navbaar"  expand="lg" collapseOnSelect>
            <Container >
                <Navbar.Brand className= "logo" href="/" >Ranjit Kalita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mx-auto naav'>
                  <Nav.Link className= "lnk " ><Link activeClass="active" to="home" spy={true} smooth={false}>Home</Link></Nav.Link>
                  <Nav.Link className= "lnk " ><Link  to="skills" spy={true} smooth={false}>Skills</Link></Nav.Link>
                  <Nav.Link className= "lnk  " ><Link  to="projects" spy={true} smooth={false}>Projects</Link></Nav.Link>
                  <Nav.Link className= "lnk" ><Link  to="about" spy={true} smooth={false}>About Me</Link></Nav.Link>
                </Nav> 
                <Button className='cntbtn' variant="outline-dark" size="sm" href="https://drive.google.com/file/d/1r5nKbQiYIyMk98lKlZaMc5vVCSzvyF77/view?usp=sharing" target="_blank " >Resume</Button>
  
              </Navbar.Collapse>
            </Container>
            </Navbar>

            
          </header>
  )
}

export default Header

