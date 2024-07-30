const FeatureCard = ({ feature }) => {

  const IconComponent = feature.icon;

  return(
    <div className='flex items-center p-6 rounded-[20px] feature-card'>
      <div className="rounded-full w-[64px] h-[64px] flexCenter bg-dimBlue">
        <IconComponent className="text-secondary" size={20} />
      </div>
      <div className='flex flex-1 flex-col ml-3'>
        <h4 className='text-white semibold text-[18px] font-poppins leading-[23px]'>{feature.title}</h4>
        <p className='font-light text-[16px]'>{feature.content}</p>
      </div>
    </div>
  )
}

export default FeatureCard