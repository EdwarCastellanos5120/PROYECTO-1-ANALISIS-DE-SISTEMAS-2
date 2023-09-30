import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePaje';
import LoginPage from './pages/LoginPage';
import DistriPage from './pages/distriPage';
import LimpiezaPage from './pages/limpiezaPage';
import PromocionesPage from './pages/promocionesPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/distri" element={<DistriPage />} />
          <Route path="/limpieza" element={<LimpiezaPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/promociones" element={<PromocionesPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
