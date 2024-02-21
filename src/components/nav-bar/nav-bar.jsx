import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import lightBanner from "../../../src/img/age-light-banner.png"

function NavBar() {
  return (
    <Navbar fixed="top" bg="white" data-bs-theme="light">
      <Container class="navbar">
        <Nav>
          {/* <Navbar.Brand href={`/`}> */}
          <img
            src={lightBanner}
            class="bannerlogo"
            width="100%"
            height="60%"
            alt="Arseneault Group Logo"
            href={`/`}
          />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
