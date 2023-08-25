
import { Link as Anchor } from "react-router-dom";
import HambMenu from "./HambMenu";
export default function NavBar() {
    const name = 'My Tinerary';
    const home = 'Home';
    const cities = 'Cities';
    const login ='Login';
    return (
        <nav className="flex justify-between pt-[32px] items-center ">
            <header className="flex justify-between items-center font-sans text-3xl not-italic font-bold leading-normal gap-3">
                <img className="pl-3" width="70" height="70" src="/planning.png" alt="" />
                <p>{`${name}`}</p>
            </header>
            <div><HambMenu /></div>
            <div className='pl-3  hidden md:flex' >
                <div className="flex text-2xl not-italic  font-bold;">
                    <Anchor to='/'><button className="pr-4 pt-3"> {`${home}`}</button></Anchor>
                    <Anchor to='/nav/cities'><button className="pr-4 pt-3">{`${cities}`}</button></Anchor>
                    <Anchor to='/nav/auth/login'><button className=" flex flex-row text-2xl py-3 px-8 leading-normal items-center hover:bg-indigo-500 bg-indigo-700 text-white rounded-[10px] gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" >
                        <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white" />
                        <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white" />
                    </svg>{`${login}`}</button></Anchor>

                </div>
            </div>
        </nav>
    )
}
