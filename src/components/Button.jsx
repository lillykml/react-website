function Button({ styles }) {
  return (
    <button className={`${styles} py-4 px-6 bg-blue-gradient rounded-md font-poppins text-primary outline-none text-[18px] transition-transform transform hover:scale-110`}>Get Started</button>
  )
}

export default Button