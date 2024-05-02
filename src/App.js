import "./App.css"
import MainView from "../src/components/main-view/main-view"
// import ContactView from "../src/components/contact-view/contact-view"
// import BioView from "../src/components/bio-view/bio-view"
// import MusicView from "../src/components/music-view/music-view"
// import VenueView from "../src/components/venue-view/venue-view"
import BasementSessionsCard from "../src/components/basement-card/basement-card"
import BoyGoldenCard from "../src/components/boy-golden-card/boy-golden-card"

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
            {/* <div>
              <BasementSessionsCard className="cards" />
            </div> */}
            <li>
              <BoyGoldenCard className="cards" />
            </li>
          </div>
        </Router>
      </Container>
      <SocialsBar />
      <p className="dale">Designed by Dale Wilson</p>
    </div>
  )
}

export default App
