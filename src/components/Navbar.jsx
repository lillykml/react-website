import { useState, useEffect } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/Logo.svg';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleResize = () => {
        if (window.innerWidth >= 768) {
        setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className='paddingX py-6 text-white flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[124px] h-[32px]'/>
            <div className='hidden md:flex space-x-10'>
                <a href='/'>Home</a>
                <a href='/'>About Us</a>
                <a href='/'>Features</a>
                <a href='/'>Solution</a>
            </div>
            <div onClick={() => setOpen((prev) => !prev)} className='block md:hidden'>
                    {open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={open ? 'fixed left-0 top-16 w-[60%] bg-primary h-full ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='space-y-3 flex flex-col mt-8 ml-8'>
                    <a href='/'>Home</a>
                    <a href='/'>About Us</a>
                    <a href='/'>Features</a>
                    <a href='/'>Solution</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;