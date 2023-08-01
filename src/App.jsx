import montaña from "./public/montaña.jpg";

function App(){
  const nombre = 'My Tinerary'
  const home ='Home'
  const cities = 'Cities'
  const login = 'Login'
  return(
    <>
    <div className="pt-8 pr-52 pb-80 pl-52">
        <div className="flex justify-between flex-auto;">
        <header className="flex flex-row flex-auto;">
        <p className="text-3xl not-italic font-bold;">{`${nombre}`}</p>
        </header> 
        <nav className="justify-between content-between;">
          <div className="text-2xl not-italic font-bold pr-4;">
        <button className="p-1">{`${home}`}</button>
        <button className="p-1">{`${cities}`}</button>
        <button className="p-1 border-solid border-2 border-indigo-700 rounded bg-indigo-700;">{`${login}`}</button>
        </div>
        </nav>
        </div>
        <div className="pt-20 grid grid-cols-2 gap-20  flex w-110 space-between items-center pt-80;">
          <div className="text-5xl not-italic font-bold ;">
            <h1>Find the perfect destination</h1>
          <div className="text-2xl not-italic font-semibold gap-40 ; ">
            <p>Our app will help you find the perfect path for your next trip. 
              With an easy-to-use interface and a host of itinerary options, 
              planning your next trip has never been easier.</p>
              <div className=" bg-indigo-700 rounded
                 border-indigo-700 container  flex justify-center items-center h-7 w-32 p-4 pt-5 box-content ; ">
            <button>View More</button>
            </div>
            </div>
              </div>
              <div className="space-between object-center  w-3/4; "><img src={montaña} alt="" /></div>
        </div>
        </div>
    </>
  )
}
/*object-scale-down row-span-3 object-fill*/
export default App
