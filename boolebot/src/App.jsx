import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";
import ArenaInfoPage from "./Pages/ArenaInfoPage";
import BotsInfo from "./Pages/BotsInfo";
import Arena from "./Components/Gameplay/Arena"
import CreateArena from './Pages/CreateArena';
import { useState, useEffect } from "react";
import bot1 from './assets/bot1.svg'

import ErrorPage from "./Pages/ErrorPage";

function App() {

//creating botsArray to be passed on as props to child components
const [arenaData, setArenaData] = useState({
  tileNum: 3,
  speed: 500,
  operator: "AND",
});
const [savedState, setSavedState] = useState([])

const [botsArr, setBotsArr] = useState([]);

const [botsData, setBotsData] = useState({
  name: "",
  value: 0,
  wins: 0,
  loses: 0,
  direction: 1,
  botIcon: bot1
});

const saveInitialGameState = (currentGameState) =>{
    setSavedState(currentGameState)
}

// handler function to get arena info
const getArenaInfo = (newArenaInfo)=>{
  setArenaData(newArenaInfo);
}

const updateBotsArr = (newBotsArr)=>{
    setBotsArr(newBotsArr)
}

const updateBotsData = (newState)=>{
  setBotsData(newState);
}

const updateArenaData = newState => {
  setArenaData(newState)
}

const globalReset = () => {
  setBotsArr([])
  setArenaData({
    tileNum: 3,
    speed: 500,
    operator: "AND",
  })
  setSavedState([])
  setBotsData({
    name: "",
    value: 0,
    wins: 0,
    loses: 0,
    direction: 1,
    botIcon: bot1,
  });
}


useEffect(()=>{
    setBotsArr([])
    setSavedState([])
},[arenaData.tileNum])


//Calculating innerWidth
// const [width, setWidth]= useState('');

// useEffect(()=>{
//   setWidth(()=>window.innerWidth)
// },[width])

// This is an array of the current route/location
const routeLocation = ['/createArena', '/createBot'];

// Handler function to delete bots from the array
const deleteBotFromArray = (name)=>{
  setBotsArr((prevBotsArr)=>
  prevBotsArr.filter((bot,i)=> bot.name !== name)
  )
}
  const router = createBrowserRouter([
    //the following path is for the wrapper
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RootLayout />,
      children: [
        { path: "/", element: <Homepage globalReset={globalReset} /> },
        {
          path: "/createArena",
          element: (
            <CreateArena
              arenaData={arenaData}
              updateArenaData={updateArenaData}
            />
          ),
        },
        {
          path: "/createBot",
          element: (
            <BotsInfo
              botsData={botsData}
              updateBotsData={updateBotsData}
              arenaData={arenaData}
              deleteBotFromArray={deleteBotFromArray}
              botsArr={botsArr}
              updateBotsArr={updateBotsArr}
            />
          ),
        },
        { path: "/about", element: <AboutUs /> },
        {
          path: "/arena",
          element: (
            <Arena
              savedState={savedState}
              botsArr={botsArr}
              updateBotsArr={updateBotsArr}
              saveInitialGameState={saveInitialGameState}
              arenaData={arenaData}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
