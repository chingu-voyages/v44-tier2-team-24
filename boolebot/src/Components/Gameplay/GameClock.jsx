import React, { useState, useEffect} from 'react'

export default function GameClock(props) {

  const { isGameRunning, timer, setTimer } = props
  
  function incrementTime(){
    
    setTimer(prev => {
      let timerCopy = {...prev}

      timerCopy.sec += 1

      if(timerCopy.sec >= 60){
        timerCopy.sec = 0,
        timerCopy.min +=1
      }

      return timerCopy
    })
  }

  useEffect(() => {
    if (isGameRunning) {
      const gameInterval = setInterval(incrementTime, 1000);
      return () => clearInterval(gameInterval);
    }
  }, [isGameRunning]);

  return (
    <div>
        <h4>Time Elapsed: </h4>
        <h2>{timer.min <= 9 ? `0${timer.min}` : timer.sec }:{timer.sec <= 9 ? `0${timer.sec}` : timer.sec }</h2>
    </div>
  ) 
}