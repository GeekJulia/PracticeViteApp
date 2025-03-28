import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>, 
  // React Strict Mode intentionally mounts components twice in development mode to detect side effects.
  // In Strict Mode, useEffect runs twice (mounts twice), leading to two increments (0 → 1 → 2).
)
