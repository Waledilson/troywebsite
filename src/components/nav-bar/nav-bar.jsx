import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav>
          <Navbar.Brand href={`/main-view`}>Troy Arsenault</Navbar.Brand>

          <Nav.Link className="nav-bio" href={`/bio-view`}>
            Bio
          </Nav.Link>
          <Nav.Link className="nav-music" href={`/music-view`}>
            Music
          </Nav.Link>
          <Nav.Link className="nav-venue" href={`/venue-view`}>
            Venues
          </Nav.Link>
          <Nav.Link className="nav-contact" href={`/contact-view`}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    ///////////////
    // <Navbar fixed="top" bg="dark" data-bs-theme="dark">
    //   <Container>
    //     <Navbar.Brand href={`/main-view`}>Troy Arsenault</Navbar.Brand>
    //     <Nav>
    //       <Link className="nav-bio" to="/bio-view">
    //         Bio
    //       </Link>
    //       <Link className="nav-music" to="/music-view">
    //         Music
    //       </Link>
    //       <Link className="nav-venue" to="/venue-view">
    //         Venues
    //       </Link>
    //       <Link className="nav-contact" to="/contact-view">
    //         Contact
    //       </Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    /////////////////
    // <>
    //   <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#main-view">Troy Arsenault</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#bio-view">Bio</Nav.Link>
    //         <Nav.Link href="#music-view">Music</Nav.Link>
    //         <Nav.Link href="#venue-view">Venues</Nav.Link>
    //         <Nav.Link href="#contact-view">Contact</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </>
  )
}

export default NavBar
