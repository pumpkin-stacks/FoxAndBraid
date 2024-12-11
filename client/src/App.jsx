import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import fnbMain from "../components/pageSection/FnBLandingPage/fnbMain";
import aboutMe from "../components/pageSection/aboutMePage/aboutMe";
import portfolio from "../components/pageSection/portfolioPage/portfolio";
import contact from "../components/pageSection/contactPage/contact";
import NavigationBar from "../components/navbarSection/navigationBar";
import Footer from "../components/footerSection/footer";
import siteControl from "../components/store/siteControl";

import "./FoxAndBraid.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Router>
        <siteControl>
          <NavigationBar />
          <div style={{ marginBottom: "20px" }}>
            <Routes>
              <Route path="/" element={<fnbMain />} />
              <Route path="/aboutMe" element={<aboutMe />} />
              <Route path="/portfolio" element={<portfolio />} />
              <Route path="/contact" element={<contact />} />
            </Routes>
          </div>
          <Footer />
        </siteControl>
      </Router>
    </div>
  );
}

export default App;
