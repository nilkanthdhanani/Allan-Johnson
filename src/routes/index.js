import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../modules/home";
import Services from "../modules/services";
import Plans from "../modules/plans";
import Blog from "../modules/blog";
import Guides from "../modules/guides";
import Login from "../modules/login";
import SignUp from "../modules/signUp/signUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/plans',
                element: <Plans />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/guides',
                element: <Guides />
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
])

export default router;