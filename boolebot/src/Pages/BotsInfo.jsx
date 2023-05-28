import React, { useEffect, useState } from 'react';
import singleBot from "../assets/bot.png";
import { Link } from 'react-router-dom';
import generateRandomNumber from '../utils/randomNum';

export default function BotsInfo(props) {
  // const [botName, setBotName] = useState('');
  // const [booleanValue, setBooleanValue] = useState('1');
  // const [booleanOperator, setBooleanOperator] = useState('and');
  // const [botSpeed, setBotSpeed] = useState(0);
  // const [botDirection, setBotDirection] = useState('north');

  const { botsData, setBotsData, botsArr, arenaData, setBotsArr } = props;
  const tileNum = arenaData.tileNum
  // const [createdBots, setCreatedBots] = useState([]);

  //Refactoring Form state management
 

  // Generic change handler
  function handleChange(e){
    const changedField = e.target.name;
    const newValue = e.target.value;

        setBotsData((currentData) => {
          currentData[changedField] = newValue;
          return { ...currentData };
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

    let pos = occupiedPositions.length ? generateRandomNumber(tileNum * tileNum) : generateUniquePosition()
    
    console.log("POS", pos)

    setBotsData(prev => {
      return {
        ...prev,
        position: pos
      };
    })
    
    
  };

  useEffect(() => {
    console.log("BOT POSITION", botsData.position);

    if (botsData.position) {
      setBotsArr((prev) => {
        console.log("SETTING BOT ARRAY");
        const isUniqueBot = prev.some(
          (bot) =>
            bot.name === botsData.name ||
            bot.colorClass === botsData.colorClass
        );

        if (!isUniqueBot) {
          return [...prev, botsData];
        } else {
          return prev;
        }
      });
    }
  }, [botsData]);

  console.log(botsData);
  


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
        {botsArr && botsArr.map((bot, index) => (
          <div className="showBot" key={index}>
            <img src={singleBot} alt="photo of a robot head" />
            <div key={index}>
              <h3 className="title">{bot.name}</h3>
              {expandedBots[index] ? (
                <>
                  <p>Value: {bot.value}</p>
                  <p>Operator: {bot.operator}</p>
                  <p>Speed: {bot.speed}</p>
                  <p>Direction: {bot.direction}</p>
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

            <label htmlFor="direction">
              Bot Direction:
              <select
                id="direction"
                name="direction"
                value={botsData.direction}
                onChange={handleChange}
                required
              >
                <option value="1">NORTH</option>
                <option value="2">SOUTH</option>
                <option value="4">EAST</option>
                <option value="3">WEST</option>
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