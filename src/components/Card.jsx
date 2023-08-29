import { Link as Anchor } from "react-router-dom"

export default function Card({ src, alt, _id, text }) {
  return (

    <div className="relative shadow-black w-[400px]">
      <img className=" rounded-3xl " src={src} alt={alt} />
      <div className=" absolute top-0  ">
        <h1 className=" text-lg text-center font-bold text-white pl-4 pt-3 border-solid">{text}</h1>
      </div>

      <div className=" absolute bottom-0 mt-2 pl-4 pb-3">
        <Anchor to={'/nav/' + _id} >
          <button className="  text-md px-2 py-1 font-bold bg-indigo-700 hover:bg-indigo-500 rounded-lg text-white">View More</button></Anchor>
      </div>
    </div>
  )
}

