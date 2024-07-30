import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Appstore from './components/Appstore';
import Analytics from './components/Analytics';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';


function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Appstore />
      <Analytics />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
