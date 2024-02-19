import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className="flex-1 px-8 md:px-10">
        <div className="max-w-container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
