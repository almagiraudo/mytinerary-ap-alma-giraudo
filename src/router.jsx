import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NavLayout from "./layouts/NavLayout";
import HomeButton from "./components/HomeButton";
import FormSignUp from "./pages/FormSignUp";

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
            {path: "/nav/auth/signup", element:<FormSignUp/>}
        ]

    },
    {

        path: '/nav/cities',
        element: <Cities/>, 
        children:[
            {path:"/nav/cities", element: <HomeButton/>
        }
        ]
    },{
    path: '/nav/citydetail/:_id',
    element: <CityDetail/>
}
])


export default router

