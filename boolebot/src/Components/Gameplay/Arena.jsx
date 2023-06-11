import { useState, useEffect } from "react";
import React from "react";
import { checkCollision, handleCollision } from "../../utils/collisionLogic";
import BotRoaster from "./BotRoaster";
import ArenaSetting from "./ArenaSetting";
import BattleLog from "./BattleLog";
import Leaderboard from "./Leaderboard";
import GameClock from "./GameClock";
import PlayFromScratchBtn from "./PlayFromScratchBtn";
import makeCopyBotsArr from "../../utils/makeCopyBotsArr";
import sweetAlertMixin from "../SweetAlertConfig";
import IndianaJonesPunch from "../../assets/sfx/indiana-jones-punch_down.mp3";
import MuteButton from "../../utils/MuteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";


export default function Arena(props) {
  const [isValidPosition, setIsValidPosition] = useState(false);
  const [initialPosition, setInitialPosition] = useState([]);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [leaderboard, setLeaderboard] = useState({});
  const [currBot, setCurrBot] = useState(0);
  const [collisionLocation, setCollisionLocation] = useState(null);
  const [isCollision, setIsCollision] = useState(false);
  const [battleLog, setBattleLog] = useState([]);
  const [message, setMessage] = useState(null);
  const [isMuted, setIsMuted] = useState(true)

  const [timer, setTimer] = useState({
    min: 0,
    sec: 0,
    running: false,
  });
  
  const {
    arenaData: { tileNum, speed, operator },
    botsArr,
    savedState,
    updateBotsArr,
    saveInitialGameState,
  } = props;

  const arenaStyles = {
  gridTemplateColumns: `repeat(${tileNum}, 3.5em)`, /*changed grid size*/
    gridTemplateRows: `repeat(${tileNum}, 3.5em)`,

  };

  const renderArena = () => {
    const positions = Array.from(
      { length: tileNum * tileNum },
      (_, i) => i + 1
    );
    return (
      <div className="arena wrapper" style={arenaStyles}>
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

      let tileClass = { backgroundColor: "" };

      let text = "";

      if (botsArr.length === 1) {
        text = "WINNER!";
      } else if (tilePosition === collisionLocation) {
        text = message;
      }

      return (
        <div
          style={tileClass}
          key={tilePosition + 1}
          data-position={tilePosition}
          className={`tile  ${
            tilePosition === collisionLocation ? "crashedText" : ""
          }`}
        >
          {robot ? <img src={robot.botIcon} alt="photo of a robot head" style={{width:"50%"}} />: ""}
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
        [prev.name]: botObj,
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

  function checkIsAlwaysTie(){
    // if all bots have 0, operation: AND, = TIE
    // if all bots have 0, operation: OR,  = TIE
    // if all bots have 0, operation: XOR, = TIE
    // if all bots have 1, operator: NOR, = TIE

    const containAllZeros = botsArr.every(bot => bot.value === 0)
    const containAllOnes = botsArr.every(bot => bot.value === 1)

    const tieOperators = ((operator === "AND") ||(operator === "OR") || (operator === "XOR") )

    if((tieOperators && containAllZeros )){
        const message = ""
        sweetAlertMixin.fire({
          icon: "info",
          title: "The current setup will result in an infinite tie ",
          text: `Reason: 0 ${operator} 0 will always produce a 0`
        });
    }
    else if (containAllOnes && (operator==="NOR")) {
        sweetAlertMixin.fire({
          icon: "info",
          title:
            "The current bot values and boolean operator will result in an infinite tie",
          text: `Reason: 1 NOR 1 will always produce a 0`,
        });
    }
  }

  useEffect(() => {
    checkIsAlwaysTie()
  },[])

  function startGame() {
    saveInitialGameState(() => makeCopyBotsArr(botsArr));
    setIsGameRunning((prev) => (prev ? false : true));
  }

  ///ChatGPT suggestion

  function callSound(sound) {
    if (!isMuted) return new Audio(sound).play();
  }


  useEffect(() => {
    let intervalId;

    if (isGameRunning) {
      intervalId = setInterval(
        () => {
          setCollisionLocation(() => null);
          const newBotsArr = makeCopyBotsArr(botsArr);

          newBotsArr[currBot].calcNextMove(tileNum);

          const collisionTileIndex = checkCollision(currBot, newBotsArr);
          console.log(collisionTileIndex)
        

          const didCollide = collisionTileIndex !== -1;
          
          if (didCollide) {
            setCollisionLocation(() => collisionTileIndex);

            const collidedBotsArr = handleCollision(
              newBotsArr,
              operator,
              newBotsArr[currBot].name,
            );

            
            if (!collidedBotsArr.isATie) {
              setMessage("💥💥💥");
              callSound(IndianaJonesPunch);
              setBattleLog((prev) => [
                ...prev,
                <div>
                  {`${collidedBotsArr.bots[0].name} (👑) vs. ${collidedBotsArr.bots[1].name} (😭)`}
                </div>,
              ]);
              setLeaderboard((prev) => {
                return {
                  ...prev,
                  [collidedBotsArr.bots[0].name]: {
                    wins: collidedBotsArr.bots[0].wins,
                    loses: collidedBotsArr.bots[0].loses,
                  },
                  [collidedBotsArr.bots[1].name]: {
                    wins: collidedBotsArr.bots[1].wins,
                    loses: collidedBotsArr.bots[1].loses,
                  },
                };
              });

              let winnerIndex = newBotsArr.findIndex(
                (bot) => bot.name === collidedBotsArr.bots[0].name
              );

              newBotsArr[winnerIndex].wins = collidedBotsArr.bots[0].wins;

              let loserIndex = newBotsArr.findIndex(
                (bot) => bot.name === collidedBotsArr.bots[1].name
              );
              newBotsArr.splice(loserIndex, 1);
            }
            else {
              setMessage("TIE!")
              setBattleLog((prev) => [
                ...prev,
                <div>
                  {`${collidedBotsArr.bots[0].name} (🎀) vs. ${collidedBotsArr.bots[1].name} (🎀)`}
                </div>,
              ]);
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

          updateBotsArr(newBotsArr);
        }, 
        collisionLocation ? (4000 - speed) + 1000 : 4000 - speed
      );
    }

    return () => clearInterval(intervalId);
  }, [isGameRunning, currBot, botsArr, operator]);

  function playAgain() {
    updateBotsArr(savedState);
    setBattleLog([]);
    setLeaderboard({});
    setTimer((prev) => {
      return {
        min: 0,
        sec: 0,
        running: false,
      };
    });
    setCollisionLocation(null);
  }

  return (
    <main className="main_container">
      <div className="game_board">
        <div className="bots_display">
          <BotRoaster botsArr={botsArr} />
        </div>
        <div className="arena">{renderArena()}</div>

        <div className="mute-clock-start-container">
          <MuteButton isMuted={isMuted} setIsMuted={setIsMuted} />
          <div className="GameClock">
            <GameClock
              isGameRunning={isGameRunning}
              timer={timer}
              setTimer={setTimer}
            />
          </div>
          <div className="buttons">
            {botsArr.length === 1 ? (
              <div>
                <button
                  onClick={() => {
                    playAgain();
                  }}
                  className="btn"
                >
                  Restart
                </button>
              </div>
            ) : (
              <button onClick={() => startGame()} className="btn">
                {isGameRunning ? <FontAwesomeIcon icon={faPause} style={{ color: "#ffffff" }} /> : <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />}
              </button>
            )}
          </div>
        </div>
        <PlayFromScratchBtn updateBotsArr={updateBotsArr} />
      </div>
      <aside className="status_info">
        <ArenaSetting tileNum={tileNum} speed={speed} operator={operator} />
        <Leaderboard
          leaderboard={leaderboard}
          setLeaderboard={setLeaderboard}
          botsArr={botsArr}
        />
        <BattleLog battleLog={battleLog} />
        
      </aside>
    </main>
  );
}
