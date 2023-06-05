import { useState, useEffect} from 'react'

export default function GameClock(props) {

  const { isGameRunning } = props

  const [timer, setTimer] = useState({
    min: 0,
    sec: 0, 
    running: false
  })


  function incrementTime(){
    setTimer(prev => {
      let {sec, min } = prev
      sec += 1
      if(sec >= 60){
        sec = 0,
        min +=1
      }
      return {sec, min}
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
