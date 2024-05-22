import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import './index.css';
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
      <Home />
      <Catalog />
      </main>
      <Footer />
    </div>
  );
}
export default App;
