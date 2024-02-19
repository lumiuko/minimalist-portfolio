import { createRoutesFromElements, RouterProvider, createBrowserRouter, Route } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Contact from './pages/Contact'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolio/:slug" element={<PortfolioDetail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
