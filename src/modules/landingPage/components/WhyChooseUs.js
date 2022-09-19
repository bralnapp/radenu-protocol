import React from 'react'
import { whyChooseUs } from 'src/utils/data'

const WhyChooseUs = () => {
    return (
        <section className='layout-container mb-20 lg:mb-[152px]'>
            <div className='text-center mb-10'>
                <h1 className="capitalize font-medium mb-2 text-primary-2 text-xl md:text-4xl md:leading-[50px]">Why people are choosing us</h1>
                {/* <p className='text-[#626161] font-normal text-sm md:text-xl md:max-w-xl md:mx-auto'>Fund your Klasha Wallet using your local African payment methods and currencies, get access to virtual dollar cards, shop for your favourite.</p> */}
            </div>
            <div className='space-y-5 md:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 gap-x-6'>
                {
                    whyChooseUs.map((item,index)=> (
                        <div key={index} className="text-center lg:text-left bg-white py-10 lg:py-6 pl-4 pr-[19px] rounded-lg">
                            <div className="h-10 w-10 mx-auto mb-4 md:w-20 md:h-20 lg:mx-0">
                                <img src={item.icon} alt="" />
                            </div>
                            <h4 className='font-medium capitalize text-primary-2 text-sm mb-2 md:text-3xl  lg:text-lg'>{item.heading}</h4>
                            <p className='text-xs text-[#626161] max-w-xs mx-auto md:text-xl md:max-w-xl lg:text-base lg:leading-[22px]'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChooseUs