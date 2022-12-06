import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute>
                    <AddDoctor></AddDoctor>
                </AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute>
                    <ManageDoctors></ManageDoctors>
                </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element:
                    <Payment></Payment>
                ,
                loader: ({ params }) => fetch(`https://doctor-service-server-five.vercel.app/bookings/${params.id}`)
            }
        ]
    }
]);

export default router;