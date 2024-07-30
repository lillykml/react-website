import Apple from '../assets/apple.svg'
import Google from '../assets/google.svg'
import Billing from '../assets/billing.svg'

function Appstore() {
  return (
    <section id='billing' className='section paddingX py-6'>
      <div className='sectionImg'>
        <img src={Billing} />
      </div>
      <div className='sectionInfo'>
        <h2>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className='max-w-[470px] mt-5'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <div className='mt-5 space-x-2'>
          <button className=' transition-transform transform hover:scale-110'><img src={Apple} /></button>
          <button className=' transition-transform transform hover:scale-110'><img src={Google} /></button>
        </div>
      </div>
    </section>
  )
}

export default Appstore