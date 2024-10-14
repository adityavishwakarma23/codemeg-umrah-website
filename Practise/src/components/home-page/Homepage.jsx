import React from 'react'
import {  BannerPage, PackagesPage, SacrePage, TestimonalPage } from './sub-component'

const Homepage = () => {
  return (
    <div>
      <BannerPage/>
      <PackagesPage/>
      <SacrePage/>
      <TestimonalPage/>
    </div>
  )
}

export default Homepage
