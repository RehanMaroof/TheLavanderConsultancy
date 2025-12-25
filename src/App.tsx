import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { TestPreparation } from './pages/TestPreparation'
import { Universities } from './pages/Universities'
import { Contact } from './pages/Contact'
import { BookConsultation } from './pages/BookConsultation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test-preparation" element={<TestPreparation />} />
      <Route path="/universities" element={<Universities />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-consultation" element={<BookConsultation />} />
    </Routes>
  )
}

export default App
