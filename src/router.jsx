import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CitiesDetail from "./pages/CitiesDetail";

import NavLayout from "./layouts/NavLayout";

const router = createBrowserRouter([
    {
        path: '/',

        element: <MainLayout />,
        children:[
            {path: "/", element: <Home/>}
        ]

    },
    {
        path: '/nav',
        element: <NavLayout />,
        children: [
            { path: "/nav/login", element: <SignIn /> },
            { path: "/nav/signup", element: <SignUp /> },
<<<<<<< HEAD
            { path: "/nav/citiesdetail", element: <CitiesDetail/> }
=======
            { path: "/nav/citiesdetail", element: <CitiesDetail /> }
>>>>>>> 82998d1056f2e5ee52fe3e6d4fece360f302f219
        ]

    },
    {
<<<<<<< HEAD
        path: '/nav/cities',
=======
        path: '/cities',
>>>>>>> 82998d1056f2e5ee52fe3e6d4fece360f302f219
        element: <Cities/>

    }
])


export default router

