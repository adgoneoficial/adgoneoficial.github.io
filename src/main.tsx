import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RedirectTo404 from './components/common/RedirectTo404.tsx'

const basePath = import.meta.env.VITE_BASE_PATH || '/';
console.log('basePath:', basePath);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={basePath} element={
          <App />
        } />
        <Route path="*" element={<RedirectTo404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
