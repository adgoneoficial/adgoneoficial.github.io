import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RedirectTo404 from './components/common/RedirectTo404.tsx'

import Profile from './components/pages/Profile.tsx'
import Portada from './components/pages/Portada.tsx'
import { CAMILUDS_PROFILE, JCASTANODEV_PROFILE, NATA_SEBAS_PROFILE, PABLO_PROFILE } from './Constant.ts'

// path="/" + rodandoporeleje/"
const basePath = import.meta.env.VITE_BASE_PATH || '/';
console.log('basePath:', basePath);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={basePath} element={
          <Suspense fallback={<Portada />}>
            <App />
          </Suspense>
        } />
        <Route path="/jcastanodev" element={<Profile profileData={JCASTANODEV_PROFILE} />} />
        <Route path="/camiluds" element={<Profile profileData={CAMILUDS_PROFILE} />} />
        <Route path="/nata_sebas" element={<Profile profileData={NATA_SEBAS_PROFILE} />} />
        <Route path="/pablo" element={<Profile profileData={PABLO_PROFILE} />} />
        <Route path="/test" element={<Portada />} />
        <Route path="*" element={<RedirectTo404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
