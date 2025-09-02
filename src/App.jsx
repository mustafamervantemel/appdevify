import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useWebVitals } from "./hooks/useWebVitals";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactP = lazy(() => import("./pages/ContactP"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Custom = lazy(() => import("./pages/Custom"));
const Commerce = lazy(() => import("./pages/Commerce"));
const SeoPage = lazy(() => import("./pages/SeoPage"));
const Code = lazy(() => import("./pages/Code"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);


function App() {
  // Initialize web vitals monitoring
  useWebVitals();
  
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("rF_c1o5APLw4e78Qy");
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactP />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/custom-development" element={<Custom />} />
          <Route path="/services/mobile-apps" element={<Commerce />} />
          <Route path="/services/web-development" element={<SeoPage />} />
          <Route path="/services/technical-support" element={<Code />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
