import React from 'react'
import Header from '../../Header/Header'
import CarouselSection from '../../Carousel/CarouselSection'
import Category from '../../Category/Category'
import Product from '../../Product'

const Home = () => {
  return (
    <>
      <Header/>
      <CarouselSection />
      <Category/>
      <Product />
    </>
  )
}

export default Home