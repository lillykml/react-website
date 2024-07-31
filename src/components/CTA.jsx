import Button from './Button'

const CTA = () => {
  return (
    <section id='cta' className='paddingX py-6 mb-8'>
      <div className="bg-black-gradient rounded-lg flex flex-col sm:flex-row justify-between space-y-4 align-center px-10 sm:px-[97px] py-10 sm:py-[74px]">
        <div className="flex flex-col">
          <h2>Let’s try our service now!</h2>
          <p className='sm:w-[470px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='my-auto mx-auto'>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default CTA;