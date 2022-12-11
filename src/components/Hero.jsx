import React from 'react'
import styles, {layout} from '../style';
import { hero } from '../assets';
import Button from './Button';

const Hero = () => 
   (
    <section className={layout.section}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 px-6 pt-10`}>
        <div className=' flex flex-row items-center py-0 px-[4px] bg-discount-gradient rounded-[100px] mb-2 '>
          <img src={hero} alt='herophoto' className='w-[450px] h-[700px] pt-[50px]'/>
        </div>
      </div>

      <div  className={`${layout.sectionInfo} mt-10`}>
          <h2 className={`${styles.heading2} type text-white`}>Hi,</h2>
          <h2 className={`${styles.heading2} type1 text-white`}>I'm Ronan Marasigan.</h2>
          <h2 className={`${styles.heading2} type2 text-gradient`}>A Front-end Developer.</h2>
        
        <p className={`${styles.paragraph} subtitle max-w-[470px] mt-5`}>
          I build and code website, and I enjoy what I do.
        </p>

        <Button styles='mt-10'/>
        <div class="spinner sm:ml-[300px] ml-[150px]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
      </div>

    </section>
  )


export default Hero
