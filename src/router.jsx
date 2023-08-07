import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CitiesDetail from "./pages/CitiesDetail";

const router = createBrowserRouter([
    {path: '/',
     element: <MainLayout/>,
    children:[
        {path: '/', element:<Home/>},
        {path: "/index", element:<Home/>},
        {path: "/home", element:<Home/>},
        {path: "/signin", element:<SignIn/>},
        {path: "/signup", element:<SignUp/>},
        {path: "/cities", element:<Cities/>},
        {path: "/citiesdetail", element:<CitiesDetail/>}

    ]    
    }
])