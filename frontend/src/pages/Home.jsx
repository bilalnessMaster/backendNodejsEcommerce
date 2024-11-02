import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Fashion from '../components/Fashion'
import TrendingProducts from '../components/TrendingProducts'
import DealSection from '../components/DealSection'
import ServicesBanner from '../components/ServicesBanner'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='max-w-screen-2xl mx-auto'>
            <Hero />
            <Categories />
            <Fashion />
            <TrendingProducts />
            <DealSection />
            <ServicesBanner />  
            <BlogSection/>
           
    </main>
  )
}

export default Home
