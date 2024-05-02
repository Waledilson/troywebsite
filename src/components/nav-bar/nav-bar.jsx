import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import darkBanner from "../../../src/img/age-dark-banner.png"

function NavBar() {
  return (
    <Navbar fixed="top" bg="black" data-bs-theme="dark">
      <Container class="navbar" id="top-navbar">
        <Nav>
          <img
            src={darkBanner}
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
