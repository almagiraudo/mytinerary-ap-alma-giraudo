
import Carousel from "../components/Carousel"
//import axios from "axios"
import { useState } from "react"



export default function Home() {

    const [show, setShow] = useState(true)
    const [data, setData] = useState([])

    let datos = [
        { "id": "am1", "city": "Cancun", "photo": "/img/america/cancun.jpg" },
        { "id": "am2", "city": "New York", "photo": "/img/america/newyork.jpg" },
        { "id": "am3", "city": "Rio de Janeiro", "photo": "/img/america/rioDeJaneiro.jpg" },

        { "id": "am4", "city": "Ushuaia", "photo": "/img/america/ushuaia.jpg" },
        { "id": "as1", "city": "Bangkok", "photo": "/img/asia/bangkok.jpg" },
        { "id": "as2", "city": "Pekin", "photo": "/img/asia/pekin.jpg" },
        { "id": "as3", "city": "Singapur", "photo": "/img/asia/singapur.jpg" },
        { "id": "as4", "city": "Tokyo", "photo": "/img/asia/tokio.jpg" },
        { "id": "eu1", "city": "Ibiza", "photo": "/img/europe/ibiza.jpg" },
        { "id": "eu2", "city": "London", "photo": "/img/europe/london.jpg" },
        { "id": "eu3", "city": "Paris", "photo": "/img/europe/paris.jpg" },
        { "id": "eu4", "city": "Roma", "photo": "/img/europe/roma.jpg" },
        { "id": "oc1", "city": "Majuro", "photo": "/img/oceania/majuro.jpg" },
        { "id": "oc2", "city": "Sidney", "photo": "/img/oceania/sidney.jpg" },
        { "id": "oc3", "city": "Suva", "photo": "/img/oceania/suva.jpg" },
        { "id": "oc4", "city": "Wellington", "photo": "/img/oceania/wellington.jpg" }
    ]

    return (

        <div className="flex flex-wrap xl:flex-nowrap lg:flex-wrap pt-[30px] md:pt-[70px]  ">
            <div className="flex flex-col justify-center items-start  lg:w-3/5 ; ">

                {/*title */}
                <div className="text-3xl not-italic font-sans  leading-normal;">
                    <h1>Find the perfect destination</h1>
                </div>
                {/*Paragraph */}
                <div className="pt-[40px] py-[40px]  w-[742px]; ">
                    <p className=" w-[600px]  not-italic font-normal leading-normal text-base text-left; ">Our app will help you find the perfect path for your next trip.
                        With an easy-to-use interface and a host of itinerary options,
                        planning your next trip has never been easier.</p>
                </div>
                {/*Button */}
                <div className=" bg-indigo-700 rounded-lg
                        border-indigo-700 container  
                        flex justify-center items-center  
                        w-[200px] h-[5px] px-[16px] py-[20px] 
                        box-content text-white ; ">
                    <button>View More</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center  items-center pl-[100px] my-5 mx-3  ">
                <div className="flex justify-center content-center ">

                    <Carousel data={datos} />
                </div>
            </div>

        </div>

    )
}
