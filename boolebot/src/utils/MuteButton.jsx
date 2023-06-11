import React, { useState} from "react";

export default function MuteButton({isMuted, setIsMuted}){

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <div>
      <button onClick={toggleSound}>
        {isMuted ? "🔇" : "🔈"}
      </button>
    </div>
  );
};


