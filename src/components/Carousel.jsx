import Arrow from "./Arrow";
import Card from "./Card";
import { useState, useEffect } from "react";



export default function Carousel({data}) {
 let [counter, setCounter]= useState(0);
 let[counterTo, setCounterTo]= useState(4);

  function next_slide(){
    if(counterTo >= data.length){
      setCounter(0)
      setCounterTo(4)
    }else{
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
      console.log(counter)
      console.log(counterTo)
      console.log(data.length)
  }

  function prev_slide(){
    if(counter <=0 ){
      setCounter( data.length-4)
      setCounterTo(data.length)
    }else{
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter)
      console.log(counterTo)
  }
  return (

    <div className="flex items-center ">
<Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide}/>
      <div className="flex rounded-xl gap-7 flex-wrap justify-center  2xl:w-[900px]   ">

      {data.slice(counter, counterTo).map((each, index) => (
          <Card
            key={index}
            src={each.photo}
            alt={each.id}
            text={each.city}
            _id={each._id}
          />
        ))}
      </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide}/>
    </div>
    

  )
}
