import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import type { Category } from '@/shared/type/types'

export const SliderCard = ({
  slides,
  options,
}: {
  slides: Category[]
  options: EmblaOptionsType
}) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map(slide => (
            <div
              className='embla__slide embla__slide_2'
              key={slide.Category_ID}
            >
              <div className='embla__slide_category'>
                <img
                  src={slide?.Category_Image ?? '/category.webp'}
                  alt='картинка'
                  width={114}
                  height={114}
                  className='embla__slide_image'
                />
                <p className='embla__slide_text'>{slide.Category_Name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
