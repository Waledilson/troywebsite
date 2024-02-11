import React from "react"
import Card from "react-bootstrap/Card"
import agelogoround from "../../../src/img/agelogo-round.JPG"

function MainView() {
  return (
    <div class="main">
      <Card className="event-card" style={{ width: "90vw" }}>
        <Card.Body>
          <Card.Title as="h1">Surge Radio Presents:</Card.Title>
          <Card.Subtitle as="h2" className="mb-2 text-muted">
            The Basement Sessions
          </Card.Subtitle>
          <Card.Text as="p">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MainView
