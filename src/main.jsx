import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './routes/Routes.jsx'
import MainProvider from './providers/MainProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={router}/>
    </MainProvider>
  </StrictMode>,
)
