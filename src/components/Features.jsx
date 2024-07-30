import { features } from '../constants/index';
import Button from './Button';
import FeatureCard from './FeatureCard';

function Features() {
  return (
    <section id='features' className='section paddingX py-6'>
      <div className='sectionInfo'>
        <h2>You do the business, <br className='sm:block hidden'/> we'll handle the money.</h2>
        <p className='max-w-[470px] mt-5'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles={"mt-10"}/>
      </div>
      <div className='sectionImg flex flex-col'>
        {features.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        )
        )}
      </div>
    </section>
  )
}

export default Features