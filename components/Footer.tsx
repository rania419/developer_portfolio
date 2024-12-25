import React from 'react'
import { Button } from './ui/moving-border'
import MagicBtn from './ui/MagicBtn'
import { FaCopyright, FaLocationArrow, FaRegCopyright } from 'react-icons/fa'
import { div } from 'framer-motion/client'
import { socialMedia } from '../data/'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 ' id='contact'>
       
        <div className='w-full absolute left-0 top-50 lg:-bottom-10   md:-bottom-20 min-h-96'>
            <img src="/footer-grid.svg" alt="grid"
            className='w-full h-full ' />
        </div>

        <div className='flex flex-col  items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take
                <span className='text-purple'> your </span>
                 digital presence to the next level?</h1>
            
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and lets discuss how I can help you achieve your goals</p>
           <a href='mailto:ranialouna726@gmail.com'> 
              <MagicBtn
                title='Contact Me Now' 
                icon={<FaLocationArrow />}
                position='right'/> 
           </a> 
        </div>

        <div className='flex justify-between mt-20'>
    
          <p>Copyright © 2024 Rania Lounas</p> 
          
          <div className='flex md:gap-3 items-center gap-6 '>
            
            {socialMedia.map((social) => (
              <div className='items-center flex justify-center
            cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75
            bg-black-200 w-10 h-10 rounded-lg border border-black-200'>
              
              <img key={social.id}
                src={social.img}
                alt={social.id.toString()}
                width={20} height={20}
              />
              </div>
              
            ))}
          </div>
      
        </div>
    </footer >
  )
}

export default Footer