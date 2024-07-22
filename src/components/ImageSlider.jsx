import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'




const ImageSlider = () => {
    const images =[img1,img2,img3]
  return (
   <section className='bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10'>
                <Swiper
                    modules={[Autoplay, A11y]}
                    spaceBetween={30} // Adjust the spacing as needed
                    slidesPerView={1} // Show only one slide by default
                    autoplay
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <a href='/#'>
                                <img
                                    src={img}
                                    alt={`slide-${index + 1}`}
                                    className='w-fit h-[auto] mx-auto select-none'
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
  )
}

export default ImageSlider