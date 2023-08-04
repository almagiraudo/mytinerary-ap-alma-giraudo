import HomeButton from "../components/HomeButton"
import HomeParagraph from "../components/HomeParagraph"
import HomeTitle from "../components/HomeTitle"
import Carousel from "../components/Carousel"
import axios from "axios"
import { useState } from "react"
export default function Home() {

    const [show,, setShow] = useState(true)
    const [data, setData] = useState([])

    useEffect(
        ()=>{
          axios('/public/data.js')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
        },  
        []     
        )
    return (
        <div className="pt-[70px] flex flex-row ">
            <div className="flex flex-col justify-center w-[400px] items-start gap-[40px]; ">
                <HomeTitle />
                <HomeParagraph />
                <HomeButton />
                 </div>
                <div className="flex justify-center items-center pl-[120px] w-[1600px] grid-cols-2 flex-wrap my-5 mx-3 ">
                    <div className=" w-10/12 flex flex-wrap justify-center  content-center ">
                    {show ? <Carousel data={data} /> : <h1 className="text-[24px] text-white" >click arriba para ver carousel</h1>}
                    </div>
                </div>
           
        </div>

    )
}
