import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sports from './pages/Sports'
import Records from './pages/Records'
import Athletes from './pages/Athletes'

/**
 * Componente principal de la aplicación.
 * Configura el enrutamiento con React Router.
 */
function App() {
  return (
    <Router>
      {/* Navbar fija en la parte superior */}
      <Navbar />

      {/* Contenido principal con las rutas */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deportes" element={<Sports />} />
          <Route path="/records" element={<Records />} />
          <Route path="/atletas" element={<Athletes />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
