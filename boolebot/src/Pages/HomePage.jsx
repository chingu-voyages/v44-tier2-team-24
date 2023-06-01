import React from "react";
import Swal from "sweetalert2";
import sweetAlertMixin from "../Components/SweetAlertConfig";
import { Link } from "react-router-dom";
import botImage from "../assets/booleBotsHome.png";

export default function Homepage() {
  

  
  const showInstructions = () => {
    sweetAlertMixin.fire({
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
