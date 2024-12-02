import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
