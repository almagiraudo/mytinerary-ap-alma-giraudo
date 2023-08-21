import { Link } from "react-router-dom"
import apiUrl from "../../apiUrl"


export default function CitiesDetail() {
  const city_id = useParams()
  //este hook se engancha a la URL para evaluar ttodos los parametros dinamicos que tiene la URL
  //ESTE HOOK DEVUELE UN OBJETO DONDE CADA clave ES LA RUTA DINAMICA DEFINIFA EN EL ENRUTADOR
  //Y DONDE Cada valor es el de la URL
    return (
      <>
    {/* <div className="text-black">
      <h1>City Detail of city [{city_id}]</h1>
      
    </div>
    <div className="text-black pt-[100px] ">
       <p>Page Cities Detail under construction</p>
    </div> */}
    {cities.map((city) => (
  <div key={city.id}>
    <h2>{city.name}</h2>
    <img src={city.image} alt={city.name} />
    <p>{city.description}</p>
    </div>
))}
    </>
  )
}
