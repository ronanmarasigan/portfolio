import React from 'react'
import { skills } from "../constants"
import styles ,{layout} from '../style'
import { about } from '../assets'

const About = () => 
   (
    <section id='about' className={layout.section}>
        <div  className={`layout.sectionInfo sm:mt-[150px] mt-0 sm:ml-[70px] ml-0`}>
        <h2 className={styles.heading1}>
          Hi, I'm Ronan Marasigan.<br className='sm:block hidden'/>{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A well-organized and well-disciplined person. I’m a Front-end Developer located in Philippines. I have passion for creating and building responsive websites. I enjoy building things on the internet and have an interest on digital arts. 
        </p>

        <h1 className={`text-center text-cyan-500 font-poppins font-bold mt-10 text-[20px]`}>My Skills <br/><span className='font-light text-dimWhite '>TECH STACKS</span> </h1>
        
        <div className={`${styles.flexCenter} flex-wrap my-10 p-5 bg-black-gradient-2 rounded-[10px] max-w-[700px]`}>
            <div className={`${styles.flexCenter} flex-wrap w-full `}>
              {skills.map((skill) => (
                <div key={skill.id}>
                  <img src={skill.logo} className=' w-[80px] h-[70px] flex-col object-contain mr-3 my-1 animate-bounce hover:animate-none'/>
                </div>
              ))}
            </div>
        </div>
      </div>


      <div className={layout.sectionImg}>
        <div className=' flex flex-row items-center py-0 px-[2px] sm:ml-[40px] ml-0  rounded-[100px] mb-2 mt-[50px]'>
          <img src={about} alt='aboutphoto' className='w-[450px] h-[700px] pt-[50px] z-[5] skew-y-6'/>
          {/*<div className='absolute z-[0] w-[40%] h-[35%] top-10 pink__gradient'/>
          <div className='absolute z-[2] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>*/}
        </div>
      </div>
      
    </section>
  )


export default About