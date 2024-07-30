import Button from './Button';
import Product from '../assets/analytics.svg'

function Analytics() {
    return (
        <section id='analytics' className='section paddingX py-6'>
          <div className='sectionInfo'>
            <h2>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
            <p className='max-w-[470px] mt-5'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <Button styles={"mt-10"}/>
          </div>
          <div className='sectionImg'>
            <img src={Product} />
          </div>
        </section>
      )
}

export default Analytics