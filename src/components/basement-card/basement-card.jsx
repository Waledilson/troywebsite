import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Surgelogo from "../../../src/img/surge-logo.webp"
import BasementImg from "../../../src/img/TheBasement.png"
import Button from "react-bootstrap/Button"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function BasementSessionsCard() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card data-aos="fade-right" className="event-card">
      <Card.Body className="basement-card">
        <Card.Img className="basement-img" variant="top" src={BasementImg} />
        <Card.Text as="p" className="event-card-body">
          <Card.Text as="p" className="event-card-body"></Card.Text>
          <Card.Text>The Basement (Below the Economy Shoe Shop)</Card.Text>
          <Card.Text>Doors at 7:00</Card.Text>
          <Card.Text>
            Cost: Pay what you can ( all proceeds go to the artists)
          </Card.Text>
          <Button
            className="basement-artist-website-button"
            href="https://open.spotify.com/track/5lPS9HN2cJlzrLvaPRakeU?si=7U5b4xf1QVShs_MTXP3RFQ&fbclid=IwAR1TqqbS0bNMjOdi3-crMUTKWMq7-u9xxr5L5h8XjWTmlSyriwdUb4Bl8Zo_aem_Afb3JV09zQ5JN4oJP5zDxZDZ-MPc1zM9ute_mRVb9BLb6ZW1-quqnzdiSOqhM3rvDOVtAarNXwSP0MPpusdR8W5x"
            variant="secondary"
            target="_blank"
          >
            Diamond City Spotify
          </Button>
          <Button
            className="basement-artist-website-button"
            href="https://beforethedinosaurs.bandcamp.com/"
            variant="secondary"
            target="_blank"
          >
            Before The Dinosaurs Bandcamp
          </Button>
          <Button
            className="basement-artist-website-button"
            href="https://chesterdoom.bandcamp.com/"
            variant="secondary"
            target="_blank"
          >
            Chester Doom Bandcamp
          </Button>
        </Card.Text>

        {/* <Card.Header as="h1" className="event-card-title">
          <img src={Surgelogo} height="130px" witdth="160px" /> & Arseneault
          Group Entertainment Presents:
          <Card.Title as="h1" className="mb-2">
            The Basement Sessions
          </Card.Title>
        </Card.Header>
         */}

        <CardFooter className="event-card-links"></CardFooter>
      </Card.Body>
    </Card>
  )
}

export default BasementSessionsCard
