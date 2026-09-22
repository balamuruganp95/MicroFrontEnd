import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AccountsApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccountsApp />
  </StrictMode>,
)
