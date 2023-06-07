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
          <button
            onClick={() => {
              restartGame();
            }}
          >
            Play From Scratch
          </button>
        </div>
      </Link>
    </div>
  );
}
