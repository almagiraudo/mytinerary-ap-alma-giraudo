import Arrow from "./Arrow";
import Card from "./Card"
import { useState } from "react";

export default function Carrussel({ data }) {
 let [counter, setCounter]= useState(0);
 let[counterTo, setCounterTo]= useState(4);

 // const d_left = "M15.75 19.5L8.25 12l7.5-7.5";
 // const d_right = "M8.25 4.5l7.5 7.5-7.5 7.5";
  function next_slide(){
    if(data.length <= contentTo){
      setCounter(0)
      setCounterTo(4)
    }else{
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
      console.log(counter)
      console.log(counterTo)
  }

  function prev_slide(){
    if(counter <=0 ){
      setCounter(data.length-4)
      setCounterTo(data.length)
    }else{
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter)
      console.log(counterTo)
  }
  return (
    <div>
<Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide}/>
      <div className="flex w-[250px] flex-col  rounded-xl  shadow items-center m-1 p-2 mt-5 ">
      {data.slice(counter, counterTo).map((each, index) => (
          <CardPolaroid
            key={index}
            src={each.photo}
            alt={each.id}
            text={each.city}
          />
        ))}
      </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"onClick={next_slide}/>
    </div>

  )
}
