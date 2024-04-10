import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Surgelogo from "../../../src/img/surge-logo.webp"
import BoyGoldenImg from "../../../src/img/BoyGolden.jpg"
import Button from "react-bootstrap/Button"

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
        <Card.Img className="boy-golden-img" variant="top" src={BoyGoldenImg} />
        {/* <Card.Header as="h1" className="event-card-title">
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
        <Card.Text>Cost: $12,000</Card.Text> */}
        {/* <img
          src={BoyGoldenImg}
          style={{ width: "100%", aspectRatio: 1 }}
          alt="boy golden poster"
        ></img> */}
        <CardFooter className="event-card-links">
          <Button
            className="ticket-button"
            size="lg"
            variant="secondary"
            href="https://tproatlantic.ticketpro.ca/en/pages/BoyGolden?aff=AGE&fbclid=IwAR1VWcOcYR5ztrFASE4fjuQ61EFPbkOWaOK-s5AAaZnhR3N6baRl02yQVIM_aem_AfYAC0b9iYJipQ6_s13sF6jS3QUAlFLhMeZwl5oHvAjD_hJaKNPa5t5raFb0akY26jpBbq75CFiCWnKWSeD74sL6"
          >
            TICKETS
          </Button>
        </CardFooter>
      </Card.Body>
    </Card>
  )
}

export default BoyGoldenCard
