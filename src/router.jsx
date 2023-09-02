import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NavLayout from "./layouts/NavLayout";
import FormSignUp from "./pages/FormSignUp";
import FormSignIn from "./pages/FormSignIn";

const router = createBrowserRouter([
    {
        path: '/',

        element: <MainLayout />

    },
    {
        path: '/nav',
        element: <NavLayout />,
        children: [
            { path: "/nav/auth/login", element: <FormSignIn /> },
            {path: "/nav/auth/signup", element:<FormSignUp/>}
        ]

    },
    {
        path: '/nav/cities',
        element: <Cities/>
    },{
    path: '/nav/:_id',
    element: <CityDetail/>
}
])


export default router

