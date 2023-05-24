import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";
import BotsInfo from "./Pages/BotsInfo";
import Arena from "./Pages/Arena";
import { useState } from "react";





function App() {
//creating botsArray to be passed on as props to child components
const [botsArray, setBotsArray]= useState([]);

//Handler function to add bots to the aray
const addBotToArray = (bot)=>{
  setBotsArray((prevBotsArray)=> [...prevBotsArray, bot]);
}
// Handler function to delete bots from the array
const deleteBotFromArray = (index)=>{
  setBotsArray((prevBotsArray)=>
  prevBotsArray.filter((_,i)=> i !== index)
  )
}
  const router = createBrowserRouter([
    //the following path is for the wrapper
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/createBot", element: <BotsInfo addBotToArray={addBotToArray} deleteBotFromArray={deleteBotFromArray} botsArray={botsArray}/> },
        { path: "/about", element: <AboutUs /> },
        { path: "/arena", element: <Arena botsArray={botsArray} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
