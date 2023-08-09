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
    },
    {
        path: '/nav',
        element: <NavLayout />,
        children: [
            { path: "/nav/signin", element: <SignIn /> },
            { path: "/nav/signup", element: <SignUp /> },
            { path: "/nav/cities", element: <Cities /> },
            { path: "/nav/citiesdetail", element: <CitiesDetail /> }
        ]

    }
])


export default router

