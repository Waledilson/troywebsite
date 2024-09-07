import "./App.css"
import MainView from "../src/components/main-view/main-view"
// import ContactView from "../src/components/contact-view/contact-view"
// import BioView from "../src/components/bio-view/bio-view"
// import MusicView from "../src/components/music-view/music-view"
// import VenueView from "../src/components/venue-view/venue-view"
import EventCardOne from "./components/event-card-one/event-card-one"
import EventCardTwo from "./components/event-card-two/event-card-two"
import EventCardThree from "./components/event-card-three/event-card-three"
import EventCardFour from "./components/event-card-four/event-card-four"

import NavBar from "../src/components/nav-bar/nav-bar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import SocialsBar from "../src/components/socials-bar/socials-bar"

function App() {
  return (
    <div className="App bg-black">
      <Container>
        <Router>
          <NavBar />
          <Row>
            <Routes>
              <Route path="/" element={<MainView />} />
            </Routes>
          </Row>
          <div className="grid_event-cards">
            <li>
              <EventCardOne className="cards" />
              <EventCardTwo className="cards" />
              <EventCardThree className="cards" />
              {/* <EventCardFour className="cards" /> */}
            </li>
          </div>
        </Router>
      </Container>
      <SocialsBar />
      <p className="dale">Website Design: Dale Wilson</p>
    </div>
  )
}

export default App
