function FeedbackCard({ feedback }) {
  return (
    <div className="text-white flex flex-col flex-1 rounded-lg p-8 feedback-card justify-between h-[395px] w-[370px]">
      <h1 className="text-gradient italic font-bold text-[80px] mb-0 pb-0">"</h1>
      <p className="text-white font-light text-[18px] flex-grow">{feedback.content}</p>
      <div className="flex flex-row space-x-4">
        <img src={feedback.img} />
        <div>
          <p className="text-white">{feedback.name}</p>
          <p className="font-light text-[16px]">{feedback.title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard