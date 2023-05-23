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
  const [numTilesPerSide, setNumTilesPerSide] = useState(5);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [operator, setOperator] = useState("AND");
  const [leaderboard, setLeaderboard] = useState({});
  const [numOfDeadBots, setNumOfDeadBots] = useState(0);
  
  //   position, direction, tile, name, colorClass, value

  const [botsArr, setBotsArr] = useState([
    new BotClass(1, 1, numTilesPerSide, "bot1", "red", 1),
    new BotClass(7, 2, numTilesPerSide, "bot2", "blue", 1),
    new BotClass(14, 3, numTilesPerSide, "bot3", "yellow", 1),
    new BotClass(25, 4, numTilesPerSide, "bot4", "green", 1),
  ]);

  // useInterval(() => {
  //   startBattle()
    
  // }, isGameRunning ? 1000 : null);

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
          const robotIndex = botsArr.findIndex((bot) => bot.isAlive && bot.position === tilePosition);
          return renderTile(tilePosition, robotIndex);
        })}
      </div>
    );
  };

  const renderTile = (tilePosition, robotIndex) => {
    const robot = robotIndex >= 0 ? botsArr[robotIndex] : null;

    let tileClass = ""
    if(robot){
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
        [prev.colorClass]: botObj,
      };
    });

    const mergedObj = Object.assign({}, ...arrayofObj);

    setLeaderboard(mergedObj);
  }, []);

  // useEffect(() => {
  //   if (numOfDeadBots.length === botsArr.length - 1) {
  //     setIsGameRunning(false);
  //   }
  // }, [botsArr, numOfDeadBots]);

  function startGame() {
    // setIsGameRunning((prev) => prev ? false : true);
    startBattle()
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
          bot.loses,
          bot.isAlive
        )
    );

    console.log(newBotsArr);
    // console.log("BOTS ARRAY BEFORE", botsArr)

    for(let i = 0; i < newBotsArr.length; i++){
      newBotsArr[i].calcNextMove();

      //map each old state
      //and if the name is not equal to bot.name
      //push bot that hans'nt been changed
      //and if bot.name === name changing
      //create a new object, with the same properties but new position

      if (checkCollision(newBotsArr)) {
        const collidedBotsArr = handleCollision(newBotsArr, operator, newBotsArr[i].name);

        console.log("Collided bots with updated score", collidedBotsArr);
        if (collidedBotsArr) {
          setNumOfDeadBots( prev => prev + 1)

          setLeaderboard((prev) => {
            return {
              ...prev,
              [collidedBotsArr[0].colorClass]: {
                wins: collidedBotsArr[0].wins,
                loses: collidedBotsArr[0].loses,
              },
              [collidedBotsArr[1].colorClass]: {
                wins: collidedBotsArr[1].wins,
                loses: collidedBotsArr[1].loses,
              },
            };
          });
          
          let winnerIndex = newBotsArr.findIndex( bot => bot.name === collidedBotsArr[0].name)
          newBotsArr[winnerIndex].wins = collidedBotsArr[0].wins

          //find bot's index location to delete
          let loserIndex = newBotsArr.findIndex( bot => bot.name === collidedBotsArr[1].name)

          //remove bot from array
          newBotsArr.splice(loserIndex, 1);
          i--

        }
      }

      setBotsArr(() => newBotsArr);
    }    
    // console.log("BOTS ARRAY after", botsArr)
    setBotsArr(() => newBotsArr);
  }


  return (
    <div>
      {renderArena()}
      <button onClick={() => startGame()}>Start</button>
    </div>
  );
}
