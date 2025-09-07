import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";


const AppLayout = () => {
    return(
        <div className="bg-amber-100 h-screen items-center flex justify-center">
  
        <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Login/>,
            },
            {
                path:"/signup",
                element:<Signup/>,
            },
            {
                path:"/forgotpassword",
                element:<ForgotPassword/>,
            },
            
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);