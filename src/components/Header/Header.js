import React,{useState} from "react";
import { Navbar, Nav, Button, } from "react-bootstrap";
import { Link as Link2 } from "react-scroll";
import { Link } from "react-router-dom";
import ModalDialog from "../../pages/ModalDialog";
import "./header.css";

const Header = () => {

  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="bighead">
        <Navbar className="navbaar" variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Brand href="/">
            <span className="logo">TinyThinkers</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto naav">
              <Nav.Link>
                <Link2 to="about" spy={true} smooth={false}>
                  <span className="navlnk">About Us</span>
                </Link2>
              </Nav.Link>
              <Nav.Link>
                <Link to="colors" spy={true} smooth={false}>
                  <span className="navlnk">Colors</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="english" spy={true} smooth={false}>
                  <span className="navlnk">English</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="numbers" spy={true} smooth={false}>
                  <span className="navlnk">Numbers</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="calc" spy={true} smooth={false}>
                  <span className="navlnk">Calculator</span>
                </Link>
              </Nav.Link>
              <div>
                <Button className="signupbtn" onClick={handleOpen}>
                  <span className="icontext">Sign In / Sign Up</span>
                </Button>

                <ModalDialog open={open} handleClose={handleClose} />
               
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {/* Small Screens */}

      <header className="smallhead">
        <Navbar
          className="navbaars"
          variant="dark"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand href="/">
            <span className="logos">Tiny Thinkers</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto naav">
              <Nav.Link>
                <Link2 to="about" spy={true} smooth={false}>
                  <span className="navlnk">About Us</span>
                </Link2>
              </Nav.Link>
              <Nav.Link>
                <Link to="colors" spy={true} smooth={false}>
                  <span className="navlnk">Colors</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="english" spy={true} smooth={false}>
                  <span className="navlnk">English</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="numbers" spy={true} smooth={false}>
                  <span className="navlnk">Numbers</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="calc" spy={true} smooth={false}>
                  <span className="navlnk">Calculator</span>
                </Link>
              </Nav.Link>
              <div>
                <Button className="signupbtn" onClick={handleOpen}>
                  <span className="icontext">Sign In / Sign Up</span>
                </Button>

                <ModalDialog open={open} handleClose={handleClose} />
               
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
