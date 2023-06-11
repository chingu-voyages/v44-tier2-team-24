import React, {useEffect} from "react";
import Container from "../Components/Layout/Container"
import sweetAlertMixin from "../Components/SweetAlertConfig";
import { Link } from "react-router-dom";
import botImage from "../assets/booleBotsHome.png";


export default function Homepage({ globalReset }) {
  const showInstructions = () => {
    sweetAlertMixin.fire({
      title: "BOOLEBOTS",
      html: `<p className="alert">Explore the fascinating world of boolean values through our game <strong>Boolebots</strong>!
      </p>
      <ol>
      <li>1. Click <strong>start</strong> to begin the game</li>
      <li>2. Select your board size, speed and <strong>boolean operator</strong></li>
      <li>3. Name your bots, set the starting direction, and <strong>boolean value</strong></li>
      <li>4. Go to battlegrounds, click <strong>BATTLE</strong> to see which bot will win!</li> 
      </ol>
      <p className="alert">The winner is determined by the <strong>boolean operator</strong> applied to the board, the starting <strong>boolean values</strong>, and which bot <strong>moved first</strong> into the collision</p>    
      `,
    });
  };

  useEffect(() => {
    globalReset();
  }, []);

  return (
    <div className="main_body">
      <Container>        
        {/* Below this line is the bot image*/}
        <div className="imgWrapper">
          <img src={botImage} alt="Bot" className="bot_image" />
        </div>
        <section className="homepageBtns">
          <Link to="/createArena">
            <button className="startBtn">Start</button>
          </Link>
          {/* Use the showInstructions function as the click event handler */}
          <button className="instructionBtn" onClick={showInstructions}>
            How to play
          </button>
        </section>
      </Container>
    </div>
  );
}
