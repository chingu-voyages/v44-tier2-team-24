import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";
import ArenaInfoPage from "./Pages/ArenaInfoPage";
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
  // colorClass: "#FFFFF",
  value: 0,
  wins: 0,
  loses: 0,

  direction: 1,
  botIcon: bot1
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

// This is an array of the current route/location
const routeLocation = ['/createArena', '/createBot'];

// Handler function to delete bots from the array
const deleteBotFromArray = (index)=>{
  setBotsArr((prevBotsArr)=>
  prevBotsArr.filter((_,i)=> i !== index)
  )
}

//Creating an object to hold board control info
const [boardControl, setBoardControl] = useState({});


//control handler changed the state of the object and is called on form submit event form ArenaInfo page
function boardDataSubmission(newObj){
  setBoardControl((prevObj)=> { return {...prevObj,newObj}})
  console.log(boardControl)
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
        { path: "/arenaSettings", element: <ArenaInfoPage boardDataSubmission={boardDataSubmission}/> },
        { path: "/about", element: <AboutUs /> },
        {
          path: "/arena",
          element: <Arena botsArr={botsArr} setBotsArr={setBotsArr} arenaData={arenaData} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
