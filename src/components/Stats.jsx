import { stats } from '../constants/index';

function Stats() {
  return (
    <section id='aboutus' className="flex justify-center items-center flex-wrap paddingX boxWidth mb-8">
      {stats.map(stat => (
        <div key={stat.id} className='flex justify-start items-center flex-row m-3'>
          <h4 className='font-semibold text-white text-[30px] sm:text-[40px]'>{stat.value}</h4>
          <p className="font-normal sm:text-[20px] text-[15px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats