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
    // EmailJS'i başlat
    emailjs.init("YOUR_PUBLIC_KEY"); // EmailJS Public Key'inizi buraya yazın
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
