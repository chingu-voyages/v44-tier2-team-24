import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([
//the following path is for the wrapper
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <Homepage />},
    { path: '/about', element: <AboutUs />}

  ]},
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
