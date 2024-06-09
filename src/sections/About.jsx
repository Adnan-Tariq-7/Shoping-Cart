import React from 'react'
import { Button } from '../components'
import { image2 } from '../assets/images'

const About = () => {
  return (
    <section id="about" className="">
        <h1 className='text-center text-4xl  font-semibold text-primary pt-5 '>About Us</h1>
        <div className="wrapper flex gap-5 max-sm:flex-col">
            <div className="left flex-1 p-6 flex justify-center flex-col">
                <h1 className='text-5xl sm:text-6xl lg:text-8xl text-primary font-semibold max-sm:pt-5'>About Out Team</h1>
                <p className='max-lg:text-sm text-slate-gray py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tenetur eius, harum repellat omnis id unde ab blanditiis quis architecto? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tenetur eius, harum repellat omnis id unde ab blanditiis quis architecto</p>
                <div>

                <Button name={'Learn More'}/>
                </div>
            </div>
            <div className="right flex-1 flex items-center">
                <img src={image2} alt="about image" className='w-full object-contain'/>
            </div>
        </div>
    </section>
  )
}

export default About