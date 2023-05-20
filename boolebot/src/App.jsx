import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";
import BotsInfo from "./Pages/BotsInfo";
import Arena from "./Pages/Arena";

const router = createBrowserRouter([
  //the following path is for the wrapper
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/createBot", element: <BotsInfo /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/arena", element: <Arena /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
