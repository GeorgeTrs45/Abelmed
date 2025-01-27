import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Uses from "./components/Uses/Uses";
import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Uses />
      <Chatbot />
      <Footer />
    </main>
  );
};

export default App;
