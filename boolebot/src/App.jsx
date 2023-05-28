import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";
import BotsInfo from "./Pages/BotsInfo";
import Arena from "./Components/Gameplay/Arena"
import CreateArena from './Pages/CreateArena'
import { useState, useEffect } from "react";

function App() {
//creating botsArray to be passed on as props to child components
const [arenaData, setArenaData] = useState({
  tileNum: 3,
  speed: 500,
  operator: "AND",
});

const [botsArr, setBotsArr] = useState([]);

const [botsData, setBotsData] = useState({
  name: "",
  colorClass: "",
  value: 0,
  wins: 0,
  loses: 0,
  isAlive: true,
});

// handler function to get arena info
const getArenaInfo = (newArenaInfo)=>{
  setArenaData(newArenaInfo);
}

//Handler function to add bots to the aray
// const addBotToArray = (bot)=>{
//   console.log(bot)
//    const isUniqueBot = botsArr.some(
//      (bot) =>
//        bot.name === botsData.name || bot.colorClass === botsData.colorClass
//    );
//    if (!isUniqueBot) {
//     console.log("UNIQUE BOT", bot)
//      setBotsArr((prev) => [...prev, botsData]);
//    }
// }

// Handler function to delete bots from the array
const deleteBotFromArray = (index)=>{
  setBotsArr((prevBotsArr)=>
  prevBotsArr.filter((_,i)=> i !== index)
  )
}


  const router = createBrowserRouter([
    //the following path is for the wrapper
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "/createArena",
          element: (
            <CreateArena arenaData={arenaData} setArenaData={setArenaData} />
          ),
        },
        {
          path: "/createBot",
          element: (
            <BotsInfo
              botsData={botsData}
              setBotsData={setBotsData}
              
              arenaData={arenaData}
              deleteBotFromArray={deleteBotFromArray}
              botsArr={botsArr}
              setBotsArr={setBotsArr}
            />
          ),
        },
        { path: "/about", element: <AboutUs /> },
        {
          path: "/arena",
          element: <Arena botsArr={botsArr} arenaData={arenaData} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
