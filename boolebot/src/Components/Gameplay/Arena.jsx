import { useState, useEffect } from "react";
import BotClass from "./BotClass";
import { checkCollision, handleCollision } from "../utils/collisionLogic.js";

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

  //   position, direction, tile, name, colorClass, value

  const [botsArr, setBotsArr] = useState([
    new BotClass(1, 4, numTilesPerSide, "bot1", "red", 1),
    new BotClass(7, 3, numTilesPerSide, "bot2", "blue", 1),
    new BotClass(12, 3, numTilesPerSide, "bot3", "yellow", 1),
  ]);

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
            (bot) => bot.position === tilePosition
          );

          return renderTile(tilePosition, robotIndex);
        })}
      </div>
    );
  };

  const renderTile = (tilePosition, robotIndex) => {
    const robot = robotIndex >= 0 ? botsArr[robotIndex] : null;
    const tileClass = robot ? `${robot.name} ${robot.colorClass}` : "";

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
    let gameInterval;

    if (isGameRunning) {
      gameInterval = setInterval(() => {
        startBattle();
      }, 1000);
    }

    return () => clearInterval(gameInterval);
  }, [isGameRunning]);

  useEffect(() => {
    if (botsArr.length == 1) {
      setIsGameRunning(false);
    }
  }, [botsArr]);

  function startGame() {
    setIsGameRunning(true);
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
        const losingObj = handleCollision(newBotsArr, operator, bot.name);

        console.log("LOSIGN OBJ", losingObj);
        if (losingObj) {
          // console.log("BEFORE LEADER BOARD CHANGE ", leaderboard)

          setLeaderboard((prev) => {
            return {
              ...prev,
              [losingObj[0].name]: {
                wins: losingObj[0].wins,
                loses: losingObj[0].loses,
              },
              [losingObj[1].name]: {
                wins: losingObj[1].wins,
                loses: losingObj[1].loses,
              },
            };
          });

          newBotsArr.forEach((bot) => {
            if (bot.name === losingObj[0].name) {
              bot.wins = losingObj[0].wins;
              bot.loses = losingObj[0].loses;
            } else if (bot.name === losingObj[1].name) {
              bot.wins = losingObj[1].wins;
              bot.loses = losingObj[1].loses;
            }
          });
        }
      }

      let index = null;

      newBotsArr.forEach((bot, i) => {
        console.log("BOT LOSS", bot.loses);

        if (bot.loses !== 0) {
          index = i;
        }
      });

      console.log("INDEX", index);

      if (index) {
        newBotsArr.splice(index, 1);
        setBotsArr(() => newBotsArr);
      }
    });

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
