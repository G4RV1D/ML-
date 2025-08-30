import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import des pages
import HomePage from "./pages/HomePage";
import SalonPage from "./pages/SalonPage";
import PrestationsPage from "./pages/PrestationsPage";
import GaleriePage from "./pages/GaleriePage";
import ContactPage from "./pages/ContactPage";

// Import des composants
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/salon" element={<SalonPage />} />
              <Route path="/prestations" element={<PrestationsPage />} />
              <Route path="/galerie" element={<GaleriePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;