import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StarCanvas from './components/StarBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarCanvas />
    <App />
  </StrictMode>
)
