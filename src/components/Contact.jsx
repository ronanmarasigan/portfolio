import React from 'react'
import styles, { layout } from '../style'
import { contact, } from '../assets'
import { features, socialMedia } from '../constants'

const ContactCard =({icon, content, index})=>(
  <div className={`flex flex-row p-4 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card sm:w-[500px] w-full `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className=' flex-1 flex flex-col ml-3'>
        <h4 className=' font-poppins font-semibold text-white text-[18px] leading-[23px] mt-5 sm:tracking-wider tracking-tight' >{content}</h4>
    </div>
  </div>

)


const Contact = () => 

  (

    <section id='contact' className={layout.section}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 px-6 pt-10`}>
        <div className=' flex flex-row items-center  mb-2 '>
          <img src={contact} alt='contactphoto' className='w-[500px] h-[700px] pt-[50px] rounded-[130px]'/>
        </div>
      </div>
      
      <div className={`${layout.sectionImg} flex-col mb-[30px]`}>
      <h3 className='text-cyan-500 text-[25px] font-poppins font-medium text'>Contact Me</h3>
        {features.map((feature, index) => (
          <ContactCard key={feature.id} {...feature} index={index}/>
        ))}

      <div className={`${styles.flexCenter} flex-wrap w-full mt-[80px]`}>
              {socialMedia.map((social, index) => (
                <div>
                  <img key={social.id} onClick={()=> window.open(`${social.link}`)}   src={social.icon} className={`w-[50px] h-[50px] flex-col object-contain mr-10 my-1 cursor-pointer }`}>
                  </img>
                </div>
              ))}
            </div>
      </div>

      
           
        
        
    </section>
  )


export default Contact