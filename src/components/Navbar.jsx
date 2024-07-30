import Logo from '../assets/Logo.svg';

const Navbar = () => {
    return(
        <div className='paddingX flexCenter marginY'>
            <div className="text-white boxWidth flex justify-between">
                <img src={Logo} alt='logo' />
                <div className='space-x-3'>
                    <a href='/'>Home</a>
                    <a href='/'>About Us</a>
                    <a href='/'>Features</a>
                    <a href='/'>Solution</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;