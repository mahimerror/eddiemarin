import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Error from "../pages/error/Error";
import Home from "../pages/public/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
        ]
        
    }
])