import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Header/>
  </StrictMode>,
)
