import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sports from './pages/Sports'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/deportes" replace />} />
          <Route path="/deportes" element={<Sports />} />
          <Route path="/atletas" element={<Navigate to="/deportes" replace />} />
          <Route path="/records" element={<Navigate to="/deportes" replace />} />
          <Route path="/buscar" element={<Search />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
