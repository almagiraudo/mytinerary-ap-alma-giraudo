import React from 'react'

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
                    <button className="pl-2 pr-2 content-center justify-center border-solid border-2 border-indigo-700 bg-indigo-700 text-white rounded ;">{`${login}`}</button>
                </div>
            </div>
        </nav>
    )
}
