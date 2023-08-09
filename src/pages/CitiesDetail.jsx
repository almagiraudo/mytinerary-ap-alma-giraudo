import { useParams } from "react-router-dom"


export default function CitiesDetail() {
  const city_id = useParams()
  //este hook se engancha a la URL para evaluar ttodos los parametros dinamicos que tiene la URL
  //ESTE HOOK DEVUELE UN OBJETO DONDE CADA clave ES LA RUTA DINAMICA DEFINIFA EN EL ENRUTADOR
  //Y DONDE Cada valor es el de la URL
    return (
    <div>
      CityDetail of city [{city_id}]
    </div>
  )
}
