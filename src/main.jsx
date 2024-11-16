import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'flowbite/dist/flowbite.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
// import { Portfolio } from "./Components/Portfolio/Portfolio.jsx";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
