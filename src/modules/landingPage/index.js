import Button from '../common/components/Button'
import HowItWorks from './components/HowItWorks'
import Layout from './components/layout'
import WhyChooseUs from './components/WhyChooseUs'

// images
import ImageOne from 'src/assests/img1.png'
import ImageTwo from 'src/assests/img2.png'

const LandingPage = () => {
    return (
        <Layout>
            <section className="layout-container md:mb-20 lg:grid lg:grid-cols-2 lg:gap-x-[88px] lg:items-center lg:mb-[84px]">
                <div className='text-center lg:text-left'>
                    <h1 className='text-primary-2 font-medium text-2xl mb-2 md:text-[52px] md:leading-[72px] lg:mb-4 lg:text-4xl xl:text-5xl lg:w-11/12'>The cheap and speedy way to send money across borders</h1>
                    <p className='text-[#4B4B4B] text-sm md:text-2xl lg:text-xl'>Send money online to Nigeria from the anywhere,Enjoy free local and cross-border transfers, easily track all payments,</p>
                    <Button href="/exchange" title="get started" primary className="mx-auto w-32 h-10 mt-[18px] md:w-[192px] md:h-12 lg:mx-0" />
                </div>
                <div className='w-full h-[200px] my-10 md:h-[280px] md:my-12 lg:h-[405px] lg:my-0'>
                    <img src={ImageOne} alt="" />
                </div>
            </section>

            <section className='layout-container flex flex-col lg:flex-none lg:grid lg:grid-cols-2 lg:gap-x-[88px]  lg:items-center md:mb-20 lg:mb-[92px]'>
                <div className='order-2  w-full h-[200px] my-10 md:h-[280px] md:my-12 lg:h-[405px] lg:my-0 lg:-order-1'>
                    <img src={ImageTwo} alt="" />
                </div>
                <div className='text-center lg:text-left'>
                    <h2 className='text-primary-2 font-medium text-2xl mb-2 md:text-[52px] md:leading-[72px] lg:mb-4 lg:text-4xl xl:text-5xl lg:w-11/12'>Enjoy free transfer and low cross-border rates</h2>
                    <p className='text-[#4B4B4B] text-sm md:text-2xl lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis vitae ligula gravida mauris, lectus. Penatibus enim mattis sit a. Maecenas interdum at id etiam est tempus. Nisi, pellentesque aenean justo cras tempus. Mauris in nec integer elementum sit. Massa faucibus sed ligula facilisi. </p>
                </div>
            </section>

            <HowItWorks />

            <WhyChooseUs />

            {/* Become an Exchanger section */}
            <section className='mb-20 md:layout-container lg:mb-[112px]'>
                <div className="bg-black text-white text-center py-10 md:rounded-3xl md:py-12">
                    <h3 className='font-medium capitalize text-xl mb-2 md:text-4xl md:mb-4 lg:text-5xl lg:leading-[66px]'>Earn more from trades</h3>
                    <p className='text-[#DDDDDD] text-sm max-w-xs mx-auto md:text-xl md:max-w-lg lg:max-w-2xl'>Get more from your trades by fulfilling orders from </p>
                    <Button href="/exchange" title="get started" className="w-32 h-10 mx-auto mt-5 md:mt-8 md:w-40 md:h-12" />
                </div>
            </section>
        </Layout>
    )
}

export default LandingPage