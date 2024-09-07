import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Card1Img from "../../../src/img/IMG_2234.JPG"

function EventCardOne() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card data-aos="fade-left" className="event-card">
      <Card.Body>
        <Card.Text as="p" className="event-card-body">
          <Card.Img className="basement-img" variant="top" src={Card1Img} />
          <h1>
            <a
              target="_blank"
              href="https://tproatlantic.ticketpro.ca/en/pages/1622574407"
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

export default EventCardOne
