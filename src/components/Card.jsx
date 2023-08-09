

export default function Card({src, alt, text}) {
  return (
    <div className="">
      
      <div className="flex w-[270px]  rounded-xl shadow items-start  ">
        <button className="rounded-xl  bg-indigo-700 text-white text-md text-center flex-col items-center cursor-pointer ">
        <img className="bg-origin-border rounded-xl" src={src} alt={alt} />
        <p className=" flex w-[140px] h-[20px] pb-7 text-center justify-between text-xl text-white ">{text}</p>
        View More</button>
      </div>
      </div>
  )
}
