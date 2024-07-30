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
        <div className='paddingX flexCenter marginY text-white'>
            <div className="boxWidth flex justify-between items-center">
                <img src={Logo} alt='logo' />
                <div className='hidden md:block space-x-3'>
                    <a href='/'>Home</a>
                    <a href='/'>About Us</a>
                    <a href='/'>Features</a>
                    <a href='/'>Solution</a>
                </div>
                <div onClick={() => setOpen(!open)} className='block md:hidden'>
                    {open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                <div className={open ? 'fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <div className='space-y-3 flex flex-col mt-24 ml-8'>
                        <a href='/'>Home</a>
                        <a href='/'>About Us</a>
                        <a href='/'>Features</a>
                        <a href='/'>Solution</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;