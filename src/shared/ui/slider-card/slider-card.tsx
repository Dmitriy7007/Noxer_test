import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

export const SliderCard = ({
  slides,
  options,
}: {
  slides: number[]
  options: EmblaOptionsType
}) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide embla__slide_2' key={index}>
              <div className='embla__slide__number'>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
