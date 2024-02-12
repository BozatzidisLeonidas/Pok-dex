import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import './Components/Navigation/Navigation';
import App from './App';
import SignIn from './Components/SignInPage/SignIn';
import Register from './Components/RegisterPage/Register';
import NotFound from './Components/NotFoundPage/NotFound';
import 'tachyons';


const router = createBrowserRouter([
    {
        path:'/',
        element:<SignIn/>,
        errorElement:<NotFound/>
    },
    {
        path:'/Register',
        element:<Register/>
    },
    {
        path:'/App',
        element:<App/>
    }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App/>
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

