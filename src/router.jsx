import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CitiesDetail from "./pages/CitiesDetail";

import NavLayout from "./layouts/NavLayout";
import HomeButton from "./components/HomeButton";

const router = createBrowserRouter([
    {
        path: '/',

        element: <MainLayout />

    },
    {
        path: '/nav',
        element: <NavLayout />,
        children: [
            { path: "/nav/login", element: <SignIn /> },
            { path: "/nav/signup", element: <SignUp /> },
            { path: "/nav/citiesdetail", element: <CitiesDetail/> }

        ]

    },
    {

        path: '/nav/cities',
        element: <Cities/>, 
        children:[
            {path:"/nav/cities", element: <HomeButton/>
        }
        ]
    }
])


export default router

