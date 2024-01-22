import "./App.css"
import MainView from "../src/components/main-view/main-view"
import ContactView from "../src/components/contact-view/contact-view"
import BioView from "../src/components/bio-view/bio-view"
import MusicView from "../src/components/music-view/music-view"
import VenueView from "../src/components/venue-view/venue-view"
import NavBar from "../src/components/nav-bar/nav-bar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import SocialsBar from "../src/components/socials-bar/socials-bar"
// import {Netlify_URL} from "../config.js"

function App() {
  return (
    <div className="App bg-dark">
      <Container>
        <Router>
          <NavBar />
          <Row>
            <Routes>
              <Route
                path="https://master--boisterous-malasada-876b9d.netlify.app//main-view"
                element={<MainView />}
              />
              <Route
                path="https://master--boisterous-malasada-876b9d.netlify.app//contact-view"
                element={<ContactView />}
              />
              <Route
                path="https://master--boisterous-malasada-876b9d.netlify.app//bio-view"
                element={<BioView />}
              />
              <Route
                path="https://master--boisterous-malasada-876b9d.netlify.app//music-view"
                element={<MusicView />}
              />
              <Route
                path="https://master--boisterous-malasada-876b9d.netlify.app//venue-view"
                element={<VenueView />}
              />
            </Routes>
          </Row>
          <SocialsBar />
        </Router>
      </Container>
    </div>
  )
}

export default App
