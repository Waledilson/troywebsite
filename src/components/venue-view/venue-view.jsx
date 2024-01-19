import React from "react"
import Accordion from "react-bootstrap/Accordion"

function VenueView() {
  return (
    <div className="bg-dark">
      <h3>Venues</h3>
      <p>This will be the venue view</p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-dark">Venue 1</Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Venue 2</Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Venue 3</Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Venue 4</Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue Venue venue venue Venue venue venue Venue venue venue
            Venue venue venue Venue venue venue Venue venue venue Venue venue
            venue Venue venue venue Venue venue venue Venue venue venue Venue
            venue venue
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default VenueView
