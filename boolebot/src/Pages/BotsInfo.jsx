import React, { useEffect, useState } from 'react';
import singleBot from "../assets/bot.png";
import Swal from "sweetalert2"; 
import { Link } from 'react-router-dom';
import generateRandomNumber from '../utils/randomNum';
import BotClass from '../Components/Gameplay/BotClass';
import IconPalette from './IconPalette'

import bot1 from '../assets/bot1.svg'
import bot2 from '../assets/bot2.svg'
import bot3 from '../assets/bot3.svg'
import bot4 from '../assets/bot4.svg'
import bot5 from '../assets/bot5.svg'
import bot6 from '../assets/bot6.svg'
import bot7 from '../assets/bot7.svg'
import bot8 from '../assets/bot8.svg'

export default function BotsInfo(props) {

  const { botsData, setBotsData, botsArr, arenaData, setBotsArr } = props;
  const tileNum = arenaData.tileNum
  const {direction, setDirection} = useState({
    "1": "North",
    "2": "South",
    "3": "West",
    "4": "East",
    "5": "NE",
    "6": "NW",
    "7": "SE",
    "8": "SW"

  })

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
    color: false,
    name: false
  });
 


  // Generic change handler
  function handleChange(e){
    const changedField = e.target.name;
    const newValue = e.target.value;


    setBotsData((currentData) => {
   
      if (changedField === "name" || changedField === "colorClass") {
        let isSameName = botsArr.some((bot) => bot.name === newValue)
        let isColorSame =  botsArr.some((bot) => bot.colorClass === newValue)
        setIsValid({
          name: isSameName,
          color: isColorSame,
        });

        if (isSameName || isColorSame) {
          // Display an error message or perform necessary actions

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `* No Two Robots can have same ${changedField === 'colorClass' ? 'color' : 'name'}`,
            // footer: '<a href="">Why do I have this issue?</a>'
          });
          
        } else {
          let newState = { ...currentData, [changedField]: newValue };
          return newState;
        }

      }
      
      return {...currentData, [changedField]: newValue}

  })
}

  //form event- submit
  const handleSubmit = (event) => {
    console.log("SUBBITING BOTS INFO")
    event.preventDefault();
    
    let occupiedPositions = []
    if(botsArr.length){
      botsArr.forEach(bot => {
        if(bot.position){
            occupiedPositions.push(
            bot.position,
            bot.position + 1,
            bot.position - 1,
            bot.position + tileNum,
            bot.position - tileNum
          );
        }
      })
    }
    
    const generateUniquePosition = () =>{
      //generate a number between 1 to tileNum** but not any num in the occupiedPosition arr
      let isValid = false
      let position;
      
      do{
        position = generateRandomNumber(tileNum * tileNum)


        if(!occupiedPositions.includes(position)){
          isValid = true
        }
        
      }while(!isValid)
      return position
    }


    let pos = occupiedPositions.length
      ? generateUniquePosition()
      : generateRandomNumber(tileNum * tileNum); 

    setBotsArr((prev) => {
      const newBot =  new BotClass(pos, Number(botsData.direction), botsData.name, botsData.colorClass, Number(botsData.value), botsData.botIcon )
      console.log("NEW BOT CREATED", newBot)

      const isUniqueBot = prev.some(
        (bot) =>
          bot.name === newBot.name ||
          bot.colorClass === newBot.colorClass
      );

      if (!isUniqueBot) {
        setIconPalette(prev => {
          const newIconPallet = [...prev]

          newIconPallet[iconSelected].isSelected = true
          return newIconPallet
        })

        return [...prev, newBot];
      } 
      else{
        return prev
      }
      
    });  
    


  };

    
  

  const [expandedBots, setExpandedBots] = useState([]);

  const toggleBotExpansion = (index) => {
    setExpandedBots((prevExpandedBots) => {
      const newExpandedBots = [...prevExpandedBots];
      newExpandedBots[index] = !newExpandedBots[index];
      return newExpandedBots;
    });
  };



  return (
    <>
      <h2>Create Bot</h2>
      <div className="createdBots">
        {botsArr &&
          botsArr.map((bot, index) => (
            <div
              className={`showBot ${bot.name}`}
              style={{ backgroundColor: `${bot.colorClass}` }}
              key={index}
            >
              <img src={bot.botIcon} style={{width:"5em"}} alt="photo of a robot head" />
              <div key={index}>
                <h3 className="title">{bot.name}</h3>
                {expandedBots[index] ? (
                  <>
                    <p>Position: {bot.position}</p>
                    <p>
                      Direction:{" "}
                      {bot.direction === "1"
                        ? "⬆️"
                        : bot.direction === "2"
                        ? "⬇️"
                        : bot.direction === "3"
                        ? "⬅️"
                        : "➡️"}
                    </p>
                    <p>Color: {bot.colorClass}</p>
                    <p>Value: {bot.value}</p>
                  </>
                ) : null}
              </div>
              <button
                className={`expandButton ${
                  expandedBots[index] ? "expanded" : ""
                }`}
                onClick={() => toggleBotExpansion(index)}
              >
                <span className="arrow"></span>
              </button>
              <button>Edit</button>
              <button
                className="delete"
                onClick={() => props.deleteBotFromArray(index)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      <div className="test">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">
              Name your bot:
              <input
                type="text"
                id="name"
                name="name"
                value={botsData.name}
                onChange={handleChange}
                required
              />
            </label>
            {isValid.name ? (
              <p style={{ color: "red" }}>
                {" "}
                * No Two Robots can have same color
              </p>
            ) : (
              ""
            )}
            {/* {!isValid? (e)=>{

              
            }: ""} */}
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

            <label htmlFor="colorClass">Bot Color</label>
            <input
              type="color"
              id="colorClass"
              name="colorClass"
              value={botsData.colorClass}
              onChange={handleChange}
              required
            />
            {isValid.color ? (
              <p style={{ color: "red" }}>
                {" "}
                * No Two Robots can have same color
              </p>
            ) : (
              ""
            )}

            <label htmlFor="icons">Bot Icon</label>
            <IconPalette id="icons" iconPalette={iconPalette} setBotsData={setBotsData} iconSelected={iconSelected} setIconSelected={setIconSelected} />

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
                <option value="1">NORTH</option>
                <option defaultValue value="2">
                  SOUTH
                </option>
                <option value="3">WEST</option>
                <option value="4">EAST</option>
                <option value="5">NORTH EAST</option>
                <option value="6">NORTH WEST</option>
                <option value="7">SOUTH EAST</option>
                <option value="8">SOUTH WEST</option>
              </select>
            </label>
            <button type="submit">Add Bot</button>
          </fieldset>
        </form>
        <Link to="/arena">
          <button>Battle Ground</button>
        </Link>
      </div>
    </>
  );
}
