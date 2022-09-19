import { howItWorks } from "src/utils/data"

// images
import ImageThree from 'src/assests/img3.png'


const HowItWorks = () => {
    return (
        <section className="layout-container lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-[90px] xl:gap-x-[200px] lg:mb-[128px]">
            <div>
                <h1 className="font-medium text-xl mb-3 text-primary-2 md:text-4xl md:leading-[50px] md:mb-5">How it works</h1>
                <div className="">
                    {howItWorks.map((item, index) => (
                        <div key={index} className={`pl-2 md:pl-6 ${index === 0 ? "border-l-[3px] border-[#1C144C]" : "border-l-[2px]"}`}>
                            <h3 className="font-medium text-primary-2 text-sm mb-2 md:text-xl">{item.heading}</h3>
                            <p className="font-normal text-[#626161] text-xs pb-4 md:text-base">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full h-[200px] my-10 md:h-[280px] md:my-12 lg:h-[405px] lg:my-0'>
                <img src={ImageThree} alt="" />
            </div>
        </section>
    )
}

export default HowItWorks