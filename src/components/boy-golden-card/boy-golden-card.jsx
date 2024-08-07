import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Card2Img from "../../../src/img/IMG_2081.jpg"

function BoyGoldenCard() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card data-aos="fade-left" className="event-card">
      <Card.Body>
        <Card.Text as="p" className="event-card-body">
          <Card.Img className="basement-img" variant="top" src={Card2Img} />
          <p></p>
        </Card.Text>

        <CardFooter className="event-card-links"></CardFooter>
      </Card.Body>
    </Card>
  )
}

export default BoyGoldenCard
