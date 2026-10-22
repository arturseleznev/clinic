import { lazy, Suspense } from 'react'
import { Hero } from '../components/Hero'

const About = lazy(() =>
  import('../components/About').then((m) => ({ default: m.About })),
)
const Advantages = lazy(() =>
  import('../components/Advantages').then((m) => ({ default: m.Advantages })),
)
const Services = lazy(() =>
  import('../components/Services').then((m) => ({ default: m.Services })),
)
const Prices = lazy(() =>
  import('../components/Prices').then((m) => ({ default: m.Prices })),
)
const YandexMap = lazy(() =>
  import('../components/YandexMap').then((m) => ({ default: m.YandexMap })),
)

export function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Advantages />
        <Services />
        <Prices />
        <YandexMap />
      </Suspense>
    </>
  )
}
