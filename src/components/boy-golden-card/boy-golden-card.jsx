import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Surgelogo from "../../../src/img/surge-logo.webp"

function BoyGoldenCard() {
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
        <Card.Header as="h1" className="event-card-title">
          <img src={Surgelogo} height="130px" witdth="160px" /> & Arseneault
          Group Entertainment Presents:
          <Card.Title as="h1" className="mb-2 ">
            Boy Golden
          </Card.Title>
        </Card.Header>
        <Card.Text as="p" className="event-card-body">
          When listening to his music, it feels easy to dissolve into the ether.
          Everything flows. From classic country to psych-folk, Alternative to
          roadhouse pop to Appalaichan bluegrass, Boy Golden’s music is easy,
          breezy, warm and gritty. And don’t it just feel good to listen to it.
        </Card.Text>
        <Card.Text>Time & Place: May 17th 2024 / The Seahorse</Card.Text>
        <Card.Text>Cost: $12,000</Card.Text>

        <CardFooter className="event-card-links">
          {/* <Card.Link href="#">Event Page</Card.Link> */}
          <Card.Link href="#">Tickets</Card.Link>
        </CardFooter>
      </Card.Body>
    </Card>
  )
}

export default BoyGoldenCard
