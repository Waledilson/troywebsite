import React from "react"
import Card from "react-bootstrap/Card"
import CardFooter from "react-bootstrap/CardFooter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import BoyGoldenImg from "../../../src/img/BoyGolden.jpg"
import Button from "react-bootstrap/Button"

function BoyGoldenCard() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Card data-aos="fade-left" className="event-card">
      <Card.Body>
        <Card.Img className="boy-golden-img" variant="top" src={BoyGoldenImg} />

        <Card.Text as="p" className="event-card-body">
          <h1>Boy Golden</h1>
          <p>
            Boy Golden Everything becomes fluid when you can pass through time
            and space like a ghost, a story, a melody. Boy Golden manifests all
            three on For Jimmy. When listening to his music, it feels easy to
            dissolve into the ether. Everything flows. Introspective and
            vulnerable, traditional and queer, hard-headed and sensual, Boy
            Golden&apos;s everyman-aesthetic appeals to us all. No matter what
            frame of mind he&apos;s in, he&apos;ll fit us in for a good time.
            We&apos;re here right now. Since releasing his debut album, Church
            of Better Daze, in 2021, he&apos;s played every summer festival on
            your list, curated and directed an art show and music video for “KD
            & Lunchmeat”, the Seth-Rogenesque hit single that charted to #1 on
            Alternative Radio, and toured with The Sheepdogs on a 60 date North
            American tour.
          </p>
          <Button
            className="artist-website-button"
            href="https://www.boygolden.ca/"
            variant="secondary"
            target="_blank"
          >
            Boy Golden Website
          </Button>
          <h1>Fontine</h1>
          <p>
            A hush sweeps across Turtle Island. Birds flock to perch on towering
            maples and the waving prairie grasses still. There is a name upon
            the tongue of every creature from the elk to the shrew. FONTINE. A
            gust of wind blows open the shutters of every home and young and old
            kneel in reverence to the dawn of a new era. FONTINE. Queen of the
            road, King of the song, FONTINE is here with a brand new EP.
          </p>
          <Button
            className="artist-website-button"
            href="https://fontine.bandcamp.com/"
            variant="secondary"
            target="_blank"
          >
            Fontine Bandcamp
          </Button>
        </Card.Text>

        <CardFooter className="event-card-links">
          <Button
            className="ticket-button"
            size="lg"
            variant="secondary"
            target="_blank"
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
