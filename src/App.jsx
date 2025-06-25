import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Custom from "./pages/Custom";
import Commerce from "./pages/Commerce";
import SeoPage from "./pages/SeoPage";
import Code from "./pages/Code";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/portfolyo" element={<Portfolio />} />
        <Route path="/hizmetler/ozel-site" element={<Custom />} />
        <Route path="/hizmetler/e-ticaret" element={<Commerce />} />
        <Route path="/hizmetler/seo" element={<SeoPage />} />
        <Route path="/hizmetler/kod-destegi" element={<Code />} />
      </Routes>
    </Router>
  );
}

export default App;
