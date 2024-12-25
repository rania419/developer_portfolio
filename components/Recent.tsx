import React from 'react'
import { projects } from '@/data'

import { workExperience } from '../data'
import { Button } from "./ui/moving-border";
import { PinContainer } from "./ui/3d-pin";
const Recent = () => {
  return (
    <div className='py-20 '>
        
        <h1 className='heading'>
            A small selection of <span className='text-purple'>recent projects</span>
        </h1>

       <div className='flex flex-wrap items-center justify-center  md:gap-x-40 sm:gap-x-10 sm:gap-y-10 lg:gap-x-60 lg:gap-y-4 mt-10' > {/*  */}
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="sm:h-[30rem] h-[35rem] lg:h-[40rem] md:h-[40rem]  flex items-center justify-center ">
                <PinContainer
                  title={link}
                  href={link}>
                    
                  <div className="flex  flex-col tracking-tight text-slate-100/50 sm:basis-1/2  ">
                
                      <div className="relative w-full flex items-center justify-center   mb-10">
                          <div
                              className="relative rounded-xl "
                              style={{ backgroundColor: "#13162D" }}
                          >
                              <img src="/bg.png" alt="bgimg" />
                          </div>
          
                          <img
                              src={img}
                              alt="cover"
                              className="z-10  absolute bottom-0"
                          />
                      </div>
          
                      {/* className="flex flex-1 pt-2 w-full mb-6 rounded-lg mt-4 " */}
                    
                    <h3 className="max-w-xs !m-0 font-bold pb-2 text-base text-slate-100">
                      {title}
                    </h3>
          
                    <div className="text-base font-normal ">
                      <span className="text-slate-500 ">
                        {des}
                      </span>
                    </div>
          
                  <div className="flex justify-between items-center mt-6 ">
          
                      <div className="flex items-center ">
                          {iconLists.map((icon, index) => (
                              <div key={index} style={{transform: `translateX(-${5*index+2}px)`}}
                              className=" items-center 
                              border-white-/[0.2] rounded-full  bg-black border">
          
                                  <img src={icon} alt="icon" className="p-2 w-9 h-9" />
                              
                              </div>
                              
                          ))}
                      </div>
          
                      <div className="flex gap-3  justify-center items-center text-purple">
                          <p className="lg:text-xl md:text-xs text-sm">Check Live Site</p>
                          <img src="./arrow.svg" alt="arrow" className="w-3"/>
                      </div>
                  </div>
                    
                    
                  </div>
                </PinContainer>
              </div>
            ))}

        </div>

      
    </div>
  )
}

export default Recent