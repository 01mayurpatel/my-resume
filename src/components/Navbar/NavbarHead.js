import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'
import { Link, useLocation} from 'react-router-dom'
function NavbarHead() {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "rgb(148, 69, 222)", fontSize: "28px" }}>My-Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto nav-main"> {/* Use ms-auto class here */}
            <Nav.Link className=' px-4 nav-item mt-2 mayur' >
              <Link spy={true} to='/Main' className='nav-l' style={{color: location.pathname==="/Main" ? 'rgb(148, 69, 222)' : ''}}>
                <p> Home</p>
              </Link>
            </Nav.Link>
            <Nav.Link className=' px-4 nav-item mt-2 mayur'  >
              <Link spy={true} to='/body' className='nav-l' style={{color: location.pathname==="/body" ? 'rgb(148, 69, 222)' : ''}} >

                <p>Make Resume</p>
              </Link>
            </Nav.Link>
            <Nav.Link className=' px-4 nav-item mt-2 mayur' >
              <Link spy={true} to='/ideas' className='nav-l' style={{color: location.pathname==="/ideas" ? 'rgb(148, 69, 222)' : ''}}>

                <p>Ideas</p>
              </Link>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHead;
