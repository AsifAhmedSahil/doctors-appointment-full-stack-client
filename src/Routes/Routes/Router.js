import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Appointments from "../../Pages/Appointment/Appointment/Appointments";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../SignUp/SignUp";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:"/appointment",
                element:<Appointments/>
            }
        ]
    }
])

export default Router;