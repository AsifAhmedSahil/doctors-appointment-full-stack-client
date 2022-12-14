import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Appointments from "../../Pages/Appointment/Appointment/Appointments";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppoinement from "../../Pages/Dashboard/MyAppointment/MyAppoinement";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<DisplayError/>,
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
    },
    {
            path:"/dashboard",
            element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
            children:[
                {
                    path:"/dashboard",
                    element:<MyAppoinement/>
                },
                {
                    path:"/dashboard/allusers",
                    element:<AdminRoute><AllUsers/></AdminRoute>
                },
                {
                    path:"/dashboard/adddoctor",
                    element:<AdminRoute><AddDoctor/></AdminRoute>
                },
                {
                    path:"/dashboard/managedoctors",
                    element:<AdminRoute><ManageDoctors/></AdminRoute>
                },
                {
                    path:"/dashboard/payment/:id",
                    element:<Payment/>,
                    loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`) 
                },
            ]
    }
])

export default Router;