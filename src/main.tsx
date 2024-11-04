import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from '@/App.tsx'
import { AppContextProvider } from '@/components/ItemsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
)
