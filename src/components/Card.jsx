

export default function Card({src, alt, text}) {
  return (
    <div>
      
      <div className="flex w-[250px] flex-col  rounded-xl  shadow items-center m-1 p-2 mt-5 ">

        <img className="" src={src} alt={alt} />
        <p className="text-[20px] text-center">{text}</p>

      </div>
    </div>
  )
}
