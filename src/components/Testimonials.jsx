import { feedback, clients } from '../constants/index';
import FeedbackCard from './FeedbackCard';


function Testimonials() {
  return (
    <section id="testimonials" className='section paddingX py-6 flex flex-col'>
      <div className="flex flex-col sm:flex-row items-center">
      <h2>What people are saying about us</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {feedback.map(comment => (
          <FeedbackCard key={comment.id} feedback={comment} />
        ))}
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        {clients.map(client => <img className='object-contain w-[190px] p-6' key={client.id} src={client.logo} />)}

      </div>
    </section>
  )
}

export default Testimonials