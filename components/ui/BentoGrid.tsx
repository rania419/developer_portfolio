"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
// import   {GlobeDemo}   from "./GridGlobe";
// import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicBtn from "./MagicBtn";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

// const GlobeDemo = dynamic(() => import("./GridGlobe").then((m) => m.GlobeDemo), {
//   ssr: false, // Disable SSR for this component
// });


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem]   grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 max-w-7xl mx-auto ", //md:auto-rows-[18rem]
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  header,
  icon,
  id,
  imgclassName,
  spareImg,
  titleClassName,
  
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img? : string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  imgclassName ? : string;
  spareImg ? : string;
  titleClassName ? : string;
}) => {

  // console.log("Image URL:", img); // Debugging line

  const [copied, setcopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ranialouna726@gmail.com");
    setcopied(true);
    // setTimeout(() => {
    //   setcopied(false);
    // }, 2000);
  }


  return (
    <div
      className={cn(
        " border-2 relative row-span-1 overflow-hidden rounded-3xl \
        group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none \
         justify-between flex flex-col space-y-4 border-white-[0.1]",
        className
      )}

      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 35%, rgba(93,108,111,1) 100%)',
        // backgroundImage: `url(${img})`,
      }
      }   
    >
      <div className={`$ {id === 6 && 'flex justify-center'} h-full`}>
        
        

        <div className="w-full h-full right-0 bottom-0 absolute">
          {img && (
          
            <img
              src={img}
              alt={img}
              className={cn(imgclassName, "object-cover rounded-[20px] object-center ")}
            />
          )}

        </div>

        <div className={`absolute -right-0 bottom-0 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && ( 
            <BackgroundGradientAnimation 
            >
              <div className="z-1 absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              
              </div>

            </BackgroundGradientAnimation>
          )}
          

        <div className={cn(
          titleClassName, 'group-hover/bento: translate-x-2 transition duration-200 \
          relative md:h-full min-h-40 flex flex-col p-5 lg:p-10 ' 

          )}>
          
          
          <div className="font-sans font-normal text-[#c1c2d3]  text-xs dark:text-neutral-300">
            {description}
          </div>

          <div className="z-9999 font-sans font-bold text-lg lg:text-3xl max-w-96">
            {title}
          </div>

          {/* {id === 2 && <GlobeDemo />} */}

          {id === 3 && (
            <div className="flex-gap-1 flex gap-4 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              
              <div className="flex flex-col gap-3 lg:gap-8">
              
                {['React.js', 'Next.js','TypeScript'].map((item) => (
                  <span key={item} className="p-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base 
                  opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                    {item}
                  </span>
                ))}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

              </div>
              
              <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

                {['Vues.js', 'AWS','MongoDB'].map((item) => (
                  <span key={item} className="p-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base 
                  opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                    {item}
                  </span>
                ))}

                
              </div>

            </div>
          )}

          {/* buttn email */}
          {id === 6 && (
            <div className="mt-5 relative">
              
              <div  className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
               }`}>
                {/* animation */}
                {/* <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} /> */}
              </div>

              <MagicBtn 
                title={copied ? "Email copied" : "Copy my email"}
                icon= {<IoCopyOutline />} 
                position="left"
                other="!bg-[#161a31]"
                handleClick={handleCopy} 
                
              />

            </div>
          )}

        </div>

      
     
      </div> 
    
    </div>
  );
};
