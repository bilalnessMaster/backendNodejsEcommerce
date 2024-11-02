import React from 'react'
import instagramImg from '../assets/instagram-1.jpg'
import instagramImg2 from '../assets/instagram-2.jpg'
import instagramImg3 from '../assets/instagram-3.jpg'
import instagramImg4 from '../assets/instagram-4.jpg'
import instagramImg5 from '../assets/instagram-5.jpg'
import instagramImg6 from '../assets/instagram-6.jpg'
const Footer = () => {
  return (
    <footer className='max-w-screen-2xl mx-auto'>
        <section className='mx-auto container mt-12 space-y-12 pb-3'>

        

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2'>
      <section className='flex flex-col items-center justify-center md:items-start md:justify-start gap-4'>
        <h4 className='font-bold'>CONTACT INFO</h4>
        <p className='flex gap-2 items-center'>
         <span> <i className='ri-map-pin-2-line text-lg text-red-500'></i></span>
         123, London Bridge Street, London, UK
        </p>
        <p className='flex gap-2 items-center'>
          <span> <i className='ri-mail-line text-lg text-red-500'></i></span>
          6YRQw@example.com
          
        </p>
        <p className='flex gap-2 items-center'>
          <span> <i className='ri-phone-line  text-lg text-red-500'></i></span>
          +(212) 123-456-7890
        </p>
      </section>
      <section className='flex flex-col items-center justify-center md:items-start md:justify-start gap-4'>
        <h4 className='font-bold'>COMPANY</h4>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Work with Us</a>
        <a href="">Our Blogs</a>
        <a href="">Terms & Conditions</a>
    
      </section>
      <section className='flex flex-col items-center justify-center md:items-start md:justify-start gap-4'>
        <h4 className='font-bold'>USEFUL LINKS</h4>
        <a href="">Help</a>
        <a href="">track your order</a>
        <a href="">Services</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Dress</a>
    
      </section>
      <section >
        <h4 className='font-bold mb-4 text-center md:text-start'>INSTAGRAM</h4>
        <div className='grid grid-cols-3 gap-2'>
                <img src={instagramImg} alt="" />
                <img src={instagramImg2} alt="" />
                <img src={instagramImg3} alt="" />
                <img src={instagramImg4} alt="" />
                <img src={instagramImg5} alt="" />
                <img src={instagramImg6} alt="" />
        </div>
      </section>
      </div>
      <div>
        <p className='text-center'>Copyright © 2022. All rights reserved.</p>
      </div>
      </section>
    </footer>
  )
}

export default Footer
