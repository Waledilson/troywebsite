import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Card2Img from "../../../src/img/IMG_2235.JPG"

function EventCardTwo() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card data-aos="fade-right" className="event-card">
      <Card.Body>
        <Card.Text as="p" className="event-card-body">
          <Card.Img className="basement-img" variant="top" src={Card2Img} />
          <h1>
            <a
              className="ticket-link"
              target="_blank"
              href="https://tproatlantic.ticketpro.ca/en/pages/1622574406"
            >
              CLICK HERE TO GET TICKETS
            </a>
          </h1>
        </Card.Text>

        <CardFooter className="event-card-links"></CardFooter>
      </Card.Body>
    </Card>
  )
}

export default EventCardTwo
