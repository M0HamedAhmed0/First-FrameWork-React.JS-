import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "flowbite/dist/flowbite";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "contact", element: <Contact /> },
            { path: "footer", element: <Footer /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
