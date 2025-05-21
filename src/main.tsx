// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
