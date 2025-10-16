import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Gallery from './pages/Gallery.tsx'
import Wishes from './pages/Wishes.tsx'
import Info from './pages/Info.tsx'
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'wishes', element: <Wishes /> },
      { path: 'info', element: <Info /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

