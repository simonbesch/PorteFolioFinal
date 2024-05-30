import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./app";
import Home from "./pages/Home";
import Parkour from "./pages/Parkour";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import WhoIam from "./pages/WhoIam";
import About from "./pages/About";
import "./styles/Global.scss";
import { WeatherProvider } from "./contexts/WeatherContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/parkour",
        element: <Parkour />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/skills",
        element: <Skills />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects",
        element: <Projets />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/whoiam",
        element: <WhoIam />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherProvider>
    <RouterProvider router={router} />
  </WeatherProvider>
);
