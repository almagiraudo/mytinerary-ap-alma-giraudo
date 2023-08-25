
import Carousel from "../components/Carousel"
import { useEffect, useState } from "react"
import apiUrl from "../../apiUrl";
import axios from "axios";
import { Link as Anchor } from "react-router-dom"

export default function Home() {


    const [show, setShow] = useState(true)
    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios(apiUrl + 'cities/carousel')
                //.then(res=>{
                //  console.log(res.data.data_carousel),
                // console.log('estoy en home') })
                .then(res => setData(res.data.data_carousel))
                .catch(err => console.log(err))
        }
    )


    return (

        <div className="flex flex-wrap gap-7 xl:flex-nowrap lg:flex-wrap lg:mt-[100px] pt-[30px] md:pt-[70px]  ">
            <div className="flex flex-col justify-center items-start lg:w-3/5 xl:w-2/5 ; ">

                {/*title */}
                <div className="text-3xl not-italic font-sans  leading-normal;">
                    <h1>Find the perfect destination</h1>
                </div>
                {/*Paragraph */}
                <div className="pt-[40px] py-[40px]  w-[742px]; ">
                    <p className="  w-[300px] sm:w-[500px]  xl:w-[400px] text-justify not-italic font-normal leading-normal text-base text-left; ">Our app will help you find the perfect path for your next trip.
                        With an easy-to-use interface and a host of itinerary options,
                        planning your next trip has never been easier.</p>
                </div>
                {/*Button */}
                <div className=" bg-indigo-700 rounded-lg hover:bg-indigo-500
                        border-indigo-700 container  
                        flex justify-center items-center  
                        w-[200px] h-[5px] px-[16px] py-[20px] 
                        box-content text-white ; ">
                    <Anchor to='/nav/cities'> <button>View More</button></Anchor>
                </div>
            </div>

            <div className="flex flex-wrap justify-center  items-center  md:my-5 md:mx-3  ">
                <div className="flex justify-center content-center ">
                    <Carousel data={data} />
                </div>
            </div>
        </div>

    )

}
