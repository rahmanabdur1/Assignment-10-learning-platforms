import { createBrowserRouter } from "react-router-dom";

import PrivateRoutee from "../PrivateRoutee/PrivateRoutee";
import Main from "../../layout/Main";
import Fag from "../../Pages/Faq/Fag";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TermConditions from "../../Pages/others/TermConditions/TermConditions";
import Course from "../../Pages/Course/Course";
import Profile from "../../Pages/others/Profile/Profile";
import Checkout from "../../Pages/Checkout/Checkout";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: fetch('http://localhost:5000/educations')
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <Fag />,

            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/education/:id',
                element: <PrivateRoutee><Checkout /></PrivateRoutee>,
                loader: ({ params }) => fetch(`http://localhost:5000/education/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/terms',
                element: <TermConditions />
            },
            {
                path: '/profile',
                element: <PrivateRoutee><Profile></Profile></PrivateRoutee>
            },
            {
                path: '/course',
                element: <Course />
            }

        ]
    }
])