import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Home from "../../Home/Home";
import Category from "../../Category/Category/Category";
import Fag from "../../Faq/Fag";
import Checkout from "../../Checkout/Checkout";
import About from "../../About/About";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

import TermConditions from "../../others/TermConditions/TermConditions";
import Profile from "../../others/Profile/Profile";
import Course from "../../Course/Course";
import PrivateRoutee from "../PrivateRoutee/PrivateRoutee";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ({ params }) => fetch(`http://localhost:5000/educations`)
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