import { createRoutesFromElements, RouterProvider, createBrowserRouter, Route } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolio/:slug" element={<PortfolioDetail />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
