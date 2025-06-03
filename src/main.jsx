import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import BootUp from './BootUp.jsx'
import App from './App.jsx'
import Desktop from './Desktop.jsx'
import Work from './Work.jsx'
import Projects from './Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BootUp />} />
        <Route path="/terminal" element={<App />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/work" element={<Work />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
