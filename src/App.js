import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el componente Footer
import Home from './pages/Home';
import Careers from './pages/Careers';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Adm from './pages/Adm';
import Admh from './pages/Admh';
import Gast from './pages/Gast';
import Cont from './pages/Cont';
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer /> {/* Agrega el footer aquí */}
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<AnimatedPage><Home /></AnimatedPage>}
        />
        <Route
          path="/carreras"
          element={<AnimatedPage><Careers /></AnimatedPage>}
        />
        <Route
          path="/carreras/administracion"
          element={<AnimatedPage><Adm /></AnimatedPage>}
        />
        <Route
          path="/carreras/hoteleria"
          element={<AnimatedPage><Admh /></AnimatedPage>}
        />
        <Route
          path="/carreras/gastronomia"
          element={<AnimatedPage><Gast /></AnimatedPage>}
        />
        <Route
          path="/carreras/contabilidad"
          element={<AnimatedPage><Cont /></AnimatedPage>}
        />
        <Route
          path="/admisiones"
          element={<AnimatedPage><Admissions /></AnimatedPage>}
        />
        <Route
          path="/nosotros"
          element={<AnimatedPage><About /></AnimatedPage>}
        />
      </Routes>
    </AnimatePresence>
  );
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
