import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchRestaurantsPage from './pages/SearchRestaurantsPage';
import NewRestaurantPage from './pages/NewRestaurantPage';
import Footer from './components/Footer';
import './assets/styles/main.css'; // Importa tu CSS personalizado

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-4 mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buscar" element={<SearchRestaurantsPage />} />
          <Route path="/nuevo" element={<NewRestaurantPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;