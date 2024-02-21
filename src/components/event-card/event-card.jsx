import React from "react"
import Card from "react-bootstrap/Card"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function EventCard() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card
      data-aos="fade-right"
      className="event-card"
      style={{ width: "90vw" }}
    >
      <Card.Body>
        <container className="event-card-title">
          <Card.Title as="h1">
            Surge Radio Presents:
            <span as="h2" className="mb-2 text-muted">
              The Basement Sessions
            </span>
          </Card.Title>
          {/* <Card.Subtitle as="h2" className="mb-2 text-muted">
            The Basement Sessions
          </Card.Subtitle> */}
          <Card.Text as="p" className="event-card-body">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <Card.Text>Time & Place: 8:00PM / The Basement</Card.Text>
          </Card.Text>
        </container>

        <container className="event-card-links">
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </container>
      </Card.Body>
    </Card>
  )
}

export default EventCard
