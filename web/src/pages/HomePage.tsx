import { About } from '../components/About'
import { Advantages } from '../components/Advantages'
import { Hero } from '../components/Hero'
import { Prices } from '../components/Prices'
import { Services } from '../components/Services'
import { YandexMap } from '../components/YandexMap'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <Services />
      <Prices />
      <YandexMap />
    </>
  )
}
