import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewContact from "../components/NewContact";
import ContactCard from "../components/ContactCard";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <title>Contact Us | Appdevify - Mobile App & Web Development Company</title>
      <meta name="description" content="Get in touch with Appdevify for custom mobile app and web development services. Phone: +90 530 562 91 26, Email: hello@appdevify.com. Serving clients in UK, US and globally." />
      <meta name="keywords" content="appdevify contact, mobile app development company, web development services, UK app developers, US web development contact" />
      <link rel="canonical" href="https://www.appdevify.com/contact" />
      <meta property="og:title" content="Contact Us | Appdevify - Mobile App & Web Development" />
      <meta property="og:description" content="Get in touch with Appdevify for mobile app and web development services. Phone: +90 530 562 91 26, Email: hello@appdevify.com." />
      <meta property="og:url" content="https://www.appdevify.com/contact" />
      <meta property="og:image" content="https://www.appdevify.com/appdevify-logo.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Us | Appdevify - Mobile App & Web Development" />
      <meta name="twitter:description" content="Get in touch with Appdevify for mobile app and web development services. Phone: +90 530 562 91 26, Email: hello@appdevify.com." />
      <meta name="twitter:image" content="https://www.appdevify.com/appdevify-logo.png" />

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <NewContact />
        <ContactCard />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
