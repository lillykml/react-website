import Robot from '../assets/RobotHand.png';

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col bg-primary box-width">
      <div className='flex-1 flex flex-col xl:px-0 sm:px-16 px:6'>
        <h1 className='leading-tight capitalize text-white font-semibold text-[72px]'>The next <span className='text-gradient'>generation</span> payment method.</h1>
        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.</p>

      </div>
      <div>
        <img src={Robot} className='w-[669px] h-[674px] object-contain'/>
      </div>
    </section>
  )
}

export default Hero