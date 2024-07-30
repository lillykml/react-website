import Robot from '../assets/RobotHand.svg';

const Hero = () => {
  return (
    <section id="home" className="sm:pl-24 pl-6 py-6 flex flex-col md:flex-row box-width">
      <div className='flex-1 flex flex-col xl:px-0 sm:px-16 px:6'>
        <h1 className='leading-tight capitalize text-white font-semibold text-[72px]'>The next <span className='text-gradient'>generation</span> payment method.</h1>
        <p className='max-w-[470px mt-5]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.</p>
      </div>
      <div className='flex flex-1 md:y-0 y-10 relative'>
        <img src={Robot} className='w-[100%] h-[100%] relative z-5'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>
    </section>
  )
}

export default Hero