import {
  useFilteredProductsQuery,
  useManageProductsQuery,
} from '@/entities/products'
import { ProductsList } from '@/features/products-list/products-list'
import { Slider } from '@/shared/ui/slider/slider'
import { SliderWithControl } from '@/shared/ui/slider-with-control/slider-with-control'
import type { EmblaOptionsType } from 'embla-carousel'
import { ErrorBoundary } from '../error-boundary/error-boundary'
import { FooterApp } from '@/features/footer-app/footer-app'

export const Home = () => {
  const { data } = useFilteredProductsQuery({ per_page: 15, page: 1 })

  const SLIDES_HERO = ['1.webp', '2.webp', '3.webp']
  const OPTIONS_2: EmblaOptionsType = { align: 'start' }
  const OPTIONS_1: EmblaOptionsType = { loop: true }

  const { data: products } = useManageProductsQuery()
  const category = products?.categories
    .filter(item => item.Category_Image !== '' && item.Category_Image !== null)
    .slice(0, 6)

  return (
    <ErrorBoundary fallback={<p>Что-то пошло не так...</p>}>
      <SliderWithControl slides={SLIDES_HERO} options={OPTIONS_1} />
      <Slider slides={category ?? []} options={OPTIONS_2} />
      <ProductsList products={data?.products ?? []} />
      <FooterApp />
    </ErrorBoundary>
  )
}
