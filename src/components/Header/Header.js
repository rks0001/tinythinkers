import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-scroll'
import { BiLinkExternal } from 'react-icons/bi';
import './header.css'

const Header = () => {
  return (
    <header>
            <Navbar className= "navbaar"  variant="dark" expand="lg" collapseOnSelect>
            
                <Navbar.Brand  href="/" ><span className="logo" >Ranjit Kalita</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mx-auto naav'>
                  <Nav.Link  ><Link  to="about" spy={true} smooth={false}><span className="navlnk">About Me</span></Link></Nav.Link>
                  <Nav.Link  ><Link  to="skills" spy={true} smooth={false}><span className="navlnk">Skills</span></Link></Nav.Link>
                  <Nav.Link ><Link  to="projects" spy={true} smooth={false}><span className="navlnk">Projects</span></Link></Nav.Link>
                  <Nav.Link ><Link  to="contact" spy={true} smooth={false}><span className="navlnk">Contact Me</span></Link></Nav.Link>
                  <Nav.Link href="/certifications" ><span className="navlnk">Certifications <BiLinkExternal/> </span></Nav.Link>
                </Nav> 
  
              </Navbar.Collapse>
            
            </Navbar>

            
          </header>
  )
}

export default Header

