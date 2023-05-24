import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Homepage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import RootLayout from "./Pages/Root";
import BotsInfo from "./Pages/BotsInfo";
import Arena from "./Pages/Arena";
import { useState } from "react";




function App() {
  //Form component (state and handler functions)
  const [botName, setBotName] = useState('');
  const handleNameChange = (e)=>{
    setBotName(e.target.value)
  }
  const [booleanValue, setBooleanValue] = useState('1');
  const handleBoolValue = (e)=>{
    setBooleanValue(e.target.value);
  }
  const [booleanOperator, setBooleanOperator] = useState('and');
  const [botSpeed, setBotSpeed] = useState(0);
  const handleSpeedChange = (e)=>{
    setBotSpeed(e.target.value)
  }
  const [botDirection, setBotDirection] = useState('north');
  const handleDirectionChange = (e)=>{
    setBotDirection(e.target.value)
  }
  const [createdBots, setCreatedBots] = useState([]);
  const [botsArray, setBotsArray]= useState([]);
  //
  //form event- submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new bot object
    const newBot = {
      name: botName,
      value: booleanValue,
      operator: booleanOperator,
      speed: botSpeed,
      direction: botDirection,
    };

    // Add the new bot to the createdBots array
    setCreatedBots((prevCreatedBots) => [...prevCreatedBots, newBot]);
    setBotsArray((prevBotsArray)=> [...prevBotsArray,createdBots]);

    // Clear the form fields
    setBotName('');
    setBooleanValue('1');
    setBooleanOperator('and');
    setBotSpeed(0);
    setBotDirection('north');

  };
  const handleDelete = (index) => {
    setCreatedBots((prevCreatedBots) =>
      prevCreatedBots.filter((_, i) => i !== index)
    );
  };

  
  const router = createBrowserRouter([
    //the following path is for the wrapper
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/createBot", element: <BotsInfo 
        botsArray={botsArray} 
        handleSubmit={handleSubmit} 
        botName={botName}
        handleNameChange= {handleNameChange} 
        booleanValue={booleanValue} 
        handleBoolValue={handleBoolValue}
        booleanOperator={booleanOperator} 
        botSpeed={botSpeed}
        handleSpeedChange={handleSpeedChange}
        botDirection={botDirection}
        handleDirectionChange={handleDirectionChange}
        createdBots={createdBots}
        handleDelete={handleDelete}
        /> },
        
        { path: "/about", element: <AboutUs /> },
        { path: "/arena", element: <Arena botsArray={botsArray} /> },
      ],
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
