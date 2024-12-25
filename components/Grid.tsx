import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { BentoGridItem } from './ui/BentoGrid'
import { GridtItems } from '@/data'
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {GridtItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgclassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid