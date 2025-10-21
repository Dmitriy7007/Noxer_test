import type { EmblaOptionsType } from 'embla-carousel'
import { SliderHero } from '@/shared/ui/slider-hero/slider-hero'
import { SliderCard } from '@/shared/ui/slider-card/slider-card'
import { ProductList } from '@/pages/product-list/product-list'
import { QueryProvider } from './query-provider'

function App() {
  const SLIDES_1 = ['1.jpg', '2.jpg', '3.jpg']
  const OPTIONS_2: EmblaOptionsType = { align: 'start' }
  const OPTIONS_1: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 7
  const SLIDES_2 = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <QueryProvider>
      <ProductList />
      <SliderHero slides={SLIDES_1} options={OPTIONS_1} />
      <SliderCard slides={SLIDES_2} options={OPTIONS_2} />
    </QueryProvider>
  )
}

export default App
