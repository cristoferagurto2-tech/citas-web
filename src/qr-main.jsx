import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QR from './QR'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QR />
  </StrictMode>,
)
