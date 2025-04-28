import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselSection from '../../Components/Carousel/CarouselSection'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'

const Landing = () => {
  return (
    <>
      <LayOut>
        <CarouselSection />
        <Category/>
        <Product />
      </LayOut>
    </>
  )
}

export default Landing