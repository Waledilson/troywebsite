import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import spotify_icon from "../../../src/img/spotify_icon.svg"
import instagram_icon from "../../../src/img/instagram_icon.svg"
import facebook_icon from "../../../src/img/facebook_icon.svg"

function SocialsBar() {
  return (
    <Navbar className="socials">
      <Nav className="socials-logos">
        <Nav.Link href="https://www.facebook.com/share/Zs2kvn9zCuWpgAxF/?mibextid=WC7FNe">
          <img
            target="_blank"
            className="facebook-icon"
            src={facebook_icon}
            width="50px"
            height="50px"
            alt="link to arseneault group entertainments facebook"
          />
        </Nav.Link>
        {/* <Nav.Link>
          <img
            target="_blank"
            className="instagram-icon"
            src={instagram_icon}
            width="50px"
            height="50px"
            alt="link to arseneault group entertainments instagram"
          />
        </Nav.Link> */}
      </Nav>
    </Navbar>
  )
}

export default SocialsBar
