import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactP from "./pages/ContactP";
import Portfolio from "./pages/Portfolio";
import Custom from "./pages/Custom";
import Commerce from "./pages/Commerce";
import SeoPage from "./pages/SeoPage";
import Code from "./pages/Code";


function App() {
  useEffect(() => {
    // EmailJS'i başlat
    emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS Public Key'inizi buraya yazın
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<ContactP />} />
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
