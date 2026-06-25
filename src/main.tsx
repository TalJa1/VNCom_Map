import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FarmerStory from './pages/FarmerStory.tsx'
import { LanguageProvider } from './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/farmer/:id" element={<FarmerStory />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
