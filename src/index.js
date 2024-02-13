import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import store from './State/Store'
import { Provider } from 'react-redux'
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
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

