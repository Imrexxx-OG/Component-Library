import React from 'react';
import ReactDOM from 'react-dom/client';
import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"
import Star from "./components/Star"

function App() {
  return (
    <>
      <h1>React Component Library</h1>
      {/* Your components goes here  */}
          <Badges />
          <Banners />
          <Cards />
          <Testimonials />
      {/* Stretch goals : Tooltips component and Toast Popup */}
    </>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
