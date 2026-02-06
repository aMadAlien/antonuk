import Image from 'next/image'
import HorizontalSlider from '../HorizontalSlider'
import Slide1 from '@/public/images/slider/Image_1.jpg'
import Slide2 from '@/public/images/slider/Image_2.jpg'
import Slide3 from '@/public/images/slider/Image_3.jpg'

export default function Slider() {
  return (
    <section className="py-[60px] md:py-[40px]">
      <HorizontalSlider
        sliders={
          [Slide1, Slide2, Slide3, Slide1, Slide2, Slide3].map(src => (
            <Image
              src={src}
              width={560}
              height={100}
              alt=""
              className="pointer-events-none w-[230px] md:w-[560px] h-[176px] md:h-[320px] object-cover rounded-[8px]"
            />
          ))
        }
      />
    </section>
  )
}
