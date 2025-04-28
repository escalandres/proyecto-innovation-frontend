import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AgregarPrendas from '../pages/AgregarPrendas';
import TakePhoto from '../pages/TakePhoto';
// import ProtectedRoute from './ProtectedRoute';


const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homepage/>,
        },
        {
            path: "/prendas",
            element: <AgregarPrendas/>,
        },
        {
            path: "/foto",
            element: <TakePhoto/>,
        }
        // {
        //     path: "/login",
        //     element: <AuthenticatedRoute/>,
        // },
        // {
        //     path: "/registro",
        //     element: <SignUp/>,
        //     errorElement: <P404/>
        // },
        // {
        //     path: '/app',
        //     element: (
        //         <ProtectedRoute>
        //             <App />
        //         </ProtectedRoute>
        //     ),
        // },
        // {
        //     path: "/recuperacion",
        //     element: <ForgotPassword/>
        // },
        // {
        //     path: "/cambiar-contrasena",
        //     element: <ChangePassword/>
        // },
        // {
        //     path: "/page-not-found",
        //     element: <P404/>,
        //     errorElement: <P404/>
        // },
        // {
        //     path: "/app/logout",
        //     element: <Logout/>,
        // },
        // {
        //     path: "/auth/github",
        //     element: <GithubAuthorize/>,
        // },
        // {
        //     path: "/auth/linkedin/callback",
        //     element: <LinkedInCallback />,
        // }
    ]
);

export default Router;