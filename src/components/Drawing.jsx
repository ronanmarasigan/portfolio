import React from 'react'
import styles, { layout } from '../style'
import { gallery } from '../constants'
import { useState } from 'react';
import { close } from '../assets';



const Drawing = () =>

{

  const [model , setModel ] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
 
  return (
    <section id='drawing' className={layout.section}>
    <div className={model? "model open" : "model"}>
      <img src={tempimgSrc}/>
      <img
          src={close }
          className={`close`}
          onClick={() => setModel((prev) => !prev)}
        />
    </div>
    
    <div className={`${styles.flexCenter} flex-wrap my-10 p-5 bg-black-gradient-2 rounded-[10px] `}>
      <h4 className={`${styles.heading1} text-center text-cyan-500 mb-5`}>My Drawings</h4>
            <div className={`gallery flex-wrap w-full `}>
              {gallery.map((img, index) => (
                <div className='pics' key={img.id} onClick={() => getImg(img.imgSrc)}>
                  <img src={img.imgSrc} className="mb-5"/>
                </div>
              ))}
            </div>
      </div>
    </section>
    
)}
  
   
  


export default Drawing