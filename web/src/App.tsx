import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    let attempts = 0
    let frame = 0

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (attempts++ < 40) {
        frame = window.setTimeout(tryScroll, 50)
      }
    }

    tryScroll()
    return () => window.clearTimeout(frame)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
