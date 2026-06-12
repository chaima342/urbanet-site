import Hero from "./components/Hero";
import Connecting from "./components/Connecting";
import WhatWeOffer from "./components/WhatWeOffer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Connecting />
      <WhatWeOffer />
      <Footer />
    </div>
  );
}

export default App;
