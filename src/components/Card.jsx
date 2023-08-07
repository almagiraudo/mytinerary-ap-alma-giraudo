

export default function Card({src, alt, text}) {
  return (
    <div>
      
      <div className="flex w-[250px] flex-col  rounded-xl  shadow items-center m-1 p-2 mt-5 ">
        <p className="text-[20px] text-center">{text}</p>
        <img className="" src={src} alt={alt} />
        <button className="rounded-xl text-center w-[40px] bg-indigo-700 text-white text-smS ">View More</button>

      </div>
    </div>
  )
}
