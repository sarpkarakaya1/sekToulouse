import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import FictionalMarketing from './pages/FictionalMarketing';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function AppContent() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="min-h-screen">
      {!isHomepage && <Navigation />}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/danismanlik" element={<Portfolio />} />
        <Route path="/iletisim" element={<FictionalMarketing />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      {!isHomepage && (
        <footer className="border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center">
            <p className="text-gray-500">
              © 2025 SEKToulouse Danışmanlık.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;