import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import singleBot from "../assets/bot.png";
import Swal from "sweetalert2"; 
import { Link } from "react-router-dom";
import generateRandomNumber from '../utils/randomNum';
import BotClass from '../Components/Gameplay/BotClass';
import IconPalette from './IconPalette'
import BotRoaster from '../Components/Gameplay/BotRoaster';
import useAutoFocus from '../Components/hooks/useAutoFocus';
import makeCopyBotsArr from '../utils/makeCopyBotsArr';
import getOccupiedPos from '../utils/getOccupiedPos';
import generateUniquePos from '../utils/generateUniquePos';
import { Navigate, useNavigate } from "react-router-dom";

import bot1 from '../assets/bot1.svg'
import bot2 from '../assets/bot2.svg'
import bot3 from '../assets/bot3.svg'
import bot4 from '../assets/bot4.svg' 
import bot5 from '../assets/bot5.svg'
import bot6 from '../assets/bot6.svg'
import bot7 from '../assets/bot7.svg'
import bot8 from '../assets/bot8.svg'
import Container from '../Components/Layout/Container';
  

export default function BotsInfo(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBotsArrayFull, setIsBotsArrayFull] = useState(false)
  const {
    botsData,
    updateBotsData,
    botsArr,
    arenaData,
    updateBotsArr,
    deleteBotFromArray
  } = props;
  const tileNum = arenaData.tileNum
  const [direction, setDirection] = useState({
    "1": "North",
    "2": "South",
    "3": "West",
    "4": "East",
    "5": "NE",
    "6": "NW",
    "7": "SE",
    "8": "SW"
  })
  const inputAutoFocus = useAutoFocus(botsArr);
  const [iconPalette, setIconPalette] = useState([
    {
      url: bot1,
      isSelected: false
    },
    
    {
      url: bot2,
      isSelected: false
    },
    {
      url: bot3,
      isSelected: false
    },
    {
      url: bot4,
      isSelected: false
    },
    {
      url: bot5,
      isSelected: false
    },
    {
      url: bot6,
      isSelected: false
    },
    {
      url: bot7,
      isSelected: false
    },
    {
      url: bot8,
      isSelected: false
    },
  ])
  const [iconSelected, setIconSelected] = useState(0);
  const [isValid, setIsValid]= useState({
    name: false
  });
  const updateIconPalette = (selectedIcon) =>{
    setIconPalette(selectedIcon);
  }
  const updateIconSelected = (newSelectedIcon) =>{
    setIconSelected(newSelectedIcon)
  }

// Generic change handler
function handleChange(e){
    const changedField = e.target.name;
    const newValue = e.target.value;
    let botsDataCopy = {...botsData}
    let isSameName = botsArr.some((bot) => bot.name === newValue)

    if (changedField === "name" && isSameName ) {
      setIsValid( prev => {
        return { name: isSameName}
      })

      // Display an error message or perform necessary actions
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `* Each Bots should have unique names`,
        
      });

    }
    else{
      updateBotsData({...botsDataCopy, [changedField]: newValue})
    }
}

  //form event- submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // updateBotsData((prev) => {
    //   console.log("PREV", stuff)
    //   return {
    //     name: "",
    //     value: 0,
    //     wins: 0,
    //     loses: 0,
    //     direction: 1,
    //     botIcon: bot1
    //   }
    // })
    
    let occupiedPositions = getOccupiedPos(botsArr, tileNum)
    let pos = occupiedPositions.length
      ? generateUniquePos(occupiedPositions, tileNum)
      : generateRandomNumber(tileNum * tileNum); 

    
    if(pos === -1){
      setIsBotsArrayFull(true)

      Swal.fire({
        icon: "error",
        title: "Reached full arena capacity ",
        text: `Can't add more bots to the arena`,
      });

    }
    else{
      setIsBotsArrayFull(false);

      let botsArrCopy = makeCopyBotsArr(botsArr);
      const newBot = new BotClass(
        pos,
        Number(botsData.direction),
        botsData.name,
        Number(botsData.value),
        botsData.botIcon
      );
      const duplicateBot = botsArrCopy.some((bot) => bot.name === newBot.name);

      if (!duplicateBot) {
        setIconPalette((prev) => {
          const newIconPallet = [...prev];

          newIconPallet[iconSelected].isSelected = true;
          return newIconPallet;
        });

        const newIndex = iconPalette.findIndex((icon) => !icon.isSelected);
        setIconSelected((prev) => newIndex);
        
        const isAllIconSelected = newIndex !== -1;

        if (isAllIconSelected) {
          let botsDataCopy = { ...botsData };
          updateBotsData({
            name: "",
            value: 0,
            wins: 0,
            loses: 0,
            direction: 1,
            botIcon: iconPalette[newIndex].url,
          });
        }
        updateBotsArr([...botsArrCopy, newBot]);
      }
    }    
  };

  function handleEnterArena(){
    if(botsArr.length === 1){
      Swal.fire({
        icon: "error",
        title: "Not enough bot in the arena",
        text: `You must start the game with at least two robots`,
      });
    }else{
      return navigate("/arena");
    }
  }

  return (
    <div className="botInfo_page">
      <Container>
        <h2>Create Bot</h2>

        <div className="bots_display">
          <BotRoaster
            botsArr={botsArr}
            deleteBotFromArray={deleteBotFromArray}
            currentLocation={location.pathname}
            iconPalette={iconPalette}
            updateIconPalette={updateIconPalette}
            setIsBotsArrayFull={setIsBotsArrayFull}
          />
        </div>

        <div className="test">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="name">
                Name your bot:
                <input
                  placeholder=" Name your robot"
                  ref={inputAutoFocus}
                  type="text"
                  id="name"
                  name="name"
                  value={botsData.name}
                  onChange={handleChange}
                  maxLength={9}
                  required
                />
              </label>
              {isValid.name ? (
                <p style={{ color: "red" }}>
                  {" "}
                  * Each Bots should have a unique name
                </p>
              ) : (
                ""
              )}

              <div></div>
              <label htmlFor="value">
                Choose a Boolean Value:
                <select
                  id="value"
                  name="value"
                  value={botsData.value}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a Value
                  </option>
                  <option value="1">1</option>
                  <option value="0">0</option>
                </select>
              </label>

              <label htmlFor="icons">Bot Icon</label>

              <IconPalette
                id="icons"
                iconPalette={iconPalette}
                botsData={botsData}
                updateBotsData={updateBotsData}
                iconSelected={iconSelected}
                updateIconSelected={updateIconSelected}
              />

              <label htmlFor="direction">
                Bot Direction:
                <select
                  id="direction"
                  name="direction"
                  value={botsData.direction}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a Direction
                  </option>
                  <option value="1">↑</option>
                  <option value="2">↓</option>
                  <option value="3">←</option>
                  <option value="4">→</option>
                  <option value="5">↗</option>
                  <option value="6">↖</option>
                  <option value="7">↘</option>
                  <option value="8">↙</option>
                </select>
              </label>
              <button type="submit" disabled={isBotsArrayFull}>
                Add Bot
              </button>
            </fieldset>
          </form>
          <Link to="/createArena">
            <button>← Back</button>
          </Link>
          
            <button onClick={handleEnterArena}>Battle Ground →</button>
          
        </div>
      </Container>
    </div>
  );
}
