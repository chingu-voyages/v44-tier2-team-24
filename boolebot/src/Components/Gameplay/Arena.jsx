import { useState, useEffect } from "react"
import BotClass from "./BotClass";
import { checkCollision, handleCollision } from "../../utils/collisionLogic";
import useInterval from "../hooks/useInterval"
// 1. Build the game arena.
// 2. Add 1 robot to the board.
// 3. Make 1 robot move in the assigned direction on click.
// 4. Make 1 robot change to a valid direction when it hits a wall.
// 5. Make the robot move automatically.
// 6. Add more than 1 robot to the board.
// 7. Add basic collision logic.

export default function Arena(props) {
  const [isValidPosition, setIsValidPosition] = useState(false);
  const [initialPosition, setInitialPosition] = useState([]);
  const [totalTileNum, setTotalTileNum] = useState(null);
  const [numTilesPerSide, setNumTilesPerSide] = useState(4);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [operator, setOperator] = useState("AND");
  const [leaderboard, setLeaderboard] = useState({});
  const [loserBotArr, setLoserBotArr] = useState([])

  //   position, direction, tile, name, colorClass, value

  const [botsArr, setBotsArr] = useState([
    new BotClass(1, 1, numTilesPerSide, "bot1", "red", 1),
    new BotClass(7, 2, numTilesPerSide, "bot2", "blue", 1),
    new BotClass(14, 3, numTilesPerSide, "bot3", "yellow", 1),
    // new BotClass(25, 4, numTilesPerSide, "bot4", "green", 1),
  ]);

  useInterval(() => {
    startBattle()
    
  }, isGameRunning ? 500 : null);

  const arenaStyles = {
    gridTemplateColumns: `repeat(${numTilesPerSide}, 100px)`,
    gridTemplateRows: `repeat(${numTilesPerSide}, 100px)`,
  };

  const renderArena = () => {
    const positions = Array.from(
      { length: numTilesPerSide * numTilesPerSide },
      (_, i) => i + 1
    );
    return (
      <div className="arena" style={arenaStyles}>
        {positions.map((tilePosition) => {
          const robotIndex = botsArr.findIndex((bot) => !loserBotArr.includes(bot.name) && bot.position === tilePosition);
          return renderTile(tilePosition, robotIndex);
        })}
      </div>
    );
  };

  const renderTile = (tilePosition, robotIndex) => {
    const robot = robotIndex >= 0 ? botsArr[robotIndex] : null;

    let tileClass = ""
    if(robot && !loserBotArr.includes(robot.name)){
      tileClass = `${robot.name} ${robot.colorClass}`
      
    }

    return (
      <div
        key={tilePosition + 1}
        data-position={tilePosition}
        className={`tile ${tileClass}`}
      >
        {tilePosition}
      </div>
    );
  };

  //make scoreboard
  useEffect(() => {
    const arrayofObj = botsArr.map((prev) => {
      const botObj = {
        wins: prev.wins,
        loses: prev.loses,
      };
      return {
        [prev.name]: botObj,
      };
    });

    const mergedObj = Object.assign({}, ...arrayofObj);

    setLeaderboard(mergedObj);
  }, []);


  useEffect(() => {
    if (loserBotArr.length === botsArr.length - 1) {
      setIsGameRunning(false);
    }
  }, [botsArr]);

  function startGame() {
    setIsGameRunning((prev) => prev ? false : true);
    // startBattle()
  }

  function startBattle() {

    const newBotsArr = botsArr.map(
      (bot) =>
        new BotClass(
          bot.position,
          bot.direction,
          bot.tile,
          bot.name,
          bot.colorClass,
          bot.value,
          bot.wins,
          bot.loses
        )
    );

    console.log(newBotsArr);
    // console.log("BOTS ARRAY BEFORE", botsArr)
    newBotsArr.forEach((bot) => {
      //will hold a new copy of the bots array

      bot.calcNextMove();
      //map each old state
      //and if the name is not equal to bot.name
      //push bot that hans'nt been changed
      //and if bot.name === name changing
      //create a new object, with the same properties but new position

      if (checkCollision(newBotsArr)) {
        const collidedBotsArr = handleCollision(newBotsArr, loserBotArr, operator, bot.name);

        console.log("Collided bots with updated score", collidedBotsArr);
        if (collidedBotsArr) {
          setLoserBotArr(prev => {
            const losingbotName = !prev.includes(collidedBotsArr[1].name)
            
            if(losingbotName){
              return [...prev, collidedBotsArr[1].name]
            } 
          })

          setLeaderboard((prev) => {
            return {
              ...prev,
              [collidedBotsArr[0].name]: {
                wins: collidedBotsArr[0].wins,
                loses: collidedBotsArr[0].loses,
              },
              [collidedBotsArr[1].name]: {
                wins: collidedBotsArr[1].wins,
                loses: collidedBotsArr[1].loses,
              },
            };
          });

          newBotsArr.forEach((bot) => {
            if (bot.name === collidedBotsArr[0].name) {
              bot.wins = collidedBotsArr[0].wins;
              bot.loses = collidedBotsArr[0].loses;
            } else if (bot.name === collidedBotsArr[1].name) {
              bot.wins = collidedBotsArr[1].wins;
              bot.loses = collidedBotsArr[1].loses;
            }
          });
        }
      }

      let index = null;

      newBotsArr.forEach((bot, i) => {
        console.log("BOT LOSS", bot.loses);

        if (!loserBotArr.includes(botsArr[i].name) && bot.loses !== 0) {
          index = i;
        }
      });

      console.log("INDEX", index);

      if(index) {
        setBotsArr(() => newBotsArr);
      }
    });

    // console.log("BOTS ARRAY after", botsArr)
  setBotsArr(() => newBotsArr);
  }

  console.log(loserBotArr);
  return (
    <div>
      {renderArena()}
      <button onClick={() => startGame()}>Start</button>
    </div>
  );
}
