import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { img } from './data'

const CarouselSection = () => {
  return (
    <div className="relative pt-26.3">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((imageItemLink, index) => {
            return <img key={index} src={imageItemLink} alt="" />
          })
        }
      </Carousel> 
      <div className="absolute bottom-0 left-0 w-full h-[110px] md:h-[230px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-white"></div>
    </div>
  )
}

export default CarouselSection
