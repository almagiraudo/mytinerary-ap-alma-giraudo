
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import CardError from "../components/CardError";
import {useSelector, useDispatch} from 'react-redux';
import city_actions from "../store/actions/cities";
const {read_cities} = city_actions

export default function Cities(props) {
  //console.log(props)
  const cities = useSelector(store => store.cities.cities)
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  const dispatch = useDispatch()
  //console.log(cities)

  useEffect(
    () => {
      dispatch(read_cities({text:text.current?.value}))
    }, [reEffect]
  )

  function handleFilter() {
    console.log(text.current.value)
    setReEffect(!reEffect)
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-10">
        <input
          ref={text} onKeyUp={handleFilter}
          type="search" id="default-search"
          placeholder="search for your destiny"
          className="flex border-solid w-[300px] h-10 text-center object-center
          border-slate-500 bg-slate-300 rounded-lg  "

        />
      </div>
      <div className="flex justify-center flex-wrap gap-10 mt-10  ">
        {cities.length != 0 ?
          cities.map(city => (
            <Card key={city._id} text={city.city} src={city.photo} _id={city._id} />
          )) :
          <div><CardError /></div>
        }
      </div>

    </>
  )

}
