import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import botImage from "../assets/booleBotsHome.png";

export default function Homepage() {
  // Step 1: Define the SweetAlert2 mixin with default options
  const mySwal = Swal.mixin({
    width: 600,
    padding: "3em",
    color: "#716add",
    background:
      "#fff url(https://sweetalert2.github.io/#iconsimages/trees.png)",
  });

  // Step 2: Create a separate function to handle the button click event
  const showInstructions = () => {
    mySwal.fire({
      title: "We will explain how to play the game",
    });
  };

  return (
    <div className="main_body">
      {/* Below this line is the bot image*/}
      <div className="imgWrapper">
        <img src={botImage} alt="Bot" />
      </div>

      <section className="homepageBtns">
        <Link to="/arenaSettings">
          <button className="startBtn">Start</button>
        </Link>

        {/* Use the showInstructions function as the click event handler */}
        <button className="instructionBtn" onClick={showInstructions}>
          How to play
        </button>
      </section>
    </div>
  );
}
