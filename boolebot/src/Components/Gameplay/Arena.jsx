import { useState, useEffect } from "react";
import React from "react";
import BotClass from "./BotClass";
import { checkCollision, handleCollision } from "../../utils/collisionLogic";
import useInterval from "../hooks/useInterval";
import useTimeout from "../hooks/useTimeout";
import styles from "./Arena.module.css";
import BattleLog from "./BattleLog";
import Leaderboard from "./Leaderboard";

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
  const [currBot, setCurrBot] = useState(0);
  const [collisionLocation, setCollisionLocation] = useState(null)
  const [isCollision, setIsCollision] = useState(false)
  const [battleLog, setBattleLog] = useState([])
  //   position, direction, tile, name, colorClass, value

  const [botsArr, setBotsArr] = useState([
    new BotClass(1, 1, numTilesPerSide, "bot1", "orange", 1),
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
          const robotIndex = botsArr.findIndex(
            (bot) => bot.isAlive && bot.position === tilePosition
          );
          return renderTile(tilePosition, robotIndex);
        })}
      </div>
    );
  };

  const renderTile = (tilePosition, robotIndex) => {
    const robot = robotIndex >= 0 ? botsArr[robotIndex] : null;

    let tileClass = "";
    if (robot) {
      tileClass = `${robot.name} ${robot.colorClass}`;
    }

    let text = ''

    if(botsArr.length === 1){
      text = "WINNER!"
    }
    else if(tilePosition === collisionLocation){
      text = "COLLISION!!!"
    }
    else if(robot){
      text = robot.name
    }
    else{
      text = tilePosition
      
    }
    
    
    return (
      <div
        key={tilePosition + 1}
        data-position={tilePosition}
        className={`tile ${tileClass} ${
          tilePosition === collisionLocation ? "border crashedText" : ""
        }`}
      >
        {text}
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

  useEffect(() => {
    if (botsArr.length === 1) {
      setIsGameRunning(false);
    }
  }, [botsArr]);

  function startGame() {
    setIsGameRunning((prev) => (prev ? false : true));
    // startBattle()
  }

  function createCopyBot(originalArr) {
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
    return newBotsArr;
  }

  ///ChatGPT suggestion

  useEffect(() => {
    let intervalId;

    if (isGameRunning) {
      intervalId = setInterval(
        () => {
          setCollisionLocation(() => null);

          const newBotsArr = createCopyBot(botsArr);

          newBotsArr[currBot].calcNextMove();

          const collisionLocation = checkCollision(newBotsArr);

          if (collisionLocation) {
            setCollisionLocation(() => collisionLocation);

            const collidedBotsArr = handleCollision(
              newBotsArr,
              operator,
              newBotsArr[currBot].name
            );

            console.log("Collided bots with updated score", collidedBotsArr);
            if (collidedBotsArr) {
              setBattleLog((prev)=> ([...prev, `${collidedBotsArr[0].name} vs. ${collidedBotsArr[1].name}`]) )
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

              let winnerIndex = newBotsArr.findIndex(
                (bot) => bot.name === collidedBotsArr[0].name
              );
              newBotsArr[winnerIndex].wins = collidedBotsArr[0].wins;

              let loserIndex = newBotsArr.findIndex(
                (bot) => bot.name === collidedBotsArr[1].name
              );
              newBotsArr.splice(loserIndex, 1);
            }
          }

          if (newBotsArr.length < botsArr.length) {
            setCurrBot((prev) => {
              if (prev === 0) {
                return prev + 1;
              }
              return prev - 1;
            });
          } else {
            setCurrBot((prev) =>
              prev >= newBotsArr.length - 1 ? 0 : prev + 1
            );
          }

          setBotsArr(() => newBotsArr);
        },
        collisionLocation ? 1400 : 700
      );
    }

    return () => clearInterval(intervalId);
  }, [isGameRunning, currBot, botsArr, operator]);


  return (
    <main className={styles.main_container}>
      <div>
        {renderArena()}

        <button onClick={() => startGame()}>
          {isGameRunning ? "STOP" : "BATTLE"}
        </button>
      </div>
      <div>
        <BattleLog battleLog={battleLog} />
        <Leaderboard leaderboard={leaderboard} />
      </div>
    </main>
  );
}
