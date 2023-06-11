import React from 'react'
import { Link } from 'react-router-dom';

export default function PlayFromScratchBtn({updateBotsArr}) {
    
  function restartGame() {
    updateBotsArr([])
  }
  
    return (
    <div>
      <Link to="/">
        <div>
          <button className="btn"
            onClick={() => {
              restartGame();
            }}
          
          >
            New Game
          </button>
        </div>
      </Link>
    </div>
  );
}
