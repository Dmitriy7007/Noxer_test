import {
  useFilteredProductsQuery,
  useManageProductsQuery,
} from '@/entities/products'
import { ProductsList } from '@/features/products-list/products-list'
import { SliderCard } from '@/shared/ui/slider-card/slider-card'
import { SliderHero } from '@/shared/ui/slider-hero/slider-hero'
import type { EmblaOptionsType } from 'embla-carousel'

export const Home = () => {
  const { data } = useFilteredProductsQuery({ per_page: 10, page: 1 })

  const SLIDES_1 = ['1.webp', '2.webp', '3.webp']
  const OPTIONS_2: EmblaOptionsType = { align: 'start' }
  const OPTIONS_1: EmblaOptionsType = { loop: true }

  const { data: products } = useManageProductsQuery()
  const category = products?.categories
    .filter(item => item.Category_Image !== '' && item.Category_Image !== null)
    .slice(0, 6)
  // console.log(data)

  return (
    <>
      <SliderHero slides={SLIDES_1} options={OPTIONS_1} />
      <SliderCard slides={category ?? []} options={OPTIONS_2} />
      <ProductsList products={data?.products ?? []} />
    </>
  )
}
