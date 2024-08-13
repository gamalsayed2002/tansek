// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Nav from "./pages/nav/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
