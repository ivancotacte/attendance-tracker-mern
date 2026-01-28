import { RouterProvider, createBrowserRouter } from "react-router"
import NotFound from "@/pages/errors/not-found/page"
import Dashboard_Admin from "@/pages/admin/sidebar/dashboard/page"

const Routes = () => {
    const routesForPublic = [
        { path: "*", element: <NotFound /> },
        { path: "/admin/dashboard", element: <Dashboard_Admin /> }
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;