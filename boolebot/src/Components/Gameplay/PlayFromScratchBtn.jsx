import React from 'react'
import { Link } from 'react-router-dom';

export default function PlayFromScratchBtn({setBotsArray}) {
    
  function restartGame() {
    setBotsArr([]);
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
