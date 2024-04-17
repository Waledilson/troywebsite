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
// import {Netlify_URL} from "../config.js"

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
          <BasementSessionsCard className="cards" />
          <BoyGoldenCard className="cards" />
          <SocialsBar />
        </Router>
      </Container>
    </div>
  )
}

export default App
