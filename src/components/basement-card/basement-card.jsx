import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Surgelogo from "../../../src/img/surge-logo.webp"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function BasementSessionsCard() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card
      data-aos="fade-right"
      className="event-card"
      style={{ width: "90vw" }}
    >
      {/* <Card.Img src={Surgelogo} className="surgelogo" alt="Card image" /> */}
      {/* <Card.ImgOverlay> */}
      <Card.Body className="basement-card">
        <Card.Header as="h1" className="event-card-title">
          <img src={Surgelogo} height="130px" witdth="160px" /> & Arseneault
          Group Entertainment Presents:
          <Card.Title as="h1" className="mb-2">
            The Basement Sessions
          </Card.Title>
        </Card.Header>
        {/* <Card.Subtitle as="h2" className="mb-2 text-muted">
            The Basement Sessions
          </Card.Subtitle> */}
        <Card.Text as="p" className="event-card-body">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Time & Place: 8:00PM / The Basement</Card.Text>
        <Card.Text>Cost: $12,000</Card.Text>

        <CardFooter className="event-card-links">
          {/* <Card.Link href="#">Event Page</Card.Link> */}
          <Card.Link href="#">Tickets</Card.Link>
        </CardFooter>
      </Card.Body>
      {/* </Card.ImgOverlay> */}
    </Card>
  )
}

export default BasementSessionsCard
