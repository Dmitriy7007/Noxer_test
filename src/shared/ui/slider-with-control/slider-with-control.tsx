import { useCallback } from 'react'
import { type EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton } from './useDotButton'
import { DotButton } from './dot-button'
import clsx from 'clsx'

type PropType = {
  slides: string[] | []
  options?: EmblaOptionsType
  className?: string
}

export const SliderWithControl = ({ slides, options, className }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className={clsx('embla', className)}>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide, index) => (
            <div className='embla__slide embla__slide_1' key={index}>
              <img
                src={slide}
                alt='картинка'
                style={{
                  overflow: 'hidden',
                  borderRadius: '15px',
                  objectFit: 'cover',
                }}
                width='100%'
                height='100%'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
