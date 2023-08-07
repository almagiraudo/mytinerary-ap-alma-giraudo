import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
    const name = 'My Tinerary';
    const home = 'Home';
    const cities = 'Cities';
    const login ='Login';
    return (
        <nav className="flex justify-between pt-[32px] items-center">
            <header className="text-3xl not-italic font-bold;">
                <p >{`${name}`}</p>
            </header>
            <div className='pl-3' >
                <div className="text-2xl not-italic font-bold;">
                    <button className="pr-4">{`${home}`}</button>
                    <button className="pr-4">{`${cities}`}</button>
                    <button className="px-2 w-[150px]  content-center justify-center border-solid border-2 border-indigo-700 bg-indigo-700 text-white rounded ;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex object-left  w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                     {`${login}`}</button>
                </div>
            </div>
        </nav>
    )
}
