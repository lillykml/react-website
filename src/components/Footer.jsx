import Logo from '../assets/Logo.svg'
import { footerLinks } from '../constants';
import { FaInstagram, FaFacebook, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <section id="footer" className="paddingX py-6 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col">
          <img src={Logo} alt='logo' className='w-[200px] h-[50px]'/>
          <p className='p-8'>A new way to make the payments <br/>easy, reliable and secure.</p>
        </div>
        {footerLinks.map((linkgroup, index) => (
          <div key={index} className='text-white font-poppins'>
            <h4 className='py-4'>{linkgroup.title}</h4>
            <ul>
              {linkgroup.links.map((link, linkindex) => (
                <li key={linkindex}><a href={link.link} className='text-base'>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className='my-8 border-[#3F3E45]'/>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div>
          <p>Copyright <FaRegCopyright className='inline' /> 2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className='flex flex-row text-white space-x-4'>
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
          <FaXTwitter />

        </div>

      </div>

    </section>
  )
}

export default Footer;