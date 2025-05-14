import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import AboutUser from "../Pages/AboutUser";
import Donate from "../Pages/Donate";
import OurWork from "../Pages/OurWork";
import Campaigns from "../Pages/Campaigns";
import CampaignsDetails from "../Pages/CampaignsDetails";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";

const AllRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/our-work',
                    element: <OurWork />
                },
                {
                    path: '/gallery',
                    element: <Gallery />
                },
                {
                    path: '/donate',
                    element: <Donate />
                },
                {
                    path: '/campaigns',
                    element: <Campaigns />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: `/campaigns/:campaignId`,
                    element: <CampaignsDetails />
                },
                {
                    path: '/profile/:id',
                    element: <AboutUser />
                },
                
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default AllRoutes;