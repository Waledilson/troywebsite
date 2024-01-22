import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import spotify_icon from "../../../src/img/spotify_icon.svg"
import instagram_icon from "../../../src/img/instagram_icon.svg"
import facebook_icon from "../../../src/img/facebook_icon.svg"
import bandcamp_icon from "../../../src/img/bandcamp_icon.svg"
import twitter_icon from "../../../src/img/twitter_icon.svg"

function SocialsBar() {
  return (
    <Navbar>
      <Nav>
        {/* <span className="socials-text">Alert the Medic</span> */}
        <Nav.Link>
          <img
            className="spotify-icon"
            src={spotify_icon}
            width="30px"
            height="30px"
            alt="link to troys spotify"
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={facebook_icon}
            width="30px"
            height="30px"
            alt="link to troys spotify"
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={instagram_icon}
            width="30px"
            height="30px"
            alt="link to troys spotify"
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={bandcamp_icon}
            width="30px"
            height="30px"
            alt="link to troys spotify"
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={twitter_icon}
            width="30px"
            height="30px"
            alt="link to troys spotify"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default SocialsBar
